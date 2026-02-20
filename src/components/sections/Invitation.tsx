"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Invitation() {
    return (
        <section className="relative py-24 px-4 overflow-hidden bg-transparent">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/2">
                    <MandalaSVG />
                </div>
            </div>

            {/* Om Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                <span className="text-[40rem] font-serif select-none">ॐ</span>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-card relative p-12 md:p-20 text-center overflow-hidden"
                >
                    {/* Inner Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative z-10"
                    >
                        <Heart className="w-10 h-10 text-royal-gold mx-auto mb-8 animate-pulse" />

                        <span className="font-accent text-sm tracking-[0.4em] text-royal-gold uppercase mb-6 block drop-shadow-sm">
                            The honor of your presence is requested at the marriage of
                        </span>

                        <h2 className="font-script text-6xl md:text-8xl text-charcoal mb-8 drop-shadow-md">
                            Shubham & Varsha
                        </h2>

                        <p className="font-display text-xl md:text-2xl text-brown mb-12 leading-relaxed tracking-wide drop-shadow-sm">
                            WE ARE CELEBRATING THE BEGINNING OF OUR NEW JOURNEY AND YOUR PRESENCE WOULD MEAN THE WORLD TO US.
                        </p>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-16">
                            <div className="text-center group">
                                <span className="font-accent text-xs tracking-[0.3em] text-royal-gold uppercase mb-4 block group-hover:scale-110 transition-transform">Where</span>
                                <div className="h-px w-8 bg-royal-gold/30 mx-auto mb-4" />
                                <p className="font-display text-lg text-charcoal tracking-[0.1em]">V23C+6RM Lucknow, Uttar Pradesh<br />26°51&apos;11.1&quot;N 81°01&apos;19.4&quot;E</p>
                            </div>

                            <div className="w-px h-16 bg-royal-gold/20 hidden md:block" />

                            <div className="text-center group">
                                <span className="font-accent text-xs tracking-[0.3em] text-royal-gold uppercase mb-4 block group-hover:scale-110 transition-transform">When</span>
                                <div className="h-px w-8 bg-royal-gold/30 mx-auto mb-4" />
                                <p className="font-display text-lg text-charcoal tracking-[0.1em]">MARCH 07, 2026<br />02:00 PM ONWARDS</p>
                            </div>
                        </div>

                        <motion.a
                            href="https://www.google.com/maps/dir//26.8530833,81.0220556"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-16 px-10 py-4 border-2 border-royal-gold/30 text-royal-gold hover:bg-royal-gold hover:text-white rounded-full font-display text-xs tracking-[0.4em] transition-all uppercase inline-block"
                        >
                            Get Directions
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

function MandalaSVG() {
    return (
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-royal-gold">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            {Array.from({ length: 12 }).map((_, i) => (
                <path
                    key={i}
                    d="M50 10 Q60 50 50 90 Q40 50 50 10"
                    transform={`rotate(${i * 30} 50 50)`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.2"
                />
            ))}
        </svg>
    );
}
