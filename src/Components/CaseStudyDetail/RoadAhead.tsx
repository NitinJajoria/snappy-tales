"use client";

import React from "react";
import type { CaseStudy } from "@/lib/case-studies";

interface RoadAheadProps {
    roadAhead: CaseStudy["roadAhead"];
}

export default function RoadAhead({ roadAhead }: RoadAheadProps) {
    return (
        <section className="py-20 px-4 bg-white dark:bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12 text-center">
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2">
                        Future Plans
                    </h4>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black dark:text-white leading-tight mb-6">
                        {roadAhead.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Building on this success, we're partnering with{" "}
                        the client to scale strategies and implement continued growth.
                    </p>
                </div>

                {/* Initiatives */}
                <div className="grid md:grid-cols-3 gap-6">
                    {roadAhead.initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl p-8 hover:border-[#F4C906] hover:shadow-xl transition-all duration-300"
                        >
                            <div className="text-5xl mb-4">
                                {initiative.icon || "🚀"}
                            </div>
                            <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                                {initiative.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {initiative.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center bg-gradient-to-r from-[#F4C906] to-[#FFD700] rounded-2xl p-12">
                    <h3 className="text-3xl font-extrabold text-black mb-4">
                        Ready to Build Your Success Story?
                    </h3>
                    <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
                        Join 50+ startups who have partnered with us to turn their bold ideas into impactful ventures.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-black/90 transition-colors text-center">
                            Request Demo
                        </a>
                        <a href="/client-work/case-studies" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors border-2 border-black text-center">
                            View All Case Studies
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
