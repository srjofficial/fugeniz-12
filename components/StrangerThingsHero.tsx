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

            {/* Fixed Menu Button — Top Right */}
            <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[100]">
                <MenuButton />
            </div>
        </>
    );
}
