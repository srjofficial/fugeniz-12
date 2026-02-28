"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LightningEffect() {
    const [flashing, setFlashing] = useState(false);

    useEffect(() => {
        // Randomly trigger lighting flashes
        const triggerLightning = () => {
            setFlashing(true);

            // Lightning consists of a few rapid flashes
            setTimeout(() => setFlashing(false), 50);
            setTimeout(() => setFlashing(true), 100);
            setTimeout(() => setFlashing(false), 150);
            setTimeout(() => setFlashing(true), 250);
            setTimeout(() => setFlashing(false), 400);

            // Schedule next lightning strike randomly between 5 and 15 seconds
            const nextStrike = Math.random() * 10000 + 5000;
            setTimeout(triggerLightning, nextStrike);
        };

        const initialTimeout = setTimeout(triggerLightning, 3000);

        return () => clearTimeout(initialTimeout);
    }, []);

    return (
        <AnimatePresence>
            {flashing && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.05 }}
                    className="fixed inset-0 z-[100] bg-white mix-blend-overlay pointer-events-none"
                />
            )}
        </AnimatePresence>
    );
}
