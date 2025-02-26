"use client";
import Image from "next/image";
import React, { useState } from "react";
import { productCategory } from "./data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const ProductCategoryCardSection = () => {
  return (
    <section className="relative w-full p-1 max-w-[1500px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="w-fit pl-4 mx-auto text-3xl md:text-5xl font-bold text-black max-w-[700px] text-center mb-20">
          We shape light so our products could make the future brighter. Not
          darker.
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
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ item, index }: { item: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
        delay: 0.2 * index,
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="cursor-pointer group flex flex-col items-center gap-8 whitespace-nowrap text-[20px] relative p-6 bg-[#EDEBE9] dark:bg-gray-800 rounded-lg w-[200px] h-[250px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={isHovered ? item.altImage : item.image}
        alt={`product ${index + 1}`}
        width={68}
        height={68}
        className={cn(
          "transition-all duration-700 ease-in-out opacity-60 group-hover:opacity-100 brightness-100",
          isHovered && "brightness-0"
        )}
      />

      <motion.span
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {isHovered ? (
          <>
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <ArrowRight className="w-10 h-8" />
            </motion.div>
          </>
        ) : (
          item.name
        )}
      </motion.span>
    </motion.div>
  );
};

export default ProductCategoryCardSection;
