"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from "lucide-react";

const photos = [
    "/assets/gallery/gallery-2.jpeg",
    "/assets/gallery/gallery-3.jpeg",
    "/assets/gallery/gallery-4.jpeg",
    "/assets/gallery/gallery-6.jpeg",
    "/assets/gallery/gallery-7.jpeg",
    "/assets/gallery/gallery-8.jpeg",
    "/assets/gallery/gallery-9.jpeg",
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [decorations, setDecorations] = useState<any[]>([]);

    useEffect(() => {
        const newDecorations = Array.from({ length: 20 }).map((_, i) => ({
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            rotate: `${Math.random() * 360}deg`,
            icon: ['♥', '❀', '✿', '✦', '★'][Math.floor(Math.random() * 5)]
        }));
        setDecorations(newDecorations);
    }, []);

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + photos.length) % photos.length);
        }
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % photos.length);
        }
    };

    return (
        <section className="bg-[#f5f0eb] py-24 sm:py-32 px-4 overflow-hidden relative">
            {/* Scattered Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
                {decorations.map((dec, i) => (
                    <div
                        key={i}
                        className="absolute text-royal-gold"
                        style={{
                            top: dec.top,
                            left: dec.left,
                            fontSize: dec.fontSize,
                            transform: `rotate(${dec.rotate})`
                        }}
                    >
                        {dec.icon}
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-royal-gold uppercase tracking-[0.3em] text-sm mb-4 block">Our Moments</span>
                    <h2 className="font-script text-6xl text-charcoal mb-4">Captured Memories</h2>
                    <p className="font-accent text-xl text-brown italic">Every picture tells a beautiful story</p>
                </motion.div>

                {/* Scrapbook Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-12 pb-12">
                    {photos.map((src, index) => (
                        <ScrapbookPhoto
                            key={index}
                            src={src}
                            index={index}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-xl px-4"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors z-50"
                        >
                            <X className="h-10 w-10" />
                        </button>

                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
                        >
                            <ChevronLeft className="h-12 w-12" />
                        </button>

                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 z-50"
                        >
                            <ChevronRight className="h-12 w-12" />
                        </button>

                        <motion.div
                            key={selectedImage}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl max-h-[85vh] w-full h-full"
                        >
                            <Image
                                src={photos[selectedImage]}
                                alt="Selected Image"
                                fill
                                className="object-contain"
                            />
                        </motion.div>

                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 font-display text-lg">
                            {selectedImage + 1} / {photos.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function ScrapbookPhoto({ src, index, onClick }: { src: string; index: number; onClick: () => void }) {
    const rotation = (index % 3 - 1) * 3; // -3, 0, 3 degrees

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (index % 4) * 0.1, duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            className="relative cursor-pointer"
            style={{ rotate: rotation }}
            onClick={onClick}
        >
            {/* Polaroid Frame */}
            <div className="bg-white p-4 pb-12 shadow-[5px_10px_30px_rgba(0,0,0,0.1)] border border-gray/5 relative group">
                <div className="relative aspect-[4/5] overflow-hidden mb-4 rounded-sm">
                    <Image
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Washi Tape Effect (Top) */}
                {index % 4 === 0 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-royal-gold/20 backdrop-blur-sm -rotate-2 mix-blend-multiply" />
                )}

                {/* Bottom Text/Icon */}
                <div className="flex justify-center items-center gap-2">
                    <Heart className="w-4 h-4 text-dusty-rose/40" />
                    <span className="font-accent text-xs text-brown/40 tracking-widest uppercase">Love</span>
                </div>
            </div>

            {/* Corner Ornaments */}
            <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4 text-royal-gold m-2" />
            </div>
        </motion.div>
    );
}
