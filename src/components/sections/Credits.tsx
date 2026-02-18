"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Credits() {
    return (
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-transparent via-[rgba(255,244,240,0.3)] to-transparent">
            {/* Decorative Lines */}
            <div className="absolute top-0 left-0 w-full flex justify-center">
                <div className="w-[200px] h-[1px] bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p className="font-script text-4xl md:text-5xl text-light-royal-gold mb-4 italic drop-shadow-lg">
                        With Gratitude
                    </p>

                    <motion.a
                        href="https://yonderai.ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-block decoration-none mt-6 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <div className="relative flex flex-col items-center">
                            <span className="text-2xl mb-4 drop-shadow-md">✨</span>
                            <p className="font-display text-base md:text-lg text-white/90 tracking-[0.1em] mb-3 drop-shadow-md">
                                This website is built by
                            </p>
                            <div className="yonder-text">
                                YONDER AI
                            </div>
                            <span className="font-accent text-[10px] md:text-xs text-white/60 italic tracking-wider drop-shadow-sm mt-4">
                                Where AI meets creativity
                            </span>
                        </div>
                    </motion.a>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="mt-12 font-body text-xs md:text-sm text-white/50 italic tracking-wide drop-shadow-sm"
                    >
                        Transforming moments into digital memories
                    </motion.p>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full flex justify-center">
                <div className="w-[200px] h-[1px] bg-gradient-to-r from-transparent via-royal-gold to-transparent" />
            </div>
        </section>
    );
}
