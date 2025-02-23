import React from "react";
import { features } from "./data";

const InfoBar = () => {
  return (
    <div className="w-full bg-gray-50 p-2">
      <div className="max-w-[1100px] mx-auto px-4 py-2">
        <div className="flex flex-wrap justify-between items-center gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              {feature.icon}
              <div className="flex items-center gap-1">
                <span className="font-medium text-base">{feature.title}</span>
                <span className="text-gray-600 text-base">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
