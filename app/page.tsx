import React from "react";
import { CarouselComponent } from "./components/CarouselComponent";
import { Description } from "./components/Description";
import { GallerySection } from "./components/GallerySection";
import { About } from "./components/About";
import Contact from "./components/Contact";

const Home: React.FC = () => {
  return (
    <>
      <CarouselComponent />
      <Description />
      <GallerySection />
      <About />
      <Contact />
    </>
  );
};

export default Home;
