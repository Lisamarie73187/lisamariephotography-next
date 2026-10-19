import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { galleries } from "@/app/pictures";
import { Button, Section, SectionHeading } from "@/app/components/ui";
import styles from "./gallery.module.css";

interface GalleryPageProps {
  params: Promise<{ id: string }>;
}

// Only the galleries in pictures.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return galleries.map((gallery) => ({ id: gallery.id }));
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
  const { id } = await params;
  const gallery = galleries.find((g) => g.id === id);
  return gallery ? { title: gallery.title } : {};
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { id } = await params;
  const gallery = galleries.find((g) => g.id === id);
  if (!gallery) notFound();

  const others = galleries.filter((g) => g.id !== gallery.id);

  return (
    <Section>
      <Button href="/#gallery" variant="secondary" className={styles.back}>
        ← All galleries
      </Button>
      <SectionHeading as="h1" eyebrow="Gallery" title={gallery.title} divider />

      <ul className={styles.grid}>
        {gallery.photos.map((photo, index) => (
          <li
            key={photo.src}
            className={styles.item}
            style={{ "--ratio": photo.width / photo.height } as CSSProperties}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 767px) 100vw, 400px"
              priority={index < 3}
              className={styles.image}
            />
          </li>
        ))}
      </ul>

      <nav aria-label="More galleries" className={styles.more}>
        {others.map((other) => (
          <Button key={other.id} href={`/gallery/${other.id}`} variant="secondary">
            {other.title}
          </Button>
        ))}
      </nav>
    </Section>
  );
}
