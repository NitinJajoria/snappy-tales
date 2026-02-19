"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        text: "This CRM transformed how we manage customer relationships. The interface is intuitive and the features are exactly what we needed.",
        author: "Rajesh Kumar",
        role: "CEO, TechStart",
        image: "/images/avatar/avatar1.png",
    },
    {
        text: "We've tried many CRM solutions, but this one stands out. The pricing is fair and the support team is incredibly responsive.",
        author: "Priya Sharma",
        role: "Operations Manager, GrowthCo",
        image: "/images/avatar/avatar2.png",
    },
    {
        text: "Implementing this CRM was seamless. Our team was up and running in days, and we've seen immediate improvements in productivity.",
        author: "Arjun Patel",
        role: "CTO, InnovateLabs",
        image: "/images/avatar/avatar3.png",
    },
    {
        text: "The automation features saved us countless hours. Our sales team can now focus on what matters most - building relationships.",
        author: "Anjali Verma",
        role: "Sales Director, ScaleUp Solutions",
        image: "/images/avatar/avatar4.png",
    },
    {
        text: "Outstanding platform with excellent ROI. The analytics dashboard gives us insights we never had before. Highly recommended!",
        author: "Vikram Singh",
        role: "Founder, Digital Ventures",
        image: "/images/avatar/avatar5.png",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function CRMTestimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
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
                        Success Stories
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-black dark:text-white max-w-4xl mx-auto mb-6">
                        Trusted by <span className="text-[#F4C906]">Industry Leaders</span> worldwide.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from businesses that scaled with Snappy Tales.
                    </p>
                </motion.div>

                {/* First Row - 3 Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
                >
                    {testimonials.slice(0, 3).map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 p-10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:border-[#F4C906]/30 flex flex-col h-full"
                        >
                            <div className="mb-8">
                                <div className="w-12 h-12 bg-[#F4C906]/10 rounded-xl flex items-center justify-center text-[#F4C906] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Quote size={24} fill="currentColor" className="opacity-50" />
                                </div>
                                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
                                    "{item.text}"
                                </p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-[#F4C906]/20 ring-2 ring-[#F4C906]/30">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="font-black text-black dark:text-white text-lg leading-tight">
                                        {item.author}
                                    </div>
                                    <div className="text-sm font-bold text-[#F4C906] uppercase tracking-wider">
                                        {item.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Second Row - 2 Cards Centered */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {testimonials.slice(3).map((item, index) => (
                        <motion.div
                            key={index + 3}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="group bg-zinc-50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 p-10 rounded-[3rem] transition-all duration-500 hover:shadow-2xl hover:border-[#F4C906]/30 flex flex-col h-full"
                        >
                            <div className="mb-8">
                                <div className="w-12 h-12 bg-[#F4C906]/10 rounded-xl flex items-center justify-center text-[#F4C906] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    <Quote size={24} fill="currentColor" className="opacity-50" />
                                </div>
                                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
                                    "{item.text}"
                                </p>
                            </div>

                            <div className="mt-auto pt-8 border-t border-black/5 dark:border-white/5 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-[#F4C906]/20 ring-2 ring-[#F4C906]/30">
                                    <Image
                                        src={item.image}
                                        alt={item.author}
                                        width={56}
                                        height={56}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <div>
                                    <div className="font-black text-black dark:text-white text-lg leading-tight">
                                        {item.author}
                                    </div>
                                    <div className="text-sm font-bold text-[#F4C906] uppercase tracking-wider">
                                        {item.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
