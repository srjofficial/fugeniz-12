"use client"

import Footer from "@/components/SiteFooter"
import TeamSection from "@/components/TeamSection"
import CustomCursor from "@/components/custom-cursor"
import EventCard from "@/components/event-card"
import { departments, eventZones } from "@/lib/events-data"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { LayoutGrid, Building2 } from "lucide-react"
import MenuButton from "@/components/MenuButton"


export default function BodhiPage() {
    const [viewMode, setViewMode] = useState<'depts' | 'zones'>('depts')

    // Calculate total events
    const totalEvents = departments.reduce((acc, dept) => acc + dept.events.length, 0)

    return (
        <>
            <CustomCursor />
            <MenuButton />
            <main className="relative bg-[#050505] min-h-screen">

                {/* ═══════════════════════════════════════════ */}
                {/* HERO SECTION                               */}
                {/* ═══════════════════════════════════════════ */}
                <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">

                    {/* Background Image with Blend Overlay */}
                    <div
                        className="absolute inset-0 bg-center bg-no-repeat opacity-40"
                        style={{
                            backgroundImage: `url('/images/hero-bodhi.jpeg')`,
                            backgroundSize: 'cover',
                        }}
                    />

                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#050505]" />

                    {/* Grid background */}
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                            backgroundSize: "40px 40px",
                        }}
                    />

                    {/* Red radial glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.12)_0%,transparent_65%)]" />

                    {/* Diagonal accent lines — hidden on mobile */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-10 hidden md:block"
                        style={{
                            background: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(220,38,38,0.3) 40px, rgba(220,38,38,0.3) 41px)",
                        }}
                    />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 hidden md:block"
                        style={{
                            background: "repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(220,38,38,0.3) 40px, rgba(220,38,38,0.3) 41px)",
                        }}
                    />

                    {/* Content */}
                    <div className="relative z-10 text-center px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Label */}
                            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
                                <span className="h-px w-8 md:w-16 bg-red-500/50" />
                                <span className="text-[9px] md:text-[10px] font-mono text-red-500 tracking-[0.3em] md:tracking-[0.4em] uppercase">
                                    /// Technical Events
                                </span>
                                <span className="h-px w-8 md:w-16 bg-red-500/50" />
                            </div>

                            {/* Main Title — Drishya font + beam heartbeat */}
                            <h1 className="text-[4rem] sm:text-7xl md:text-[9rem] lg:text-[12rem] font-asoka font-bold tracking-widest leading-[0.85] animate-beam">
                                BODHI
                            </h1>

                            {/* Year */}
                            <div className="flex items-center justify-center gap-3 md:gap-4 mt-3 md:mt-4">
                                <span className="h-px w-6 md:w-8 bg-red-500/40" />
                                <p className="text-2xl sm:text-4xl md:text-6xl font-sans font-black text-red-500/25 tracking-tighter">
                                    2026
                                </p>
                                <span className="h-px w-6 md:w-8 bg-red-500/40" />
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            className="text-xs sm:text-sm md:text-base font-mono text-white/60 mt-12 md:mt-16 max-w-lg mx-auto leading-relaxed px-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            Explore technical events across departments.
                            <br className="hidden md:block" />
                            Compete, learn, and innovate.
                        </motion.p>

                        {/* Stats — Updated for Departments */}
                        <motion.div
                            className="mt-12 md:mt-16 flex items-center justify-center gap-5 md:gap-8"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-black text-red-500">{departments.length}</p>
                                <p className="text-[8px] md:text-[9px] font-mono text-white/40 tracking-widest uppercase mt-1">Departments</p>
                            </div>
                            <div className="w-px h-8 md:h-10 bg-white/10" />
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl font-black text-red-500">
                                    {totalEvents}
                                </p>
                                <p className="text-[8px] md:text-[9px] font-mono text-white/40 tracking-widest uppercase mt-1">Events</p>
                            </div>
                        </motion.div>

                        {/* Scroll indicator */}
                        <motion.div
                            className="mt-10 md:mt-16 flex flex-col items-center gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            <div className="w-px h-8 md:h-12 bg-gradient-to-b from-transparent via-red-500/30 to-red-500/50" />
                            <span className="text-[8px] font-mono text-red-500/50 tracking-[0.3em] uppercase">
                                Scroll
                            </span>
                        </motion.div>
                    </div>

                    {/* Floating Toggle Widget - Right Aligned (Desktop) */}
                    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex flex-col gap-2 shadow-2xl">
                            <button
                                onClick={() => setViewMode('depts')}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl text-[10px] font-mono tracking-widest uppercase transition-all duration-300 w-24 ${viewMode === 'depts'
                                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                                    }`}
                            >
                                <Building2 className="w-5 h-5" />
                                <span>Depts</span>
                            </button>
                            <button
                                onClick={() => setViewMode('zones')}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl text-[10px] font-mono tracking-widest uppercase transition-all duration-300 w-24 ${viewMode === 'zones'
                                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                                    }`}
                            >
                                <LayoutGrid className="w-5 h-5" />
                                <span>Zones</span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Toggle Widget - Stays at bottom */}
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
                        <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-1 rounded-full flex gap-1 shadow-2xl">
                            <button
                                onClick={() => setViewMode('depts')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === 'depts' ? 'bg-red-600 text-white' : 'text-white/40'}`}
                            >
                                <Building2 className="w-3 h-3" />
                                Depts
                            </button>
                            <button
                                onClick={() => setViewMode('zones')}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase transition-all duration-300 ${viewMode === 'zones' ? 'bg-red-600 text-white' : 'text-white/40'}`}
                            >
                                <LayoutGrid className="w-3 h-3" />
                                Zones
                            </button>
                        </div>
                    </div>
                </section>

                {/* Red divider */}
                <div className="relative h-px w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
                </div>

                {/* Red divider */}
                <div className="relative h-px w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* EVENTS LIST                                */}
                {/* ═══════════════════════════════════════════ */}
                <section className="py-12 md:py-20 px-4 md:px-8 relative min-h-screen">
                    <div className="max-w-7xl mx-auto relative z-10 space-y-32">
                        <AnimatePresence mode="wait">
                            {viewMode === 'depts' ? (
                                <motion.div
                                    key="depts-view"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-32"
                                >
                                    {departments.map((dept) => (
                                        <div key={dept.id} className="relative group">
                                            <motion.div className="mb-12 pl-6 md:pl-10 border-l-2 border-red-500/30 relative">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500/20 border border-red-500/50" />
                                                <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-white/90 uppercase">
                                                    {dept.name}
                                                </h2>
                                            </motion.div>
                                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 pl-0 md:pl-10">
                                                {dept.events.map((event, idx) => (
                                                    <EventCard
                                                        key={event.name}
                                                        name={event.name}
                                                        description={event.description}
                                                        image={event.image}
                                                        index={idx}
                                                        category={(event as any).category}
                                                        code={`// ${dept.slug.substring(0, 3).toUpperCase()}-${String(idx + 1).padStart(2, '0')}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="zones-view"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-32"
                                >
                                    {eventZones.map((zone) => (
                                        <div key={zone.id} className="relative group">
                                            <motion.div className="mb-12 pl-6 md:pl-10 border-l-2 border-red-500/30 relative">
                                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-red-500/20 border border-red-500/50" />
                                                <h2 className="text-3xl md:text-5xl lg:text-7xl font-sans font-black tracking-tighter text-white/90 uppercase">
                                                    {zone.title}
                                                </h2>
                                            </motion.div>
                                            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6 pl-0 md:pl-10">
                                                {zone.events.map((event, idx) => (
                                                    <EventCard
                                                        key={event.name}
                                                        name={event.name}
                                                        description={event.description}
                                                        image={event.image}
                                                        index={idx}
                                                        category={(event as any).category}
                                                        code={`// ${zone.id.split('-')[0].substring(0, 3).toUpperCase()}-${String(idx + 1).padStart(2, '0')}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>

                {/* Bottom red accent bar */}
                <div className="relative h-px w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
                </div>


                <Footer />
            </main>
        </>
    )
}
