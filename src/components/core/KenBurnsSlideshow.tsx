"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";

interface KenBurnsSlideshowProps {
    images: string[];
    interval?: number;
    transitionDuration?: number;
    overlayColor?: string;
    overlayOpacity?: number;
}

export default function KenBurnsSlideshow({
    images,
    interval = 6000,
    transitionDuration = 2000,
    overlayColor = "var(--overlay-rose)",
    overlayOpacity = 0.3,
}: KenBurnsSlideshowProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const kenBurnsVariants: Variants = {
        initial: { scale: 1, x: 0, y: 0, opacity: 0 },
        animate: (index: number) => ({
            scale: 1.2,
            x: ["-2%", "2%", "-1%", "0%"][index % 4],
            y: ["0%", "-2%", "2%", "1%"][index % 4],
            opacity: 1,
            transition: {
                scale: { duration: interval / 1000 + 1, ease: "linear" },
                x: { duration: interval / 1000 + 1, ease: "linear" },
                y: { duration: interval / 1000 + 1, ease: "linear" },
                opacity: { duration: transitionDuration / 1000 },
            } as any,
        }),
        exit: {
            opacity: 0,
            transition: { duration: transitionDuration / 1000 },
        },
    };

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    custom={currentIndex}
                    variants={kenBurnsVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slideshow image ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </AnimatePresence>
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: overlayColor,
                    opacity: overlayOpacity,
                }}
            />
        </div>
    );
}
