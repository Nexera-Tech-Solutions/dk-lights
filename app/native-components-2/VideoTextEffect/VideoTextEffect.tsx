import React from "react";
import { motion } from "framer-motion";

const VideoTextOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="relative w-fill h-[70px]">
        <video className="w-full h-full object-cover" autoPlay loop muted>
          <source
            src="/global/test-video.mp4"
            type="video/mp4"
            className="bg-[#EDEBE9]"
          />
        </video>

        <div className="absolute inset-0 flex items-center justify-center bg-[#EDEBE9] mix-blend-screen">
          <h2 className="text-[100px] uppercase">Welcome</h2>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoTextOverlay;
