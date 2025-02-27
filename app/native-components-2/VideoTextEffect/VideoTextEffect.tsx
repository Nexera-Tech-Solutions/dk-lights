import React from "react";
import { motion } from "framer-motion";
import {  Roboto_Condensed } from "next/font/google";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "100", "200", "300", "800", "900"],
});

const VideoTextOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
        >
            <div className="relative w-full h-[960px] border-r-2 border-l-2 border-background -mr-2">
                <video
                    className="w-full h-full object-cover bg-background"
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src="/global/test-video.mp4"
                        type="video/mp4"
                        className="bg-background"
                    />
                </video>

                <div
                    className={`${robotoCondensed.className} absolute inset-0 tracking-tighter flex items-center h-full w-full bg-background justify-center mix-blend-lighten`}
                >
                    <h2
                        className="text-[520px] uppercase font-bold text-transparent text-center"
                        style={{
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            background:
                                "url(/global/test-video.mp4) center center / cover",
                            WebkitTextStroke: "2px black",
                            textShadow:
                                "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
                        }}
                    >
                        C-Core
                    </h2>
                </div>
            </div>
        </motion.div>
    );
};

export default VideoTextOverlay;
