"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Register GSAP Plugin
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
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
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)

        // Clean up
        return () => {
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000)
            })
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}
