import React from "react";
import Image from "next/image";
import { aboutPhoto } from "../pictures";
import { Section, SectionHeading } from "./ui";
import styles from "./About.module.css";

export const About: React.FC = () => {
  return (
    <Section id="about" tone="muted">
      <div className={styles.layout}>
        <Image
          src={aboutPhoto.src}
          alt={aboutPhoto.alt}
          width={aboutPhoto.width}
          height={aboutPhoto.height}
          sizes="(max-width: 767px) 80vw, 360px"
          className={styles.photo}
        />
        <div className={styles.text}>
          <SectionHeading title="About Me" align="left" divider />
          <p>
            Welcome to Lisa Marie Photography! I&apos;m dedicated to capturing life&apos;s unique
            and beautiful moments—whether it&apos;s family love, the joy of friendship, the bond of
            couples, or the personality of pets.
          </p>
          <p>
            As a budding photographer, I aim to tell your story in a genuine way, making each
            session relaxed and fun so your true essence shines. Every photo is a blend of
            creativity and passion, and I&apos;m excited to capture memories that matter.
            Let&apos;s make some magic together!
          </p>
        </div>
      </div>
    </Section>
  );
};
