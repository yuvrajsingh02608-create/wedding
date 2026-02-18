"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Instagram, MessageCircle } from "lucide-react";

const contacts = [
    {
        name: "Shubham",
        relation: "",
        phone: "+91 97219 72196",
        whatsapp: "+91 97219 72196",
    }
];

export default function Contact() {
    return (
        <section className="relative py-24 overflow-hidden" style={{ background: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f8f5f1 100%)' }}>
            {/* Phone Icon Watermarks */}
            <div className="absolute top-20 left-10 opacity-[0.04] pointer-events-none text-charcoal">
                <Phone className="w-64 h-64 rotate-12" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-[0.04] pointer-events-none text-charcoal">
                <MessageCircle className="w-48 h-48 -rotate-12" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="font-accent text-royal-gold uppercase tracking-[0.3em] text-sm mb-4 block">Get in Touch</span>
                    <h2 className="font-script text-6xl text-charcoal mb-4">Contact Info</h2>
                    <div className="h-px w-24 bg-royal-gold/40 mx-auto" />
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 justify-center max-w-2xl mx-auto">
                    {contacts.map((contact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="w-full bg-white/60 backdrop-blur-md p-10 rounded-3xl border border-royal-gold/10 shadow-lg text-center group hover:bg-white transition-all duration-500"
                        >
                            <span className="font-accent text-royal-gold tracking-widest text-sm mb-2 block uppercase">{contact.relation}</span>
                            <h3 className="font-display text-3xl text-charcoal mb-8 uppercase tracking-wide">{contact.name}</h3>

                            <div className="space-y-6">
                                <a
                                    href={`tel:${contact.phone}`}
                                    className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-f8f5f1/50 border border-royal-gold/5 hover:border-royal-gold/20 transition-all group/call"
                                >
                                    <div className="w-10 h-10 rounded-full bg-royal-gold/10 flex items-center justify-center group-hover/call:bg-royal-gold group-hover/call:text-white transition-colors">
                                        <Phone className="w-4 h-4" />
                                    </div>
                                    <span className="font-body text-charcoal">{contact.phone}</span>
                                </a>

                                <a
                                    href={`https://wa.me/${contact.whatsapp.replace(/\+/g, '').replace(/\s/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-4 p-4 rounded-2xl bg-f8f5f1/50 border border-royal-gold/5 hover:border-royal-gold/20 transition-all group/wa"
                                >
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center group-hover/wa:bg-green-500 group-hover/wa:text-white transition-colors">
                                        <MessageCircle className="w-4 h-4" />
                                    </div>
                                    <span className="font-body text-charcoal">WhatsApp Message</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* RSVP Shortcut */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <p className="font-body text-brown/60 italic mb-6">Can't wait to see you there!</p>
                    <div className="flex justify-center gap-6">
                        <SocialLink icon={<Instagram className="w-5 h-5" />} href="https://www.instagram.com/yonderai_official/" />
                        <SocialLink icon={<Mail className="w-5 h-5" />} href="mailto:Info@yonderai.ai" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <a href={href} className="w-12 h-12 rounded-full border border-royal-gold/20 flex items-center justify-center text-royal-gold hover:bg-royal-gold hover:text-white transition-all">
            {icon}
        </a>
    );
}
