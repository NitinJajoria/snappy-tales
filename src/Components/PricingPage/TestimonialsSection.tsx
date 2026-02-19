"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import Button from "@/Components/ui/Button";

export default function TestimonialsSection() {
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

	const testimonials = [
		{
			name: "Sarah Jenkins",
			role: "Marketing Director at FlowState",
			content: "The level of expertise and dedication is unmatched. They didn't just build a site; they built a conversion machine.",
			image: "/pricing/charactor.png",
			rating: 5
		},
		{
			name: "Marcus Thorne",
			role: "Founder of Nexus AI",
			content: "We saw a 40% increase in organic traffic within the first three months. The transparent pricing makes it a no-brainer.",
			image: "/pricing/charactor.png",
			rating: 5
		},
		{
			name: "Elena Rodriguez",
			role: "E-commerce Lead at Bloom",
			content: "Their Shopify optimization literally paid for itself in two weeks. Highly recommend their scaling strategies.",
			image: "/pricing/charactor.png",
			rating: 5
		}
	];

	const stats = [
		{ label: "Clutch Rating", value: "4.9/5", count: "100+ Reviews" },
		{ label: "Trustpilot", value: "5.0", count: "25+ Reviews" },
		{ label: "Success Rate", value: "98%", count: "Client Satisfaction" }
	];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-24 px-4 md:px-12 lg:px-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden"
		>
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto relative z-10"
			>
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
					{/* Left Content */}
					<div className="lg:col-span-5 space-y-12">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="space-y-6"
						>
							<motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-black dark:text-white leading-[1.1]">
								REAL RESULTS FROM <span className="text-[#F4C906]">REAL BRANDS.</span>
							</motion.h2>
							<motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
								Don't just take our word for it. We've helped dozens of startups scale their digital presence and revenue.
							</motion.p>

							<motion.div variants={itemVariants} className="pt-4">
								<Button variant="dark" className="flex items-center gap-3 cursor-pointer">
									JOIN OUR SUCCESS STORIES
									<Quote size={20} />
								</Button>
							</motion.div>
						</motion.div>

						{/* Stats Grid */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-black/10 dark:border-white/10"
						>
							{stats.map((stat, index) => (
								<motion.div key={index} variants={itemVariants} className="space-y-1">
									<p className="text-3xl font-black text-black dark:text-white">{stat.value}</p>
									<p className="text-xs font-bold text-[#F4C906] uppercase tracking-wider">{stat.label}</p>
									<p className="text-[10px] text-gray-500 dark:text-gray-500">{stat.count}</p>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Right Testimonials Scroll */}
					<div className="lg:col-span-7 space-y-6">
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="grid gap-6"
						>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={index}
									variants={itemVariants}
									whileHover={{ x: 10 }}
									className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl transition-all relative group"
								>
									<div className="absolute top-8 right-8 text-[#F4C906]/20 group-hover:text-[#F4C906]/40 transition-colors">
										<Quote size={48} fill="currentColor" />
									</div>
									<div className="flex gap-4 items-center mb-6">
										<div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#F4C906]">
											<Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
										</div>
										<div>
											<h4 className="font-black text-black dark:text-white">{testimonial.name}</h4>
											<p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
										</div>
									</div>
									<div className="flex gap-1 mb-4">
										{[...Array(testimonial.rating)].map((_, i) => (
											<Star key={i} size={14} fill="#F4C906" className="text-[#F4C906]" />
										))}
									</div>
									<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed italic">
										"{testimonial.content}"
									</p>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
