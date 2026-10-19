import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
  title: string;
  /** Small script-font line shown above the title. */
  eyebrow?: string;
  /** Heading level. Use "h1" once per page. */
  as?: "h1" | "h2";
  align?: "center" | "left";
  /** Show the thin divider line beneath the heading. */
  divider?: boolean;
}

export function SectionHeading({
  title,
  eyebrow,
  as: Tag = "h2",
  align = "center",
  divider = false,
}: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${align === "left" ? styles.left : ""}`}>
      {eyebrow && <h3 className={styles.eyebrow}>{eyebrow}</h3>}
      <Tag className={styles.title}>{title}</Tag>
      {divider && <hr className={styles.divider} />}
    </header>
  );
}
