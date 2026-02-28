"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Users, Trophy, ShieldAlert, User, Phone, CheckCircle, AlertTriangle, MapPin } from "lucide-react"
import MenuButton from "./MenuButton"

interface EventDetailViewProps {
    event: any // Using any to accommodate the enriched event object
}

export default function EventDetailView({ event }: EventDetailViewProps) {
    // Generate derived data if missing
    const prize = event.prize
    const fee = event.fee
    const teamSize = event.teamSize
    const date = event.date
    const time = event.time

    // Auto-scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="min-h-screen bg-[#020202] text-[#e5e5e5] font-sans selection:bg-red-500/30 relative">
            <MenuButton />
            {/* Subtle Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Red Glow Vignette */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.08)_0%,transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

                    {/* LEFT COLUMN — PRIMARY CONTENT (65% ≈ 8 cols) */}
                    <motion.div
                        className="lg:col-span-8 space-y-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* 1. Navigation */}
                        <div className="flex items-center gap-4">
                            <Link
                                href="/bodhi"
                                className="inline-flex items-center gap-2 text-xs font-mono text-white/40 hover:text-red-500 transition-colors uppercase tracking-wider"
                            >
                                <ArrowLeft className="w-3 h-3" />
                                Back to Events
                            </Link>
                        </div>

                        {/* Header Section */}
                        <div className="space-y-6">
                            {/* 2. Category Tag */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-white/10 bg-white/5">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
                                    {event.category || "EVENT"} // {event.zoneTitle}
                                </span>
                            </div>

                            {/* 3. Event Title */}
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-white mix-blend-screen">
                                {event.name}
                            </h1>

                            {/* 4. Event Meta Row */}
                            <div className="flex flex-wrap gap-6 md:gap-12 py-6 border-y border-white/10">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-red-500/80" />
                                    <span className="text-sm font-mono text-white/80 tracking-wide">{date}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-4 h-4 text-red-500/80" />
                                    <span className="text-sm font-mono text-white/80 tracking-wide">{time}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-4 h-4 text-red-500/80" />
                                    <span className="text-sm font-mono text-white/80 tracking-wide">{event.venue || "TBA"}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="w-4 h-4 text-red-500/80" />
                                    <span className="text-sm font-mono text-white/80 tracking-wide">Team: {teamSize}</span>
                                </div>
                            </div>
                        </div>

                        {/* CONTENT BLOCKS */}
                        <div className="space-y-16">

                            {/* Mission Briefing */}
                            <section>
                                <h3 className="text-xs font-mono text-red-500 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <span className="w-4 h-px bg-red-500" />
                                    Mission Briefing
                                </h3>
                                <p className="text-lg md:text-xl leading-relaxed text-white/80 font-light max-w-3xl border-l-2 border-white/10 pl-6 whitespace-pre-line">
                                    {event.description}
                                </p>
                            </section>

                            {/* Prize / Bounty */}
                            {prize && prize !== "TBA" && (
                                <section className="bg-white/[0.02] border border-white/5 p-8 rounded-sm relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <Trophy className="w-32 h-32" />
                                    </div>
                                    <h3 className="text-xs font-mono text-yellow-500 mb-4 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Trophy className="w-3 h-3" />
                                        Projected Bounty
                                    </h3>
                                    <div className="text-4xl md:text-5xl font-bold font-mono text-white tracking-widest">
                                        {typeof prize === 'number' ? `₹${prize.toLocaleString()}` : prize}
                                    </div>
                                </section>
                            )}



                            {/* Coordinators */}
                            <section>
                                <h3 className="text-xs font-mono text-red-500 mb-6 uppercase tracking-[0.2em] flex items-center gap-2">
                                    <Users className="w-3 h-3" />
                                    Command Channels
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {event.coordinators && event.coordinators.map((coord: any, idx: number) => (
                                        <div key={idx} className="flex items-center gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-sm hover:border-red-500/30 transition-colors">
                                            <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/40">
                                                <User className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white tracking-wide uppercase">{coord.name}</p>
                                                <a href={`tel:${coord.phone}`} className="text-xs font-mono text-white/40 hover:text-red-400 flex items-center gap-2 mt-1">
                                                    <Phone className="w-2.5 h-2.5" />
                                                    {coord.phone}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN — ACTION PANEL (35% ≈ 4 cols) */}
                    <motion.div
                        className="lg:col-span-4 relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="sticky top-16 space-y-6">

                            {/* Registration Card */}
                            <div className="bg-[#0A0A0A] border border-white/10 rounded-sm p-6 md:p-8 relative overflow-hidden">


                                <div className="mb-8">
                                    <span className="block text-xs font-mono text-white/40 uppercase tracking-widest mb-1">Registration Fee</span>
                                    <div className="text-3xl font-black text-white tracking-tight">
                                        {fee === 'Free' ? 'FREE' : (fee ? `₹${fee}` : '')}
                                    </div>
                                </div>

                                {/* Primary CTA */}
                                <a
                                    href={event.formLink || event.registrationUrl || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full"
                                >
                                    <button className="group relative w-full bg-red-600 hover:bg-red-700 text-black font-bold uppercase tracking-widest py-4 px-6 transition-all duration-300 overflow-hidden clip-path-slant">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Initiate Registration
                                            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>

                                        {/* Hover glint */}
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                                    </button>
                                </a>


                            </div>





                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}

function ArrowRightIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
