"use client";

import React from 'react';

export const ImageAutoSlider = () => {
    // Images for the infinite scroll - using local Drishya images
    const images = [
        "/images/drishya/1.jpg.jpeg",

        "/images/drishya/3.jpg.jpeg",
        "/images/drishya/4.jpg.jpeg"
    ];

    // Duplicate images multiple times for seamless loop (4 images * 4 = 16 items)
    const duplicatedImages = [...images, ...images, ...images, ...images];

    return (
        <>
            <style jsx global>{`
                @keyframes scroll-right {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .infinite-scroll {
                    animation: scroll-right 40s linear infinite;
                }

                .scroll-container {
                    mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 10%,
                        black 90%,
                        transparent 100%
                    );
                    -webkit-mask: linear-gradient(
                        90deg,
                        transparent 0%,
                        black 10%,
                        black 90%,
                        transparent 100%
                    );
                }

                .image-item {
                    transition: transform 0.3s ease, filter 0.3s ease;
                }

                .image-item:hover {
                    transform: scale(1.05);
                    filter: brightness(1.1);
                }
            `}</style>

            <div className="w-full bg-black relative overflow-hidden flex items-center justify-center py-12 md:py-20">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

                {/* Scrolling images container */}
                <div className="relative z-10 w-full flex items-center justify-center py-8">
                    <div className="scroll-container w-full max-w-full">
                        <div className="infinite-scroll flex w-max">
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-item flex-shrink-0 w-72 h-48 md:w-96 md:h-64 lg:w-[32rem] lg:h-80 rounded-xl overflow-hidden shadow-2xl mr-8"
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${(index % images.length) + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent z-20" />
            </div>
        </>
    );
};
