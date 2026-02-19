"use client";

import React, { useRef } from "react";
import {
    Ship,
    Sparkles,
    Music,
    Building,
    Users,
    Car,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Button from "@/Components/ui/Button";

const businessSegments = [
    {
        icon: Ship,
        title: "Tours & Cruises",
        description:
            "Discover islands, Gyms Fitness classes, Yoga classes, Golf, Zumba dance & more.",
        color: "from-blue-500/20 to-cyan-500/20",
        image: "/images/tools/crm/tours-cruise.png",
    },
    {
        icon: Sparkles,
        title: "Beauty and Wellness",
        description:
            "Evolve spas, salons, Spa's Beauty Salon, Hair studio, wellness.",
        color: "from-pink-500/20 to-rose-500/20",
        image: "/images/tools/crm/beauty-wellness.png",
    },
    {
        icon: Music,
        title: "Events & entertainment",
        description:
            "Art classes, Live music Performance, Employee Rental & more.",
        color: "from-purple-500/20 to-indigo-500/20",
        image: "/images/tools/crm/events.png",
    },
    {
        icon: Building,
        title: "Officials & Financial",
        description:
            "Education and counselor, City Council, CPA centers Financial services & Housing.",
        color: "from-emerald-500/20 to-teal-500/20",
        image: "/images/tools/crm/officials-financial.png",
    },
    {
        icon: Users,
        title: "Personal meetings",
        description:
            "Counseling, Coaching, Business, Events, Social services & more.",
        color: "from-orange-500/20 to-amber-500/20",
        image: "/images/tools/crm/meetings.png",
    },
    {
        icon: Car,
        title: "Driving Lessons",
        description: "Driving schools, Driving Instructors.",
        color: "from-slate-500/20 to-zinc-500/20",
        image: "/images/tools/crm/driving.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function CRMBusinessSegments() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-block px-4 py-1.5 rounded-full bg-[#F4C906]/10 border border-[#F4C906]/20 text-[#F4C906] text-xs font-black tracking-[0.2em] uppercase mb-6"
                    >
                        Industry Solutions
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black dark:text-white max-w-4xl mx-auto mb-6">
                        Serving every <span className="text-[#F4C906]">Business Segment</span> with precision.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Our flexible SaaS module adapts to your unique workflow, no matter your industry.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {businessSegments.map((segment, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group relative bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-8 transition-all duration-500 hover:shadow-2xl hover:border-[#F4C906]/30 overflow-hidden"
                        >
                            {/* Decorative Background Image */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none grayscale">
                                <Image
                                    src="/engagement/trophy-chess.png"
                                    alt="Decorative"
                                    width={128}
                                    height={128}
                                    className="object-contain rotate-12"
                                />
                            </div>

                            {/* Card Header */}
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${segment.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                    <segment.icon size={32} className="text-black dark:text-white" strokeWidth={2} />
                                </div>
                                <div className="text-4xl font-black text-black/5 dark:text-white/5 group-hover:text-[#F4C906]/10 transition-colors">
                                    0{index + 1}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 space-y-4">
                                <h3 className="text-2xl font-black text-black dark:text-white group-hover:text-[#F4C906] transition-colors">
                                    {segment.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                                    {segment.description}
                                </p>
                            </div>

                            {/* Segment Image - Always Visible */}
                            <div className="mt-6 rounded-2xl overflow-hidden h-40 relative transition-all duration-500">
                                <Image
                                    src={segment.image}
                                    alt={segment.title}
                                    fill
                                    className="object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-zinc-900 via-transparent to-transparent" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 p-12 rounded-[3rem] bg-black dark:bg-[#F4C906] text-white dark:text-black flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
                >
                    <div className="space-y-2">
                        <h3 className="text-3xl font-black">Ready to scale your business?</h3>
                        <p className="text-white/60 dark:text-black/60 text-lg">Join 2,000+ businesses using Snappy Tales CRM.</p>
                    </div>
                    <Button variant="dark" className="px-10 py-5 bg-[#F4C906] dark:bg-black text-black dark:text-white text-xl shadow-2xl">
                        START FREE TRIAL
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
