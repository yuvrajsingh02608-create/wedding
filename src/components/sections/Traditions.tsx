"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Music, Gem, PartyPopper, Heart, Calendar, Clock, MapPin, Sparkles } from "lucide-react";

import VideoMontage from "@/components/core/VideoMontage";

const traditions = [
    {
        title: "HALDI CEREMONY",
        icon: <Sparkles className="h-6 w-6 text-gold" />,
        date: "March 05, 2026",
        time: "11:00 AM",
        venue: "Bride's Home",
        description: "Join us for a vibrant morning of turmeric, music, and laughter as we apply sacred paste to the bride and groom.",
        image: "https://images.unsplash.com/photo-1621349896792-74d6d65377f3?q=80&w=2070&auto=format&fit=crop",
        gradient: "from-yellow-500/10 to-yellow-200/5"
    },
    {
        title: "WEDDING CEREMONY",
        icon: <Gem className="h-6 w-6 text-gold" />,
        date: "March 07, 2026",
        time: "02:00 PM",
        venue: "Nakshatra 2.0",
        description: "The sacred ceremony where we exchange vows and begin our journey as husband and wife.",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c62?q=80&w=2070&auto=format&fit=crop",
        gradient: "from-rose-500/10 to-rose-200/5"
    },
    {
        title: "RECEPTION",
        icon: <PartyPopper className="h-6 w-6 text-gold" />,
        date: "March 07, 2026",
        time: "07:30 PM",
        venue: "Nakshatra 2.0",
        description: "An elegant evening of celebration, dinner, and dancing with our cherished friends and family.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop",
        gradient: "from-amber-500/10 to-amber-200/5"
    }
];

export default function Traditions() {
    const montageClips = [
        "https://assets.mixkit.co/videos/preview/mixkit-close-up-of-traditional-indian-wedding-jewelry-44445-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-traditional-indian-wedding-dance-44446-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-decorated-indian-wedding-venue-44447-large.mp4",
        "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-couple-at-an-indian-wedding-44448-large.mp4"
    ];

    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden min-h-screen flex items-center">
            {/* Video Montage Background */}
            <VideoMontage
                clips={montageClips}
                overlayColor="var(--overlay-dark)"
                overlayOpacity={0.6}
            />

            <div className="max-w-6xl mx-auto relative z-10 w-full">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-script text-6xl text-white mb-4 drop-shadow-lg"
                    >
                        Celebrating Our Heritage
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="font-display text-cream tracking-widest uppercase text-sm drop-shadow-md"
                    >
                        Honoring traditions that unite our families
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {traditions.map((event, index) => (
                        <TraditionCard key={index} event={event} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TraditionCard({ event, index }: { event: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative group overflow-hidden rounded-3xl border border-white/20 shadow-2xl backdrop-blur-xl bg-white/5`}
        >
            <div className="p-8 md:p-10 flex flex-col h-full bg-gradient-to-br from-white/10 to-transparent">
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-8">
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [1, 0.8, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shadow-md border border-white/30"
                    >
                        {event.icon}
                    </motion.div>
                    <div className="h-px flex-grow bg-white/20 mx-4" />
                    <Heart className="h-4 w-4 text-white/40" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-white tracking-wider mb-6 group-hover:text-gold transition-colors drop-shadow-md">
                    {event.title}
                </h3>

                {/* Event Info */}
                <div className="space-y-3 mb-8">
                    <div className="flex items-center text-cream/80 text-sm font-body">
                        <Calendar className="h-4 w-4 mr-3 text-gold" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-cream/80 text-sm font-body">
                        <Clock className="h-4 w-4 mr-3 text-gold" />
                        <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-white text-sm font-body font-medium">
                        <MapPin className="h-4 w-4 mr-3 text-gold" />
                        <span>{event.venue}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="font-body text-cream/70 leading-relaxed mb-8 flex-grow italic">
                    "{event.description}"
                </p>

                {/* Image Preview */}
                <div className="relative h-48 w-full overflow-hidden rounded-2xl shadow-inner border border-white/20">
                    <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[0.3] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
            </div>
        </motion.div>
    );
}
