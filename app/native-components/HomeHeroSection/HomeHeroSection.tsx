"use client";

import Carousel from "@/components/ui/carousel";
import React, { useState } from "react";
import { HeroSectionSlides } from "./data";
import { IconArrowNarrowRight } from "@tabler/icons-react";

interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};

const HomeHeroSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? HeroSectionSlides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === HeroSectionSlides.length ? 0 : next);
  };
  return (
    <section
      className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center py-20"
      style={{ overflowY: "scroll" }}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Illuminate Your Space with Elegance
          </h1>
          <p className="text-lg  text-neutral-300 max-w-2xl mx-auto">
            Transform any room with our curated collection of designer lighting
            fixtures. From modern chandeliers to ambient wall sconces, we bring
            artistry to illumination.
          </p>
        </div>

        <div className="relative overflow-hidden w-full h-full ">
          <Carousel
            slides={HeroSectionSlides}
            current={current}
            setCurrent={setCurrent}
          />

          <div className="absolute flex justify-between w-full top-[calc(50%+1rem)] ">
            <CarouselControl
              type="previous"
              title="Go to previous slide"
              handleClick={handlePreviousClick}
            />

            <CarouselControl
              type="next"
              title="Go to next slide"
              handleClick={handleNextClick}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-500/20 to-transparent" />
    </section>
  );
};

export default HomeHeroSection;
