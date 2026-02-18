"use client";

import { motion } from "framer-motion";
import Venue360 from "@/components/core/Venue360";
import { Gem, Music, MapPin, Sparkles } from "lucide-react";

export default function Details() {
    return (
        <section id="details" className="relative min-h-screen bg-black overflow-hidden flex flex-col lg:flex-row">
            {/* 360 Tour Side */}
            <div className="relative w-full h-[50vh] lg:h-screen lg:w-1/2 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                <Venue360 />
            </div>

            {/* Event Info Side */}
            <div className="relative w-full h-auto lg:h-screen lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 overflow-y-auto bg-gradient-to-br from-[#1A1A1A] to-black">
                <div className="max-w-xl w-full space-y-12 py-12 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <h2 className="font-script text-6xl text-white mb-6 drop-shadow-lg">Where & When</h2>
                        <p className="font-body text-cream/70 leading-relaxed italic text-lg">
                            "A beautiful location for a beautiful beginning. We can't wait to share our special day with you in this magical setting."
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        <EventDetail
                            title="Haldi Ceremony"
                            date="March 05, 2026"
                            time="11:00 AM onwards"
                            venue="Bride's Home"
                            address="New Delhi"
                            icon={<Sparkles className="h-6 w-6 text-gold" />}
                        />
                        <EventDetail
                            title="Wedding Ceremony"
                            date="March 07, 2026"
                            time="02:00 PM onwards"
                            venue="Nakshatra 2.0"
                            address="Pocket 10, Sector 12, Dwarka, New Delhi"
                            icon={<Gem className="h-6 w-6 text-gold" />}
                        />
                        <EventDetail
                            title="Reception"
                            date="March 07, 2026"
                            time="07:30 PM onwards"
                            venue="Nakshatra 2.0"
                            address="Pocket 10, Sector 12, Dwarka, New Delhi"
                            icon={<Sparkles className="h-6 w-6 text-gold" />}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="pt-8"
                    >
                        <a
                            href="https://maps.app.goo.gl/PppAKiy91CkbBQGe9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-body tracking-wider hover:bg-white/20 transition-all group"
                        >
                            <MapPin className="h-5 w-5 text-gold group-hover:scale-110 transition-transform" />
                            GET DIRECTIONS
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function EventDetail({ title, date, time, venue, address, icon }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
        >
            <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                    {icon}
                </div>
                <div className="space-y-3">
                    <h3 className="font-display text-xl text-white tracking-widest uppercase">{title}</h3>
                    <div className="space-y-1">
                        <p className="font-body text-cream text-lg">{date}</p>
                        <p className="font-body text-gold/80">{time}</p>
                    </div>
                    <div className="pt-2">
                        <p className="font-body text-white font-medium">{venue}</p>
                        <p className="font-body text-cream/50 text-sm">{address}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
