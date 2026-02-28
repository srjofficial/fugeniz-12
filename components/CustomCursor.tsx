"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <div className="custom-cursor">
            {/* Main Cursor Dot */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_10px_rgba(220,38,38,1)]"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isHovering ? 2.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Trailing Glow Container */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 border border-red-500/50 rounded-full pointer-events-none z-[9998] mix-blend-screen shadow-[0_0_20px_rgba(220,38,38,0.5)] bg-red-900/10 backdrop-blur-[1px]"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            />
        </div>
    );
}
