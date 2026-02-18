"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoMontageProps {
    clips: string[];
    interval?: number;
    transitionDuration?: number;
    overlayColor?: string;
    overlayOpacity?: number;
    speed?: number;
}

export default function VideoMontage({
    clips,
    interval = 6000,
    transitionDuration = 1000,
    overlayColor = "var(--overlay-lavender)",
    overlayOpacity = 0.3,
    speed = 0.7,
}: VideoMontageProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % clips.length);
        }, interval);
        return () => clearInterval(timer);
    }, [clips.length, interval]);

    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: transitionDuration / 1000 }}
                    className="absolute inset-0"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        onMouseEnter={(e) => (e.currentTarget.playbackRate = speed)}
                        ref={(el) => {
                            if (el) el.playbackRate = speed;
                        }}
                    >
                        <source src={clips[currentIndex]} type="video/mp4" />
                    </video>
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
