"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { productCategory } from "./data";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import useTextAnnotation from "@/app/hooks/useTextAnnotation";

const ProductCategoryCardSection = () => {
  useTextAnnotation("best-product-category");

  return (
    <section className="relative w-full p-10">
      <h2 className="w-fit pl-4 mx-auto text-2xl md:text-4xl font-bold text-black my-5">
        Our Products
        <span id="best-product-category" className="mx-5">
          Category
        </span>
      </h2>

      <div className="relative z-10 h-full w-full">
        <div className="grid grid-cols-3 gap-6 p-4 max-w-[1000px] mx-auto">
          {productCategory.map((item, index) => (
            <motion.div
              key={index}
              className="cursor-pointer flex flex-col items-center justify-center whitespace-nowrap text-2xl relative p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-[300px] h-[250px] shadow-md"
            >
              <div className="relative h-[100px] w-[100px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`product ${index + 1}`}
                  width={100}
                  height={100}
                  className="transition-opacity duration-700 ease-in-out opacity-100"
                />
              </div>
              <div className="flex flex-col gap-4 items-center justify-center mt-4">
                <span>{item.name}</span>
                <InteractiveHoverButton className="rounded-lg text-xl">
                  {item.btnname}
                </InteractiveHoverButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryCardSection;
