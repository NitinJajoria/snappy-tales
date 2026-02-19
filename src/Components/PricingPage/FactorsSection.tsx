"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, Clock, Layout, MousePointer2, Settings, Smartphone } from "lucide-react";
import Button from "@/Components/ui/Button";

export default function FactorsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const factors = [
		{
			icon: Layout,
			title: "Design Complexity",
			description: "Custom animations, unique layouts, and high-fidelity graphics impact the overall effort and pricing.",
		},
		{
			icon: Smartphone,
			title: "Responsive Depth",
			description: "Optimizing for every possible screen size and device type to ensure a flawless user experience everywhere.",
		},
		{
			icon: MousePointer2,
			title: "Interactivity",
			description: "Advanced user interactions, complex forms, and dynamic content states require specialized development time.",
		},
		{
			icon: Settings,
			title: "Integrations",
			description: "Connecting with third-party APIs, CRM systems, or custom backend services increases project scope.",
		},
		{
			icon: Clock,
			title: "Timeline",
			description: "Expedited deliveries and tight deadlines may require resource reallocation and affect the final quote.",
		},
		{
			icon: BarChart3,
			title: "SEO Scope",
			description: "The depth of technical SEO, schema implementation, and content optimization strategies chosen.",
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-24 px-4 md:px-12 lg:px-20 bg-gray-50 dark:bg-black overflow-hidden transition-colors duration-300"
		>
			{/* Background Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto relative z-10"
			>
				{/* Section Header */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="mb-20 text-center space-y-4"
				>
					<motion.div variants={itemVariants} className="flex items-center justify-center gap-3 mb-2">
						<div className="w-8 h-1 bg-[#F4C906]"></div>
						<span className="text-[#F4C906] font-black tracking-[0.2em] text-sm uppercase">Transparency</span>
						<div className="w-8 h-1 bg-[#F4C906]"></div>
					</motion.div>
					<motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black dark:text-white">
						FACTORS THAT <span className="text-[#F4C906]">INFLUENCE PRICING</span>
					</motion.h2>
					<motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						We believe in honest, transparent pricing. Here's what goes into calculating your custom project investment.
					</motion.p>
				</motion.div>

				{/* Factors Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
				>
					{factors.map((factor, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							whileHover={{ y: -10 }}
							className="group p-8 rounded-[2.5rem] bg-white dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 hover:border-[#F4C906]/30 transition-all duration-500 backdrop-blur-sm shadow-sm dark:shadow-none"
						>
							<div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-black border border-black/5 dark:border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F4C906] transition-all duration-500">
								<factor.icon className="text-[#F4C906] group-hover:text-black transition-colors" size={32} />
							</div>

							<h3 className="text-2xl font-black text-black dark:text-white mb-4 group-hover:text-[#F4C906] transition-colors">
								{factor.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors">
								{factor.description}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					variants={itemVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="mt-20 p-10 rounded-[3rem] border-2 border-dashed border-black/10 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 bg-white dark:bg-zinc-900/30 shadow-sm dark:shadow-none"
				>
					<div className="text-center md:text-left">
						<h4 className="text-2xl font-black text-black dark:text-white mb-2">Need a custom quote?</h4>
						<p className="text-gray-600 dark:text-gray-400">Tell us about your project and get a detailed breakdown in 24 hours.</p>
					</div>
					<Button className="cursor-pointer whitespace-nowrap">
						GET ESTIMATE
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
