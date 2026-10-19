import React from "react";
import { galleries } from "../pictures";
import { GalleryCard } from "./GalleryCard";
import { Section, SectionHeading } from "./ui";
import styles from "./GallerySection.module.css";

export const GallerySection: React.FC = () => {
  return (
    <Section id="gallery">
      <SectionHeading title="Gallery" divider />
      <div className={styles.grid}>
        {galleries.map((gallery) => (
          <GalleryCard
            key={gallery.id}
            href={`/gallery/${gallery.id}`}
            photo={gallery.cover}
            title={gallery.title}
          />
        ))}
      </div>
    </Section>
  );
};
