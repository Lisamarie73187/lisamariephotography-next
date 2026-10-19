import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  /** Anchor target for header navigation, e.g. "about" → /#about. */
  id?: string;
  /** "muted" paints a full-bleed tinted background behind the content. */
  tone?: "default" | "muted";
  narrow?: boolean;
  /** Reduce bottom padding when the next section already provides spacing. */
  tightBottom?: boolean;
  /** Accessible name when the section has no visible heading to reference. */
  "aria-label"?: string;
}

export function Section({
  children,
  id,
  tone = "default",
  narrow,
  tightBottom = false,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={[
        styles.section,
        tone === "muted" && styles.muted,
        tightBottom && styles.tightBottom,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
