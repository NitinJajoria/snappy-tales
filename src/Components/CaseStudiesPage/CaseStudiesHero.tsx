"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CaseStudiesHero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade in animation for hero content
            gsap.from(".hero-content", {
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.3,
            });

            gsap.from(".hero-subtitle", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.5,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[60vh] flex items-center justify-center px-4 py-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 dark:opacity-20">
                <div className="absolute top-20 right-20 w-96 h-96 bg-[#F4C906]/20 rounded-full blur-3xl animate-orb-slow"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#F4C906]/10 rounded-full blur-3xl animate-orb-fast"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center">
                <div className="hero-content">
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-4">
                        Our Work
                    </h4>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black dark:text-white leading-tight mb-6">
                        Case Studies
                    </h1>
                </div>
                <p className="hero-subtitle text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    Explore how we've helped startups and businesses achieve
                    remarkable growth through strategic digital solutions,
                    data-driven marketing, and exceptional design.
                </p>
            </div>
        </section>
    );
}
