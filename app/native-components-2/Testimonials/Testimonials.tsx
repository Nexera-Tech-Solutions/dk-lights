"use client"

import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import React from "react";
import { TESTIMONIALS } from "./data";
import { range } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h3 className="w-fit pl-4 mx-auto text-2xl md:text-5xl font-bold text-black my-20 animate-fade-in-slide">
                    Don&apos;t believe us? Hear from our Customers
                </h3>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }} className="grid grid-cols-3 max-w-[1000px] mx-auto gap-12 my-10">
                {TESTIMONIALS.map((test, index) => (
                    <Card key={index} className="border-none shadow-none">
                        <CardHeader>
                            <CardTitle className="mb-5 text-xl flex flex-row gap-2">
                                <Image
                                    src="/global/random-user-image-1.jpg"
                                    alt="user=poflie-icon"
                                    height={28}
                                    width={28}
                                    className="rounded-full"
                                />
                                {test.name}
                            </CardTitle>
                            <CardDescription className="tracking-wide text-lg">
                                {test.body}
                            </CardDescription>
                        </CardHeader>
                        <CardFooter>
                            {range(test.stars).map((val) => (
                                <Star size={24} fill="black" key={val} />
                            ))}
                            {range(5 - test.stars).map((val) => (
                                <Star size={24} key={val} />
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </motion.div>
        </div>
    );
};

export default Testimonials;
