"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import Button from "@/Components/ui/Button";

export default function CRMTrial() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const benefits = [
        "No Credit Card Required",
        "Full Feature Access",
        "14-Day Free Trial",
        "Cancel Anytime",
    ];

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F4C906]/5 blur-[100px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="bg-black dark:bg-[#F4C906] rounded-[4rem] p-12 md:p-20 text-white dark:text-black relative overflow-hidden group shadow-2xl">
                    {/* Inner Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 dark:bg-black/5 rounded-full -mr-48 -mt-48 transition-transform duration-700 group-hover:scale-110" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-white/10 dark:bg-black/10 border border-white/20 dark:border-black/20 rounded-full px-6 py-2 mb-8"
                        >
                            <Sparkles size={16} className="text-[#F4C906] dark:text-black" />
                            <span className="font-black text-xs tracking-widest uppercase">Limited Time Offer</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1]"
                        >
                            Try our plans <br />
                            <span className="text-[#F4C906] dark:text-black/40">FOR FREE TODAY.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-2xl opacity-70 font-medium mb-12 max-w-2xl mx-auto"
                        >
                            Get your 14-day trial today and enjoy the full power of our CRM services with zero commitment.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 w-full max-w-4xl"
                        >
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 justify-center bg-white/5 dark:bg-black/5 border border-white/10 dark:border-black/10 rounded-2xl p-5 hover:bg-white/10 dark:hover:bg-black/10 transition-colors"
                                >
                                    <div className="w-6 h-6 rounded-full bg-[#F4C906] dark:bg-black flex items-center justify-center shrink-0">
                                        <Check size={14} className="text-black dark:text-[#F4C906]" strokeWidth={3} />
                                    </div>
                                    <span className="text-sm font-black tracking-tight">{benefit}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                        >
                            <Button variant="dark" className="px-12 py-6 bg-[#F4C906] dark:bg-black text-black dark:text-white text-2xl shadow-2xl flex items-center gap-3">
                                START FREE TRIAL
                                <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
                            </Button>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="text-sm opacity-40 mt-8 font-bold tracking-widest uppercase"
                        >
                            No obligations • Upgrade, downgrade, or cancel anytime
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
