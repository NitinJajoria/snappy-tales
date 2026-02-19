"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CredibilityProps {
    clients?: string[];
    title?: string;
}

const defaultClients = [
    "Ogilvy", "Dentsu", "McArthurGlen", "TBWA", "Publicis", "Havas",
    "WPP", "Omnicom", "IPG", "MDC Partners"
];

export default function Credibility({
    clients = defaultClients,
    title = "OUR CLIENTS"
}: CredibilityProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0.3, scale: 0.95 },
        visible: {
            opacity: 0.6,
            scale: 1,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section ref={sectionRef} className="py-20 bg-white dark:bg-black text-black dark:text-white border-b border-gray-200 dark:border-zinc-900 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-black dark:text-white font-bold tracking-widest text-4xl md:text-6xl uppercase mb-8">
                        {title}
                    </h4>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12 px-4"
                >
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, opacity: 1, color: "#F4C906" }}
                            className="text-2xl md:text-3xl font-serif italic font-bold tracking-tighter text-black dark:text-white cursor-default transition-colors duration-300"
                        >
                            {client}
                        </motion.div>
                    ))}
                    {/* Repeat for visual balance on desktop */}
                    {clients.slice(0, 5).map((client, i) => (
                        <motion.div
                            key={`rep-${i}`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.1, opacity: 1, color: "#F4C906" }}
                            className="hidden md:block text-2xl md:text-3xl font-serif italic font-bold tracking-tighter text-black dark:text-white cursor-default transition-colors duration-300"
                        >
                            {client}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
