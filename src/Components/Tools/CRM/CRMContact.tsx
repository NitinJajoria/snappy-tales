"use client";

import React, { useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Button from "@/Components/ui/Button";

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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function CRMContact() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto relative z-10"
            >
                <div className="bg-[#F4C906] rounded-[4rem] p-12 md:p-20 text-black shadow-2xl relative overflow-hidden group">
                    {/* Inner Decorative Elements */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -mr-48 -mt-48 transition-transform duration-700 group-hover:scale-110" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        {/* Left Text */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col justify-between"
                        >
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    className="inline-block px-4 py-1.5 rounded-full bg-black/10 border border-black/20 text-black text-xs font-black tracking-[0.2em] uppercase mb-8"
                                >
                                    Get In Touch
                                </motion.div>
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1]">
                                    Tell Us About Your <br /> <span className="opacity-40">Requirements.</span>
                                </h2>
                                <p className="text-xl font-bold opacity-70 max-w-md leading-relaxed">
                                    Ready to streamline your customer relationships? Let's get you
                                    started with the perfect CRM solution tailored for your business.
                                </p>
                            </div>

                            <div className="space-y-8 mt-16">
                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-[#F4C906] group-hover/item:scale-110 transition-transform">
                                        <Mail size={24} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-40">Email Us</span>
                                        <span className="text-xl font-black">hello@snappytales.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center text-[#F4C906] group-hover/item:scale-110 transition-transform">
                                        <Phone size={24} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-xs font-black uppercase tracking-widest opacity-40">Call Us</span>
                                        <span className="text-xl font-black">+1 (555) 123-4567</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Form */}
                        <motion.div variants={itemVariants} className="bg-white/20 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-black/5 shadow-inner">
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-transparent border-b-2 border-black/10 py-3 placeholder-black/30 focus:outline-none focus:border-black transition-colors text-lg font-bold"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40">
                                            E-Mail Address
                                        </label>
                                        <input
                                            type="email"
                                            className="bg-transparent border-b-2 border-black/10 py-3 placeholder-black/30 focus:outline-none focus:border-black transition-colors text-lg font-bold"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            className="bg-transparent border-b-2 border-black/10 py-3 placeholder-black/30 focus:outline-none focus:border-black transition-colors text-lg font-bold"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            className="bg-transparent border-b-2 border-black/10 py-3 placeholder-black/30 focus:outline-none focus:border-black transition-colors text-lg font-bold"
                                            placeholder="Your Business Inc."
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-black uppercase tracking-[0.2em] opacity-40">
                                        Your Requirements
                                    </label>
                                    <textarea
                                        rows={2}
                                        className="bg-transparent border-b-2 border-black/10 py-3 placeholder-black/30 focus:outline-none focus:border-black transition-colors text-lg font-bold resize-none"
                                        placeholder="Tell us what you're looking for..."
                                    ></textarea>
                                </div>

                                <Button className="bg-black text-[#F4C906] px-12 py-6 text-xl flex items-center justify-center gap-3 w-full md:w-auto shadow-2xl">
                                    SEND MESSAGE
                                    <Mail size={24} />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
