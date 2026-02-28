"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const headingText = "The Stage That Will Echo Forever";

export default function Churam() {
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true, margin: "-100px" });
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (isInView) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < headingText.length) {
                    setDisplayText((prev) => headingText.slice(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                }
            }, 50);

            return () => clearInterval(timer);
        }
    }, [isInView]);

    // Electrifying hover animation
    const electricHover = {
        rest: { scale: 1, filter: "brightness(1) drop-shadow(0 0 0 rgba(0,0,0,0))" },
        hover: {
            scale: 1.02,
            filter: "brightness(1.2) drop-shadow(0 0 20px rgba(0, 255, 255, 0.6))",
            transition: { duration: 0.2 },
        },
    };

    const shakeAnimation = {
        hover: {
            x: [0, -1, 1, -1, 1, 0],
            y: [0, 1, -1, 1, -1, 0],
            transition: {
                repeat: Infinity,
                duration: 0.2,
                ease: "linear" as const,
            },
        },
    };

    return (
        <section
            className="relative w-full min-h-[60vh] flex flex-col justify-between items-center text-white overflow-hidden"
            style={{
                backgroundImage: "url('/images/home/bandbg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Overlay for dark cinematic feel */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* TOP TEXT */}
            <div ref={textRef} className="relative z-10 text-center mt-12 px-4 h-16 sm:h-20 flex items-center justify-center">
                <h1 className="font-cinzel text-[#e0c097] text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider uppercase drop-shadow-[0_0_10px_rgba(177,59,19,0.5)] transition-all duration-500">
                    {displayText}
                </h1>
            </div>

            {/* CENTER CONTENT */}
            <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-center flex-1 gap-40 md:gap-56 px-6 md:px-16">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end"
                >
                    <motion.div
                        variants={electricHover}
                        initial="rest"
                        whileHover="hover"
                        className="relative"
                    >
                        <motion.div variants={shakeAnimation}>
                            <Image
                                src="/images/home/churam.png"
                                alt="Churam"
                                width={500}
                                height={500}
                                className="object-contain max-h-[50vh]"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* RIGHT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start"
                >
                    <motion.div
                        variants={electricHover}
                        initial="rest"
                        whileHover="hover"
                        className="relative"
                    >
                        <motion.div variants={shakeAnimation}>
                            <Image
                                src="/images/home/43miles.png"
                                alt="43 Miles"
                                width={500}
                                height={500}
                                className="object-contain max-h-[50vh]"
                            />
                        </motion.div>
                    </motion.div>

                    {/* 🔥 New Text Below */}
                    <div className="w-full mt-4 flex justify-end">
                        <h2 className="font-asoka text-red-600 text-xl sm:text-2xl md:text-3xl tracking-wider">
                            Turn The Volume Up
                        </h2>
                    </div>
                </motion.div>

            </div>
            {/* Bottom spacer to replace text */}
            <div className="h-12 w-full"></div>
        </section>
    );
}



