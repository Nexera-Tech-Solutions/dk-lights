"use client";
import React from "react";
import VideoTextOverlay from "./VideoTextEffect";

const VideoTextPreview = () => {
  return (
    <div>
      <div className=" flex items-center justify-center bg-[#EDEBE9] p-4">
        <div className="text-center relative flex flex-col gap-5">
          <h2 className="text-black text-5xl md:text-7xl font-light mb-4">
            LIVE THE
          </h2>
          <h2 className="text-black text-5xl md:text-7xl font-light mb-4">
            LUXURY WITH
          </h2>
          <div>
            <VideoTextOverlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTextPreview;
