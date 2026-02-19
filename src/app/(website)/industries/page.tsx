"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import { INDUSTRIES } from "@/lib/constants/industries";
import IndustryCard from "@/Components/Industries/IndustryCard";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";

const GrainOverlay = () => (
    <div className="fixed inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
);

export default function IndustriesPage() {
    const [revealComplete, setRevealComplete] = useState(false);

    return (
        <PageRevealer onRevealComplete={() => setRevealComplete(true)}>
            {revealComplete && (
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.2,
                        smoothWheel: true,
                    }}
                >
                    <main className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black font-sans">
                        <GrainOverlay />

                        {/* 1. Hero Section */}
                        <section className="relative py-20 px-6 md:px-12 overflow-hidden min-h-screen flex items-center">
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/industries/industry-img3.jpg"
                                    alt="Industries Hero"
                                    fill
                                    className="object-cover opacity-30 dark:opacity-20 translate-y-[-10%]"
                                    priority
                                />
                                {/* <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/80 to-white dark:from-black/30 dark:via-black/80 dark:to-[#0a0a0a]" /> */}
                            </div>

                            <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
                                <div className="space-y-10">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="space-y-6"
                                    >
                                        <span className="text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase block">
                                            Our Domain Expertise
                                        </span>
                                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                                            Industry X.0
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C906] to-[#F4C906]/60">Break the Silo</span>
                                        </h1>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.2 }}
                                        className="max-w-2xl mx-auto"
                                    >
                                        <p className="text-lg md:text-2xl text-black/60 dark:text-white/60 font-medium leading-relaxed">
                                            Convergence of multiple industries, cross-pollination of ideas, and digital transformation—built for the next era of innovation.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </section>

                        {/* 2. Industries Grid Section */}
                        <section className="py-20 pt-10 px-6 md:px-12 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                                {INDUSTRIES.map((industry, index) => (
                                    <IndustryCard key={industry.slug} industry={industry} index={index} />
                                ))}
                            </div>
                        </section>

                        {/* 3. Detailed Insight 1 */}
                        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative aspect-square rounded-[2rem] overflow-hidden group border border-black/5 dark:border-white/5 shadow-2xl"
                                >
                                    <Image
                                        src="/images/industries/Industry-img1.webp"
                                        alt="Industry Ecosystem"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-8"
                                >
                                    <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
                                        The Era of <br />
                                        <span className="text-[#F4C906]">Domain Convergence</span>
                                    </h2>
                                    <div className="space-y-6 text-lg text-black/60 dark:text-white/60 font-medium leading-relaxed">
                                        <p>
                                            IoT, automation, real-time data & AI create personalized consumer experiences with the help of smart, intelligent digital infrastructure.
                                        </p>
                                        <p>
                                            This and the extreme focus on friction is leading to a technological singularity where industries increasingly start to combine efforts of multiple, completely-diverse sectors.
                                        </p>
                                        <p className="border-l-4 border-[#F4C906] pl-6 py-2 italic font-bold text-black dark:text-white">
                                            Traditionally, digital transformation meant automation of legacy processes—today, it means reinventing how businesses operate entirely.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </section>

                        {/* 4. Detailed Insight 2 */}
                        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="order-2 lg:order-1 space-y-8"
                                >
                                    <h2 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tighter">
                                        Cross-industry <br />
                                        Disruption
                                    </h2>
                                    <div className="space-y-6 text-lg text-black/60 dark:text-white/60 font-medium leading-relaxed">
                                        <p>
                                            Cross-pollination of ideas is the ultimate catalyst for innovation. Industries don't evolve in silos anymore; they intersect, merge, and transform together.
                                        </p>
                                        <p>
                                            From IoT integration in healthcare to AI-driven logistics in retail, the boundaries are blurring, creating entirely new markets and value propositions.
                                        </p>
                                        <p>
                                            Collaboration between diverse sectors is no longer a niche project; it's the core framework of future-ready business models.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="order-1 lg:order-2 relative aspect-square rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5 shadow-2xl"
                                >
                                    <Image
                                        src="/images/industries/industry-img2.webp"
                                        alt="Disruption Visual"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[#F4C906]/10 to-transparent pointer-events-none" />
                                </motion.div>
                            </div>
                        </section>

                        {/* 5. Strategy Section */}
                        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <h3 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                    Today, your digital strategy involves <span className="text-[#F4C906]">multiple industries and cross-pollination of ideas</span> and offerings.
                                </h3>

                                <div className="max-w-2xl mx-auto space-y-6 text-lg text-black/50 dark:text-white/50 font-medium">
                                    <p>
                                        Multi-domain expertise is no longer optional—it serves as the core framework for companies seeking to remain competitive in the face of rapid digital evolution.
                                    </p>
                                </div>
                            </motion.div>
                        </section>

                        <div className="bg-white dark:bg-[#0a0a0a]">
                            <Testimonials />
                            <ContactForm />
                        </div>
                    </main>
                </ReactLenis>
            )}
        </PageRevealer>
    );
}
