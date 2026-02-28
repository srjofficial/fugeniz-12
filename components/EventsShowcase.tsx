"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, QrCode, BrainCircuit } from "lucide-react";
import Link from "next/link";

const events = [
    {
        id: "scan-seek",
        title: "Scan and Seek",
        description: "QR codes are placed across the stations. Solve the cryptic puzzles, survive the Upside Down, and find the digital treasures before time runs out.",
        image: "/home/scan-seek.png",
        icon: <QrCode className="w-6 h-6 text-red-500" />
    },
    {
        id: "pixel-decode",
        title: "Pixel Decode",
        description: "An AI image generation challenge. Pierce through the digital vines and manifest your creativity into chilling realities.",
        image: "/home/pixel-decode.png",
        icon: <BrainCircuit className="w-6 h-6 text-red-500" />
    }
];

const TiltCard = ({ children, isEven }: { children: React.ReactNode, isEven: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group relative perspective-1000"
        >
            {children}
        </motion.div>
    );
};

export default function EventsShowcase() {
    return (
        <section id="events" className="relative min-h-[80vh] bg-black py-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15)_0%,rgba(0,0,0,1)_70%)]" />

            <div className="container relative z-10 mx-auto px-6">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-creepster text-5xl md:text-7xl text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] mb-4">
                        FEATURED EVENTS
                    </h2>
                    <p className="font-mono text-red-300 max-w-2xl mx-auto text-sm md:text-base">
                        ENTER THE VOID. COMPETE. SURVIVE.
                    </p>
                </motion.div>

                {/* Events List */}
                <div className="flex flex-col gap-12 sm:gap-16">
                    {events.map((event, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <Link href={`/events/${event.id}`} key={event.id} className="block group cursor-none">
                                <TiltCard isEven={isEven}>
                                    <motion.div
                                        className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 md:gap-8 items-center bg-black/40 border border-red-900/50 rounded-xl overflow-hidden hover:border-red-500/80 transition-colors duration-500 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]`}
                                        style={{ transform: "translateZ(50px)" }}
                                    >

                                        {/* Image Side */}
                                        <div className="w-full md:w-1/2 h-[300px] md:h-[450px] relative overflow-hidden" style={{ transform: "translateZ(30px)" }}>
                                            <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>

                                        {/* Content Side */}
                                        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center" style={{ transform: "translateZ(60px)" }}>

                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-red-950/50 border border-red-800 rounded-lg drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                                                    {event.icon}
                                                </div>
                                                <h3 className="font-creepster text-4xl md:text-5xl text-gray-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
                                                    {event.title}
                                                </h3>
                                            </div>

                                            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8">
                                                {event.description}
                                            </p>

                                            <div className="self-start relative group/btn">
                                                <div className="flex items-center gap-4 px-8 py-4 bg-[#da2222] text-black font-cinzel font-black uppercase tracking-[0.2em] rounded-full transition-all duration-300 group-hover:bg-white group-hover:scale-105">
                                                    <span className="text-lg md:text-xl">Uncover Secrets</span>
                                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform stroke-[3]" />
                                                </div>
                                            </div>

                                        </div>

                                    </motion.div>
                                </TiltCard>
                            </Link>);
                    })}
                </div>

            </div>
        </section>
    );
}
