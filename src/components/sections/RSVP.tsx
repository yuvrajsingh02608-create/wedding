"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import confetti from "canvas-confetti";
import { CheckCircle2, Heart, Send, Loader2 } from "lucide-react";
import VideoBackground from "@/components/core/VideoBackground";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().optional(),
    attendance: z.enum(["yes", "no"]),
    guests: z.string().min(1, { message: "Required" }),
    dietary: z.string().optional(),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function RSVP() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            guests: "1",
            attendance: "yes"
        }
    });

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        try {
            await addDoc(collection(db, "rsvps"), {
                ...data,
                timestamp: serverTimestamp(),
            });

            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#D4A5A5", "#D4AF37", "#E0C1B3", "#FFE8E8"]
            });

            setIsSubmitted(true);
            reset();
        } catch (error) {
            console.error("Error saving RSVP:", error);
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#D4A5A5", "#D4AF37", "#E0C1B3", "#FFE8E8"]
            });
            setIsSubmitted(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="rsvp" className="bg-black py-24 sm:py-32 px-4 relative overflow-hidden min-h-screen flex items-center">
            <VideoBackground
                src="https://assets.mixkit.co/videos/preview/mixkit-bokeh-of-lights-at-night-in-the-city-21245-large.mp4"
                overlayColor="var(--overlay-dark)"
                overlayOpacity={0.6}
                blur={4}
            />

            <div className="max-w-4xl mx-auto w-full relative z-10">

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card relative p-6 sm:p-8 md:p-12"
                    >
                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-6"
                                >
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-body text-sm font-semibold text-cream">YOUR NAME *</label>
                                            <input
                                                {...register("name")}
                                                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-gold outline-none transition-all font-body backdrop-blur-md"
                                                placeholder="Full Name"
                                            />
                                            {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-body text-sm font-semibold text-cream">EMAIL ADDRESS *</label>
                                            <input
                                                {...register("email")}
                                                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-gold outline-none transition-all font-body backdrop-blur-md"
                                                placeholder="Info@yonderai.ai"
                                            />
                                            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="font-body text-sm font-semibold text-cream">PHONE NUMBER</label>
                                            <input
                                                {...register("phone")}
                                                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-gold outline-none transition-all font-body backdrop-blur-md"
                                                placeholder="+91-XXXXX-XXXXX"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="font-body text-sm font-semibold text-cream">NUMBER OF GUESTS</label>
                                            <select
                                                {...register("guests")}
                                                className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-gold outline-none transition-all font-body backdrop-blur-md appearance-none"
                                            >
                                                <option className="bg-charcoal" value="1">1 Guest</option>
                                                <option className="bg-charcoal" value="2">2 Guests</option>
                                                <option className="bg-charcoal" value="3">3 Guests</option>
                                                <option className="bg-charcoal" value="4">4 Guests</option>
                                                <option className="bg-charcoal" value="5+">5+ Guests</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <label className="font-body text-sm font-semibold text-cream block">WILL YOU ATTEND? *</label>
                                        <div className="flex gap-8">
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    value="yes"
                                                    {...register("attendance")}
                                                    className="hidden peer"
                                                />
                                                <div className="w-6 h-6 rounded-full border-2 border-white/30 peer-checked:border-gold peer-checked:bg-gold transition-all shadow-glow-gold" />
                                                <span className="font-body text-cream/70 group-hover:text-white transition-colors">Joyfully Accept</span>
                                            </label>
                                            <label className="flex items-center gap-3 cursor-pointer group">
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    {...register("attendance")}
                                                    className="hidden peer"
                                                />
                                                <div className="w-6 h-6 rounded-full border-2 border-white/30 peer-checked:border-gold peer-checked:bg-gold transition-all shadow-glow-gold" />
                                                <span className="font-body text-cream/70 group-hover:text-white transition-colors">Regretfully Decline</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="font-body text-sm font-semibold text-cream">DIETARY RESTRICTIONS</label>
                                        <textarea
                                            {...register("dietary")}
                                            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white focus:border-gold outline-none transition-all font-body min-h-[100px] backdrop-blur-md"
                                            placeholder="Any allergies or special requirements?"
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full py-5 bg-gradient-to-r from-dusty-rose via-rose-gold to-gold text-white rounded-xl font-display text-xl tracking-[0.2em] shadow-2xl flex items-center justify-center gap-3 disabled:opacity-70 transition-all border border-white/10"
                                    >
                                        {isLoading ? (
                                            <Loader2 className="h-6 w-6 animate-spin" />
                                        ) : (
                                            <>SEND RSVP <Heart className="h-5 w-5 fill-white" /></>
                                        )}
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="w-24 h-24 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-8 border border-gold/30 shadow-glow-gold">
                                        <CheckCircle2 className="h-12 w-12" />
                                    </div>
                                    <h3 className="font-display text-4xl text-white mb-4 drop-shadow-lg">Thank You!</h3>
                                    <p className="font-body text-cream text-lg max-w-md mx-auto mb-10 leading-relaxed italic">
                                        "Your response has been received. We can't wait to celebrate this magical day with you!"
                                    </p>
                                    <motion.button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-gold font-body text-sm underline tracking-widest hover:text-white transition-colors"
                                    >
                                        Update Response
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
