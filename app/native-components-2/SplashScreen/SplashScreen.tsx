"use client";

import React, { useState, useEffect } from "react";

const SplashScreen = ({
    setLoading,
}: {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const [progress, setProgress] = useState(0);

    // Progress bar animation that completes in exactly 3 seconds
    useEffect(() => {
        const startTime = Date.now();
        const duration = 3000; // 3 seconds

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(100, (elapsed / duration) * 100);
            setProgress(newProgress);

            if (newProgress < 100) {
                requestAnimationFrame(updateProgress);
            } else {
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }
        };

        requestAnimationFrame(updateProgress);

        return () => {
            // Cleanup if component unmounts
        };
    }, [setLoading]);

    return (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-500 z-50">
            {/* Bulb with glowing effect */}
            <div className="relative mb-8">
                {/* Bulb base */}
                <div className="w-6 h-4 mx-auto bg-gray-400 rounded-b-lg"></div>

                {/* Bulb glass */}
                <div className="w-16 h-20 relative">
                    <div className="absolute inset-0 rounded-t-full bg-yellow-100"></div>

                    {/* Inner light */}
                    <div
                        className="absolute inset-0 rounded-t-full bg-yellow-300 opacity-80"
                        style={{
                            filter: `blur(5px) brightness(${
                                0.8 + (progress / 100) * 0.7
                            })`,
                            animation: "pulse 1.5s infinite ease-in-out",
                        }}
                    ></div>

                    {/* Glow effect */}
                    <div
                        className="absolute inset-0 rounded-t-full"
                        style={{
                            boxShadow: `0 0 40px 20px rgba(255, 224, 130, ${
                                0.1 + (progress / 100) * 0.6
                            })`,
                        }}
                    ></div>

                    {/* Highlight reflection */}
                    <div className="absolute top-4 left-4 w-3 h-6 bg-white opacity-60 rounded-full"></div>
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                    className="h-full bg-background transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {/* Loading text */}
            <p className="mt-4 text-background font-medium">
                {progress < 100 ? "Brightening your world..." : "Done!"}
            </p>

            {/* CSS for the pulsing effect */}
            <style jsx>{`
                @keyframes pulse {
                    0% {
                        opacity: 0.7;
                    }
                    50% {
                        opacity: 0.9;
                    }
                    100% {
                        opacity: 0.7;
                    }
                }
            `}</style>
        </div>
    );
};

export default SplashScreen;
