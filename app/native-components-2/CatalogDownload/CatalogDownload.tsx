"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import useTextAnnotation from "@/app/hooks/useTextAnnotation";

const CatalogDownload = () => {
  useTextAnnotation("catalog-text"); // Apply animation to this text

  return (
    <section className="flex flex-col justify-center items-center py-10">
      <h2 className="w-fit pl-4 mx-auto text-2xl md:text-4xl font-bold text-black my-5">
        Download
        <span id="catalog-text" className="mx-5">
          Our Catalog
        </span>
      </h2>
      <div>
        <motion.div
          className="bg-white rounded-lg shadow-xl p-10 flex items-center justify-between gap-16 "
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          <div className="flex items-center justify-center">
            <Image
              src="/global/random-image-2.jpg"
              alt={"icon-img"}
              width={430}
              height={430}
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold pb-2">
              Discover the Latest Trends
            </h2>
            <h2 className="text-base ">
              Download now and transform your space!
            </h2>
            <div className="flex justify-center">
              <InteractiveHoverButton className="my-10">
                Download Catalog
              </InteractiveHoverButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CatalogDownload;
