import React from "react";
import Image from "next/image";
import { heroPhotos } from "../pictures";
import styles from "./CarouselComponent.module.css";

/**
 * Seamless, endlessly looping photo strip. The photos are rendered twice and the
 * track slides left by exactly one copy's width, so the loop point is invisible.
 * Pure CSS: pauses on hover/focus, and becomes a swipe-able strip for visitors
 * who prefer reduced motion.
 */
export const CarouselComponent: React.FC = () => {
  return (
    <section id="home" aria-label="Featured photographs" className={styles.hero}>
      <div className={styles.viewport} tabIndex={0}>
        <ul className={styles.track}>
          {[0, 1].map((copy) =>
            heroPhotos.map((photo, index) => (
              <li
                key={`${copy}-${photo.src}`}
                className={styles.item}
                // The second copy only exists to make the loop seamless.
                aria-hidden={copy === 1 ? true : undefined}
              >
                <Image
                  src={photo.src}
                  alt={copy === 1 ? "" : photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(max-width: 767px) 80vw, 600px"
                  priority={copy === 0 && index < 2}
                  className={styles.image}
                />
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
};
