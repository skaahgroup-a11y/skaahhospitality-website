import Link from "next/link";

// Requests outside the /en locale tree (no messages provider available):
// a minimal English 404 pointing into the site. The full-design 404 lives at
// app/[locale]/not-found.tsx.
export default function RootNotFound() {
  return (
    <section
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "6rem 1.5rem",
      }}
      className="bg-navy-950 text-ice-100"
    >
      <h1 className="display-2">This page has moved on.</h1>
      <p style={{ marginTop: "1rem" }}>
        The address you followed does not exist.
      </p>
      <p style={{ marginTop: "2rem" }}>
        <Link href="/en" className="link-draw">
          Go to the homepage
        </Link>
      </p>
    </section>
  );
}
