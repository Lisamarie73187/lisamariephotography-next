"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { heroPhotos } from "../pictures";
import styles from "./CarouselComponent.module.css";

export const CarouselComponent: React.FC = () => {
  // Don't auto-advance for visitors who ask their OS to reduce motion.
  const [autoPlay, setAutoPlay] = useState(false);
  useEffect(() => {
    setAutoPlay(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <section id="home" aria-label="Featured photographs" className={styles.hero}>
      <Carousel
        autoPlay={autoPlay}
        centerMode
        centerSlidePercentage={60}
        infiniteLoop
        interval={4500}
        showArrows
        swipeable
        emulateTouch
        useKeyboardArrows
        transitionTime={900}
        showThumbs={false}
        showStatus={false}
      >
        {heroPhotos.map((photo, index) => (
          <div className={styles.item} key={photo.src}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 767px) 60vw, 700px"
              priority={index < 2}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
};
