"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoBackground from "@/components/core/VideoBackground";
import { Sparkles } from "lucide-react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const names = "Shubham & Varsha";

    return (
        <section
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-transparent"
        >
            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="mb-8"
                >
                    <span className="font-accent text-sm tracking-[0.5em] text-light-royal-gold uppercase mb-6 block drop-shadow-lg">
                        A Royal Celebration
                    </span>
                    <motion.h1
                        className="font-script text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] mb-6 text-white font-bold drop-shadow-strong leading-tight"
                    >
                        {names}
                    </motion.h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mb-8 font-display text-lg uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white md:text-2xl drop-shadow-lg"
                >
                    We're Getting Married!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="flex flex-col items-center"
                >
                    <div className="mb-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
                    <p className="font-display text-2xl font-medium tracking-[0.3em] text-white drop-shadow-md">
                        MARCH 07, 2026
                    </p>
                    <div className="mt-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
                </motion.div>


                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="font-accent text-xs tracking-[0.5em] text-white/60 uppercase">SCROLL</span>
                        <div className="h-16 w-[1px] bg-gradient-to-b from-royal-gold to-transparent" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}

function MandalaSVG() {
    return (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-royal-gold/30 stroke-[0.5]">
            <circle cx="100" cy="100" r="90" />
            <circle cx="100" cy="100" r="70" />
            <circle cx="100" cy="100" r="50" />
            {Array.from({ length: 12 }).map((_, i) => (
                <path
                    key={i}
                    d="M100 10 L110 30 L90 30 Z"
                    transform={`rotate(${i * 30} 100 100)`}
                />
            ))}
            {Array.from({ length: 24 }).map((_, i) => (
                <circle
                    key={i}
                    cx="100"
                    cy="25"
                    r="2"
                    transform={`rotate(${i * 15} 100 100)`}
                />
            ))}
        </svg>
    );
}

function CornerOrnament({ className = "" }: { className?: string }) {
    return (
        <div className={`w-32 h-32 text-royal-gold/20 flex items-center justify-center text-4xl font-serif ${className}`}>
            ❦
        </div>
    );
}

function SparkleParticles() {
    const [sparkles, setSparkles] = React.useState<any[]>([]);

    React.useEffect(() => {
        const newSparkles = Array.from({ length: 15 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            delay: `${Math.random() * 3}s`,
        }));
        setSparkles(newSparkles);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none">
            {sparkles.map((sparkle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-royal-gold/40 rounded-full blur-[1px] animate-twinkle"
                    style={{
                        top: sparkle.top,
                        left: sparkle.left,
                        animationDelay: sparkle.delay,
                    }}
                />
            ))}
        </div>
    );
}
