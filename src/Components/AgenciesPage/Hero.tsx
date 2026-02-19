"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "@/Components/ui/Button";
import { Mail } from "lucide-react";

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const isInView = useInView(heroRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
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

	const statsVariants = {
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

	return (
		<section
			ref={heroRef}
			className="relative w-full pt-32 pb-16 px-4 md:px-12 lg:px-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
			>
				{/* Left Content */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="flex flex-col gap-6 z-10"
				>
					<motion.div variants={textVariants} className="flex flex-wrap gap-2">
						{/* Top badge or pill if needed */}
					</motion.div>
					<motion.h1
						variants={textVariants}
						className="text-4xl md:text-5xl font-black tracking-tighter text-black dark:text-white leading-[0.95] uppercase"
					>
						SCALE YOUR <br />
						<span className="text-[#F4C906]">AGENCY</span> FAST. <br />
						WITHOUT LIMITS.
					</motion.h1>
					<motion.p
						variants={textVariants}
						className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg"
					>
						A reliable offshore engine powering agencies worldwide white-label
						delivery, zero burnout, maximum output.
					</motion.p>

					{/* Feature Tags */}
					<motion.div variants={textVariants} className="flex flex-wrap gap-3">
						{[
							"White-label delivery",
							"Dedicated specialists",
							"Flexible engagement",
						].map((tag, i) => (
							<div
								key={i}
								className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 text-sm font-medium text-gray-800 dark:text-gray-200"
							>
								{tag}
							</div>
						))}
					</motion.div>

					<motion.div
						variants={textVariants}
						className="flex flex-wrap gap-4 pt-4"
					>
						<Button className="px-8 py-4 text-base flex items-center gap-2">
							Talk to an Expert
						</Button>
						<Button variant="dark" className="px-8 py-4 text-base flex items-center gap-2">
							Explore Our Services
						</Button>
					</motion.div>
				</motion.div>

				{/* Right Image/Illustration placeholder */}
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={isInView ? { opacity: 1, x: 0 } : {}}
					transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
					className="relative flex justify-center lg:justify-end"
				>
					{/* Replace with actual Image or Illustration */}
					<div className="w-full max-w-lg aspect-square rounded-2xl flex items-center justify-center relative">
						<Image
							src="/agencies/hero.png"
							alt="Dashboard"
							width={500}
							height={500}
							className="w-full h-full object-cover"
						/>

						{/* Mocking the "4.9/5 Rated by agencies" badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.8 }}
							className="absolute -top-8 left-8 bg-gray-100 dark:bg-[#111] text-black dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-800 shadow-xl z-20"
						>
							<div className="text-[#F4C906] font-bold text-xl">4.9 / 5</div>
							<div className="text-xs text-gray-600 dark:text-gray-400">Rated by agencies</div>
						</motion.div>
					</div>
				</motion.div>
			</motion.div>

			{/* Stats Section */}
			<motion.div
				variants={containerVariants}
				initial="hidden"
				animate={isInView ? "visible" : "hidden"}
				className="max-w-7xl mx-auto mt-24"
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
					{[
						{ value: "50+", label: "Active Agencies" },
						{ value: "1000+", label: "Projects Delivered" },
						{ value: "800+", label: "Specialists" },
						{ value: "600+", label: "Hours Saved" },
					].map((stat, i) => (
						<motion.div
							key={i}
							variants={statsVariants}
							className="text-center"
						>
							<h3 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-3">
								{stat.value}
							</h3>
							<p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
								{stat.label}
							</p>
						</motion.div>
					))}
				</div>
			</motion.div>

			{/* Marquee Stripe */}
			<div className="w-full bg-[#F4C906] py-3 mt-16 overflow-hidden flex items-center">
				<div className="marquee-track flex gap-8 whitespace-nowrap text-black font-bold text-sm uppercase tracking-wide">
					{Array(20)
						.fill("White-label delivery  •  White-label delivery  •")
						.map((text, i) => (
							<span key={i}>{text}</span>
						))}
				</div>
			</div>
		</section>
	);
}
