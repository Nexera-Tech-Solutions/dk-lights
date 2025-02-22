"use client";

import Carousel from "@/components/ui/carousel";
import React from "react";
import { HeroSectionSlides } from "./data";

const HomeHeroSection = () => {
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

        <div className="max-w-7xl">
          <Carousel slides={HeroSectionSlides} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-500/20 to-transparent" />
    </section>
  );
};

export default HomeHeroSection;
