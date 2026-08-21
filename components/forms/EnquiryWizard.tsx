"use client";

// C17 EnquiryWizard: segment picker, per-segment steps (docs/02-content/07),
// progress bar, lossless back, localStorage drafts, attachment meter,
// success screen with reference code.
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  SEGMENTS,
  CONTACT_FIELDS,
  ACCEPTED_FILE_EXTENSIONS,
  getSegmentSpec,
  type SegmentSpec,
  type FieldSpec,
} from "@/lib/enquiry/segments";
import { Field, type FieldValue } from "@/components/forms/fields";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Link } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";
import { whatsappHref, CONTACT } from "@/lib/site";

const DRAFT_KEY = "skaah-enquiry-draft-v1";

interface Draft {
  segment: string;
  values: Record<string, FieldValue>;
  updatedAt: string;
}

function readDraft(): Draft | null {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    return raw ? (JSON.parse(raw) as Draft) : null;
  } catch {
    return null;
  }
}

function collectUtm(search: URLSearchParams): Record<string, string> {
  const utm: Record<string, string> = {};
  for (const [key, value] of search.entries()) {
    if (key.startsWith("utm_")) utm[key] = value;
  }
  return utm;
}

type Phase =
  | { kind: "pick" }
  | { kind: "step"; index: number }
  | { kind: "contact" }
  | { kind: "submitting" }
  | { kind: "done"; reference: string; ownerTeam: string; promise: string }
  | { kind: "error" };

export function EnquiryWizard() {
  const t = useTranslations("enquiry");
  const searchParams = useSearchParams();
  const [segment, setSegment] = useState<SegmentSpec | null>(null);
  const [phase, setPhase] = useState<Phase>({ kind: "pick" });
  const [values, setValues] = useState<Record<string, FieldValue>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [draftRestored, setDraftRestored] = useState(false);
  const startedAt = useRef<number>(Date.now());
  const headingRef = useRef<HTMLElement | null>(null);
  const setHeadingRef = (element: HTMLElement | null) => {
    headingRef.current = element;
  };

  // Deep links: /enquiry?segment=delegation preselects the path.
  useEffect(() => {
    startedAt.current = Date.now();
    const requested = searchParams.get("segment");
    const draft = readDraft();
    if (requested) {
      const spec = getSegmentSpec(requested);
      if (spec) {
        setSegment(spec);
        setPhase({ kind: "step", index: 0 });
        trackEvent("enquiry_start", { segment: spec.segment });
        if (draft && draft.segment === requested) {
          setValues(draft.values);
          setDraftRestored(true);
        }
        return;
      }
    }
    if (draft) {
      const spec = getSegmentSpec(draft.segment);
      if (spec) {
        setSegment(spec);
        setValues(draft.values);
        setDraftRestored(true);
        setPhase({ kind: "step", index: 0 });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Draft autosave (values only; files cannot be restored from storage).
  useEffect(() => {
    if (!segment) return;
    try {
      const draft: Draft = {
        segment: segment.segment,
        values,
        updatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // Storage unavailable: drafts silently off.
    }
  }, [segment, values]);

  useEffect(() => {
    headingRef.current?.focus();
  }, [phase]);

  const steps = useMemo(() => segment?.steps ?? [], [segment]);
  const totalSteps = steps.length + 1;

  const setValue = (id: string, value: FieldValue) => {
    setValues((current) => ({ ...current, [id]: value }));
    setErrors((current) => {
      if (!current[id]) return current;
      const next = { ...current };
      delete next[id];
      return next;
    });
  };

  const validateFields = (fields: FieldSpec[]): boolean => {
    const nextErrors: Record<string, string> = {};
    for (const field of fields) {
      const value = values[field.id];
      if (field.required) {
        const empty =
          value === undefined ||
          value === "" ||
          (Array.isArray(value) && value.length === 0);
        if (empty) {
          nextErrors[field.id] = t("fieldRequired");
          continue;
        }
      }
      if (
        field.type === "email" &&
        typeof value === "string" &&
        value !== "" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        nextErrors[field.id] = t("emailInvalid");
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const pickSegment = (spec: SegmentSpec) => {
    setSegment(spec);
    setValues({});
    setFiles([]);
    setErrors({});
    setPhase({ kind: "step", index: 0 });
    trackEvent("enquiry_start", { segment: spec.segment });
  };

  const goForward = () => {
    if (!segment || phase.kind !== "step") return;
    const step = steps[phase.index];
    if (!step) return;
    if (!validateFields(step.fields)) return;
    trackEvent("enquiry_step", {
      segment: segment.segment,
      step: step.id,
    });
    if (phase.index + 1 < steps.length) {
      setPhase({ kind: "step", index: phase.index + 1 });
    } else {
      setPhase({ kind: "contact" });
    }
  };

  const goBack = () => {
    if (phase.kind === "contact") {
      setPhase({ kind: "step", index: steps.length - 1 });
    } else if (phase.kind === "step") {
      if (phase.index === 0) {
        setSegment(null);
        setPhase({ kind: "pick" });
      } else {
        setPhase({ kind: "step", index: phase.index - 1 });
      }
    }
  };

  const maxBytes = (segment?.maxUploadMB ?? 100) * 1024 * 1024;
  const totalBytes = files.reduce((sum, file) => sum + file.size, 0);

  const addFiles = (incoming: FileList | null) => {
    if (!incoming) return;
    const next = [...files];
    for (const file of Array.from(incoming)) {
      const extension = file.name
        .slice(file.name.lastIndexOf("."))
        .toLowerCase();
      if (!ACCEPTED_FILE_EXTENSIONS.includes(extension)) {
        setErrors((current) => ({ ...current, files: t("fileTypeBlocked") }));
        continue;
      }
      if (
        file.size > maxBytes ||
        next.reduce((sum, entry) => sum + entry.size, 0) + file.size > maxBytes
      ) {
        setErrors((current) => ({ ...current, files: t("totalTooLarge") }));
        continue;
      }
      next.push(file);
    }
    setFiles(next);
  };

  const submit = async () => {
    if (!segment) return;
    if (!validateFields(CONTACT_FIELDS)) return;
    if (!consentAccepted) {
      setErrors((current) => ({ ...current, consent: t("consentRequired") }));
      return;
    }
    setPhase({ kind: "submitting" });

    const contactValues = {
      name: String(values["name"] ?? ""),
      organisation: String(values["organisation"] ?? ""),
      role: String(values["role"] ?? ""),
      email: String(values["email"] ?? ""),
      phone: String(values["phone"] ?? ""),
      preferredChannel: String(values["preferredChannel"] ?? "email"),
    };
    const details: Record<string, FieldValue> = {};
    for (const [key, value] of Object.entries(values)) {
      if (!(key in contactValues)) details[key] = value;
    }
    const context = searchParams.get("context");
    if (context) details["context"] = context;

    const formData = new FormData();
    formData.set(
      "payload",
      JSON.stringify({
        segment: segment.segment,
        contact: contactValues,
        details,
        consentAccepted: true,
        website: "",
        elapsedMs: Date.now() - startedAt.current,
        utm: collectUtm(searchParams),
        locale: "en",
      }),
    );
    for (const file of files) formData.append("files", file);

    if (files.length > 0) {
      trackEvent("enquiry_attachment", {
        count: files.length,
        totalMB: Math.round(totalBytes / (1024 * 1024)),
      });
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) throw new Error(`status ${response.status}`);
      const result = (await response.json()) as {
        reference: string;
        ownerTeam: string;
        promise: string;
      };
      trackEvent("enquiry_submit", { segment: segment.segment });
      try {
        window.localStorage.removeItem(DRAFT_KEY);
      } catch {
        // Ignore storage errors on cleanup.
      }
      setPhase({
        kind: "done",
        reference: result.reference,
        ownerTeam: result.ownerTeam,
        promise: result.promise,
      });
    } catch {
      setPhase({ kind: "error" });
    }
  };

  // Progress: picker is step 0; contact is the final step.
  const currentStepNumber =
    phase.kind === "contact"
      ? totalSteps
      : phase.kind === "step"
        ? phase.index + 1
        : 0;

  if (phase.kind === "done") {
    return (
      <div className="rounded-sm border border-ice-300 bg-white p-8 shadow-card">
        <span className="text-success">
          <Icon name="check" size={40} />
        </span>
        <h2
          ref={setHeadingRef}
          tabIndex={-1}
          className="heading-2 mt-4 text-navy-900 outline-none"
        >
          {t("successTitle")}
        </h2>
        <p className="mt-3 text-stone-500">
          {t("successBody", {
            team: phase.ownerTeam,
            promise: phase.promise,
          })}
        </p>
        <p className="mt-4 rounded-sm bg-ice-100 px-4 py-3 font-mono text-sm text-navy-900">
          {t("successReference", { reference: phase.reference })}
        </p>
      </div>
    );
  }

  if (phase.kind === "error") {
    return (
      <div className="rounded-sm border border-error/40 bg-white p-8 shadow-card">
        <h2
          ref={setHeadingRef}
          tabIndex={-1}
          className="heading-2 text-navy-900 outline-none"
        >
          {t("errorTitle")}
        </h2>
        <p className="mt-3 text-stone-500">{t("errorBody")}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="primary" onClick={() => setPhase({ kind: "contact" })}>
            {t("tryAgain")}
          </Button>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900"
          >
            <Icon name="whatsapp" size={18} />
            WhatsApp
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-navy-900 px-6 py-3 text-sm font-medium text-navy-900"
          >
            <Icon name="mail" size={18} />
            {CONTACT.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-ice-300 bg-white p-6 shadow-card md:p-8">
      {segment && phase.kind !== "pick" ? (
        <div className="mb-6">
          <p className="text-xs font-medium uppercase tracking-wider text-stone-400">
            {segment.label} ·{" "}
            {t("stepOf", { current: currentStepNumber, total: totalSteps })}
          </p>
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={totalSteps}
            aria-valuenow={currentStepNumber}
            aria-label={t("stepOf", {
              current: currentStepNumber,
              total: totalSteps,
            })}
            className="mt-2 h-1 overflow-hidden rounded-sm bg-ice-200"
          >
            <div
              className="h-full bg-gold-500 transition-all duration-300"
              style={{
                width: `${(currentStepNumber / totalSteps) * 100}%`,
              }}
            />
          </div>
        </div>
      ) : null}

      {draftRestored && phase.kind !== "submitting" ? (
        <p className="mb-4 rounded-sm bg-ice-100 px-3 py-2 text-xs text-stone-500">
          {t("draftRestored")}
        </p>
      ) : null}

      {phase.kind === "pick" ? (
        <fieldset>
          <legend
            ref={setHeadingRef}
            tabIndex={-1}
            className="heading-3 text-navy-900 outline-none"
          >
            {t("segmentLegend")}
          </legend>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {SEGMENTS.map((spec) => (
              <button
                key={spec.segment}
                type="button"
                onClick={() => pickSegment(spec)}
                className="flex min-h-11 items-start gap-3 rounded-sm border border-ice-300 bg-white p-4 text-left transition-colors hover:border-navy-700"
              >
                <span className="mt-0.5 shrink-0 text-gold-600">
                  <Icon name={spec.icon} size={22} />
                </span>
                <span>
                  <span className="block font-medium text-navy-900">
                    {spec.label}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-stone-500">
                    {spec.description}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {segment && phase.kind === "step" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            goForward();
          }}
          noValidate
        >
          <h2
            ref={setHeadingRef}
            tabIndex={-1}
            className="heading-3 text-navy-900 outline-none"
          >
            {steps[phase.index]?.title}
          </h2>
          <p className="mt-1 text-xs text-stone-400">{t("requiredNote")}</p>
          <div className="mt-6 space-y-5">
            {steps[phase.index]?.fields.map((field) => (
              <Field
                key={field.id}
                field={field}
                value={values[field.id]}
                error={errors[field.id]}
                onChange={(value) => setValue(field.id, value)}
              />
            ))}

            {steps[phase.index]?.withFiles ? (
              <div>
                <p className="text-sm font-medium text-navy-900">
                  {t("attachmentsLabel")}
                </p>
                <p className="mt-1 text-xs text-stone-400">
                  {segment.maxUploadMB === 25
                    ? t("attachmentsHintGeneral")
                    : t("attachmentsHint")}
                </p>
                <label className="mt-3 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-ice-300 bg-ice-50 px-6 py-8 text-sm text-stone-500 transition-colors hover:border-navy-700">
                  <Icon name="upload" size={28} />
                  <span>Choose files or drop them here</span>
                  <input
                    type="file"
                    multiple
                    accept={ACCEPTED_FILE_EXTENSIONS.join(",")}
                    onChange={(event) => {
                      addFiles(event.target.files);
                      event.target.value = "";
                    }}
                    className="sr-only"
                  />
                </label>
                {errors["files"] ? (
                  <p role="alert" className="mt-2 text-xs font-medium text-error">
                    {errors["files"]}
                  </p>
                ) : null}
                {files.length > 0 ? (
                  <>
                    <ul className="mt-3 space-y-2">
                      {files.map((file, index) => (
                        <li
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between gap-3 rounded-sm bg-ice-100 px-3 py-2 text-xs text-navy-900"
                        >
                          <span className="truncate">{file.name}</span>
                          <span className="flex shrink-0 items-center gap-3 text-stone-400">
                            {(file.size / (1024 * 1024)).toFixed(1)} MB
                            <button
                              type="button"
                              aria-label={`${t("removeFile")}: ${file.name}`}
                              onClick={() =>
                                setFiles(files.filter((_, i) => i !== index))
                              }
                              className="text-stone-500 hover:text-error"
                            >
                              <Icon name="close" size={16} />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-3 h-1.5 overflow-hidden rounded-sm bg-ice-200"
                      role="progressbar"
                      aria-label="Total attachment size"
                      aria-valuemin={0}
                      aria-valuemax={segment.maxUploadMB}
                      aria-valuenow={Math.round(totalBytes / (1024 * 1024))}
                    >
                      <div
                        className="h-full bg-gold-500"
                        style={{
                          width: `${Math.min(100, (totalBytes / maxBytes) * 100)}%`,
                        }}
                      />
                    </div>
                    <p className="mt-1 text-right text-xs text-stone-400">
                      {(totalBytes / (1024 * 1024)).toFixed(1)} /{" "}
                      {segment.maxUploadMB} MB
                    </p>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button variant="outline-navy" onClick={goBack}>
              {t("back")}
            </Button>
            <Button variant="primary" type="submit">
              {t("continue")}
            </Button>
          </div>
        </form>
      ) : null}

      {segment && (phase.kind === "contact" || phase.kind === "submitting") ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void submit();
          }}
          noValidate
        >
          <h2
            ref={setHeadingRef}
            tabIndex={-1}
            className="heading-3 text-navy-900 outline-none"
          >
            How do we reach you?
          </h2>
          <p className="mt-1 text-xs text-stone-400">{t("requiredNote")}</p>
          <div className="mt-6 space-y-5">
            {CONTACT_FIELDS.map((field) => (
              <Field
                key={field.id}
                field={field}
                value={values[field.id]}
                error={errors[field.id]}
                onChange={(value) => setValue(field.id, value)}
              />
            ))}

            {/* Honeypot: hidden from real visitors, tempting to bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] top-auto">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>

            <div>
              <label className="flex cursor-pointer items-start gap-3 text-sm text-navy-900">
                <input
                  type="checkbox"
                  checked={consentAccepted}
                  onChange={(event) => {
                    setConsentAccepted(event.target.checked);
                    setErrors((current) => {
                      const next = { ...current };
                      delete next["consent"];
                      return next;
                    });
                  }}
                  className="mt-0.5 h-4 w-4 accent-[var(--color-navy-900)]"
                />
                <span>
                  {t("consentLabel")}{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4"
                  >
                    Privacy policy
                  </Link>
                </span>
              </label>
              {errors["consent"] ? (
                <p role="alert" className="mt-2 text-xs font-medium text-error">
                  {errors["consent"]}
                </p>
              ) : null}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <Button
              variant="outline-navy"
              onClick={goBack}
              disabled={phase.kind === "submitting"}
            >
              {t("back")}
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={phase.kind === "submitting"}
            >
              {phase.kind === "submitting" ? t("submitting") : t("submit")}
            </Button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
