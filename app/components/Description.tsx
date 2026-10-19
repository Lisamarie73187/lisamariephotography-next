import React from "react";
import { Section, SectionHeading } from "./ui";
import styles from "./Description.module.css";

export const Description: React.FC = () => {
  return (
    <Section narrow tightBottom>
      <SectionHeading
        as="h1"
        eyebrow="Capturing Love, Life, and Laughter"
        title="Lifestyle Photography"
        divider
      />
      <div className={styles.copy}>
        <p className={styles.lead}>
          Specializing in families, couples, friends, students, and pets.
        </p>
        <p>
          I believe in the power of capturing joyful moments and heartfelt laughter that make life
          special, while highlighting the unique personality and spirit of each subject. Let me help
          you preserve your most cherished moments with photographs.
        </p>
      </div>
    </Section>
  );
};

export default Description;
