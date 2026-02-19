"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Code2, Cpu, Globe, Layers, Zap } from "lucide-react";
import Button from "@/Components/ui/Button";

export default function TechnologySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const technologies = [
        { name: "React", icon: Globe, color: "text-blue-500" },
        { name: "Next.js", icon: Zap, color: "text-black dark:text-white" },
        { name: "TypeScript", icon: Code2, color: "text-blue-600" },
        { name: "Node.js", icon: Cpu, color: "text-green-500" },
        { name: "Tailwind", icon: Layers, color: "text-cyan-400" },
        { name: "AWS", icon: Globe, color: "text-orange-500" },
    ];

    return (
        <section ref={sectionRef} className="relative w-full py-24 px-4 md:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="space-y-16"
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black dark:text-white">
                            MODERN STACK FOR <span className="text-[#F4C906]">MODERN BRANDS.</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400">
                            We use the latest industry-leading technologies to ensure your project is fast, secure, and scalable.
                        </motion.p>
                    </div>

                    {/* Tech Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="group relative p-8 rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/5 flex flex-col items-center justify-center gap-4 transition-all hover:shadow-2xl hover:border-[#F4C906]/50"
                            >
                                <div className={`p-4 rounded-2xl bg-white dark:bg-black shadow-inner group-hover:scale-110 transition-transform ${tech.color}`}>
                                    <tech.icon size={32} strokeWidth={2.5} />
                                </div>
                                <span className="font-black text-black dark:text-white text-sm tracking-wider uppercase">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Hiring Banner */}
                    <motion.div
                        variants={itemVariants}
                        className="relative overflow-hidden rounded-[3rem] bg-black dark:bg-[#F4C906] p-12 text-center"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[120%] bg-white dark:bg-black blur-[100px] rotate-12" />
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h3 className="text-3xl md:text-4xl font-black text-white dark:text-black leading-tight">
                                WANT TO ONBOARD A <span className="text-[#F4C906] dark:text-white underline underline-offset-8">DEDICATED DEVELOPER?</span>
                            </h3>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Button className="cursor-pointer">
                                    Full-Time Placement
                                </Button>
                                <Button variant="dark" className="cursor-pointer">
                                    Part-Time Support
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
