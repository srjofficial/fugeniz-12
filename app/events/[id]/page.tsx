"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, MapPin } from "lucide-react";
import { eventsData } from "@/lib/stranger-events-data";
import SiteFooter from "@/components/SiteFooter";
import FloatingSpores from "@/components/FloatingSpores";

// Define the expected params strictly for Next.js 15
interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default function EventPage({ params }: PageProps) {
    // In Next 15, params is a Promise that must be unwrapped
    const resolvedParams = use(params);
    const eventId = resolvedParams.id;
    const event = eventsData[eventId];

    const text3DStyle = {
        textShadow: "2px 2px 0px rgba(0,0,0,1), 4px 4px 0px rgba(0,0,0,0.5)",
        letterSpacing: "0.1em"
    };

    if (!event) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-[#f0f0f0] overflow-hidden selection:bg-red-900 selection:text-white">

            {/* Cinematic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover opacity-20 mix-blend-screen grayscale-[50%] blur-sm"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_100%)] z-10" />
            </div>

            {/* Atmosphere */}
            <FloatingSpores />

            {/* Navigation Bar */}
            <nav className="relative z-50 w-full p-6 flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-mono text-sm uppercase tracking-widest">Back to Home</span>
                </Link>
                <div className="hidden md:flex items-center gap-2">
                    <span className="w-16 h-px bg-red-600/50" />
                    <span className="font-cinzel text-red-500 tracking-widest text-sm">FUGENIZ 12th</span>
                </div>
            </nav>

            {/* Main Content Area */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Column: Image & Artistic Intro */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col gap-8"
                >
                    <motion.div
                        animate={{
                            y: [0, -15, 0],
                            boxShadow: [
                                "0 0 30px rgba(220,38,38,0.2)",
                                "0 0 60px rgba(220,38,38,0.6)",
                                "0 0 30px rgba(220,38,38,0.2)"
                            ]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-full aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-2xl overflow-hidden border border-red-900/40 group bg-black"
                    >
                        <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-700" />
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                priority
                            />
                        </motion.div>
                        {/* Event Icon Badge */}
                        <div className="absolute top-6 right-6 z-20 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-red-500/30">
                            {event.icon}
                        </div>
                    </motion.div>

                    <div className="hidden lg:block space-y-4">
                        <h3 className="font-creepster text-3xl text-red-600">WARNING</h3>
                        <p className="font-mono text-sm text-gray-500 leading-relaxed max-w-md mb-6">
                            Survival is not guaranteed. Trust no one. Look closely at the shadows. The answers are hidden where light refuses to go.
                        </p>

                    </div>
                </motion.div>

                {/* Right Column: Details & Registration */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                >
                    {/* Headers */}
                    <div className="mb-12">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                            className="font-cinzel text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 via-orange-500 to-red-600 drop-shadow-[0_0_30px_rgba(249,115,22,0.6)] tracking-widest mb-4 leading-none"
                            style={{ WebkitTextStroke: "1px rgba(251, 146, 60, 0.4)" }}
                        >
                            {event.title}
                        </motion.h1>
                        <h2 className="font-sans text-xl md:text-2xl text-red-400 font-bold uppercase tracking-[0.2em]">
                            {event.subtitle}
                        </h2>
                    </div>

                    {/* Metadata Strip */}
                    <div className="flex flex-wrap items-center gap-6 mb-10 py-6 border-y border-red-900/30">
                        {event.date && (
                            <div className="flex items-center gap-3 text-gray-300">
                                <Calendar className="w-5 h-5 text-red-500" />
                                <span className="font-mono text-sm tracking-wider uppercase">{event.date}</span>
                            </div>
                        )}
                        <div className="flex items-center gap-3 text-gray-300">
                            <MapPin className="w-5 h-5 text-red-500" />
                            <span className="font-mono text-sm tracking-wider uppercase">SNGCE Campus</span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-12 prose prose-invert prose-red max-w-none">
                        <p className="text-gray-300 font-sans text-lg md:text-xl leading-relaxed">
                            {event.description}
                        </p>
                    </div>

                    {/* Mission Guidelines — static section */}
                    <div className="mb-12">
                        <h3 className="font-cinzel text-xl md:text-2xl text-red-500 font-bold tracking-widest uppercase flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                            Mission Guidelines
                        </h3>
                        <div className="p-6 md:p-8 bg-black/90 border border-red-900/50 rounded-xl shadow-[inset_0_0_20px_rgba(220,38,38,0.05)]">
                            <p className="text-red-400 font-mono text-sm tracking-widest uppercase mb-5 drop-shadow-md">Protocol Directives:</p>
                            <ul className="space-y-4 font-medium text-lg font-sans text-gray-300">
                                <li className="flex gap-4 items-start">
                                    <span className="text-red-500 mt-1 font-black">❯</span>
                                    <span className="leading-relaxed">Registration fee is non-refundable under any circumstances.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-red-500 mt-1 font-black">❯</span>
                                    <span className="leading-relaxed">Ensure all team details entered are accurate. Coordinates will be sent to the Team Leader.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-red-500 mt-1 font-black">❯</span>
                                    <span className="leading-relaxed">A valid payment receipt screenshot must be uploaded. False submissions will result in immediate disqualification.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-red-500 mt-1 font-black">❯</span>
                                    <span className="leading-relaxed">Maximum team size must not exceed the specified limits.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Register Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col items-center sm:items-start gap-8"
                    >
                        {/* Fee and Action Section - Image Style Match */}
                        <div className="flex flex-col items-center sm:items-start gap-8 w-full">
                            <div className="flex flex-col items-center sm:items-start gap-2">
                                <span className="text-zinc-500 font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-bold">Registration Fee</span>
                                <div className="text-white font-sans text-4xl md:text-6xl font-black tracking-tight">
                                    ₹{event.registrationFee || "150"} {event.feeLabel && <span className="text-2xl md:text-3xl font-bold text-zinc-400">{event.feeLabel}</span>}
                                </div>
                            </div>

                            <Link href={`/events/${eventId}/register`} className="block w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-between gap-12 w-full sm:w-auto px-10 py-5 bg-[#da2222] text-black font-cinzel font-black text-xl md:text-2xl uppercase tracking-widest rounded-full hover:bg-white transition-all duration-300 group"
                                >
                                    <span className="relative z-10">Registration</span>
                                    <ArrowRight className="w-8 h-8 relative z-10 group-hover:translate-x-2 transition-transform stroke-[3]" />
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <SiteFooter />

        </main>
    );
}
