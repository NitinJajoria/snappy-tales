"use client";

import React from "react";
import type { CaseStudy } from "@/lib/case-studies";
import RevenueChart from "./RevenueChart";

interface ResultsProps {
    results: CaseStudy["results"];
    campaignPerformance?: CaseStudy["campaignPerformance"];
}

export default function Results({ results, campaignPerformance }: ResultsProps) {
    return (
        <section className="py-20 px-4 bg-zinc-950">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                        The <span className="text-[#F4C906]">Results</span>
                    </h2>
                    <p className="text-gray-400 text-sm md:text-base">
                        Exceptional performance improvements across all key metrics
                    </p>
                </div>

                {/* Top 3 Metrics Cards - Yellow container */}
                <div className="bg-gradient-to-r from-[#F4C906] to-[#FFD700] rounded-3xl p-1 mb-16">
                    <div className="bg-zinc-950 rounded-[22px] p-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {results.metrics.slice(0, 3).map((metric, index) => (
                                <div
                                    key={index}
                                    className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="text-4xl md:text-5xl font-extrabold text-white">
                                            {metric.value}
                                        </div>
                                        <div className="text-2xl">📈</div>
                                    </div>
                                    <div className="text-sm font-semibold text-white mb-1">
                                        {metric.label}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        {metric.change}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Campaign Performance Table */}
                {campaignPerformance && campaignPerformance.tableData && (
                    <div className="mb-16">
                        <h3 className="text-3xl font-extrabold text-center mb-8">
                            Campaign <span className="text-[#F4C906]">Performance</span>
                        </h3>
                        <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800">
                            <table className="w-full">
                                <thead className="bg-[#F4C906]">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-sm font-bold text-black">Metric</th>
                                        <th className="px-6 py-4 text-center text-sm font-bold text-black">Before</th>
                                        <th className="px-6 py-4 text-center text-sm font-bold text-black">After</th>
                                        <th className="px-6 py-4 text-center text-sm font-bold text-black">Change</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-800">
                                    {campaignPerformance.tableData.map((row, index) => (
                                        <tr key={index} className="hover:bg-zinc-800/50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-white">
                                                {row.metric}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-center text-gray-300">
                                                {row.before}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-center text-gray-300">
                                                {row.after}
                                            </td>
                                            <td className={`px-6 py-4 text-sm text-center font-semibold ${row.change.startsWith('+') || row.change.includes('Increase')
                                                    ? 'text-green-400'
                                                    : row.change.startsWith('-') || row.change.includes('Decrease')
                                                        ? 'text-red-400'
                                                        : 'text-gray-300'
                                                }`}>
                                                {row.change}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {/* Revenue Chart */}
                <div>
                    <RevenueChart />
                </div>
            </div>
        </section>
    );
}
