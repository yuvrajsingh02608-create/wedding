"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface VideoBackgroundProps {
    src: string;
    overlayColor?: string;
    overlayOpacity?: number;
    speed?: number;
    parallax?: boolean;
    blur?: number;
    brightness?: number;
}

export default function VideoBackground({
    src,
    overlayColor = "var(--overlay-dark)",
    overlayOpacity = 0.4,
    speed = 0.7,
    parallax = true,
    blur = 0,
    brightness = 0.8,
}: VideoBackgroundProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldPlay, setShouldPlay] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", parallax ? "20%" : "0%"]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        video.playbackRate = speed;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setShouldPlay(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [speed]);

    useEffect(() => {
        if (videoRef.current) {
            if (shouldPlay) {
                videoRef.current.play().catch(() => {
                    // Autoplay might be blocked until interaction
                });
            } else {
                videoRef.current.pause();
            }
        }
    }, [shouldPlay]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
            <motion.div style={{ y, width: "100%", height: "120%", top: "-10%" }} className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                        filter: `blur(${blur}px) brightness(${brightness})`,
                    }}
                >
                    <source src={src} type="video/mp4" />
                </video>
            </motion.div>
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
