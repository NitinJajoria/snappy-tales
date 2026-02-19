"use client";

import React from "react";
import Button from "@/Components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";
import Image from "next/image";

export default function CRMHero() {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black transition-colors duration-300"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4C906]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 p-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-10 text-center lg:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F4C906] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F4C906]"></span>
                        </span>
                        <span className="text-xs font-black tracking-widest uppercase text-black dark:text-white">New Version 2.0 Live</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black leading-[0.9] text-black dark:text-white"
                    >
                        THE ONLY <span className="text-[#F4C906]">CRM</span> <br />
                        YOU'LL EVER NEED.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                    >
                        Scale your operations with our <span className="font-black text-black dark:text-white">PERFEX CRM.</span> Built for speed, security, and absolute growth.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-6"
                    >
                        <Button className="flex items-center gap-3 cursor-pointer">
                            GET STARTED
                        </Button>
                        <Button variant="dark" className="flex items-center gap-3 cursor-pointer">
                            WATCH DEMO
                            <PlayCircle size={24} className="text-[#F4C906]" />
                        </Button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4"
                    >
                        {['No Credit Card', '14-Day Free Trial', 'Cancel Anytime'].map((text, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-black dark:text-white">
                                <CheckCircle2 size={18} className="text-[#F4C906]" />
                                {text}
                            </div>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5 relative"
                >
                    {/* Main Visual Container */}
                    <div className="relative group">
                        <div className="relative rounded-3xl overflow-hidden bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.15)] transition-all duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                            <Image
                                src="/images/tools/crm/task-project.png"
                                alt="CRM Success"
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Stats Cards */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -left-10 bg-white/10 dark:bg-black/10 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 z-20 hidden md:block"
                        >
                            <div className="text-[10px] font-black text-[#F4C906] uppercase tracking-widest mb-1">Total Revenue</div>
                            <div className="text-2xl font-black text-black dark:text-white">$142,400</div>
                            <div className="flex items-center gap-1.5 mt-1">
                                <span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                <span className="text-[10px] text-green-500 font-bold">+24% this month</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -bottom-10 -right-10 bg-white/10 dark:bg-black/10 backdrop-blur-lg p-5 rounded-2xl shadow-2xl border border-black/5 dark:border-white/10 z-20 hidden md:block"
                        >
                            <div className="flex -space-x-2 mb-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-zinc-800 bg-zinc-200 dark:bg-zinc-700 overflow-hidden relative">
                                        <Image
                                            src={`/images/avatar/avatar${i}.png`}
                                            alt={`User ${i}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="text-[10px] font-black text-black dark:text-white uppercase tracking-widest">Team Productivity</div>
                            <div className="mt-1 h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "85%" }}
                                    transition={{ duration: 1.5, delay: 1 }}
                                    className="h-full bg-[#F4C906]"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Background Decorative Rings */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-yellow-500 dark:border-yellow-500 rounded-full animate-[spin_60s_linear_infinite]" />
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-dashed border-yellow-500 dark:border-yellow-500 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
                </motion.div>
            </div>
        </section>
    );
}
