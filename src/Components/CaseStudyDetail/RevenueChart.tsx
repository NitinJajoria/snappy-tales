"use client";

import React from "react";

interface RevenueChartProps {
    data?: {
        totalRevenue: string;
        totalAdSpend: string;
        finalROAS: string;
        monthlyData: Array<{
            month: string;
            adSpend: number;
            revenue: number;
        }>;
    };
}

export default function RevenueChart({ data }: RevenueChartProps) {
    // Default data if none provided
    const chartData = data || {
        totalRevenue: "$789,750",
        totalAdSpend: "$135,000",
        finalROAS: "5.85x",
        monthlyData: [
            { month: "Jan", adSpend: 8000, revenue: 12000 },
            { month: "Feb", adSpend: 15000, revenue: 45000 },
            { month: "Mar", adSpend: 25000, revenue: 95000 },
            { month: "Apr", adSpend: 32000, revenue: 185000 },
            { month: "May", adSpend: 28000, revenue: 245000 },
            { month: "Jun", adSpend: 27000, revenue: 207500 },
        ],
    };

    // Find max value for scaling
    const maxValue = Math.max(...chartData.monthlyData.map((d) => Math.max(d.adSpend, d.revenue)));
    const scale = 200 / maxValue; // Scale to 200px height

    return (
        <div className="bg-zinc-950 rounded-2xl p-8 border border-zinc-800">
            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Revenue vs.<span className="text-[#F4C906]">Ad Spend</span>
            </h3>

            {/* Chart */}
            <div className="bg-black/50 rounded-xl p-6 mb-8">
                <div className="flex items-end justify-around h-[250px] gap-4">
                    {chartData.monthlyData.map((month, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            {/* Bars container */}
                            <div className="flex items-end gap-1 h-[200px] w-full justify-center">
                                {/* Ad Spend bar */}
                                <div
                                    className="bg-zinc-700 rounded-t w-1/3 transition-all duration-500 hover:bg-zinc-600"
                                    style={{ height: `${month.adSpend * scale}px` }}
                                ></div>
                                {/* Revenue bar */}
                                <div
                                    className="bg-[#F4C906] rounded-t w-1/3 transition-all duration-500 hover:bg-[#FFD700]"
                                    style={{ height: `${month.revenue * scale}px` }}
                                ></div>
                            </div>
                            {/* Month label */}
                            <div className="text-xs text-gray-500 font-medium">{month.month}</div>
                        </div>
                    ))}
                </div>

                {/* Legend */}
                <div className="flex justify-center gap-6 mt-6 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-zinc-700 rounded"></div>
                        <span className="text-gray-400">Ad Spend</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-[#F4C906] rounded"></div>
                        <span className="text-gray-400">Revenue</span>
                    </div>
                </div>
            </div>

            {/* Metrics Summary */}
            <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-[#F4C906] mb-2">
                        {chartData.totalRevenue}
                    </div>
                    <div className="text-sm text-gray-400">Total Revenue (Jun)</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-gray-500 mb-2">
                        {chartData.totalAdSpend}
                    </div>
                    <div className="text-sm text-gray-400">Total Ad Spend (Jun)</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                        {chartData.finalROAS}
                    </div>
                    <div className="text-sm text-gray-400">Final ROAS</div>
                </div>
            </div>
        </div>
    );
}
