"use client";

import React from "react";
import type { CaseStudy } from "@/lib/case-studies";

interface ChallengeProps {
    challenges: CaseStudy["challenges"];
}

export default function Challenge({ challenges }: ChallengeProps) {
    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2">
                        THE PROBLEM
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white leading-tight mb-6">
                        The Challenge
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Understanding the challenges our client faced was crucial to developing an effective solution.
                    </p>
                </div>

                {/* Challenges Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 hover:border-[#F4C906] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">{challenge.icon}</div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                                {challenge.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {challenge.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
