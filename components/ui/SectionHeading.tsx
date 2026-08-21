import { Copy } from "@/components/ui/Copy";

export function SectionHeading({
  eyebrow,
  heading,
  intro,
  align = "left",
  headingLevel = "h2",
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: "left" | "center";
  headingLevel?: "h1" | "h2" | "h3";
}) {
  const HeadingTag = headingLevel;
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <HeadingTag className="heading-2">
        <Copy text={heading} />
      </HeadingTag>
      {intro ? (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <Copy text={intro} />
        </p>
      ) : null}
    </div>
  );
}
