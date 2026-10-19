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
  /** Accessible name when the section has no visible heading to reference. */
  "aria-label"?: string;
}

export function Section({
  children,
  id,
  tone = "default",
  narrow,
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`${styles.section} ${tone === "muted" ? styles.muted : ""}`}
    >
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
