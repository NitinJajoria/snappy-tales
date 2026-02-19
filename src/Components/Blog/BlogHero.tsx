"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { blogCategories } from "@/lib/constants/data";

interface BlogHeroProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function BlogHero({ activeCategory, onCategoryChange }: BlogHeroProps) {
    return (
        <section className="relative py-20 px-6 md:px-12 overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#F4C906]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-6"
                >
                    <span className="text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase">
                        Resources
                    </span>

                    <h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
                        Success Blog
                    </h1>

                    <p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl font-medium leading-relaxed">
                        Deep dives into digital growth, engineering excellence, and design
                        thinking from the experts at Snappy Tales.
                    </p>
                </motion.div>

                {/* Category Filter Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-wrap gap-3 mt-12"
                >
                    {blogCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeCategory === category
                                ? "bg-[#F4C906] text-black border-[#F4C906] shadow-lg shadow-[#F4C906]/20"
                                : "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 border-black/5 dark:border-white/10 hover:border-[#F4C906]/50 hover:text-black dark:hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
