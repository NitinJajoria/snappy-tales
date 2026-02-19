"use client";

import React from "react";
import { motion } from "framer-motion";
import { useCurrency } from "@/lib/currency-context";
import { Calendar, DollarSign } from "lucide-react";

interface FloatingPricingTogglesProps {
    billingType?: "monthly" | "annually";
    onBillingChange?: (type: "monthly" | "annually") => void;
    showBillingToggle?: boolean;
}

export default function FloatingPricingToggles({
    billingType = "monthly",
    onBillingChange,
    showBillingToggle = true,
}: FloatingPricingTogglesProps) {
    const { currency, setCurrency } = useCurrency();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
            {/* Billing Toggle */}
            {showBillingToggle && onBillingChange && (
                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-1.5 shadow-2xl flex items-center gap-1">
                    <button
                        onClick={() => onBillingChange("monthly")}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${billingType === "monthly"
                                ? "bg-[#F4C906] text-black shadow-md"
                                : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        <Calendar size={14} />
                        Monthly
                    </button>
                    <button
                        onClick={() => onBillingChange("annually")}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${billingType === "annually"
                                ? "bg-[#F4C906] text-black shadow-md"
                                : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                            }`}
                    >
                        <Calendar size={14} />
                        Annually
                    </button>
                </div>
            )}

            {/* Currency Toggle */}
            <div className="bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-2xl p-1.5 shadow-2xl flex items-center gap-1">
                <button
                    onClick={() => setCurrency("USD")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${currency === "USD"
                            ? "bg-[#F4C906] text-black shadow-md"
                            : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                        }`}
                >
                    <DollarSign size={14} />
                    USD
                </button>
                <button
                    onClick={() => setCurrency("INR")}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${currency === "INR"
                            ? "bg-[#F4C906] text-black shadow-md"
                            : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white"
                        }`}
                >
                    ₹ INR
                </button>
            </div>
        </motion.div>
    );
}
