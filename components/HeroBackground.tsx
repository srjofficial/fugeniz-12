"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Tagline from "./Tagline";
import Link from "next/link";
import { useState } from "react";
import MenuButton from "./MenuButton";

export default function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-black">
            {/* 🔥 Logos Top Left */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-50 flex items-center gap-1 sm:gap-2 opacity-90">
                <Image
                    src="/images/home/bodhilogo.png"
                    alt="Bodhi Logo"
                    width={80}
                    height={80}
                    className="w-8 h-8 sm:w-8 sm:h-8 object-contain"
                />
                <span className="font-cinzel text-base sm:text-xl pt-2 bg-gradient-to-b from-[#8b0000] to-black bg-clip-text text-transparent">X</span>
                <Image
                    src="/images/home/drishyalogo.png"
                    alt="Drishya Logo"
                    width={80}
                    height={80}
                    className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                />
            </div>

            {/* 🔥 Navigation Menu */}
            <MenuButton />

            {/* 🔥 Background */}
            <div className="absolute inset-0">
                <Image
                    src="/home/hero-bg.jpeg"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 🔥 Title Block */}
            <div className="
                absolute
                top-20 sm:top-24 md:top-1/2
                md:-translate-y-1/2
                left-1/2
                -translate-x-1/2
                text-center
                z-20
            ">
                {/* VJCET Capsule */}
                {/* VJCET Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="mb-4 sm:mb-6 flex justify-center"
                >
                    <Image
                        src="/images/home/vjcet full banner.png"
                        alt="VJCET Banner"
                        width={300}
                        height={100}
                        className="h-6 sm:h-7 md:h-9 w-auto object-contain opacity-90 drop-shadow-[0_0_10px_rgba(220,38,38,0.3)]"
                        priority
                    />
                </motion.div>

                {/* BODHI */}
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileHover={{
                        scale: 1.01,
                        textShadow: "0 0 5px rgba(220, 38, 38, 0.4)",
                        filter: "drop-shadow(0 0 3px rgba(220, 38, 38, 0.4))",
                        x: [0, -1, 1, -1, 1, 0],
                        y: [0, 1, -1, 1, -1, 0],
                        transition: {
                            x: { repeat: Infinity, duration: 0.1 },
                            y: { repeat: Infinity, duration: 0.1 },
                            scale: { duration: 0.2 }
                        }
                    }}
                    className="
                    font-cinzel
                    text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                    tracking-wide
                    font-bold
                    bg-gradient-to-b from-[#8b0000] to-black
                    bg-clip-text text-transparent
                ">
                    BODHI
                </motion.h1>

                {/* 2026 Year Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
                    className="flex items-center justify-center gap-4 my-4 font-asoka text-red-500/90 text-xl sm:text-2xl tracking-widest"
                >
                    <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />
                    2026
                    <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80" />
                </motion.div>

                {/* DRISHYA */}
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }
                    }}
                    whileHover={{
                        scale: 1.01,
                        textShadow: "0 0 5px rgba(220, 38, 38, 0.4)",
                        filter: "drop-shadow(0 0 3px rgba(220, 38, 38, 0.4))",
                        x: [0, -1, 1, -1, 1, 0],
                        y: [0, 1, -1, 1, -1, 0],
                        transition: {
                            x: { repeat: Infinity, duration: 0.1 },
                            y: { repeat: Infinity, duration: 0.1 },
                            scale: { duration: 0.2 }
                        }
                    }}
                    className="
                    font-cinzel
                    text-5xl sm:text-7xl md:text-8xl lg:text-9xl
                    tracking-wide
                    font-bold
                    bg-gradient-to-b from-[#8b0000] to-black
                    bg-clip-text text-transparent
                ">
                    DRISHYA
                </motion.h2>

                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="mt-60 sm:mt-0"
                >
                    <Tagline />
                </motion.div>

                {/* Event Dates */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 3.0 }}
                    className="mt-6 sm:mt-5 flex flex-col items-center gap-4"
                >
                    <p className="
                        font-cinzel
                        text-red-500
                        text-lg sm:text-xl md:text-2xl
                        tracking-wider
                        font-semibold
                    ">
                        Feb 25-28
                    </p>

                    {/* Explore & Arrow */}
                    <div className="flex flex-col items-center gap-1 mt-1">
                        <span className="font-cinzel text-yellow-500/80 text-[10px] sm:text-sm tracking-[0.2em]">
                            Explore
                        </span>
                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg
                                className="w-4 h-4 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 30 30"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Main Layout */}
            <div className="relative z-10 min-h-[100svh] flex items-end justify-center md:justify-start md:pl-28 pb-2 sm:pb-4 md:pb-6">

                {/* Character Wrapper (important for ring alignment) */}
                <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[380px]">

                    {/* 🔥 Ring */}
                    <div
                        className="
              absolute
              left-1/2
              -translate-x-1/2
              -top-12 sm:-top-16 md:-top-20
              w-[200px] sm:w-[260px]
              md:w-[340px] lg:w-[400px]
              aspect-square
              flex items-center justify-center
              pointer-events-none
            "
                    >

                        {/* 🌟 Hollow Red Halo */}
                        <div
                            className="
                absolute
                w-full h-full
                rounded-full
                border-[8px] md:border-[12px]
                border-red-500/60
                blur-lg
                animate-glowPulse
              "
                        />

                        {/* 🔄 Rotating Ring */}
                        <motion.div
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 30,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            style={{ transformOrigin: "center center" }}
                        >
                            <Image
                                src="/home/hero-redring.png"
                                alt="Ring"
                                fill
                                className="object-contain drop-shadow-[0_0_45px_rgba(239,68,68,0.95)]"
                                priority
                            />
                        </motion.div>
                    </div>

                    {/* 🔥 Character */}
                    <Image
                        src="/home/hero-redcharacter.png"
                        alt="Character"
                        width={600}
                        height={900}
                        className="object-contain relative z-10"
                        priority
                    />

                </div>
            </div>
        </section>
    );
}
