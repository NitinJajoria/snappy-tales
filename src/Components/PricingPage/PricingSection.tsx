"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
	Check,
	Globe,
	Zap,
	Shield,
	Rocket,
	Sparkles,
	Cpu,
	Layers,
} from "lucide-react";
import { useCurrency } from "@/lib/currency-context";
import Button from "@/Components/ui/Button";

export default function PricingSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
	const { currency, setCurrency, formatPrice } = useCurrency();

	const [activeCategory, setActiveCategory] = useState("WEB DEV");
	const [billingType, setBillingType] = useState<"monthly" | "annually">(
		"monthly",
	);

	const categories = ["WEB DEV", "UI/UX", "MARKETING", "GTM", "INVESTOR"];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const pricingPlans = [
		{
			name: "STARTER",
			description: "Perfect for small projects and MVPs",
			price: billingType === "monthly" ? 499 : 4500,
			tag: null,
			icon: <Zap className="w-8 h-8" />,
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop",
			features: [
				{ label: "Dedicated Developer", value: "Part-time" },
				{ label: "Project Management", value: "Included" },
				{ label: "Weekly Updates", value: "Yes" },
				{ label: "Code Reviews", value: "Standard" },
				{ label: "Support", value: "Email" },
			],
		},
		{
			name: "GROWTH",
			description: "Ideal for scaling startups",
			price: billingType === "monthly" ? 999 : 9000,
			tag: "POPULAR",
			icon: <Rocket className="w-8 h-8" />,
			image:
				"https://images.unsplash.com/photo-1522071823991-b1ae5e6a3048?q=80&w=500&auto=format&fit=crop",
			features: [
				{ label: "Dedicated Developer", value: "Full-time" },
				{ label: "UI/UX Support", value: "10 hrs/mo" },
				{ label: "Daily Standups", value: "Included" },
				{ label: "Priority Support", value: "Slack" },
				{ label: "QA Testing", value: "Included" },
			],
		},
		{
			name: "PRO",
			description: "For established businesses",
			price: billingType === "monthly" ? 1999 : 18000,
			tag: "BEST VALUE",
			savings: billingType === "annually" ? "Save 20%" : null,
			icon: <Shield className="w-8 h-8" />,
			image:
				"https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop",
			features: [
				{ label: "Team of 2 Developers", value: "Full-time" },
				{ label: "Dedicated PM", value: "Included" },
				{ label: "Custom Architecture", value: "Yes" },
				{ label: "24/7 Support", value: "Priority" },
				{ label: "DevOps Setup", value: "Included" },
			],
		},
		{
			name: "ENTERPRISE",
			description: "Custom solutions for large scale",
			price: billingType === "monthly" ? 3999 : 36000,
			tag: null,
			icon: <Globe className="w-8 h-8" />,
			image:
				"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop",
			features: [
				{ label: "Custom Team Size", value: "On-demand" },
				{ label: "Strategic Consulting", value: "Included" },
				{ label: "SLA Guarantees", value: "Yes" },
				{ label: "On-site Visits", value: "Quarterly" },
				{ label: "Dedicated Account Mgr", value: "Yes" },
			],
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-20 px-4 md:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto"
			>
				{/* Section Header */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="mb-8"
				>
					<p className="text-[#F4C906] uppercase tracking-wider text-sm font-semibold mb-4">
						PRICING
					</p>
					<h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white mb-4">
						Pick Your <span className="text-[#F4C906]">Growth</span> Plan
					</h2>
					<p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
						Transparent pricing with everything included. No hidden fees. Just
						results.
					</p>
				</motion.div>

				{/* Category Tabs */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="flex flex-wrap gap-3 mb-8"
				>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveCategory(category)}
							className={`px-6 py-3 rounded-full font-bold transition-all ${activeCategory === category
									? "bg-[#F4C906] text-black"
									: "border-2 border-[#F4C906] text-[#F4C906] hover:bg-[#F4C906] hover:text-black"
								}`}
						>
							{category}
						</button>
					))}
				</motion.div>

				{/* Toggles Container */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12"
				>
					{/* Billing Toggle */}
					<div className="flex items-center gap-4">
						<button
							onClick={() => setBillingType("monthly")}
							className={`flex items-center gap-2 transition-colors ${billingType === "monthly"
									? "text-[#F4C906]"
									: "text-gray-500 dark:text-gray-400"
								}`}
						>
							<div
								className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${billingType === "monthly"
										? "border-[#F4C906]"
										: "border-gray-400"
									}`}
							>
								{billingType === "monthly" && (
									<div className="w-3 h-3 rounded-full bg-[#F4C906]" />
								)}
							</div>
							<span className="font-semibold">Bill Monthly</span>
						</button>

						<button
							onClick={() => setBillingType("annually")}
							className={`flex items-center gap-2 transition-colors ${billingType === "annually"
									? "text-[#F4C906]"
									: "text-gray-500 dark:text-gray-400"
								}`}
						>
							<div
								className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${billingType === "annually"
										? "border-[#F4C906]"
										: "border-gray-400"
									}`}
							>
								{billingType === "annually" && (
									<div className="w-3 h-3 rounded-full bg-[#F4C906]" />
								)}
							</div>
							<span className="font-semibold">Bill Annually</span>
						</button>
					</div>

					{/* Currency Toggle */}
					<div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 p-1 rounded-xl border border-gray-200 dark:border-zinc-800">
						<button
							onClick={() => setCurrency("USD")}
							className={`px-4 py-2 rounded-lg font-bold transition-all ${currency === "USD"
									? "bg-[#F4C906] text-black shadow-md"
									: "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
								}`}
						>
							USD
						</button>
						<button
							onClick={() => setCurrency("INR")}
							className={`px-4 py-2 rounded-lg font-bold transition-all ${currency === "INR"
									? "bg-[#F4C906] text-black shadow-md"
									: "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
								}`}
						>
							INR
						</button>
					</div>
				</motion.div>

				{/* Pricing Cards */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{pricingPlans.map((plan, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -10 }}
							className={`relative rounded-3xl p-8 transition-all duration-300 border-2 ${plan.tag === "POPULAR" || plan.tag === "BEST VALUE"
									? "bg-[#F4C906] text-black border-[#F4C906] shadow-xl scale-105 z-10"
									: "bg-gray-50 dark:bg-zinc-900 text-black dark:text-white border-gray-200 dark:border-zinc-800 hover:border-[#F4C906] dark:hover:border-[#F4C906]"
								}`}
						>
							{/* Tag */}
							{plan.tag && (
								<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-[#F4C906] px-4 py-1 rounded-full font-bold text-xs border-2 border-[#F4C906] whitespace-nowrap">
									{plan.tag}
								</div>
							)}

							{/* Icon */}
							<div
								className={`mb-6 p-3 rounded-2xl inline-block ${plan.tag === "POPULAR" || plan.tag === "BEST VALUE"
										? "bg-black text-[#F4C906]"
										: "bg-[#F4C906] text-black"
									}`}
							>
								<motion.div
									animate={{
										scale: [1, 1.1, 1],
										rotate: [0, 5, -5, 0],
									}}
									transition={{
										repeat: Infinity,
										duration: 3,
										ease: "easeInOut",
									}}
								>
									{plan.icon}
								</motion.div>
							</div>

							{/* Plan Image */}
							{/* <div className="mb-6 rounded-2xl overflow-hidden h-32 relative group">
								<img
									src={plan.image}
									alt={plan.name}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
							</div> */}

							{/* Savings Badge */}
							{plan.savings && (
								<div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
									{plan.savings}
								</div>
							)}

							{/* Plan Name */}
							<h3 className="text-2xl font-extrabold uppercase mb-2">
								{plan.name}
							</h3>
							<p
								className={`text-sm mb-6 ${plan.tag === "POPULAR" || plan.tag === "BEST VALUE"
										? "text-black/70"
										: "text-gray-500 dark:text-gray-400"
									}`}
							>
								{plan.description}
							</p>

							{/* Price */}
							<div className="mb-6">
								<span className="text-3xl font-extrabold">
									{formatPrice(plan.price)}
								</span>
								<span
									className={`text-xs ml-2 ${plan.tag === "POPULAR" || plan.tag === "BEST VALUE"
											? "text-black/70"
											: "text-gray-500 dark:text-gray-400"
										}`}
								>
									{billingType === "monthly" ? "/month" : "/year"}
								</span>
							</div>

							{/* Features */}
							<div className="space-y-4 mb-8">
								{plan.features.map((feature, i) => (
									<div
										key={i}
										className="flex justify-between items-center text-sm border-b border-black/10 dark:border-white/10 pb-2"
									>
										<span
											className={
												plan.tag === "POPULAR" || plan.tag === "BEST VALUE"
													? "text-black/80 font-medium"
													: "text-gray-600 dark:text-gray-300"
											}
										>
											{feature.label}
										</span>
										<span className="font-bold">{feature.value}</span>
									</div>
								))}
							</div>

							<Button
								variant={plan.tag === "POPULAR" || plan.tag === "BEST VALUE" ? "dark" : "default"}
								className="w-full text-center justify-center cursor-pointer"
							>
								GET STARTED
							</Button>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="mt-16 text-center"
				>
					<p className="text-[#F4C906] text-xl font-semibold mb-4">
						Not sure which plan fits best?
					</p>
					<h3 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
						LET'S CONNECT AND BUILD THE PERFECT ROADMAP FOR YOUR BRAND.
					</h3>
					<Button className="cursor-pointer">
						Book Free Strategy Call
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
