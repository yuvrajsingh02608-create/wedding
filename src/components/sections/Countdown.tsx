"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    // Wedding Date: March 07, 2026, at 02:00 PM
    const weddingDate = new Date("2026-03-07T14:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
        isCelebration: boolean;
    }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isCelebration: false });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCelebration: true });
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
                isCelebration: false
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    return (
        <section className="relative py-24 sm:py-32 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-display text-lg sm:text-2xl md:text-3xl text-brown mb-12 uppercase tracking-[0.2em] px-4"
                >
                    {timeLeft.isCelebration ? "We Are Married! 💕" : "Counting Down to Our Special Day"}
                </motion.h3>

                {!timeLeft.isCelebration && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto px-2">
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <TimeUnit value={timeLeft.minutes} label="Minutes" />
                        <TimeUnit value={timeLeft.seconds} label="Seconds" />
                    </div>
                )}
            </div>
        </section>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center"
        >
            <span className="font-display text-4xl md:text-5xl font-bold text-royal-gold mb-2">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="font-accent text-xs md:text-sm text-brown/60 uppercase tracking-[0.2em]">
                {label}
            </span>
        </motion.div>
    );
}
