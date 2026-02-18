"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What should I wear?",
        answer: "We would love to see our family and friends get dressed up with us! We are requesting formal attire (e.g., floor-length dresses, suits). Our wedding colors are Blush and Gold, feel free to coordinate!",
    },
    {
        question: "Is there parking available?",
        answer: "Yes! There is ample parking available at the venue. Valet parking will be provided for your convenience.",
    },
    {
        question: "Can I bring a plus one?",
        answer: "Due to venue capacity, we can only accommodate those listed on your invitation. We appreciate your understanding.",
    },
    {
        question: "Are children invited?",
        answer: "While we love your little ones, our wedding will be an adults-only event so that everyone can relax and enjoy the evening. We hope you understand!",
    },
    {
        question: "I have dietary restrictions, what should I do?",
        answer: "Please let us know about any allergies or dietary requirements in the RSVP form. Our catering team will do their best to accommodate you.",
    },
];

export default function FAQ() {
    return (
        <section className="bg-ivory py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <HelpCircle className="h-10 w-10 text-gold mx-auto mb-4" />
                    <h2 className="font-display text-4xl text-charcoal mb-4">Frequently Asked Questions</h2>
                    <div className="h-0.5 w-16 bg-dusty-rose mx-auto" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white/50 backdrop-blur-sm px-6 rounded-2xl border border-pearl-pink shadow-sm overflow-hidden"
                            >
                                <AccordionTrigger className="font-body text-charcoal hover:text-dusty-rose transition-colors text-left py-6">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="font-body text-gray leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </motion.div>
            </div>
        </section>
    );
}
