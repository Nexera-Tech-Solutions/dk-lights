"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const CatalogDownload = () => {
  return (
    <section className="flex justify-center pb-10">
      <motion.div className="bg-white rounded-sm shadow-md p-5 flex items-center justify-between gap-16 max-w-[1000px] my-10">
        <div className="flex items-center justify-center flex-1">
          <Image
            src="/global/random-image-2.jpg"
            alt={"icon-img"}
            width={430}
            height={430}
            className="rounded-sm shadow-inner"
          />
        </div>
        <div className="text-center mt-4 flex-1">
          <h2 className="text-3xl font-bold pb-2">
            Discover the Latest Trends
          </h2>
          <h2 className="text-base ">
            Explore our complete range of premium lighting solutions in one
            place. Download our latest catalogue to discover innovative designs,
            energy-efficient technology, and custom lighting options tailored
            for your space.
          </h2>
          <div className="flex justify-center">
            <InteractiveHoverButton className="my-10 rounded-sm">
              {" "}
              Download Catalog
            </InteractiveHoverButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CatalogDownload;
