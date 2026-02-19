"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useCurrency } from "@/lib/currency-context";
import Button from "@/Components/ui/Button";

export default function HireTeamFTE() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const { formatPrice } = useCurrency();

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

	const whenToChoose = [
		"Require email campaigns and workflows?",
		"Ongoing SEO or performance marketing",
		"Monthly design and development needs",
		"Continuous support for exciting business requirements",
	];

	const benefits = [
		"Full control and transparency",
		"Cost-effective",
		"Direct, 24/5 communication with the resource",
		"Scaling as per requirements goes",
	];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-20 px-4 md:px-12 lg:px-20 bg-white dark:bg-gradient-to-b dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto"
			>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
					{/* Left Content */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="flex flex-col gap-8"
					>
						<motion.h2
							variants={itemVariants}
							className="text-4xl md:text-5xl font-extrabold text-[#F4C906] uppercase"
						>
							HIRE TEAM/FTE
						</motion.h2>

						<motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg">
							Need an existing role? We have experts on hire as you expand
							support teams in different time zones or just want a dedicated
							resource in our team.
						</motion.p>

						{/* When to Choose */}
						<motion.div variants={itemVariants} className="space-y-4">
							<h3 className="text-[#F4C906] font-bold text-xl uppercase">
								When to Choose?
							</h3>
							<div className="space-y-3">
								{whenToChoose.map((item, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className="flex items-start gap-3"
									>
										<Check
											className="text-[#F4C906] mt-1 flex-shrink-0"
											size={20}
										/>
										<span className="text-gray-600 dark:text-gray-300">{item}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Divider */}
						<motion.div
							variants={itemVariants}
							className="w-full h-px bg-gradient-to-r from-transparent via-[#F4C906] to-transparent"
						/>

						{/* Benefits */}
						<motion.div variants={itemVariants} className="space-y-4">
							<h3 className="text-[#F4C906] font-bold text-xl uppercase">
								Benefits
							</h3>
							<div className="space-y-3">
								{benefits.map((item, index) => (
									<motion.div
										key={index}
										variants={itemVariants}
										className="flex items-start gap-3"
									>
										<Check
											className="text-[#F4C906] mt-1 flex-shrink-0"
											size={20}
										/>
										<span className="text-gray-600 dark:text-gray-300">{item}</span>
									</motion.div>
								))}
							</div>
						</motion.div>

						{/* Price Indicator */}
						<motion.div
							variants={itemVariants}
							className="w-fit bg-gray-50 dark:bg-zinc-900 border border-[#F4C906]/20 p-6 rounded-2xl"
						>
							<p className="text-gray-500 dark:text-gray-400 text-sm mb-1 uppercase font-bold tracking-widest">
								Starting from
							</p>
							<div className="flex items-baseline gap-2">
								<span className="text-3xl font-black text-[#F4C906]">
									{formatPrice(1500)}
								</span>
								<span className="text-gray-400 dark:text-gray-500 text-sm">/ month</span>
							</div>
						</motion.div>

						{/* CTA Button */}
						<motion.div variants={itemVariants} className="pt-4">
							<Button className="flex items-center gap-2 cursor-pointer">
								Hire a team/FTE
								<ArrowRight className="group-hover:translate-x-1 transition-transform" />
							</Button>
						</motion.div>
					</motion.div>

					{/* Right Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex flex-col gap-6"
					>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
						>
							<Image
								src="/images/pricing/hire-team.png"
								alt="Hire team mockup"
								fill
								className="object-contain"
							/>
						</motion.div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
