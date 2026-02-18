"use client";

import React from "react";
import { motion } from "framer-motion";

export default function MeetCouple() {
    return (
        <section className="relative flex flex-col md:flex-row h-screen w-full overflow-hidden bg-black">
            {/* Split Left - Bride */}
            <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden border-b md:border-b-0 md:border-r border-gold/30">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7]"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-bride-smiling-32822-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-10 left-10 md:top-1/2 md:-translate-y-1/2 md:left-20 z-10 max-w-sm"
                >
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                        <h2 className="font-script text-5xl text-white mb-2">Varsha</h2>
                        <h3 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-4">The Bride</h3>
                        <p className="font-body text-white/90 leading-relaxed italic">
                            "A creative soul with a heart full of dreams, finding magic in the simplest moments of life."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Split Right - Groom */}
            <div className="relative w-full h-1/2 md:h-full md:w-1/2 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7]"
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-man-walking-in-front-of-a-white-wall-34440-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-l" />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="absolute bottom-10 right-10 md:top-1/2 md:-translate-y-1/2 md:right-20 z-10 max-w-sm text-right"
                >
                    <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
                        <h2 className="font-script text-5xl text-white mb-2">Shubham</h2>
                        <h3 className="font-display text-sm tracking-[0.3em] text-gold uppercase mb-4">The Groom</h3>
                        <p className="font-body text-white/90 leading-relaxed italic">
                            "An adventurous spirit always ready for the next journey, believing that the best story is the one we write together."
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Central Divider Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                <div className="w-1 h-32 bg-gradient-to-b from-transparent via-gold to-transparent" />
            </div>
        </section>
    );
}
