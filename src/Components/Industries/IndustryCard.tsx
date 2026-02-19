"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Industry } from "@/lib/constants/industries";

interface IndustryCardProps {
    industry: Industry;
    index: number;
}

const IndustryCard = ({ industry, index }: IndustryCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 border border-white/5"
        >
            <Link href={`/industries/${industry.slug}`} className="block w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                    <Image
                        src={industry.heroImage}
                        alt={industry.title}
                        fill
                        className="object-cover opacity-60 transition-opacity duration-500 group-hover:opacity-40"
                    />
                    {/* Gradients */}
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <div className="space-y-2">
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-[0.9]">
                            {industry.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/60 font-medium leading-snug max-w-[240px]">
                            {industry.tagline}
                        </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#F4C906] transition-all duration-300 group-hover:bg-[#F4C906] group-hover:text-black group-hover:scale-110">
                            <ArrowUpRight size={24} />
                        </div>

                        {/* Tag/Badge (Optional) */}
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F4C906] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            VIEW INDUSTRY
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default IndustryCard;
