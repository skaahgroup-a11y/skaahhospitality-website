import { Link } from "@/i18n/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";

export interface Crumb {
  name: string;
  path: string;
}

// C25: breadcrumbs with BreadcrumbList schema, everywhere except Home.
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd(items)]} />
      <nav aria-label="Breadcrumb" className="container-site pt-24 md:pt-28">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-stone-500">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="link-draw hover:text-navy-900"
                    >
                      {item.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
