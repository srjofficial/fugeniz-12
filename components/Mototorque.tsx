"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import LightRays from "@/components/LightRays";
import { motion } from "framer-motion";

export default function Mototorque() {
    const title = "MOTOTORQUE";
    const letters = title.split("");

    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.4 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            className="relative w-full min-h-[800px] bg-black overflow-hidden flex flex-col"
        >
            {/* 🔥 Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/firebg.png"
                    alt="Fire Background"
                    fill
                    className="object-cover opacity-20"
                    quality={100}
                    priority
                />
            </div>

            {/* 🔥 Light Rays Background */}
            <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#EF4444"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="w-full h-full"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>

            {/* � Title Section (Top) */}
            <div className="relative z-20 w-full text-center pt-32 pb-6 md:pt-40 md:pb-10">
                <h2 className="font-asoka font-bold tracking-widest text-[#8B0000] text-5xl sm:text-6xl md:text-8xl lg:text-9xl opacity-100">
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className={`
                inline-block
                transition-all
                duration-1000
                ease-out
                ${visible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-10"
                                }
              `}
                            style={{
                                transitionDelay: `${index * 150}ms`,
                            }}
                        >
                            {letter}
                        </span>
                    ))}
                </h2>

                {/* Animated Tagline */}
                <motion.div
                    className="mt-4 mx-auto max-w-fit overflow-hidden whitespace-nowrap border-r-2 border-[#C5A059]/80 pr-1"
                    initial={{ width: 0, opacity: 0, borderRightColor: "rgba(197, 160, 89, 0.8)" }}
                    whileInView={{ width: "auto", opacity: 1, borderRightColor: "transparent" }}
                    transition={{
                        width: { duration: 3, ease: "linear", delay: 1 }, // Typing from 1s to 4s
                        opacity: { duration: 0.5, delay: 1 },
                        borderRightColor: { duration: 0.1, delay: 4 } // Disappear after typing ends (1s delay + 3s duration)
                    }}
                    viewport={{ once: true }}
                >
                    <p className="
                        font-cinzel
                        font-bold
                        text-[#C5A059]
                        text-[10px] sm:text-sm md:text-lg
                        tracking-[0.2em]
                        uppercase
                    ">
                        Not for the Weak. Not for the Ordinary.
                    </p>
                </motion.div>
            </div>

            {/* Content Container (Columns) */}
            <div className="relative z-10 w-full flex-1 flex flex-col-reverse md:flex-row items-center md:items-stretch">

                {/* 🚗 Left Column: Car Image */}
                <div className="relative w-full md:w-1/2 h-[300px] md:h-auto flex items-end justify-center pb-0">
                    <div className="relative w-full h-[80%] max-w-md md:max-w-full">
                        <Image
                            src="/images/home/carmodified.png"
                            alt="Mototorque Car"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </div>

                <div className="relative w-full md:w-1/2 h-[400px] md:h-auto flex items-end justify-center md:justify-center">
                    <div className="relative w-full h-full max-w-[250px] md:max-w-md ml-auto mr-1 md:mx-auto">
                        <Image
                            src="/images/home/fireman.png"
                            alt="Fireman Character"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
