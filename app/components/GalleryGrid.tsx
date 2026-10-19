"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "../pictures";
import styles from "./GalleryGrid.module.css";

interface GalleryGridProps {
  photos: Photo[];
}

/** Multi-column photo grid; clicking a photo opens it large in a lightbox. */
export const GalleryGrid: React.FC<GalleryGridProps> = ({ photos }) => {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Keep the native <dialog> in sync with state. showModal() traps focus and
  // returns it to the clicked thumbnail on close.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) dialog.showModal();
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  const step = useCallback(
    (direction: 1 | -1) =>
      setActive((current) =>
        current === null ? current : (current + direction + photos.length) % photos.length,
      ),
    [photos.length],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  const current = active !== null ? photos[active] : null;

  return (
    <>
      <ul className={styles.grid}>
        {photos.map((photo, index) => (
          <li key={photo.src} className={styles.item}>
            <button
              type="button"
              className={styles.thumb}
              aria-haspopup="dialog"
              aria-label={`View larger: ${photo.alt}`}
              onClick={() => setActive(index)}
            >
              <Image
                src={photo.src}
                alt=""
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 599px) 100vw, (max-width: 899px) 50vw, 370px"
                priority={index < 3}
                className={styles.image}
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Photo viewer"
        onClose={() => setActive(null)}
        onKeyDown={handleKeyDown}
      >
        {current && (
          <div
            className={styles.frame}
            // Clicking the dark area around the photo closes the viewer.
            onClick={(event) => {
              if (event.target === event.currentTarget) setActive(null);
            }}
          >
            <button
              type="button"
              className={`${styles.control} ${styles.close}`}
              aria-label="Close"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
            <button
              type="button"
              className={`${styles.control} ${styles.prev}`}
              aria-label="Previous photo"
              onClick={() => step(-1)}
            >
              ‹
            </button>
            <div className={styles.stage}>
              <Image
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="100vw"
                quality={85}
                priority
                className={styles.large}
              />
            </div>
            <button
              type="button"
              className={`${styles.control} ${styles.next}`}
              aria-label="Next photo"
              onClick={() => step(1)}
            >
              ›
            </button>
            <p className={styles.counter} aria-live="polite">
              {(active ?? 0) + 1} / {photos.length}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
};
