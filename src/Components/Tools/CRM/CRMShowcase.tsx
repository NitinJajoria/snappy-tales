"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Layout, BarChart3, Video, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const showcaseItems = [
    {
        category: "TASKS MANAGEMENT",
        title: "Tasks and Projects, made easy.",
        description:
            "Manage tasks and projects along with your whole team. Streamline your workflow with intuitive Kanban boards and real-time collaboration tools.",
        icon: Layout,
        bullets: ["Visual Kanban Boards", "Priority Management", "Real-time Sync"],
        align: "left" as const,
    },
    {
        category: "WORKFLOW MANAGEMENT",
        title: "Timesheets and collaboration tools.",
        description:
            "Track time effortlessly and gain deep insights into your team's productivity. Automate repetitive tasks and focus on what really matters.",
        icon: BarChart3,
        bullets: ["Automated Timesheets", "Resource Planning", "Activity Logs"],
        align: "right" as const,
    },
    {
        category: "EXTENSIBLE FEATURES",
        title: "Modules-ready support.",
        description:
            "Awesome third-party modules support for every customer. Scale your CRM functionality as your business grows with our modular architecture.",
        icon: Video,
        bullets: ["Custom Module Support", "API Integration", "Plugin Marketplace"],
        align: "left" as const,
    },
];

function ShowcaseItem({ item, index }: { item: typeof showcaseItems[0], index: number }) {
    const itemRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(itemRef, { once: true, amount: 0.3 });

    return (
        <div
            ref={itemRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${item.align === "left" ? "" : "lg:grid-flow-dense"
                }`}
        >
            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`space-y-8 ${item.align === "right" ? "lg:col-start-2" : ""}`}
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F4C906]/10 flex items-center justify-center text-[#F4C906]">
                        <item.icon size={24} strokeWidth={2.5} />
                    </div>
                    <p className="text-[#F4C906] text-xs font-black tracking-[0.2em] uppercase">
                        {item.category}
                    </p>
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white leading-[1.1]">
                    {item.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-medium">
                    {item.description}
                </p>

                <ul className="space-y-4 pt-4">
                    {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-black/60 dark:text-white/60">
                            <CheckCircle2 size={18} className="text-[#F4C906]" />
                            {bullet}
                        </li>
                    ))}
                </ul>

                {/* <button className="flex items-center gap-3 font-black text-sm tracking-widest uppercase text-black dark:text-white hover:text-[#F4C906] transition-colors group">
                    Explore Feature
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </button> */}
            </motion.div>

            {/* Mockup */}
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.9,
                    x: item.align === "left" ? 50 : -50
                }}
                animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className={`relative group ${item.align === "right" ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
            >
                <div className="relative rounded-[2rem] overflow-hidden bg-zinc-100/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.1)] transition-all duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_0_100px_rgba(244,201,6,0.1)]">
                    {index === 0 && (
                        // Image Mockup
                        <div className="aspect-[16/10] relative">
                            <Image
                                src="/images/tools/crm/task-project.png"
                                alt="Tasks Management"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    )}

                    {index === 1 && (
                        // Image Mockup
                        <div className="aspect-[16/10] relative">
                            <Image
                                src="/images/tools/crm/timesheet.png"
                                alt="Workflow management"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    )}

                    {index === 2 && (
                        // Image Mockup
                        <div className="aspect-[16/10] relative">
                            <Image
                                src="/images/tools/crm/modules.png"
                                alt="CRM Features"
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                    )}
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#F4C906]/10 blur-[60px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 blur-[60px] rounded-full pointer-events-none" />
            </motion.div>
        </div>
    );
}

export default function CRMShowcase() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background Glows */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-32"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        className="inline-block px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-xs font-black tracking-[0.2em] uppercase mb-6"
                    >
                        Feature Showcase
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black leading-[0.9] text-black dark:text-white mb-6">
                        ONE TOOL. <span className="text-[#F4C906]">INFINITE</span> <br />POSSIBILITIES.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-xl max-w-2xl mx-auto">
                        Powerful features designed to simplify your complex business processes.
                    </p>
                </motion.div>

                {/* Showcase Items */}
                <div className="space-y-48">
                    {showcaseItems.map((item, index) => (
                        <ShowcaseItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
