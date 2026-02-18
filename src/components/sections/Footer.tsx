"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import KenBurnsSlideshow from "@/components/core/KenBurnsSlideshow";
import { Heart, Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
    const [stars, setStars] = useState<any[]>([]);

    React.useEffect(() => {
        const newStars = Array.from({ length: 20 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: 2 + Math.random() * 3,
        }));
        setStars(newStars);
    }, []);

    return (
        <footer className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#8b6f47/90] to-[#6d5d4b]">
            {/* Background Texture Overlay (Simulated Gold Foil) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            {/* Scattered Stars */}
            <div className="absolute inset-0 pointer-events-none">
                {stars.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-white/40 text-[8px]"
                        style={{
                            top: star.top,
                            left: star.left,
                        }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: star.duration, repeat: Infinity }}
                    >
                        ✦
                    </motion.div>
                ))}
            </div>

            {/* Monogram Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.1]">
                <span className="font-serif text-[40rem] text-white select-none">S&V</span>
            </div>

            {/* Ornate Top Border */}
            <div className="absolute top-0 left-0 w-full h-[8px] bg-royal-gold opacity-50 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_2px,transparent_2px)] bg-[size:20px_20px]" />

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <span className="font-accent text-royal-gold uppercase tracking-[0.5em] text-xs mb-8 block">Forever & Always</span>

                    <h2 className="font-script text-7xl md:text-8xl text-white mb-6 drop-shadow-2xl">Shubham & Varsha</h2>

                    <div className="flex items-center gap-6 mb-12">
                        <div className="h-[1px] w-20 bg-royal-gold/40" />
                        <p className="font-display text-white/90 tracking-[0.3em] text-sm md:text-base">MARCH 07, 2026</p>
                        <div className="h-[1px] w-20 bg-royal-gold/40" />
                    </div>

                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="mb-12"
                    >
                        <Heart className="h-12 w-12 text-royal-gold fill-royal-gold drop-shadow-[0_0_15px_rgba(212,163,115,0.5)]" />
                    </motion.div>

                    <div className="flex gap-10 mb-20">
                        <SocialIcon icon={<Instagram className="h-6 w-6" />} href="https://www.instagram.com/yonderai_official/" />
                        <SocialIcon icon={<Facebook className="h-6 w-6" />} href="#" />
                        <SocialIcon icon={<Mail className="h-6 w-6" />} href="mailto:Info@yonderai.ai" />
                    </div>

                    <div className="space-y-6">
                        <p className="font-body text-white/70 italic text-xl max-w-lg mx-auto leading-relaxed">
                            "And so the adventure begins... together, hand in hand, for the rest of our lives."
                        </p>
                        <div className="pt-12 flex flex-col items-center gap-4">
                            <div className="h-px w-32 bg-gradient-to-r from-transparent via-royal-gold/30 to-transparent" />
                            <p className="font-display text-[11px] text-white/40 uppercase tracking-[0.6em]">
                                &copy; 2026 Shubham & Varsha &bull; Lucknow, India
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <motion.a
            href={href}
            whileHover={{ y: -8, scale: 1.15 }}
            className="text-white hover:text-royal-gold transition-all duration-300 transform"
        >
            <div className="p-4 bg-white/5 rounded-full border border-white/10 backdrop-blur-xl shadow-lg ring-1 ring-white/10">
                {icon}
            </div>
        </motion.a>
    );
}
