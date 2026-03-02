"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        // Register GSAP plugin regardless of device
        gsap.registerPlugin(ScrollTrigger);

        // Lenis conflicts with native touch momentum on mobile/tablet.
        // Skip it on touch devices — native scroll is already smooth there.
        const isTouchDevice =
            window.matchMedia("(hover: none) and (pointer: coarse)").matches;

        if (isTouchDevice) {
            // Just keep ScrollTrigger in sync with native scroll
            ScrollTrigger.refresh();
            return;
        }

        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        lenisRef.current = lenis;

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)

        // Ensure GSAP uses Lenis requestAnimationFrame
        const tickerFn = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tickerFn);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerFn);
            lenis.destroy();
        }
    }, [])

    return <>{children}</>
}
