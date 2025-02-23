"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import { Navigation, Autoplay, EffectCards } from "swiper/modules";
import { HeroSectionSlides } from "./data";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const HomeHeroSection = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden py-10 px-5">
      <Swiper
        modules={[Navigation, Autoplay, EffectCards]}
        effect="fade"
        grabCursor={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        className="w-full h-full"
      >
        {HeroSectionSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full flex items-center justify-center bg-white shadow-xl rounded-lg"
          >
            {slide.type === "video" ? (
              <video
                className="w-full h-full object-cover rounded-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                <img
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                />
                <h2 className="text-3xl font-bold absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white shadow-lg">
                  {slide.title}
                </h2>

                <InteractiveHoverButton className="absolute top-1/2 left-1/2 transform -translate-x-1/2">
                  {slide.button}
                </InteractiveHoverButton>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 cursor-pointer"
        style={{ animation: "fadeIn 0.3s ease-in-out" }}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconArrowNarrowLeft className="w-6 h-6" />
        </motion.div>
      </div>

      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-10 cursor-pointer"
        style={{ animation: "fadeIn 0.3s ease-in-out" }}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconArrowNarrowRight className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
