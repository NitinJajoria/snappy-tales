"use client";
import React, { useRef } from "react";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function AgenciesContact() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    const formVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
        }
    };

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-[#F4C906] text-black overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left Text */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col justify-between"
                >
                    <div>
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter uppercase leading-[0.95]">
                            Tell Us About Your <br /> Requirements
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg font-medium opacity-80 max-w-md">
                            Ready to scale? Let's build your dedicated team today.
                        </motion.p>
                    </div>

                    <div className="space-y-6 mt-12 lg:mt-0">
                        {[
                            { icon: Mail, text: "SaulDesign@gmail.com" },
                            { icon: Phone, text: "+123 456 789" },
                            { icon: MapPin, text: "123 Street 456 House" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                variants={itemVariants}
                                className="flex items-center gap-4 group cursor-pointer"
                            >
                                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-[#F4C906] transition-colors duration-300">
                                    <item.icon size={20} />
                                </div>
                                <span className="font-bold">{item.text}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Form */}
                <motion.div 
                    variants={formVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="bg-transparent"
                >
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Your Name</label>
                                <input type="text" className="bg-transparent border-b border-black/30 py-2 placeholder-black/30 focus:outline-hidden focus:border-black transition-colors" placeholder="Name" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">E-Mail</label>
                                <input type="email" className="bg-transparent border-b border-black/30 py-2 placeholder-black/30 focus:outline-hidden focus:border-black transition-colors" placeholder="Email" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Phone Number</label>
                                <input type="tel" className="bg-transparent border-b border-black/30 py-2 placeholder-black/30 focus:outline-hidden focus:border-black transition-colors" placeholder="Phone" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase tracking-widest opacity-60">Services you are interested</label>
                                <input type="text" className="bg-transparent border-b border-black/30 py-2 placeholder-black/30 focus:outline-hidden focus:border-black transition-colors" placeholder="Service" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold uppercase tracking-widest opacity-60">Tell Us More About Your Requirement</label>
                            <textarea rows={2} className="bg-transparent border-b border-black/30 py-2 placeholder-black/30 focus:outline-hidden focus:border-black transition-colors" placeholder="Message"></textarea>
                        </div>

                        <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-black text-[#F4C906] px-12 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-zinc-900 transition-all w-full md:w-auto mt-4 group shadow-xl"
                        >
                            Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}

