"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Download } from "lucide-react";

interface FeaturedEbookProps {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: { name: string; role: string; avatar: string };
    date: string;
    pages: string;
    image: string;
}

export default function FeaturedEbook({
    slug,
    title,
    excerpt,
    category,
    author,
    date,
    pages,
    image,
}: FeaturedEbookProps) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-6 md:px-12 pb-12"
        >
            <div className="max-w-7xl mx-auto">
                <Link href={`/resources/ebooks/${slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-[2rem] bg-zinc-900 border border-white/10 shadow-2xl hover:shadow-[#F4C906]/10 transition-all duration-500">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                                <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900/50 hidden lg:block" />
                            </div>

                            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center space-y-6 relative">
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#F4C906]/10 blur-[100px] rounded-full pointer-events-none" />

                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="px-4 py-1.5 rounded-full bg-[#F4C906] text-black text-xs font-black uppercase tracking-wider">Featured</span>
                                        <span className="px-4 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider">{category}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[1.1] tracking-tight text-white group-hover:text-[#F4C906] transition-colors duration-300">{title}</h2>
                                    <p className="text-white/60 text-lg leading-relaxed max-w-lg">{excerpt}</p>

                                    <div className="flex items-center gap-6 pt-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#F4C906]/40">
                                                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-white">{author.name}</p>
                                                <p className="text-xs text-white/40">{author.role}</p>
                                            </div>
                                        </div>
                                        <div className="h-6 w-[1px] bg-white/10" />
                                        <div className="flex items-center gap-1.5 text-white/40">
                                            <BookOpen size={14} />
                                            <span className="text-xs font-bold">{pages}</span>
                                        </div>
                                        <p className="text-xs text-white/40 font-medium">{formattedDate}</p>
                                    </div>

                                    <div className="flex items-center gap-3 pt-2">
                                        <div className="flex items-center gap-2 text-[#F4C906] font-bold text-sm group-hover:gap-3 transition-all">
                                            <Download size={16} />
                                            <span>Download Free E-Book</span>
                                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </motion.section>
    );
}
