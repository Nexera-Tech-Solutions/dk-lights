// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

const HomeHeroSection = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            swiperRef.current?.slideNext();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative w-full h-screen bg-[#EDEBE9] flex items-center justify-center overflow-hidden py-5 px-5"
        >
            <Swiper
                modules={[Navigation, Autoplay, EffectCards]}
                effect="fade"
                grabCursor={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                slidesPerView={1}
                className="w-full h-full"
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                scrollbar={{ draggable: true }}
            >
                {HeroSectionSlides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="w-full h-full flex items-center justify-center bg-[#EDEBE9] shadow-xl rounded-sm"
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
                                <Image
                                    className="absolute inset-0 w-full h-full object-cover rounded-lg brightness-50"
                                    src={slide.src}
                                    alt={`Slide ${index + 1}`}
                                    height={4000}
                                    width={4000}
                                />
                                <h2 className="text-4xl font-bold absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#EDEBE9]">
                                    {slide.title}
                                </h2>

                                <InteractiveHoverButton className="absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-sm">
                                    {slide.button}
                                </InteractiveHoverButton>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Previous Button */}
            <div
                className="absolute left-7 top-1/2 transform -translate-y-1/2 text-[#EDEBE9] p-3 rounded-full z-10 cursor-pointer bg-gray-950 border-[#EDEBE9] border-[1px]"
                style={{ animation: "fadeIn 0.3s ease-in-out" }}
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IconArrowNarrowLeft className="w-6 h-6" />
                </motion.div>
            </div>

            {/* Next Button */}
            <div
                className="absolute right-7 top-1/2 transform -translate-y-1/2  text-[#EDEBE9] p-3 rounded-full z-10 cursor-pointer bg-gray-950 border-[#EDEBE9] border-[1px]"
                style={{ animation: "fadeIn 0.3s ease-in-out" }}
                onClick={() => swiperRef.current?.slideNext()}
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <IconArrowNarrowRight className="w-6 h-6" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomeHeroSection;
