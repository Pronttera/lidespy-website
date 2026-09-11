/**
 * Structured data for search engines and AI answer engines, rendered as a
 * `<script type="application/ld+json">` per the Next.js JSON-LD guide. `<` is
 * escaped so a string in the payload can never close the script tag.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
