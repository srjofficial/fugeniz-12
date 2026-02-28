"use client";

import { useEffect } from "react";
import GlobalLoader from "@/components/GlobalLoader";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    // Reset scroll to top on every page navigation.
    // template.tsx re-mounts on each route change (unlike layout.tsx),
    // so this reliably fixes the "page loads scrolled to bottom" bug
    // caused by GSAP ScrollTrigger's body padding on the homepage.
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <>
            <GlobalLoader />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
