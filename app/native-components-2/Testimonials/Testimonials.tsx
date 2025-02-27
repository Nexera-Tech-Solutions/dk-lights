"use client";

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React, { useRef } from "react";
import { TESTIMONIALS } from "./data";
import { range } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { Swiper as SwiperType } from "swiper";

const Testimonials = () => {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h3 className="w-fit pl-4 mx-auto text-2xl md:text-5xl font-bold text-black mt-10 animate-fade-in-slide">
                    Don&apos;t believe us? Hear from our Customers
                </h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeIn" }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative w-[500px] h-[500px] mx-auto bg-[#EDEBE9] flex items-center justify-center overflow-hidden px-5"
            >
                <Swiper
                    modules={[Navigation, Autoplay, EffectCards]}
                    effect="fade"
                    grabCursor={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop={true}
                    slidesPerView={1}
                    className="w-full h-full grid place-content-center"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    scrollbar={{ draggable: true }}
                >
                    {TESTIMONIALS.map((test, index) => (
                        <SwiperSlide
                            key={index}
                            className="grid place-content-center"
                        >
                            <ReviewCard testimonial={test} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Previous Button */}
                <div
                    className="absolute left-0  border-orange-900 border-[2px] rounded-sm p-4 z-40 bg-background"
                    style={{ animation: "fadeIn 0.3s ease-in-out" }}
                    onClick={() => swiperRef.current?.slidePrev()}
                >
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <IconArrowNarrowLeft className="w-6 h-6" />
                    </motion.div>
                </div>

                {/* Next Button */}
                <div
                    className="absolute right-0  border-orange-900 border-[2px] rounded-sm p-4 z-40 bg-background"
                    style={{ animation: "fadeIn 0.3s ease-in-out" }}
                    onClick={() => swiperRef.current?.slideNext()}
                >
                    <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <IconArrowNarrowRight className="w-6 h-6" />
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

const ReviewCard = ({
    testimonial,
}: {
    testimonial: {
        name: string;
        body: string;
        stars: number;
    };
}) => {
    return (
        <Card className="max-w-[340px] mx-auto shadow-orange-900 transition-all">
            <CardHeader>
                <CardTitle className="mb-5 text-xl flex flex-row gap-2">
                    <Image
                        src="/global/random-user-image-1.jpg"
                        alt="user=poflie-icon"
                        height={28}
                        width={28}
                        className="rounded-full"
                    />
                    {testimonial.name}
                </CardTitle>
                <CardDescription className="tracking-wide text-lg">
                    {testimonial.body}
                </CardDescription>
            </CardHeader>
            <CardFooter>
                {range(testimonial.stars).map((val) => (
                    <Star size={24} fill="#7c2d12" color="#7c2d12" key={val} />
                ))}
                {range(5 - testimonial.stars).map((val) => (
                    <Star size={24} key={val} color="#7c2d12" />
                ))}
            </CardFooter>
        </Card>
    );
};

export default Testimonials;
