"use client"

import Image from "next/image"

export default function DrishyaHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20 lg:pt-0">
            {/* Simple Black Background */}
            <div className="absolute inset-0 bg-black" />

            {/* Background Image - Half Face */}
            <div className="absolute inset-y-0 left-0 h-full w-auto z-0 opacity-40 mix-blend-screen pointer-events-none select-none">
                <Image
                    src="/images/drishya/halfface.png"
                    alt="Drishya Artistic Face"
                    width={800}
                    height={1200}
                    className="h-full w-auto object-cover object-left"
                    priority
                />
            </div>



            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Top label */}
                <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="h-px w-8 bg-red-500/50" />
                    <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-red-500/80 uppercase">
                        Arts & Cultural Events
                    </span>
                    <span className="h-px w-8 bg-red-500/50" />
                </div>

                {/* Main title */}
                <h1 className="text-6xl md:text-[8rem] lg:text-[12rem] font-asoka font-bold tracking-widest leading-none text-white">
                    DRISHYA
                </h1>

                {/* Description */}
                <p className="text-sm md:text-base font-mono text-white/40 mt-6 max-w-md mx-auto">
                    Celebrate art, music, dance, and creativity. Showcase your talent.
                </p>
            </div>
        </section>
    )
}
