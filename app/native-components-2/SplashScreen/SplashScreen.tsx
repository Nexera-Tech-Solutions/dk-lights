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
                {/* Bulb Socket */}
                <div className="w-8 h-6 mx-auto bg-gray-300 rounded-b-lg border-t border-gray-400 flex items-center justify-center">
                    <div className="w-6 h-2 bg-gray-400 rounded-full"></div>
                </div>

                {/* Bulb Neck */}
                <div className="w-6 h-3 mx-auto bg-gray-200 border border-gray-300"></div>

                {/* Bulb Glass */}
                <div className="w-20 h-20 relative">
                    {/* Outer glass */}
                    <div className="absolute inset-0 rounded-full bg-yellow-50 border border-gray-200"></div>

                    {/* Filament */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-8 h-8">
                        <div className="absolute w-6 h-1 bg-amber-500 rounded-full left-1 top-2"></div>
                        <div className="absolute w-1 h-6 bg-amber-500 rounded-full left-3 top-0 transform rotate-12"></div>
                        <div className="absolute w-6 h-1 bg-amber-500 rounded-full left-1 top-4"></div>
                    </div>

                    {/* Inner light based on progress */}
                    <div
                        className="absolute inset-0 rounded-full bg-yellow-300 opacity-0 transition-opacity duration-300"
                        style={{
                            opacity: progress / 200,
                            filter: `blur(3px) brightness(${
                                1 + (progress / 100) * 1.5
                            })`,
                            animation:
                                progress > 20
                                    ? "pulse 1.5s infinite ease-in-out"
                                    : "none",
                        }}
                    ></div>

                    {/* Glow effect */}
                    <div
                        className="absolute inset-0 rounded-full"
                        style={{
                            boxShadow: `0 0 ${10 + progress / 2}px ${
                                5 + progress / 4
                            }px rgba(255, 214, 0, ${(progress / 100) * 0.8})`,
                        }}
                    ></div>

                    {/* Highlight reflection */}
                    <div className="absolute top-5 left-6 w-2 h-6 bg-white opacity-60 rounded-full transform rotate-25"></div>
                    <div className="absolute top-8 left-12 w-1 h-4 bg-white opacity-40 rounded-full"></div>
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
