"use client";

/**
 * TenaniScrollAnimation.tsx
 *
 * Responsive Apple-style scroll-driven frame animation:
 * - DESKTOP / TABLET (≥ 768px): uses /frames/tenani/       (upscaled landscape video)
 * - MOBILE           (< 768px): uses /frames/tenani-mobile/ (portrait-optimised vdo2)
 *
 * Both share the same GSAP ScrollTrigger + canvas logic.
 * The active frame set is determined once on mount via window.innerWidth,
 * then kept in sync via a ResizeObserver that re-initialises if the breakpoint
 * is crossed (e.g. rotating a phone).
 */

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ─── Breakpoint (matches Tailwind `md`) ───────────────────────────────────────
const MOBILE_BREAKPOINT = 768; // px — below this, use mobile frames

// ─── Config per variant ───────────────────────────────────────────────────────
const VARIANTS = {
    desktop: {
        totalFrames: 192,
        framePath: (i: number) =>
            `/frames/tenani/frame-${String(i).padStart(4, "0")}.jpg`,
        pxPerFrame: 20,
    },
    mobile: {
        totalFrames: 192,
        framePath: (i: number) =>
            `/frames/tenani-mobile/frame-${String(i).padStart(4, "0")}.jpg`,
        pxPerFrame: 20,
    },
} as const;

type Variant = keyof typeof VARIANTS;

const CHUNK_SIZE = 16;

export default function TenaniScrollAnimation() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const lastFrameBgRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);
    const loadedCountRef = useRef(0);
    const variantRef = useRef<Variant>("desktop");
    const cleanupRef = useRef<(() => void) | null>(null);

    // ─── Determine active variant from current viewport ─────────────────────
    const getVariant = (): Variant =>
        window.innerWidth < MOBILE_BREAKPOINT ? "mobile" : "desktop";

    // ─── Draw a frame to the canvas ──────────────────────────────────────────
    const drawFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const img = imagesRef.current[index];
        if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const cw = canvas.width, ch = canvas.height;
        const iw = img.naturalWidth, ih = img.naturalHeight;
        const scale = Math.min(cw / iw, ch / ih);
        const drawW = iw * scale, drawH = ih * scale;
        const dx = (cw - drawW) / 2, dy = (ch - drawH) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, dx, dy, drawW, drawH);
    }, []);

    // ─── Resize canvas to match container ────────────────────────────────────
    const sizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        const section = sectionRef.current;
        if (!canvas || !section) return;
        canvas.width = section.clientWidth;
        canvas.height = section.clientHeight;
        drawFrame(currentFrameRef.current);
    }, [drawFrame]);

    // ─── Preload frames in idle chunks ───────────────────────────────────────
    const preloadChunk = useCallback((
        startIndex: number,
        framePath: (i: number) => string,
        totalFrames: number,
    ) => {
        const end = Math.min(startIndex + CHUNK_SIZE, totalFrames);
        for (let i = startIndex; i < end; i++) {
            if (imagesRef.current[i]) continue;
            const img = new window.Image();
            img.src = framePath(i + 1);
            img.onload = () => {
                loadedCountRef.current += 1;
                if (i === 0) drawFrame(0);
            };
            imagesRef.current[i] = img;
        }
        if (end < totalFrames) {
            if (typeof requestIdleCallback !== "undefined") {
                requestIdleCallback(() => preloadChunk(end, framePath, totalFrames));
            } else {
                setTimeout(() => preloadChunk(end, framePath, totalFrames), 16);
            }
        }
    }, [drawFrame]);

    // ─── Bootstrap GSAP ScrollTrigger for the active variant ─────────────────
    const initAnimation = useCallback(() => {
        // Clean up previous instance
        if (cleanupRef.current) {
            cleanupRef.current();
            cleanupRef.current = null;
        }

        const section = sectionRef.current;
        const canvas = canvasRef.current;
        const overlay = overlayRef.current;
        const lastFrameBg = lastFrameBgRef.current;
        if (!section || !canvas) return;

        const variant = getVariant();
        variantRef.current = variant;
        const { totalFrames, framePath, pxPerFrame } = VARIANTS[variant];

        // Reset image cache and counters for new variant
        imagesRef.current = [];
        loadedCountRef.current = 0;
        currentFrameRef.current = 0;

        // Update fixed background to correct last frame
        if (lastFrameBg) {
            lastFrameBg.style.backgroundImage =
                `url('${framePath(totalFrames)}')`;
            lastFrameBg.style.opacity = "0";
        }

        sizeCanvas();
        preloadChunk(0, framePath, totalFrames);

        const totalScrollPx = pxPerFrame * (totalFrames - 1);

        const tween = gsap.to(
            { frame: 0 },
            {
                frame: totalFrames - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${totalScrollPx}`,
                    scrub: 0.5,
                    pin: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        const frame = Math.round(self.progress * (totalFrames - 1));
                        currentFrameRef.current = frame;
                        drawFrame(frame);

                        // Hero overlay: fade in at 80-100% progress
                        if (overlay) {
                            const opacity = Math.max(0, (self.progress - 0.80) * 5);
                            overlay.style.opacity = String(opacity);
                            overlay.style.transform =
                                `translateY(${Math.max(0, (1 - opacity) * 40)}px)`;
                        }

                        // Progress bar
                        const bar = document.getElementById("tenani-progress-bar");
                        if (bar) bar.style.width = `${self.progress * 100}%`;
                    },
                    onLeave: () => {
                        if (lastFrameBg) {
                            lastFrameBg.style.transition = "opacity 0.6s ease";
                            lastFrameBg.style.opacity = "1";
                        }
                    },
                    onEnterBack: () => {
                        if (lastFrameBg) {
                            lastFrameBg.style.transition = "opacity 0.4s ease";
                            lastFrameBg.style.opacity = "0";
                        }
                    },
                },
            }
        );

        // ResizeObserver: refresh layout; re-init if breakpoint crossed
        const ro = new ResizeObserver(() => {
            const newVariant = getVariant();
            if (newVariant !== variantRef.current) {
                // Breakpoint crossed — full re-init
                initAnimation();
            } else {
                sizeCanvas();
                ScrollTrigger.refresh();
            }
        });
        ro.observe(section);

        cleanupRef.current = () => {
            tween.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
            ro.disconnect();
        };
    }, [drawFrame, sizeCanvas, preloadChunk]);

    useEffect(() => {
        if (typeof window === "undefined") return;
        gsap.registerPlugin(ScrollTrigger);
        initAnimation();

        return () => {
            if (cleanupRef.current) cleanupRef.current();
        };
    }, [initAnimation]);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative w-full bg-black overflow-hidden"
            style={{ height: "100vh" }}
        >
            {/* ── Fixed last-frame background (persists behind rest of page) ── */}
            <div
                ref={lastFrameBgRef}
                aria-hidden="true"
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: -1,
                    opacity: 0,
                    backgroundImage: `url('/frames/tenani/frame-${String(192).padStart(4, "0")}.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    willChange: "opacity",
                }}
            />

            {/* ── Canvas: frame renderer ──────────────────────────────────── */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
                style={{ display: "block" }}
                aria-hidden="true"
            />

            {/* ── Dark vignette ────────────────────────────────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                    background:
                        "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.92) 100%)",
                }}
            />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* ── CSS animations (always present) ─────────────────────────── */}
            <style>{`
              @keyframes shimmerText {
                0%   { opacity: 0; letter-spacing: 0.6em; }
                40%  { opacity: 1; letter-spacing: 0.25em; }
                100% { opacity: 1; letter-spacing: 0.2em; }
              }
              .college-text-line {
                animation: shimmerText 1.4s cubic-bezier(0.16,1,0.3,1) both;
                display: block;
              }
              .college-text-line:nth-child(2) { animation-delay: 0.2s; }

              /* ─ Glitch date ─ */
              @keyframes glitch-main {
                0%,90%,100%    { clip-path: none; transform: none; }
                91%            { clip-path: polygon(0 20%,100% 20%,100% 30%,0 30%); transform: translate(-4px,0); }
                93%            { clip-path: polygon(0 55%,100% 55%,100% 70%,0 70%); transform: translate(4px,0); }
                95%            { clip-path: polygon(0 5%,100%  5%,100% 10%,0 10%); transform: translate(-2px,0); }
                97%            { clip-path: none; transform: translate(2px,0); }
              }
              @keyframes glitch-r {
                0%,89%,100%  { opacity:0; transform:none; }
                90%          { opacity:0.7; transform:translate(6px,-2px); clip-path:polygon(0 35%,100% 35%,100% 50%,0 50%); }
                94%          { opacity:0.7; transform:translate(-6px,2px); clip-path:polygon(0 65%,100% 65%,100% 80%,0 80%); }
                98%          { opacity:0; }
              }
              @keyframes glitch-b {
                0%,88%,100%  { opacity:0; transform:none; }
                89%          { opacity:0.6; transform:translate(-5px,3px); clip-path:polygon(0 10%,100% 10%,100% 25%,0 25%); }
                93%          { opacity:0.6; transform:translate(5px,-3px); clip-path:polygon(0 75%,100% 75%,100% 90%,0 90%); }
                97%          { opacity:0; }
              }
              .glitch-date { position:relative; animation: glitch-main 2s infinite; }
              .glitch-date::before,
              .glitch-date::after  { content:attr(data-text); position:absolute; inset:0; }
              .glitch-date::before { color:#00eeff; animation: glitch-r 2s infinite; }
              .glitch-date::after  { color:#ff003c; animation: glitch-b 2s infinite; }
            `}</style>

            {/* ── Presented By — ALWAYS VISIBLE from frame 0 ──────────────── */}
            <div className="absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center gap-2 px-4 pt-8 mt-[50px] md:mt-0">
                {/* SNGCE Logo */}
                {/* <div className="flex-shrink-0">
                    <img
                        src="/home/sngce-logo.jpg"
                        alt="SNGCE Logo"
                        className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div> */}

                {/* Animated College Name Text */}
                <div className="flex flex-col items-center leading-tight">
                    <span className="college-text-line font-cinzel font-bold text-white text-lg sm:text-xl md:text-2xl uppercase tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        Sree Narayana Gurukulam
                    </span>
                    <span className="college-text-line font-cinzel font-bold text-red-400 text-lg sm:text-xl md:text-2xl uppercase tracking-[0.2em] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                        College of Engineering
                    </span>
                </div>

                {/* IEEE CIS Logo */}
                <div className="flex-shrink-0">
                    <img
                        src="/home/cis.png"
                        alt="IEEE CIS Logo"
                        className="h-[28px] sm:h-[36px] md:h-[44px] w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                </div>
            </div>

            {/* ── End-reveal overlay: MARCH 5 + Explore Now (fades in at 80%) ── */}
            <div
                ref={overlayRef}
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ opacity: 0, willChange: "opacity" }}
            >
                {/* Bottom-center: MARCH 5 (glitch) + Explore Now */}
                <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 pointer-events-auto">

                    {/* MARCH 5 — glitch date */}
                    <div
                        className="glitch-date font-cinzel font-black text-4xl sm:text-5xl md:text-6xl tracking-[0.4em] uppercase select-none"
                        data-text="MARCH 5"
                        style={{
                            color: "#BF092F",
                            textShadow: "2px 2px 6px rgba(0,0,0,1), 4px 4px 12px rgba(0,0,0,0.8)",
                        }}
                    >
                        MARCH 5
                    </div>

                    {/* Explore Now */}
                    <button
                        onClick={() =>
                            document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="group flex flex-col items-center gap-1 text-yellow-500 hover:text-yellow-300 transition-colors duration-300 mt-2"
                    >
                        <span className="font-cinzel text-sm md:text-base font-bold tracking-[0.25em] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                            Explore Now
                        </span>
                        <div className="animate-bounce">
                            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]" />
                        </div>
                    </button>
                </div>
            </div>


            {/* ── Scroll progress bar ─────────────────────────────────────── */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30 pointer-events-none">
                <div
                    id="tenani-progress-bar"
                    className="h-full bg-gradient-to-r from-red-600 to-orange-400 transition-none"
                    style={{ width: "0%" }}
                />
            </div>
        </section>
    );
}
