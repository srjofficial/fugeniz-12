"use client";

import { useState, useEffect } from "react";

export default function Tagline() {
    const [isEnglish, setIsEnglish] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    // Text content
    const textEnglish = "A Beginning That Becomes History.";
    const textMalayalam = "ചരിത്രമാകുന്ന ഒരു തുടക്കം.";

    useEffect(() => {
        // Cycle every 4 seconds
        const interval = setInterval(() => {
            // 1. Fade out
            setIsVisible(false);

            // 2. Wait for fade out to finish (1500ms), then switch text and fade in
            setTimeout(() => {
                setIsEnglish((prev) => !prev);
                setIsVisible(true);
            }, 1500);

        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative mt-6 sm:mt-8 h-8 flex items-center justify-center overflow-hidden">
            <p
                className={`
          transition-all duration-[1500ms] ease-in-out
          ${isVisible ? "opacity-100 blur-0 translate-y-0 scale-100" : "opacity-0 blur-lg translate-y-4 scale-90"}
          text-[#e0c097]
          font-cinzel
          text-[8px] sm:text-[10px] md:text-xs lg:text-sm
          tracking-wider
          uppercase
          text-center
          drop-shadow-[0_0_10px_rgba(177,59,19,0.5)]
        `}
            >
                {isEnglish ? textEnglish : textMalayalam}
            </p>

            {/* Decorative Lines (Optional - fading with text) */}
            <div
                className={`
          absolute left-0 top-1/2 -translate-y-1/2 w-8 sm:w-16 h-[1px] 
          bg-gradient-to-r from-transparent to-[#e0c097]/30
          absolute right-0 top-1/2 -translate-y-1/2 w-8 sm:w-16 h-[1px] 
          bg-gradient-to-l from-transparent to-[#e0c097]/30
          transition-opacity duration-[1500ms]
          ${isVisible ? "opacity-100" : "opacity-0"}
          -translate-x-[120%]
        `}
            />
            <div
                className={`
          absolute right-0 top-1/2 -translate-y-1/2 w-8 sm:w-16 h-[1px] 
          bg-gradient-to-l from-transparent to-[#e0c097]/30
          transition-opacity duration-[1500ms]
          ${isVisible ? "opacity-100" : "opacity-0"}
          translate-x-[120%]
        `}
            />
        </div>
    );
}
