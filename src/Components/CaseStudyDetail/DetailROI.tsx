"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import type { CaseStudy } from "@/lib/case-studies";

interface DetailROIProps {
    roi: CaseStudy["roi"];
}

export default function DetailROI({ roi }: DetailROIProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".roi-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-black dark:bg-[#050505] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2">PROOF</h4>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        ROI IN ACTION — <br />
                        <span className="text-[#F4C906]">REAL RESULT</span>
                    </h2>
                </div>

                {/* Case Study Card (Featured) */}
                <div className="roi-card relative w-full bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex flex-col lg:flex-row">
                    {/* Left Image Side */}
                    <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-zinc-800 relative">
                        {/* Placeholder for Video/Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-black/80 to-transparent z-10">
                            <div className="text-center p-6">
                                <div className="text-[#F4C906] text-6xl font-bold mb-2">{roi.primaryMetricValue}</div>
                                <div className="text-xl font-medium">{roi.subtitle}</div>
                            </div>
                        </div>
                        {/* Abstract BG */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                    </div>

                    {/* Right Content Side */}
                    <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-[#F43F5E] text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="relative z-10">
                            <span className="inline-block px-3 py-1 bg-black/20 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                                {roi.caseStudyLabel}
                            </span>

                            <h3 className="text-2xl font-bold mb-2">{roi.title}</h3>
                            <h4 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                                {roi.subtitle}
                            </h4>

                            <div className="text-5xl font-extrabold mb-2 flex items-center gap-2">
                                {roi.primaryMetric}
                            </div>

                            <p className="mt-6 text-sm opacity-90 leading-relaxed max-w-md">
                                {roi.description}
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/20">
                                <div className="text-xs font-bold uppercase tracking-widest opacity-70 mb-1">Result</div>
                                <div className="text-lg font-medium">{roi.result}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
