"use client";

import type { FieldSpec } from "@/lib/enquiry/segments";

export type FieldValue = string | string[] | boolean | number | undefined;

const inputClasses =
  "w-full rounded-sm border border-ice-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-stone-400 focus:border-navy-700";

export function Field({
  field,
  value,
  error,
  onChange,
}: {
  field: FieldSpec;
  value: FieldValue;
  error?: string;
  onChange: (value: FieldValue) => void;
}) {
  const errorId = `${field.id}-error`;
  const helpId = `${field.id}-help`;
  const describedBy =
    [error ? errorId : null, field.helpText ? helpId : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const labelElement = (
    <label htmlFor={field.id} className="block text-sm font-medium text-navy-900">
      {field.label}
      {field.required ? (
        <span aria-hidden="true" className="text-error">
          {" "}
          *
        </span>
      ) : null}
    </label>
  );

  const errorElement = error ? (
    <p id={errorId} role="alert" className="mt-1.5 text-xs font-medium text-error">
      {error}
    </p>
  ) : null;

  const helpElement = field.helpText ? (
    <p id={helpId} className="mt-1.5 text-xs text-stone-400">
      {field.helpText}
    </p>
  ) : null;

  switch (field.type) {
    case "textarea":
      return (
        <div>
          {labelElement}
          <textarea
            id={field.id}
            rows={4}
            maxLength={field.maxLength}
            value={typeof value === "string" ? value : ""}
            aria-required={field.required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            placeholder={field.placeholder}
            onChange={(event) => onChange(event.target.value)}
            className={`${inputClasses} mt-1.5`}
          />
          {field.maxLength ? (
            <p className="mt-1 text-right text-xs text-stone-400">
              {typeof value === "string" ? value.length : 0}/{field.maxLength}
            </p>
          ) : null}
          {helpElement}
          {errorElement}
        </div>
      );

    case "select":
      return (
        <div>
          {labelElement}
          <select
            id={field.id}
            value={typeof value === "string" ? value : ""}
            aria-required={field.required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            onChange={(event) => onChange(event.target.value)}
            className={`${inputClasses} mt-1.5`}
          >
            <option value="">Please choose</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {helpElement}
          {errorElement}
        </div>
      );

    case "radio":
      return (
        <fieldset aria-describedby={describedBy}>
          <legend className="text-sm font-medium text-navy-900">
            {field.label}
            {field.required ? (
              <span aria-hidden="true" className="text-error">
                {" "}
                *
              </span>
            ) : null}
          </legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {field.options?.map((option) => {
              const checked = value === option.value;
              return (
                <label
                  key={option.value}
                  className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-sm border px-4 py-2 text-sm transition-colors ${
                    checked
                      ? "border-navy-900 bg-navy-900 text-white"
                      : "border-ice-300 bg-white text-navy-900 hover:border-navy-700"
                  }`}
                >
                  <input
                    type="radio"
                    name={field.id}
                    value={option.value}
                    checked={checked}
                    onChange={() => onChange(option.value)}
                    className="sr-only"
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
          {helpElement}
          {errorElement}
        </fieldset>
      );

    case "checkboxes": {
      const selected = Array.isArray(value) ? value : [];
      return (
        <fieldset aria-describedby={describedBy}>
          <legend className="text-sm font-medium text-navy-900">
            {field.label}
          </legend>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {field.options?.map((option) => {
              const checked = selected.includes(option.value);
              return (
                <label
                  key={option.value}
                  className="flex min-h-11 cursor-pointer items-center gap-3 rounded-sm border border-ice-300 bg-white px-3.5 py-2 text-sm text-navy-900 transition-colors hover:border-navy-700"
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      onChange(
                        checked
                          ? selected.filter((entry) => entry !== option.value)
                          : [...selected, option.value],
                      )
                    }
                    className="h-4 w-4 accent-[var(--color-navy-900)]"
                  />
                  {option.label}
                </label>
              );
            })}
          </div>
          {helpElement}
          {errorElement}
        </fieldset>
      );
    }

    case "checkbox":
      return (
        <div>
          <label className="flex cursor-pointer items-start gap-3 text-sm text-navy-900">
            <input
              type="checkbox"
              id={field.id}
              checked={value === true}
              aria-describedby={describedBy}
              onChange={(event) => onChange(event.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[var(--color-navy-900)]"
            />
            {field.label}
          </label>
          {helpElement}
          {errorElement}
        </div>
      );

    default:
      return (
        <div>
          {labelElement}
          <input
            id={field.id}
            type={field.type}
            value={
              typeof value === "string" || typeof value === "number"
                ? String(value)
                : ""
            }
            min={field.type === "number" ? 0 : undefined}
            aria-required={field.required}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy}
            placeholder={field.placeholder}
            onChange={(event) =>
              onChange(
                field.type === "number" && event.target.value !== ""
                  ? Number(event.target.value)
                  : event.target.value,
              )
            }
            className={`${inputClasses} mt-1.5`}
          />
          {helpElement}
          {errorElement}
        </div>
      );
  }
}
