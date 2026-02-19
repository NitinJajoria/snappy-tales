"use client";

import React, { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import Footer from "@/Components/Common/Footer";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface BasePageProps {
	title: string;
	description: string;
	eyebrow?: string;
}

export default function BaseTemplate({
	title,
	description,
	eyebrow = "SAPPY TALES",
}: BasePageProps) {
	const [revealComplete, setRevealComplete] = useState(false);

	return (
		<PageRevealer onRevealComplete={() => setRevealComplete(true)}>
			{revealComplete && (
				<ReactLenis
					root
					options={{
						lerp: 0.1,
						duration: 1.2,
						smoothWheel: true,
					}}
				>
					<main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">
						{/* Hero Section */}
						<section className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
							<div className="absolute top-40 left-0 w-64 h-64 bg-[#F4C906]/10 blur-[100px] -z-10 rounded-full" />
							<div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4C906]/5 blur-[120px] -z-10 rounded-full" />

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="space-y-6"
							>
								<span className="text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase">
									{eyebrow}
								</span>
								<h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">
									{title}
								</h1>
								<p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl font-medium leading-relaxed">
									{description}
								</p>

								<div className="pt-8 flex flex-wrap gap-4">
									<Link
										href="/contact"
										className="group flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-2xl font-black text-sm tracking-widest hover:bg-[#F4C906] dark:hover:bg-[#F4C906] hover:text-black transition-all shadow-xl"
									>
										GET IN TOUCH
										<ArrowUpRight
											size={20}
											className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
										/>
									</Link>
								</div>
							</motion.div>
						</section>

						{/* Placeholder Content Section */}
						<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
								<motion.div
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className="p-12 rounded-[2.5rem] bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 space-y-6"
								>
									<h3 className="text-2xl font-black">Coming Soon</h3>
									<p className="text-black/60 dark:text-white/60 leading-relaxed font-medium">
										We're currently crafting a detailed experience for this
										section. Stay tuned as we build something extraordinary for{" "}
										{title}.
									</p>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									className="p-12 rounded-[2.5rem] bg-[#F4C906] text-black space-y-6 flex flex-col justify-center"
								>
									<h3 className="text-2xl font-black">Let's Collaborate</h3>
									<p className="font-bold opacity-80 leading-relaxed">
										Have a project in mind? We'd love to hear from you and see
										how we can help scale your business.
									</p>
								</motion.div>
							</div>
						</section>

						<Testimonials />
						<ContactForm />
					</main>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
