"use client";
import Image from "next/image";
import React from "react";
import { productCategory } from "./data";
import { motion } from "framer-motion";

const ProductCategoryCardSection = () => {
    // useTextAnnotation("best-product-category");

    return (
        <section className="relative w-full p-1 max-w-[1500px] mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="w-fit pl-4 mx-auto text-3xl md:text-5xl font-bold text-black max-w-[700px] text-center mb-20">
                    We shape light so our products could make the future
                    brighter. Not darker.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
            >
                <h2 className="w-fit pl-4 mx-auto text-2xl md:text-5xl font-bold text-black my-5 mb-20 pt-20">
                    View Our Collections
                </h2>
            </motion.div>
            <div className="relative z-10 h-full w-full">
                <div className="flex flex-row flex-wrap gap-3 p-4 justify-center">
                    {productCategory.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeOut",
                                delay: 0.2 * index,
                            }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="cursor-pointer group flex flex-col items-center gap-10 whitespace-nowrap text-2xl relative p-6 bg-[#EDEBE9] dark:bg-gray-800 rounded-lg w-[300px] h-[250px]"
                        >
                            <Image
                                src={item.image}
                                alt={`product ${index + 1}`}
                                width={70}
                                height={70}
                                className="transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100"
                            />

                            <span>{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategoryCardSection;
