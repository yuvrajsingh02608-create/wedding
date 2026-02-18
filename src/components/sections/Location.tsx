"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Compass, ArrowUpRight } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="relative py-24 bg-[#f8f5f1] overflow-hidden">
            {/* Compass Rose Watermark */}
            <div className="absolute top-10 right-10 w-64 h-64 opacity-[0.08] pointer-events-none text-royal-gold">
                <Compass className="w-full h-full animate-slow-rotate" strokeWidth={0.5} />
            </div>

            {/* Location Pin Watermark (Center) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none text-brown">
                <MapPin className="w-[500px] h-[500px]" strokeWidth={0.5} />
            </div>

            {/* Dotted Path Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.3]">
                <path
                    d="M 100 100 Q 300 150 500 100 T 900 150"
                    fill="none"
                    stroke="var(--royal-gold)"
                    strokeWidth="2"
                    strokeDasharray="5,10"
                    className="animate-[dash_20s_linear_infinite]"
                />
            </svg>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-royal-gold uppercase tracking-[0.3em] text-sm mb-4 block">The Venue</span>
                    <h2 className="font-script text-6xl text-charcoal mb-4">Location</h2>
                    <div className="h-px w-24 bg-royal-gold/40 mx-auto" />
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Venue Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/40 backdrop-blur-md p-10 md:p-16 rounded-[2rem] border border-royal-gold/10 shadow-xl"
                    >
                        <Navigation className="w-12 h-12 text-royal-gold mb-8" strokeWidth={1} />
                        <h3 className="font-display text-4xl text-charcoal mb-6 uppercase tracking-tight">Nakshatra 2.0</h3>
                        <p className="font-body text-xl text-brown/80 mb-8 leading-relaxed">
                            A royal setting for a royal celebration. Located in the heart of Lucknow, Nakshatra 2.0 provides an exquisite backdrop for our wedding vows.
                        </p>

                        <div className="space-y-6 mb-10">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full border border-royal-gold/20 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-royal-gold" />
                                </div>
                                <p className="font-body text-brown text-lg">
                                    Nakshatra Lawns and Banquet Hall, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                                </p>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/PppAKiy91CkbBQGe9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white rounded-full font-body text-sm tracking-widest hover:bg-brown transition-colors group"
                        >
                            GET DIRECTIONS <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Map Container */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative group h-[500px] w-full"
                    >
                        {/* Decorative Corner Brackets */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-royal-gold/40 pointer-events-none" />
                        <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-royal-gold/40 pointer-events-none" />
                        <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-royal-gold/40 pointer-events-none" />
                        <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-royal-gold/40 pointer-events-none" />

                        <div className="w-full h-full overflow-hidden rounded-2xl shadow-inner border-4 border-white relative">
                            {/* Placeholder Map - In real use, embed Google Maps iframe here */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1779.6274488!2d81.0123456!3d26.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzM1LjUiTiA4McKwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1) brightness(0.9)' }}
                                allowFullScreen={true}
                                loading="lazy"
                            ></iframe>

                            {/* Overlay Inset Shadow */}
                            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(0,0,0,0.1)]" />
                        </div>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                @keyframes dash {
                    to {
                        stroke-dashoffset: -100;
                    }
                }
            `}</style>
        </section>
    );
}
