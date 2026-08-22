import { SITE_URL, ORG } from "@/lib/site";
import type { Faq } from "@/content-schemas/types";

// JSON-LD builders per docs/06 section 3. Rendered through the JsonLd
// component; validate zero-error before launch.

type JsonLdObject = Record<string, unknown>;

export function organizationJsonLd(): JsonLdObject {
  const sameAs = [ORG.groupUrl];
  if (ORG.linkedInUrl) sameAs.push(ORG.linkedInUrl);
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG.name,
    url: SITE_URL,
    logo: `${SITE_URL}/brand/skaah-group-logo-square.png`,
    identifier: ORG.registration,
    vatID: ORG.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.registeredAddress.street,
      postalCode: ORG.registeredAddress.postalCode,
      addressLocality: ORG.registeredAddress.locality,
      addressCountry: "CH",
    },
    sameAs,
    parentOrganization: {
      "@type": "Organization",
      name: ORG.parent,
      url: ORG.groupUrl,
    },
  };
}

export function webSiteJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SKAAH Hospitality",
    url: SITE_URL,
  };
}

export function localBusinessJsonLd(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: ORG.name,
    url: SITE_URL,
    image: `${SITE_URL}/brand/skaah-group-logo-square.png`,
    identifier: ORG.registration,
    vatID: ORG.vat,
    address: {
      "@type": "PostalAddress",
      streetAddress: ORG.registeredAddress.street,
      postalCode: ORG.registeredAddress.postalCode,
      addressLocality: "Opfikon",
      addressRegion: "Zurich",
      addressCountry: "CH",
    },
    areaServed: "CH",
  };
}

export function serviceJsonLd(input: {
  name: string;
  serviceType: string;
  path: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    provider: { "@type": "Organization", name: ORG.name },
    areaServed: "CH",
    serviceType: input.serviceType,
    url: `${SITE_URL}/en${input.path}`,
  };
}

export function faqPageJsonLd(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleJsonLd(input: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  aboutService?: string;
}): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    url: `${SITE_URL}/en${input.path}`,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    // Author is the organisation until personal consent (docs/06 section 3).
    author: { "@type": "Organization", name: ORG.name },
    publisher: { "@type": "Organization", name: ORG.name },
    ...(input.aboutService
      ? { about: { "@type": "Service", name: input.aboutService } }
      : {}),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}/en${item.path === "/" ? "" : item.path}`,
    })),
  };
}
