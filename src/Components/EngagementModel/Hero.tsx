"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useCurrency } from "@/lib/currency-context";

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const isInView = useInView(heroRef, { once: true, amount: 0.2 });
	const { currency, setCurrency } = useCurrency();

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<section
			ref={heroRef}
			className="relative w-full px-8 md:p-12 lg:p-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto"
			>
				{/* Full-width Title */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="mb-8"
				>
					<motion.h1
						variants={textVariants}
						className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]"
					>
						<span className="text-[#F4C906]">FLEXIBLE</span>{" "}
						<span className="text-black dark:text-white">ENGAGEMENT MODELS</span>
						<br />
						<span className="text-black dark:text-white">DESIGNED TO MATCH YOUR</span>
						<br />
						<span className="text-black dark:text-white relative">
							GROWTH NEEDS
							<svg
								className="absolute -bottom-2 left-0 w-full h-4"
								viewBox="0 0 300 12"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 8C100 2 200 2 298 8"
									stroke="#F4C906"
									strokeWidth="3"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</motion.h1>
				</motion.div>

				{/* Grid: Description + Toggles | Image */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
					{/* Left Content */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="flex flex-col z-10"
					>
						<motion.p
							variants={textVariants}
							className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl"
						>
							We offer three flexible ways to collaborate - One-off projects,
							Retainer engagements, and Hire teams/FTEs - so you can choose the
							model that best aligns with your business needs.
						</motion.p>

						{/* Currency Toggle */}
						<motion.div
							variants={textVariants}
							className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 p-1 rounded-xl border border-gray-200 dark:border-zinc-800 w-fit mt-4"
						>
							<button
								onClick={() => setCurrency("USD")}
								className={`px-6 py-2 rounded-lg font-bold transition-all ${currency === "USD"
									? "bg-[#F4C906] text-black shadow-lg"
									: "text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white"
									}`}
							>
								USD
							</button>
							<button
								onClick={() => setCurrency("INR")}
								className={`px-6 py-2 rounded-lg font-bold transition-all ${currency === "INR"
									? "bg-[#F4C906] text-black shadow-lg"
									: "text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white"
									}`}
							>
								INR
							</button>
						</motion.div>
					</motion.div>

					{/* Right Image - aligned to bottom */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						className="relative flex justify-center"
					>
						<div className="absolute -top-30 w-full max-w-md">
							<div className="w-full h-full flex items-end justify-center">
								<Image
									src="/images/pricing/engagement-hero.png"
									alt="Success Illustration"
									width={500}
									height={500}
									className="w-full h-auto object-contain rounded-3xl"
								/>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
