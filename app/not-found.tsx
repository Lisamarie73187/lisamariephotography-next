import { Button, Section, SectionHeading } from "./components/ui";

export default function NotFound() {
  return (
    <Section narrow>
      <SectionHeading as="h1" eyebrow="Page not found" title="404" divider />
      <p style={{ textAlign: "center", margin: "var(--space-6) 0" }}>
        We couldn&apos;t find that page.
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button href="/">Back home</Button>
      </div>
    </Section>
  );
}
