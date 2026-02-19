"use client";

import React from "react";
import type { CaseStudy } from "@/lib/case-studies";

interface SolutionProps {
    solution: CaseStudy["solution"];
}

export default function Solution({ solution }: SolutionProps) {
    return (
        <section className="py-24 px-4 bg-gradient-to-b from-zinc-950 to-black text-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                        Our <span className="text-[#F4C906]">Solution</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        {solution.overview}
                    </p>
                </div>

                {/* Top Grid - 6 cards overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {solution.approach.slice(0, 6).map((item, index) => {
                        const icons = [
                            { emoji: '🔍', bg: 'bg-yellow-500' },
                            { emoji: '👥', bg: 'bg-yellow-500' },
                            { emoji: '😊', bg: 'bg-yellow-500' },
                            { emoji: '📱', bg: 'bg-yellow-500' },
                            { emoji: '📊', bg: 'bg-yellow-500' },
                            { emoji: '⚡', bg: 'bg-yellow-500' }
                        ];
                        return (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-[#F4C906] hover:shadow-xl hover:shadow-[#F4C906]/10 transition-all duration-300 group"
                            >
                                <div className={`w-14 h-14 ${icons[index].bg} text-black rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    {icons[index].emoji}
                                </div>
                                <h3 className="font-bold mb-3 text-lg text-white">{item.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Detailed Breakdown - First 3 items */}
                <div className="space-y-32">
                    {solution.approach.slice(0, 3).map((item, index) => (
                        <div key={index} className="grid lg:grid-cols-2 gap-12 items-start">
                            {/* Left Column: Number + Title + Description */}
                            <div className="flex gap-6">
                                {/* Large Number */}
                                <div className="flex-shrink-0">
                                    <div className="text-[100px] md:text-[120px] font-black text-zinc-800/60 leading-none select-none">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 pt-4">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Details Box */}
                            {item.details && item.details.length > 0 && (
                                <div className="lg:pt-4">
                                    <div className="bg-black/80 border border-[#F4C906]/50 rounded-2xl p-6 md:p-8">
                                        <h4 className="text-[#F4C906] font-bold text-xs md:text-sm mb-5 uppercase tracking-wider">
                                            {index === 0 && "Audience Segments"}
                                            {index === 1 && "Campaign Structure"}
                                            {index === 2 && "Creative Testing"}
                                        </h4>
                                        <ul className="space-y-3">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm md:text-base">
                                                    <span className="text-[#F4C906] mt-0.5 text-base flex-shrink-0">•</span>
                                                    <span className="text-gray-300">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Technologies */}
                {solution.technologies && solution.technologies.length > 0 && (
                    <div className="mt-24 pt-16 border-t border-zinc-800">
                        <h3 className="text-2xl font-bold mb-8 text-white">Technologies & Tools</h3>
                        <div className="flex flex-wrap gap-4">
                            {solution.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-6 py-3 bg-[#F4C906]/10 text-[#F4C906] border border-[#F4C906]/30 text-sm font-semibold rounded-full hover:bg-[#F4C906]/20 transition-colors duration-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
