"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import type { CaseStudy } from "@/lib/case-studies";

interface DetailHeroProps {
    caseStudy: CaseStudy;
}

export default function DetailHero({ caseStudy }: DetailHeroProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".hero-category", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.1,
            });

            gsap.from(".hero-title", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.3,
            });

            gsap.from(".hero-description", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.5,
            });

            gsap.from(".hero-cta", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.7,
            });

            gsap.from(".hero-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.4,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Extract key metric for display
    const keyMetric = caseStudy.results.metrics[0];

    return (
        <section
            ref={sectionRef}
            className="relative min-h-screen flex items-center py-20 px-4 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 overflow-hidden"
        >
            {/* Background decorations */}
            {/* <div className="absolute top-10 right-10 w-32 h-32 border-4 border-[#F4C906] rounded-full opacity-30"></div> */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F4C906] rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Category Tag */}
                        <div className="hero-category">
                            <span className="inline-block px-6 py-2 bg-transparent border-2 border-[#F4C906] text-[#F4C906] text-sm font-bold rounded-full uppercase tracking-wider">
                                {caseStudy.category}
                            </span>
                        </div>

                        {/* Title with Highlighted Metrics */}
                        <div className="hero-title">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                                {caseStudy.title}
                            </h1>
                            <div className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                                <span className="text-[#F4C906]">Improved {keyMetric.label}</span>{" "}
                                <span className="text-white">by</span>
                                <br />
                                <span className="text-[#F4C906]">{keyMetric.value}</span>{" "}
                                <span className="text-white">Client</span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="hero-description text-gray-400 text-base md:text-lg leading-relaxed max-w-xl">
                            Explore how we helped startups design, build, and scale
                            impactful digital products that drive measurable results.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4">
                            <button className="hero-cta px-8 py-3 bg-[#F4C906] text-black font-bold rounded-lg hover:bg-[#e0b805] transition-all duration-300 flex items-center gap-2 group">
                                View Our Work
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                            <button className="hero-cta px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                                Book a Slot
                            </button>
                        </div>
                    </div>

                    {/* Right Card */}
                    {/* <div className="hero-card flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md">

                            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-12 shadow-2xl">
                                <div className="text-center mb-8">
                                    <div className="text-6xl md:text-7xl font-black text-yellow-400 drop-shadow-lg mb-2"
                                        style={{
                                            textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        UI/UX
                                    </div>
                                    <div className="text-5xl md:text-6xl font-black text-yellow-400 drop-shadow-lg"
                                        style={{
                                            textShadow: '3px 3px 0px rgba(0,0,0,0.3), -1px -1px 0px rgba(255,255,255,0.1)'
                                        }}
                                    >
                                        Design
                                    </div>
                                </div>
                            </div>


                            <div className="mt-6 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl p-6 border border-zinc-700">
                                <h3 className="text-xl font-bold text-white mb-3">
                                    Branding & UI/UX Design
                                </h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Your brand is your story — we make it unforgettable.
                                </p>
                                <div className="flex gap-3">
                                    <span className="px-4 py-2 bg-zinc-700 text-white text-sm font-medium rounded-full border border-zinc-600">
                                        UI&UX
                                    </span>
                                    <span className="px-4 py-2 bg-zinc-700 text-white text-sm font-medium rounded-full border border-zinc-600">
                                        Figma
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <Image
                        src={caseStudy.heroImage}
                        alt={caseStudy.title}
                        width={1200}
                        height={600}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Key metrics overview */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                    {caseStudy.results.metrics.slice(0, 4).map((metric, index) => (
                        <div
                            key={index}
                            className="stat-card bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 border border-gray-200 dark:border-zinc-800"
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-[#F4C906] mb-2">
                                {metric.value}
                            </div>
                            <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                {metric.label}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                                {metric.change}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
