"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { getAllCaseStudies, getCaseStudiesByCategory, categories, type CategoryType } from "@/lib/case-studies";
import CaseStudyCard from "./CaseStudyCard";

export default function CaseStudiesGrid() {
    const [activeCategory, setActiveCategory] = useState<CategoryType>("All");
    const [displayedCases, setDisplayedCases] = useState(getAllCaseStudies());
    const gridRef = useRef<HTMLDivElement>(null);
    const isInitialMount = useRef(true);

    useEffect(() => {
        const filtered = getCaseStudiesByCategory(activeCategory);
        setDisplayedCases(filtered);

        // Only animate on filter changes, not on initial mount
        if (!isInitialMount.current && gridRef.current) {
            gsap.fromTo(
                ".case-study-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power3.out",
                }
            );
        }
    }, [activeCategory]);

    useEffect(() => {
        // Initial animation on mount
        const ctx = gsap.context(() => {
            // Animate filter buttons
            gsap.from(".filter-button", {
                y: 20,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2,
            });

            // Ensure cards are visible and animate them in
            gsap.set(".case-study-card", { opacity: 1, y: 0 }); // Set to visible first
            gsap.fromTo(
                ".case-study-card",
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.5,
                }
            );
        }, gridRef);

        // Mark that initial mount animation has run
        isInitialMount.current = false;

        return () => ctx.revert();
    }, []);

    return (
        <section className="py-16 px-4 bg-gray-50 dark:bg-zinc-950">
            <div className="max-w-7xl mx-auto">
                {/* Filter buttons */}
                <div className="filters-container flex justify-center gap-3 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`filter-button px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${activeCategory === category
                                ? "bg-[#F4C906] text-black shadow-lg scale-105"
                                : "bg-white dark:bg-zinc-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 border border-gray-200 dark:border-zinc-800"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid - Single column for horizontal cards */}
                <div
                    ref={gridRef}
                    className="flex flex-col gap-6"
                >
                    {displayedCases.map((caseStudy) => (
                        <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                    ))}
                </div>

                {/* Empty state */}
                {displayedCases.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            No case studies found in this category.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
