import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Photo } from "../pictures";
import styles from "./GalleryCard.module.css";

interface GalleryCardProps {
  href: string;
  photo: Photo;
  title: string;
}

/** Cover image + caption that links into a gallery. */
export const GalleryCard: React.FC<GalleryCardProps> = ({ href, photo, title }) => {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.frame}>
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 767px) 80vw, 320px"
          className={styles.image}
        />
      </div>
      <span className={styles.title}>{title}</span>
    </Link>
  );
};
