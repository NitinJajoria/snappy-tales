"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Download } from "lucide-react";

interface EbookCardProps {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    date: string;
    pages: string;
    image: string;
    downloadUrl: string;
    index: number;
}

export default function EbookCard({
    slug,
    title,
    excerpt,
    category,
    author,
    date,
    pages,
    image,
    downloadUrl,
    index,
}: EbookCardProps) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
            <Link href={`/resources/ebooks/${slug}`} className="group block">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#F4C906]/40 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-[#F4C906]/5">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-4 py-1.5 rounded-full bg-[#F4C906] text-black text-xs font-black uppercase tracking-wider shadow-md">{category}</span>
                        </div>

                        {/* Download icon */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <Download size={16} className="text-white" />
                        </div>

                        {/* Pages badge at bottom of image */}
                        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md">
                            <BookOpen size={12} className="text-[#F4C906]" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white">{pages}</span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <h3 className="text-xl font-black leading-tight tracking-tight group-hover:text-[#F4C906] transition-colors duration-300 line-clamp-2">{title}</h3>
                        <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed line-clamp-2">{excerpt}</p>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-2 border-t border-black/5 dark:border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#F4C906]/30">
                                    <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold">{author.name}</p>
                                    <p className="text-[10px] text-black/40 dark:text-white/40 font-medium">{formattedDate}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-1.5 text-[#F4C906] font-bold text-xs">
                                <span>Free Download</span>
                                <ArrowUpRight size={14} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
}
