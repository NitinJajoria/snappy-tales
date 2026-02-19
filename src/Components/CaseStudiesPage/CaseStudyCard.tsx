"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import type { CaseStudy } from "@/lib/case-studies";

interface CaseStudyCardProps {
    caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
    const imageRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
        const card = cardRef.current;
        const imageContainer = imageRef.current;
        if (!card || !imageContainer) return;

        let scrollAnimation: gsap.core.Tween | null = null;

        const handleMouseEnter = () => {
            // Kill any ongoing animation
            if (scrollAnimation) {
                scrollAnimation.kill();
            }

            // Scroll down animation - continues from current position
            scrollAnimation = gsap.to(imageContainer, {
                y: -150, // Scroll down by 150px
                duration: 3,
                ease: "linear",
                onUpdate: function () {
                    // Track the current scroll position
                    scrollPositionRef.current = gsap.getProperty(imageContainer, "y") as number;
                }
            });
        };

        const handleMouseLeave = () => {
            // Kill any ongoing animation
            if (scrollAnimation) {
                scrollAnimation.kill();
            }

            // Return to start position smoothly from wherever it currently is
            scrollAnimation = gsap.to(imageContainer, {
                y: 0,
                duration: 0.6,
                ease: "power2.out",
            });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mouseenter", handleMouseEnter);
            card.removeEventListener("mouseleave", handleMouseLeave);
            if (scrollAnimation) {
                scrollAnimation.kill();
            }
        };
    }, []);

    return (
        <Link href={`/client-work/case-studies/${caseStudy.slug}`}>
            <div
                ref={cardRef}
                className="case-study-card group relative bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-zinc-800 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row h-auto md:h-[320px]"
            >
                {/* Image container with overflow hidden - LEFT SIDE */}
                <div className="relative w-full md:w-[45%] h-[250px] md:h-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                    <div ref={imageRef} className="w-full h-full">
                        <Image
                            src={caseStudy.featuredImage}
                            alt={caseStudy.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover pointer-events-none select-none"
                            draggable={false}
                        />
                    </div>

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content - RIGHT SIDE */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                        {/* Category tags */}
                        <div className="flex gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#F4C906]/10 text-[#F4C906] dark:bg-[#F4C906]/20 text-xs font-semibold rounded-full">
                                {caseStudy.category}
                            </span>
                            <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                                {caseStudy.industry}
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-3 group-hover:text-[#F4C906] transition-colors">
                            {caseStudy.title}
                        </h3>

                        {/* Client */}
                        <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                            {caseStudy.client}
                        </p>

                        {/* Excerpt */}
                        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 line-clamp-3 mb-4">
                            {caseStudy.excerpt}
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-[#F4C906] font-semibold text-sm group-hover:gap-2 transition-all">
                        View Case Study
                        <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">
                            →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
