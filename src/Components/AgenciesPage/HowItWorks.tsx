"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserCheck, FileText, Users, Play, Rocket } from "lucide-react";

const steps = [
    {
        icon: UserCheck,
        title: "Discovery Call",
        description: "We understand your agency's niche, gaps, and growth goals.",
    },
    {
        icon: FileText,
        title: "Proposal & Strategy",
        description: "We design a custom engagement model (Dedicated or Project-based).",
    },
    {
        icon: Users,
        title: "Team Selection",
        description: "Hand-pick your specialists from our pre-vetted senior talent pool.",
    },
    {
        icon: Play,
        title: "Kickoff & Onboarding",
        description: "Seamless integration into your Slack, Jira, and workflows within 48 hours.",
    },
    {
        icon: Rocket,
        title: "Delivery & Support",
        description: "White-label delivery with your Project Manager overseeing quality.",
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-zinc-900 text-black dark:text-white"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
                {/* Left Side: Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative order-2 lg:order-1 flex justify-center"
                >
                    <div className="w-full max-w-md aspect-square bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl border border-yellow-500/20 p-8 flex flex-col items-center justify-center overflow-hidden">
                        <Image src="/images/agencies/how-it-works.png" alt="Process" width={500} height={500} />
                    </div>
                </motion.div>

                {/* Right Side: Process Steps */}
                <div className="order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-4">The Process</h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">HOW IT WORKS</h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-4"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={stepVariants}
                                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-yellow-500/20"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-[#F4C906] group-hover:bg-[#F4C906] group-hover:text-black transition-colors">
                                    <step.icon size={20} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#F4C906] transition-colors">{step.title}</h3>
                                    <p className="text-gray-700 dark:text-gray-400 text-sm group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
