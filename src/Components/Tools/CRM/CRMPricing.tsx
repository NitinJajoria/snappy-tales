"use client";

import React, { useRef } from "react";
import Button from "@/Components/ui/Button";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const pricingPlans = [
    {
        name: "Starter",
        description: "Perfect for small teams and freelancers starting their CRM journey.",
        price: "$10",
        period: "Excluding Taxes",
        cycle: "* Renewed Cycle: Every 1 month(s)",
        features: [
            { label: "Allowed Invoices:", value: "20" },
            { label: "Allowed Customers:", value: "20" },
            { label: "Allowed Contracts:", value: "20" },
            { label: "Allowed Projects:", value: "20" },
            { label: "Allowed Estimates:", value: "20" },
            { label: "Allowed Items:", value: "20" },
        ],
        note: "* No card required",
    },
    {
        name: "Standard",
        description: "Designed for growing businesses that need more power and flexibility.",
        price: "$20",
        period: "Excluding Taxes",
        cycle: "* Renewed Cycle: Every 1 month(s)",
        features: [
            { label: "Allowed Invoices:", value: "40" },
            { label: "Allowed Customers:", value: "40" },
            { label: "Allowed Contracts:", value: "40" },
            { label: "Allowed Projects:", value: "40" },
            { label: "Allowed Estimates:", value: "40" },
            { label: "Allowed Items:", value: "40" },
        ],
        note: "* No card required",
    },
    {
        name: "Professional",
        description: "Advanced features for established companies scaling rapidly.",
        price: "$40",
        period: "Excluding Taxes",
        cycle: "* Renewed Cycle: Every 1 month(s)",
        features: [
            { label: "Allowed Invoices:", value: "50" },
            { label: "Allowed Customers:", value: "50" },
            { label: "Allowed Contracts:", value: "50" },
            { label: "Allowed Projects:", value: "50" },
            { label: "Allowed Estimates:", value: "50" },
            { label: "Allowed Items:", value: "50" },
        ],
        note: "* No card required",
        popular: true,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function CRMPricing() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] dark:opacity-[0.05] pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
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
                        Transparent Pricing
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black leading-[1.1] text-black dark:text-white mb-6">
                        Choose the <span className="text-[#F4C906]">Plan</span> that <br />scales with you.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
                        Simple, transparent pricing with no hidden fees. Upgrade or downgrade anytime.
                    </p>
                </motion.div>

                {/* Pricing Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {pricingPlans.map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className={`group relative bg-zinc-50 dark:bg-zinc-900/50 border ${plan.popular ? "border-[#F4C906] ring-1 ring-[#F4C906]/50 shadow-[0_0_40px_rgba(244,201,6,0.1)]" : "border-black/5 dark:border-white/5"} rounded-[3rem] p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden`}
                        >
                            {plan.popular && (
                                <div className="absolute top-8 right-8 bg-[#F4C906] text-black px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
                                    Recommended
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-3xl font-black text-black dark:text-white mb-4 group-hover:text-[#F4C906] transition-colors">{plan.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-10 flex items-baseline gap-2">
                                <div className="text-6xl font-black text-black dark:text-white">
                                    {plan.price}
                                </div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                    / Month
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center py-3 border-b border-black/5 dark:border-white/5 last:border-0"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Check size={18} className="text-[#F4C906]" strokeWidth={3} />
                                            <span className="text-gray-600 dark:text-gray-400 font-bold text-sm">
                                                {feature.label}
                                            </span>
                                        </div>
                                        <span className="text-black dark:text-white font-black text-sm">{feature.value}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className={`w-full py-5 text-lg flex items-center justify-center gap-3 ${plan.popular ? "shadow-xl" : "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700 hover:scale-100"}`}>
                                SELECT PLAN
                                <ArrowRight size={20} />
                            </Button>

                            {/* <p className="text-[10px] text-gray-400 text-center mt-6 font-bold uppercase tracking-widest">{plan.note}</p> */}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enterprise/Ultimate CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="p-12 rounded-[3.5rem] bg-zinc-900 text-white flex flex-col md:flex-row items-center justify-between gap-10 group"
                >
                    <div className="space-y-4 text-center md:text-left">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#F4C906] text-black text-[10px] font-black tracking-widest uppercase">Ultimate Power</div>
                        <h3 className="text-3xl md:text-5xl font-black">Need more for <span className="text-[#F4C906]">Enterprise?</span></h3>
                        <p className="text-gray-400 text-xl max-w-xl font-medium">Get custom limits, dedicated support, and white-label options for just <span className="text-white font-black">$500</span> / 6 months.</p>
                    </div>
                    <Button className="px-12 py-6 bg-[#F4C906] text-black text-xl shadow-2xl flex items-center gap-3 whitespace-nowrap">
                        TALK TO SALES
                        <ArrowRight size={24} />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
