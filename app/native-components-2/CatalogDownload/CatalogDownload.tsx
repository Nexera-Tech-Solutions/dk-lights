"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const CatalogDownload = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-5 justify-center pb-10 max-w-[500px] bg-black text-[#EDEBE9] rounded-sm p-4"
        >
            <div className="flex items-center justify-center flex-1">
                <Image
                    src="/global/random-image-2.jpg"
                    alt={"icon-img"}
                    width={480}
                    height={480}
                    className="rounded-sm shadow-inner"
                />
            </div>
            <div className="text-center mt-4 flex-1  max-w-[460px]">
                <h2 className="text-3xl font-bold pb-2">
                    Discover the Latest Trends
                </h2>
                <h2 className="text-base">
                    Explore our complete range of premium lighting solutions in
                    one place. Download our latest catalogue to discover
                    innovative designs, energy-efficient technology, and custom
                    lighting options tailored for your space.
                </h2>
                <div className="flex justify-center">
                    <InteractiveHoverButton className="my-10 rounded-sm">
                        {" "}
                        Download Catalog
                    </InteractiveHoverButton>
                </div>
            </div>
        </motion.div>
    );
};

export default CatalogDownload;
