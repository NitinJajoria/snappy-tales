"use client";

import React from "react";
import { FileText, DollarSign, Headphones, ArrowRight, CheckCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Button from "@/Components/ui/Button";

const features = [
    {
        icon: FileText,
        title: "Smart Estimates",
        description:
            "Create high-converting estimates that turn prospects into loyal customers instantly.",
        bullets: ["Custom Branding", "One-Click Approval", "Auto-Followup"]
    },
    {
        icon: DollarSign,
        title: "Automated Invoices",
        description:
            "Streamline your cash flow with recurring billing, subscriptions, and automated payment reminders.",
        bullets: ["Multi-Currency", "Late Fee Auto-Calc", "Tax Compliance"]
    },
    {
        icon: Headphones,
        title: "Omnichannel Support",
        description:
            "Deliver world-class support with an integrated ticketing system and internal collaboration tools.",
        bullets: ["SLA Management", "Knowledge Base", "Staff Departments"]
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function CRMFeatures() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                <div className="w-full h-full bg-[grid-white_1px] dark:bg-[grid-white_1px] [mask-image:radial-gradient(white,transparent)]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            className="inline-block px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-black tracking-[0.2em] uppercase mb-6"
                        >
                            Powerful Features
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-black leading-[0.9] text-black dark:text-white">
                            BUILT FOR <span className="text-[#F4C906]">SPEED.</span><br />
                            READY FOR <span className="text-[#F4C906]">SCALE.</span>
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl"
                    >
                        Everything you need to manage your business operations in one unified dashboard. No more jumping between tools.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 p-10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:border-[#F4C906]/30 flex flex-col h-full"
                        >
                            {/* Icon & Index */}
                            <div className="flex justify-between items-center mb-10">
                                <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center group-hover:bg-[#F4C906] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                                    <feature.icon size={40} className="text-black dark:text-white group-hover:text-black transition-colors" strokeWidth={2.5} />
                                </div>
                                <span className="text-5xl font-black text-black/5 dark:text-white/5">0{index + 1}</span>
                            </div>

                            {/* Content */}
                            <div className="flex-grow space-y-6">
                                <h3 className="text-2xl font-black text-black dark:text-white group-hover:text-[#F4C906] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-md text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>

                                <ul className="space-y-3 pt-4">
                                    {feature.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-black/60 dark:text-white/60">
                                            <CheckCircle size={16} className="text-[#F4C906]" />
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Promotional Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-20 relative rounded-[4rem] bg-black dark:bg-[#F4C906] p-12 overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 grayscale group-hover:scale-110 transition-transform duration-1000">
                        <Image src="/engagement/trophy-chess.png" alt="Chess" fill className="object-cover" />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-center lg:text-left space-y-4">
                            <h3 className="text-3xl md:text-5xl font-black text-white dark:text-black">
                                DOMINATE YOUR <span className="text-[#F4C906] dark:text-white">MARKET.</span>
                            </h3>
                            <p className="text-white/60 dark:text-black/60 text-xl max-w-xl">
                                Join the elite 2% of businesses that use data-driven CRM strategies to outpace their competition.
                            </p>
                        </div>
                        <Button variant="dark" className="px-12 py-6 bg-white dark:bg-black text-black dark:text-white text-xl shadow-2xl whitespace-nowrap">
                            START WINNING
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
