"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Music, Music2, Volume2, VolumeX, Sparkles, Heart } from "lucide-react";

const scenes = [
    {
        type: "names",
        title: "Shubham & Varsha",
        subtitle: "request the honor of your presence as they begin their journey together",
    },
    {
        type: "details",
        label: "THE JOURNEY BEGINS",
        text: "Baraat will leave from Novotel Crossing, Gomti Nagar, Lucknow at 01:00 PM",
    },
    {
        type: "main",
        label: "THE CELEBRATION",
        date: "MARCH 07, 2026 | 02:00 PM",
        venue: "NAKSHATRA 2.0",
        address: "CP 117, Viraj Khand-4, Viraj Khand, Gomti Nagar, Lucknow",
    }
];

export default function InvitationPage() {
    const [currentScene, setCurrentScene] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentScene((prev) => (prev + 1) % scenes.length);
        }, 6000); // 6 seconds per scene for a cinematic feel
        return () => clearInterval(timer);
    }, []);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <main className="relative h-screen w-full overflow-hidden bg-[#FFFEF7] font-body flex flex-col items-center justify-center">
            {/* Background Image with subtle breathing effect */}
            <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 opacity-40 z-0"
            >
                <Image
                    src="/assets/invitation-bg.png"
                    alt="Invitation Background"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Floating Lotuses */}
            <LotusParticles />

            {/* Floating Sparkles */}
            <SparkleParticles />

            {/* Cinematic Content Reveal */}
            <div className="relative z-10 w-full max-w-lg px-8 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentScene}
                        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        {scenes[currentScene].type === "names" && (
                            <>
                                <motion.h1
                                    className="font-script text-7xl md:text-8xl text-[#9D174D] drop-shadow-sm mb-6"
                                >
                                    {scenes[currentScene].title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 }}
                                    className="font-accent text-xl text-brown italic max-w-[280px] mx-auto leading-relaxed"
                                >
                                    {scenes[currentScene].subtitle}
                                </motion.p>
                            </>
                        )}

                        {scenes[currentScene].type === "details" && (
                            <>
                                <span className="font-body text-xs tracking-[0.4em] text-gold mb-8 uppercase">
                                    {scenes[currentScene].label}
                                </span>
                                <p className="font-display text-2xl text-charcoal leading-relaxed">
                                    {scenes[currentScene].text}
                                </p>
                                <div className="mt-8 flex justify-center">
                                    <div className="h-px w-12 bg-gold/50" />
                                    <Heart className="h-4 w-4 text-dusty-rose mx-4 fill-dusty-rose" />
                                    <div className="h-px w-12 bg-gold/50" />
                                </div>
                            </>
                        )}

                        {scenes[currentScene].type === "main" && (
                            <>
                                <span className="font-body text-xs tracking-[0.4em] text-gold mb-12 uppercase">
                                    {scenes[currentScene].label}
                                </span>
                                <h2 className="font-display text-3xl md:text-4xl text-charcoal mb-6">
                                    {scenes[currentScene].date}
                                </h2>
                                <div className="space-y-2 mb-8">
                                    <h3 className="font-display text-2xl text-[#9D174D]">{scenes[currentScene].venue}</h3>
                                    <p className="font-body text-sm text-gray max-w-[250px] mx-auto">
                                        <MapPin className="h-3 w-3 inline-block mr-1 text-gold" />
                                        {scenes[currentScene].address}
                                    </p>
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-gradient-to-r from-dusty-rose to-rose-gold text-white rounded-full text-xs tracking-widest font-body shadow-lg"
                                >
                                    ADD TO CALENDAR
                                </motion.button>
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Cinematic Effects */}
            <LightRays />
            <BokehEffect />

            {/* Music Toggle */}
            <motion.button
                onClick={toggleMusic}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-10 right-10 z-50 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-gold/20"
            >
                {isPlaying ? <Volume2 className="h-5 w-5 text-gold" /> : <VolumeX className="h-5 w-5 text-gray" />}
            </motion.button>

            {/* Audio Element (Using a placeholder Indian instrumental vibe) */}
            <audio
                ref={audioRef}
                loop
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" // Placeholder logic: User can replace with Sitar melody
            />

            {/* Scene Navigation dots */}
            <div className="absolute bottom-12 flex gap-3 z-20">
                {scenes.map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: currentScene === i ? 1.2 : 1,
                            opacity: currentScene === i ? 1 : 0.4
                        }}
                        onClick={() => setCurrentScene(i)}
                        className={`w-2 h-2 rounded-full cursor-pointer bg-gold`}
                    />
                ))}
            </div>
        </main>
    );
}

function LotusParticles() {
    const [lotuses, setLotuses] = useState<any[]>([]);

    useEffect(() => {
        const news = Array.from({ length: 8 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            targetX: Math.random() * 10 - 5,
            delay: Math.random() * 15,
            duration: 15 + Math.random() * 10,
            size: 40 + Math.random() * 60,
        }));
        setLotuses(news);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {lotuses.map((l) => (
                <motion.div
                    key={l.id}
                    initial={{ y: "110%", x: `${l.x}%`, opacity: 0, rotate: 0 }}
                    animate={{
                        y: "-10%",
                        opacity: [0, 0.6, 0.6, 0],
                        rotate: [0, 10, -10, 0],
                        x: [`${l.x}%`, `${l.x + l.targetX}%`]
                    }}
                    transition={{
                        duration: l.duration,
                        repeat: Infinity,
                        delay: l.delay,
                        ease: "linear"
                    }}
                    className="absolute z-1"
                    style={{ width: l.size, height: l.size }}
                >
                    <Image src="/assets/lotus.png" alt="Lotus" fill className="object-contain" />
                </motion.div>
            ))}
        </div>
    );
}

function SparkleParticles() {
    const [sparkles, setSparkles] = useState<any[]>([]);

    useEffect(() => {
        const news = Array.from({ length: 20 }).map((_, i) => ({
            x: Math.random() * 100 + "vw",
            y: Math.random() * 100 + "vh",
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 5
        }));
        setSparkles(news);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-10">
            {sparkles.map((s, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: s.x,
                        y: s.y,
                        opacity: 0,
                        scale: 0
                    }}
                    animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: s.duration,
                        repeat: Infinity,
                        delay: s.delay
                    }}
                    className="absolute w-1 h-1 bg-gold rounded-full blur-[1px]"
                />
            ))}
        </div>
    );
}

function BokehEffect() {
    const [bokehs, setBokehs] = useState<any[]>([]);

    useEffect(() => {
        const news = Array.from({ length: 15 }).map((_, i) => ({
            startX: Math.random() * 100 + "vw",
            startY: Math.random() * 100 + "vh",
            scale: 0.5 + Math.random() * 1.5,
            endX1: Math.random() * 100 + "vw",
            endX2: Math.random() * 100 + "vw",
            duration: 10 + Math.random() * 10,
        }));
        setBokehs(news);
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden">
            {bokehs.map((b, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: b.startX,
                        y: b.startY,
                        opacity: 0,
                        scale: b.scale
                    }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        scale: [0.5, 2, 0.5],
                        x: [b.endX1, b.endX2]
                    }}
                    transition={{
                        duration: b.duration,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-32 h-32 bg-white/20 rounded-full blur-3xl"
                />
            ))}
        </div>
    );
}

function LightRays() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-2">
            <motion.div
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    rotate: [-20, -15, -20]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-[50%] -left-[20%] w-[150%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_0%,transparent_0deg,rgba(212,175,55,0.1)_10deg,transparent_20deg,rgba(212,175,55,0.05)_30deg,transparent_40deg)]"
                style={{ transformOrigin: "top left" }}
            />
        </div>
    );
}

