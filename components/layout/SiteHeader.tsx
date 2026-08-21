"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SiteLogo } from "@/components/layout/SiteLogo";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { SERVICE_LINKS, DESTINATION_LINKS } from "@/content/global";
import { CONTACT, whatsappHref } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

function DesktopDropdown({
  label,
  links,
  onNavigate,
}: {
  label: string;
  links: { label: string; href: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 py-2 text-sm font-medium text-ice-100 transition-colors hover:text-gold-500"
      >
        {label}
        <Icon
          name="chevron-down"
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <ul className="absolute left-0 top-full z-50 mt-2 w-72 rounded-sm border-t border-gold-500 bg-navy-900 py-2 shadow-card">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => {
                  setOpen(false);
                  onNavigate();
                }}
                className="block px-4 py-2.5 text-sm text-ice-100 hover:bg-navy-800 hover:text-gold-500"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export function SiteHeader() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Solid navy with a gold hairline after 24 px of scroll (C01).
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const primaryLinks = [
    { label: t("davosWef"), href: "/davos-wef" },
    { label: t("work"), href: "/work" },
    { label: t("experiences"), href: "/experiences" },
    { label: t("insights"), href: "/insights" },
    { label: t("about"), href: "/about" },
  ];

  return (
    <header
      data-surface="dark"
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-200 ${
        scrolled || menuOpen
          ? "border-b border-gold-500/60 bg-navy-900"
          : "bg-navy-950/40 backdrop-blur-sm"
      }`}
    >
      <div className="container-wide flex h-16 items-center justify-between gap-4 md:h-20">
        <Link href="/" aria-label={t("home")} onClick={closeMenu}>
          <SiteLogo variant="light" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            <DesktopDropdown
              label={t("services")}
              links={SERVICE_LINKS}
              onNavigate={closeMenu}
            />
            {primaryLinks.slice(0, 1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="py-2 text-sm font-medium text-ice-100 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <DesktopDropdown
              label={t("destinations")}
              links={DESTINATION_LINKS}
              onNavigate={closeMenu}
            />
            {primaryLinks.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="py-2 text-sm font-medium text-ice-100 transition-colors hover:text-gold-500"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("whatsapp")}
            onClick={() => trackEvent("whatsapp_click", { page: pathname })}
            className="hidden p-2 text-ice-100 transition-colors hover:text-gold-500 md:block"
          >
            <Icon name="whatsapp" size={22} />
          </a>
          <ButtonLink
            href="/enquiry"
            variant="outline-gold"
            className="hidden md:inline-flex"
          >
            {t("startEnquiry")}
          </ButtonLink>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => setMenuOpen((value) => !value)}
            className="p-2 text-ice-100 lg:hidden"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-navy-950 lg:hidden">
          <nav aria-label="Mobile" className="container-site py-8">
            <ul className="space-y-6">
              <li>
                <p className="eyebrow mb-3">{t("services")}</p>
                <ul className="space-y-2">
                  {SERVICE_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="font-display text-xl text-ice-100 hover:text-gold-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <p className="eyebrow mb-3">{t("destinations")}</p>
                <ul className="space-y-2">
                  {DESTINATION_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="font-display text-xl text-ice-100 hover:text-gold-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              {primaryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-display text-2xl text-ice-100 hover:text-gold-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <ButtonLink href="/enquiry" variant="gold" onClick={closeMenu}>
                  {t("startEnquiry")}
                </ButtonLink>
              </li>
              <li className="border-t border-navy-800 pt-6 text-sm text-stone-400">
                <p>{CONTACT.office}</p>
                <p className="mt-1">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-ice-100 underline-offset-4 hover:underline"
                  >
                    {CONTACT.email}
                  </a>
                </p>
              </li>
            </ul>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
