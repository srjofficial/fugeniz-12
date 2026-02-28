"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SasiSection() {
    return (
        <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home/sasibg.jpeg"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-50"
                    sizes="100vw"
                    quality={75}
                />
                {/* Dark overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="container mx-auto px-4 md:px-12 h-full flex flex-col md:flex-row items-center justify-between relative z-10 py-20 md:py-0">

                {/* Text Content */}
                <div className="w-full md:w-1/2 text-left flex flex-col justify-center items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="mb-8 will-change-transform"
                    >

                        <h2 className="font-cinzel text-white text-lg md:text-2xl font-bold tracking-[0.3em] uppercase">
                            CHIEF GUEST
                        </h2>
                    </motion.div>

                    <div className="relative">
                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="font-asoka text-[#b30000] text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] leading-[0.85] tracking-tighter will-change-transform"
                        >
                            <motion.span
                                animate={{ opacity: [1, 0.6, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                SHASHI
                                <br />
                                THAROOR
                            </motion.span>
                        </motion.h1>
                    </div>
                </div>

                {/* Person Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-[50vh] md:h-screen relative mt-10 md:mt-0 md:-mr-20 lg:-mr-32 translate-y-20 md:translate-y-0">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative w-full h-full max-w-[700px] flex items-end will-change-transform"
                    >
                        <Image
                            src="/images/home/sasi.png"
                            alt="Shashi Tharoor"
                            width={800}
                            height={1000}
                            className="object-contain w-full h-auto max-h-[90vh] md:max-h-[95vh] drop-shadow-2xl grayscale contrast-125"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
