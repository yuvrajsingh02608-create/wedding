"use client";

import React from "react";
import { motion } from "framer-motion";

const styles = [
    {
        title: "Haldi",
        description: "Join us in yellow! Let's celebrate with turmeric and joy.",
        date: "05 March 2026",
        time: "11:00 AM",
        color: "linear-gradient(135deg, #FFD93D, #F4E4D7)",
        pattern: "mandala"
    },
    {
        title: "Wedding",
        description: "Royal and Elegant. Pastel shades, golds, and ivory are preferred.",
        date: "07 March 2026",
        time: "02:00 PM",
        color: "linear-gradient(135deg, #d4a373, #f4e4d7)",
        pattern: "mandala"
    },
    {
        title: "Reception",
        description: "Formal Elegance. Deep jewel tones and evening wear are expected.",
        date: "07 March 2026",
        time: "07:30 PM",
        color: "linear-gradient(135deg, #8b6f47, #6d5d4b)",
        pattern: "geometric"
    }
];

export default function StyleGuide() {
    return (
        <section className="relative py-24 bg-transparent overflow-hidden">
            {/* Henna Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <MandalaWatermark />
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-12 md:p-20 relative overflow-hidden"
                >
                    <div className="text-center mb-16 relative z-10">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="font-script text-5xl md:text-7xl text-charcoal mb-6 drop-shadow-md"
                        >
                            Wedding Style Guide
                        </motion.h2>
                        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {styles.map((style, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="bg-white/40 backdrop-blur-md p-8 rounded-[2rem] shadow-lg border border-white/20 relative group overflow-hidden"
                            >
                                {/* Pattern Overlay */}
                                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                    {style.pattern === 'mandala' && <MandalaTile />}
                                    {style.pattern === 'musical-notes' && <PatternTile char="♪" />}
                                    {style.pattern === 'geometric' && <PatternTile char="◈" />}
                                </div>

                                <div className="relative z-10 text-center">
                                    <div
                                        className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center shadow-inner group-hover:animate-pulse"
                                        style={{ background: style.color }}
                                    >
                                        <span className="text-white text-3xl">👗</span>
                                    </div>
                                    <h3 className="font-display text-2xl text-charcoal mb-4 uppercase tracking-widest">{style.title}</h3>
                                    <p className="font-body text-brown/70 mb-6 italic">{style.description}</p>
                                    <div className="pt-6 border-t border-royal-gold/10 grid grid-cols-2 gap-4">
                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-royal-gold/60 block mb-1">Date</span>
                                            <span className="font-display text-sm text-charcoal tracking-wide">{style.date}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-[0.2em] text-royal-gold/60 block mb-1">Time</span>
                                            <span className="font-display text-sm text-charcoal tracking-wide">{style.time}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function MandalaWatermark() {
    return (
        <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] text-royal-gold fill-current">
            <path d="M100 0 a100 100 0 0 0 0 200 a100 100 0 0 0 0 -200 M100 20 a80 80 0 0 1 0 160 a80 80 0 0 1 0 -160" />
            {Array.from({ length: 16 }).map((_, i) => (
                <path
                    key={i}
                    d="M100 30 Q110 50 100 70 Q90 50 100 30"
                    transform={`rotate(${i * 22.5} 100 100)`}
                />
            ))}
        </svg>
    );
}

function MandalaTile() {
    return (
        <div className="w-full h-full flex flex-wrap gap-4 p-4 text-royal-gold">
            {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border border-current opacity-20" />
            ))}
        </div>
    );
}

function PatternTile({ char }: { char: string }) {
    return (
        <div className="w-full h-full flex flex-wrap gap-8 p-4 items-center justify-center text-4xl text-royal-gold">
            {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="opacity-20">{char}</span>
            ))}
        </div>
    );
}
