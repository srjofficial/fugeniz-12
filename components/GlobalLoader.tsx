"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FloatingSpores from "./FloatingSpores";

export default function GlobalLoader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Initial load animation duration
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 4000); // 4 seconds for slow, eerie cinematic reveal

        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 flex items-center justify-center bg-black z-[9999] overflow-hidden"
                >
                    {/* Deep Red Abyss */}
                    <div className="absolute inset-0 bg-[#0a0000] z-0" />

                    {/* TV Static / Grain Overlay */}
                    <div className="absolute inset-0 z-0 opacity-50 mix-blend-screen pointer-events-none noise-overlay" />

                    {/* The Upside Down Atmosphere */}
                    <div className="z-10 opacity-70">
                        <FloatingSpores />
                    </div>

                    {/* Intense Thick Blood Red Vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(150,0,0,0.4)_50%,rgba(50,0,0,0.95)_100%)] z-10 pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Stunning Logo Reveal */}
                        <div className="relative w-[250px] h-[80px] md:w-[350px] md:h-[120px] mb-8">
                            {/* Animated Red Aura Behind Logo */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.1, 0.4, 0.1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-red-600 blur-[40px] rounded-full z-0 pointer-events-none"
                            />

                            {/* The Logo Itself */}
                            <motion.div
                                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="relative w-full h-full z-10 overflow-hidden"
                            >
                                <Image
                                    src="/home/f12-logo.png"
                                    alt="FUGENIZ 12th Loading"
                                    fill
                                    className="object-contain drop-shadow-[0_0_15px_rgba(255,0,0,0.6)]"
                                    priority
                                />

                                {/* Sweeping Light Glint Effect */}
                                <motion.div
                                    initial={{ x: "-150%" }}
                                    animate={{ x: "250%" }}
                                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] mix-blend-overlay pointer-events-none"
                                />
                            </motion.div>
                        </div>

                        {/* Elegant Progress Line */}
                        <div className="w-64 h-[2px] bg-red-950/50 rounded-full overflow-hidden relative mb-4">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 3.5, ease: "easeInOut" }}
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-red-400 to-red-600 shadow-[0_0_10px_rgba(255,0,0,0.8)]"
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="font-mono text-[10px] uppercase tracking-[0.4em] text-red-500/80 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]"
                        >
                            Entering The Upside Down
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
