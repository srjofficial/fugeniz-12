"use client";

import GlobalLoader from "@/components/GlobalLoader";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
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
