"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Button from "@/Components/ui/Button";

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const isInView = useInView(heroRef, { once: true, amount: 0.2 });

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
		hidden: { opacity: 0, y: 30 },
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
			className="relative w-full p-8 md:p-12 lg:p-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
		>
			{/* Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
				<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#F4C906] blur-[120px] rounded-full animate-pulse" />
				<div
					className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-500 blur-[100px] rounded-full animate-pulse"
					style={{ animationDelay: "2s" }}
				/>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="relative z-10"
			>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
						{/* Left Content */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="flex flex-col gap-8"
						>
							<motion.div
								variants={textVariants}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4C906]/10 border border-[#F4C906]/20 text-[#F4C906] w-fit font-bold text-sm"
							>
								<Sparkles size={16} />
								<span>TRUSTED BY 50+ SCALING STARTUPS</span>
							</motion.div>

							<motion.h1
								variants={textVariants}
								className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1] text-black dark:text-white"
							>
								SIMPLE <span className="text-[#F4C906]">PRICING.</span>
								<br />
								BUILT FOR
								<br />
								<span className="relative">
									SCALING
									<svg
										className="absolute -bottom-2 left-0 w-full h-3 text-[#F4C906]"
										viewBox="0 0 100 10"
										preserveAspectRatio="none"
									>
										<path
											d="M0 5 Q 50 10 100 5"
											stroke="currentColor"
											strokeWidth="4"
											fill="none"
											strokeLinecap="round"
										/>
									</svg>
								</span>{" "}
								<span className="text-[#F4C906]">BRANDS.</span>
							</motion.h1>

							<motion.p
								variants={textVariants}
								className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed"
							>
								Transparent, performance-driven pricing that scales with your
								ambition. No retainers, no hidden fees.
							</motion.p>

							{/* CTA Buttons */}
							<motion.div
								variants={textVariants}
								className="flex flex-wrap gap-6 pt-4"
							>
								<Button className="flex items-center gap-3 cursor-pointer">
									BOOK FREE STRATEGY CALL
								</Button>
								<Button variant="dark" className="flex items-center gap-3 cursor-pointer">
									<Play size={20} fill="currentColor" />
									HOW IT WORKS
								</Button>
							</motion.div>
						</motion.div>

						{/* Right Character Illustration */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
							animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
							transition={{
								duration: 1,
								delay: 0.3,
								ease: [0.22, 1, 0.36, 1],
							}}
							className="relative flex justify-center lg:justify-end"
						>
							<div className="relative w-full max-w-lg aspect-square">
								<div className="absolute inset-0 bg-gradient-to-tr from-[#F4C906]/20 to-purple-500/20 rounded-3xl rotate-6 blur-2xl" />
								<div className="relative w-full h-full bg-zinc-100 dark:bg-zinc-900 rounded-[3rem] p-8 border border-black/5 dark:border-white/5 shadow-2xl overflow-hidden group">
									<Image
										src="/images/pricing/pricing-hero.png"
										alt="Scaling Brands"
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 dark:opacity-60"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
									<div className="absolute bottom-10 left-10 right-10 space-y-2">
										<div className="flex gap-1">
											{[...Array(5)].map((_, i) => (
												<Sparkles
													key={i}
													className="text-[#F4C906]"
													size={16}
													fill="currentColor"
												/>
											))}
										</div>
										<p className="text-white font-bold text-xl italic">
											"They transformed our conversion rates in just 3 months!"
										</p>
										<p className="text-[#F4C906] font-black text-sm uppercase">
											— FOUNDER, NEXUS AI
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
