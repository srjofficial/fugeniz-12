"use client";

import { useEffect, useState } from "react";

interface Spore {
    id: number;
    size: number;
    duration: number;
    delay: number;
    left: number;
    opacity: number;
    blur: number;
}

export default function FloatingSpores() {
    const [spores, setSpores] = useState<Spore[]>([]);

    useEffect(() => {
        // Generate a random set of spores
        const generatedSpores: Spore[] = Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 1, // 1px to 5px
            duration: Math.random() * 15 + 10, // 10s to 25s
            delay: Math.random() * 20, // 0s to 20s
            left: Math.random() * 100, // 0% to 100%
            opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
            blur: Math.random() * 3, // 0px to 3px
        }));

        setSpores(generatedSpores);
    }, []);

    return (
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-screen">
            {spores.map((spore) => (
                <div
                    key={spore.id}
                    className="spore"
                    style={{
                        width: `${spore.size}px`,
                        height: `${spore.size}px`,
                        left: `${spore.left}%`,
                        opacity: spore.opacity,
                        filter: `blur(${spore.blur}px)`,
                        animation: `spore-drift ${spore.duration}s ${spore.delay}s linear infinite`,
                    }}
                />
            ))}
        </div>
    );
}
