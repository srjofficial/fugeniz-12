"use client";

/**
 * StrangerThingsHero.tsx — NAVBAR ONLY
 *
 * Hero background, text, and logos moved to TenaniScrollAnimation end-reveal.
 * This component renders only the fixed navbar elements.
 */

import Image from "next/image";
import MenuButton from "./MenuButton";

export default function StrangerThingsHero() {
    return (
        <>
            {/* Fixed Logo — Top Left */}
            <div className="fixed top-4 left-4 sm:top-6 sm:left-6 z-[100] drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                <Image
                    src="/home/custom-logo.png"
                    alt="Custom Logo"
                    width={64}
                    height={64}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full mix-blend-screen ring-1 ring-red-600/50"
                    onError={(e) => {
                        e.currentTarget.src = "/home/f12-logo.png";
                    }}
                />
            </div>

            {/* Fixed Menu Button — Top Right */}
            <div className="fixed inset-0 z-[100] pointer-events-none">
                <div className="pointer-events-auto">
                    <MenuButton />
                </div>
            </div>
        </>
    );
}
