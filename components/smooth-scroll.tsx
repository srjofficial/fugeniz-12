"use client"

import { ReactNode } from "react"

// Lenis smooth scroll removed — it intercepts wheel events and adds latency,
// causing poor scroll performance with external mice and trackpads.
// Native browser scroll is already smooth on modern browsers.

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return <>{children}</>
}
