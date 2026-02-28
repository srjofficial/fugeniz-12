"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import LightningEffect from "./LightningEffect";
import FloatingSpores from "./FloatingSpores";
import MenuButton from "./MenuButton";

export default function StrangerThingsHero() {
    return (
        <section id="home" className="relative min-h-[100svh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            {/* Deep Red Animated Background */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/home/stranger-hero-bg.png"
                    alt="Stranger Things Red Vines Background"
                    fill
                    className="object-cover object-center mix-blend-multiply opacity-80"
                    priority
                />
                {/* Red Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-red-950/40" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Glowing Spores Overlay (Static & Dynamic) */}
            <div className="absolute inset-0 z-10 pointer-events-none mix-blend-screen opacity-50 noise-overlay"></div>
            <FloatingSpores />

            {/* Lightning Generator */}
            <LightningEffect />

            {/* Navigation Menu */}
            <MenuButton />

            {/* Logo (Top Left) - Placeholder for User's Custom Logo */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                <Image
                    src="/home/custom-logo.png"
                    alt="Custom Logo"
                    width={100}
                    height={100}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-contain mix-blend-screen"
                    onError={(e) => {
                        // Fallback if user hasn't placed the image yet
                        e.currentTarget.src = "/home/f12-logo.png";
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full h-full pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-2 mb-8 z-30 w-full"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="w-8 h-px bg-red-500/50" />
                        <span className="font-mono text-red-500 uppercase tracking-widest text-xs md:text-sm font-bold">Presented By</span>
                        <span className="w-8 h-px bg-red-500/50" />
                    </div>

                    {/* Smaller SNGCE Banner Image */}
                    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-24 sm:h-28 md:h-32 mb-2">
                        <Image
                            src="/home/sngce-banner.png"
                            alt="SNGCE Banner"
                            fill
                            className="object-contain drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                            priority
                        />
                    </div>

                    {/* <div className="flex items-center gap-6 mt-2">
                        <div className="hidden md:block w-16 h-px bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]" />
                        <h3 className="font-sans text-red-500 tracking-[0.2em] text-sm md:text-xl lg:text-2xl uppercase font-bold drop-shadow-[0_0_20px_rgba(239,68,68,0.8)] text-center">
                            IEEE Computational Intelligence Society
                        </h3>
                        <div className="hidden md:block w-16 h-px bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)]" />
                    </div> */}
                </motion.div>

                {/* Main Title - Fiery Cinematic Style */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="font-cinzel text-6xl sm:text-8xl md:text-[10rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] tracking-widest leading-none mb-6 text-center"
                    style={{ WebkitTextStroke: "1px rgba(251, 146, 60, 0.4)" }}
                >
                    FUGENIZ
                </motion.h1>

                {/* Subtitle / Date */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="font-cinzel text-yellow-500 text-xl md:text-3xl font-bold tracking-[0.5em] uppercase mb-12 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]"
                >
                    MARCH 5
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="flex flex-col items-center mb-16"
                >
                    <button
                        onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex flex-col items-center gap-2 text-yellow-500 hover:text-yellow-400 transition-colors duration-300 relative"
                    >
                        <span className="font-cinzel text-lg md:text-xl font-bold tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]">Explore Now</span>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ChevronDown className="w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
                        </motion.div>
                    </button>
                </motion.div>

                {/* Logos Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-12 bg-black/50 p-6 rounded-xl backdrop-blur-md border border-red-900/30"
                >
                    {/* SNGCE Logo */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-12 sm:h-16 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-transform hover:scale-105 duration-300">
                            <img src="/home/sngce-logo.jpg" alt="SNGCE Logo" className="h-full w-auto object-cover" onError={(e) => { e.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/5/52/SNGCE_logo.png/220px-SNGCE_logo.png' }} />
                        </div>
                    </div>

                    {/* IEEE Logo */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="h-16 flex items-center justify-center p-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/IEEE_logo.svg" alt="IEEE Logo" className="h-full w-auto object-contain filter invert shadow-[0_0_15px_rgba(220,38,38,0.3)]" onError={(e) => { e.currentTarget.style.display = 'none' }} />
                        </div>
                        <span className="font-sans text-[10px] text-red-400 tracking-wider">IEEE</span>
                    </div>

                    {/* IEEE CIS Logo Placeholder / Text */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-black rounded-lg border border-red-500/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.4)] relative overflow-hidden">
                            <span className="font-sans font-black text-white text-xs z-10">IEEE</span>
                            <span className="font-sans font-bold text-red-500 text-lg leading-none z-10">CIS</span>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.4)_0%,transparent_70%)]" />
                        </div>
                        <span className="font-sans text-[10px] text-red-400 tracking-wider text-center">IEEE CIS<br />Student Branch</span>
                    </div>
                </motion.div>
            </div>

            {/* Ambient Base Glow */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10" />
        </section>
    );
}
