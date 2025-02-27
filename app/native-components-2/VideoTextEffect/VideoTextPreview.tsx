"use client";
import React from "react";
import VideoTextOverlay from "./VideoTextEffect";

const VideoTextPreview = () => {
  return (
    <div>
      <div className=" flex items-center justify-center bg-[#EDEBE9] p-4">
        <div className="text-center relative flex flex-col gap-5">
          <div>
            <VideoTextOverlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTextPreview;
