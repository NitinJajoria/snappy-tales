"use client";

import React from "react";
import type { CaseStudy } from "@/lib/case-studies";

interface AboutClientProps {
    about: CaseStudy["about"];
    client: string;
}

export default function AboutClient({ about, client }: AboutClientProps) {
    return (
        <section className="py-20 px-4 bg-gray-50 dark:bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2">
                        THE CLIENT
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white leading-tight mb-6">
                        About {client}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                            Overview
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            {about.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="px-4 py-2 bg-[#F4C906] text-black font-semibold rounded-full">
                                {about.industry}
                            </span>
                        </div>
                    </div>

                    {/* Goals */}
                    <div>
                        <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                            Client Goals
                        </h3>
                        <ul className="space-y-4">
                            {about.goals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 bg-[#F4C906] rounded-full flex items-center justify-center text-black font-bold text-sm">
                                        ✓
                                    </div>
                                    <span className="text-gray-700 dark:text-gray-300 pt-0.5">
                                        {goal}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
