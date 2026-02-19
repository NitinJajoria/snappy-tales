"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Plus, Minus, ArrowUpRight, ChevronRight, Share2, Target, Zap, ShieldCheck } from "lucide-react";
import Button from "../ui/Button";
import { Industry } from "@/lib/constants/industries";
import Credibility from "../Common/Credibility";
import ROISection from "../Common/ROISection";
import Testimonials from "../Common/Testimonials";
import ContactForm from "../Common/ContactForm";
import { BOOKING_URL } from "@/lib/constants";

// --- Visual Effects ---
const GrainOverlay = () => (
    <div className="fixed inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
);

const BackgroundGradient = () => (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F4C906]/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
    </div>
);

// --- Sub-Components ---
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-black/5 dark:border-white/5 py-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left gap-4"
            >
                <h3 className="text-lg md:text-xl font-bold">{question}</h3>
                <div className={`p-2 rounded-full transition-colors cursor-pointer ${isOpen ? 'bg-[#F4C906] text-black' : 'bg-black/5 dark:bg-white/5'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pt-4 text-gray-500 dark:text-gray-400 leading-relaxed max-w-3xl">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const IndustryDetailContent = ({ industry }: { industry: Industry }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <div className="relative min-h-screen text-black dark:text-white selection:bg-[#F4C906] selection:text-black bg-white dark:bg-[#0a0a0a]">
            <GrainOverlay />
            <BackgroundGradient />

            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#F4C906] origin-left z-[100]"
                style={{ scaleX } as any}
            />

            {/* 1. Hero Section */}
            <section className="relative min-h-[85vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={industry.heroImage}
                        alt={industry.title}
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/80 to-gray-50 dark:from-black dark:via-black/60 dark:to-[#0a0a0a]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <span className="text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase">
                            {industry.intro}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter max-w-4xl">
                            {industry.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C906] to-[#F4C906]/60">Break the Silo</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-2xl font-medium leading-relaxed">
                            {industry.tagline}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href={BOOKING_URL}>
                                <Button className="flex items-center gap-2 group">
                                    Scale Your Project
                                    <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Section A - Introductory Content */}
            <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505] border-y border-black/5 dark:border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
                                {industry.sections.a.title}
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            {industry.sections.a.description.split('\n\n').map((para, i) => (
                                <p key={i} className="text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {para}
                                </p>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Section B - Our Offerings */}
            <section className="py-24 px-6 md:px-12 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <h4 className="text-[#F4C906] font-bold text-sm uppercase tracking-[0.2em] mb-4">Our Offering</h4>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Core Solutions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {industry.sections.b.map((offering, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`group flex flex-col justify-between p-8 rounded-3xl border transition-all duration-500 ${offering.highlighted
                                    ? 'bg-[#F4C906]/5 border-[#F4C906]/30 hover:border-[#F4C906] dark:bg-[#F4C906]/10'
                                    : 'bg-white dark:bg-white/5 border-black/5 dark:border-white/5 hover:border-[#F4C906]/50'
                                    }`}
                            >
                                <div className="space-y-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${offering.highlighted ? 'bg-[#F4C906] text-black' : 'bg-[#F4C906]/10 text-[#F4C906]'
                                        }`}>
                                        <ChevronRight size={24} />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold leading-tight">
                                        {offering.text}
                                    </h3>
                                </div>
                                {offering.highlighted && (
                                    <div className="mt-8 flex items-center text-[#F4C906] font-black text-xs uppercase tracking-widest">
                                        <Zap size={14} className="mr-2 fill-[#F4C906]" />
                                        Priority Focus
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Section C - Trends/Facts (Optional) */}
            {industry.sections.c && (
                <section className="py-24 px-6 md:px-12 bg-zinc-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full -z-0" />
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col gap-16 items-center">
                            <div className="w-full">
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                                    {industry.sections.c.title}
                                </h2>
                                <div className="h-1 w-20 bg-[#F4C906]" />
                            </div>

                            <ul className="space-y-4">
                                {industry.sections.c.description.split('\n').map((trend, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F4C906]/50 transition-colors"
                                    >
                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-[#F4C906] shrink-0" />
                                        <span className="text-lg opacity-80">{trend}</span>
                                    </motion.li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </section>
            )}

            {/* 5. Section D - Strategy Statement */}
            <section className="py-20 px-6 md:px-12 bg-[#F4C906] text-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col gap-16 items-center">
                        <div className="lg:col-span-8">
                            <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-8">
                                {industry.sections.d.title}
                            </h2>
                            <div className="space-y-6">
                                {industry.sections.d.description.split('\n\n').map((para, i) => (
                                    <p key={i} className="text-xl md:text-2xl font-bold opacity-80 leading-relaxed">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex justify-end">
                            <Link href={BOOKING_URL}>
                                <Button variant="dark" className="flex items-center gap-2">
                                    Discuss Strategy
                                    <ArrowUpRight />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ Section */}
            <section className="py-24 px-6 md:px-12 bg-white dark:bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16 text-center">
                        <h4 className="text-[#F4C906] font-bold text-sm uppercase tracking-[0.2em] mb-4">Deep Dive</h4>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Industry Insights</h2>
                    </div>

                    <div className="divide-y divide-black/5 dark:divide-white/5 border-t border-black/5 dark:border-white/5">
                        {industry.faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Common Brand Sections */}
            <div className="bg-white dark:bg-[#0a0a0a]">
                <Credibility />
                <ROISection />
                <Testimonials />
                <ContactForm />
            </div>
        </div>
    );
};

export default IndustryDetailContent;
