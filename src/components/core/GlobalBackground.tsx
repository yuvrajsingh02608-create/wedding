"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-black">
            {/* Dark Overlay Layer (Consistent across all background content) */}
            <div className="absolute inset-0 dark-overlay z-10" />

            {/* Background Content (Rotating images or fixed cinematic photo) */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                className="w-full h-full"
            >
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Main Background"
                    className="w-full h-full object-cover opacity-80"
                />
            </motion.div>

            {/* Subtle Gradient Fog (Top and Bottom) */}
            <div className="absolute inset-0 z-20 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
        </div>
    );
}
