"use client"

import { ArrowRight, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

interface EventCardProps {
    name: string
    description: string
    time?: string
    location?: string
    index: number
    image?: string
    registrationUrl?: string
    category?: string
    code?: string
}

export default function EventCard({
    name,
    description,
    index,
    image,
    category = "TECHNICAL",
    code
}: EventCardProps) {
    // Generate a pseudo-code if not provided, e.g., // EVT-01
    const displayCode = code || `// EVT-${String(index + 1).padStart(2, "0")}`

    // Generate slug for linking
    const slug = (name || "").toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    return (
        <Link href={`/bodhi/event/${slug}`} className="block h-full">
            <motion.div
                initial="initial"
                whileHover="hover"
                className="relative h-[300px] md:h-[480px] w-full bg-[#050505] overflow-hidden border border-white/5 cursor-pointer"
            >
                {/* 1. BACKGROUND IMAGE & OVERLAYS */}
                <div className="absolute inset-0 z-0">
                    {image ? (
                        <motion.img
                            variants={{
                                initial: { opacity: 0.8, scale: 1 },
                                hover: { opacity: 0.6, scale: 1.05 }
                            }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    ) : (
                        <div className="w-full h-full bg-neutral-900 grid-bg opacity-20" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    <div
                        className="absolute inset-0 opacity-[0.06] z-[1] pointer-events-none mix-blend-overlay"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")` }}
                    />

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
                </div>

                {/* HOVER BORDER ACCENT */}
                <motion.div
                    variants={{
                        initial: { opacity: 0 },
                        hover: { opacity: 1 }
                    }}
                    className="absolute right-0 top-0 bottom-0 w-1 bg-red-600 z-20"
                />

                <div className="relative z-10 flex flex-col h-full p-3 md:p-8">
                    <div className="flex justify-between items-start">
                        <motion.div
                            variants={{
                                initial: { borderColor: "rgba(255,255,255,0.1)" },
                                hover: { borderColor: "rgba(255,255,255,0.2)" }
                            }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-md border rounded-full transition-colors duration-300"
                        >
                            <Terminal className="w-3 h-3 text-red-500/80" />
                            <span className="text-[10px] font-mono tracking-widest text-white/60 uppercase">
                                {category}
                            </span>
                        </motion.div>
                    </div>

                    <div className="flex-1" />

                    <div className="mb-4">
                        <motion.h3
                            variants={{
                                initial: { x: 0 },
                                hover: { x: 4 }
                            }}
                            className="text-lg md:text-3xl lg:text-4xl font-black font-sans text-white uppercase leading-[0.9] tracking-tighter mix-blend-screen"
                        >
                            {name}
                        </motion.h3>
                        <motion.div
                            variants={{
                                initial: { scaleX: 0 },
                                hover: { scaleX: 1 }
                            }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="h-1 w-12 bg-red-600 mt-4 origin-left"
                        />
                    </div>

                    <div className="flex items-end justify-between border-t border-white/10 pt-4 mt-auto">
                        <motion.span
                            variants={{
                                initial: { color: "rgba(239, 68, 68, 0.6)" },
                                hover: { color: "rgba(239, 68, 68, 1)" }
                            }}
                            className="font-mono text-[8px] md:text-[10px] tracking-[0.2em]"
                        >
                            {displayCode}
                        </motion.span>

                        <div className="flex items-center gap-2 text-white/40">
                            <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
                            <motion.div
                                variants={{
                                    initial: { rotate: -45 },
                                    hover: { rotate: 0 }
                                }}
                            >
                                <ArrowRight className="w-3 h-3" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link >
    )
}
