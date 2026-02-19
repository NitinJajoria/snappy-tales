"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import EbookCard from "@/Components/Ebooks/EbookCard";
import FeaturedEbook from "@/Components/Ebooks/FeaturedEbook";
import ContactForm from "@/Components/Common/ContactForm";
import { ebooks, ebookCategories } from "@/lib/constants/data";

export default function EbooksPage() {
	const [revealComplete, setRevealComplete] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");

	const featuredEbook = ebooks.find((e: any) => e.featured);

	const filteredEbooks =
		activeCategory === "All"
			? ebooks.filter((e: any) => !e.featured)
			: ebooks.filter((e: any) => e.category === activeCategory && !e.featured);

	return (
		<PageRevealer onRevealComplete={() => setRevealComplete(true)}>
			{revealComplete && (
				<ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
					<main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">
						{/* Hero */}
						<section className="relative py-20 px-6 md:px-12 overflow-hidden">
							<div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#F4C906]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
							<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

							<div className="max-w-7xl mx-auto">
								<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
									<span className="text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase">Resources</span>
									<h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">Deep Dives</h1>
									<p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl font-medium leading-relaxed">
										Comprehensive ebooks and whitepapers on scaling startups, GTM strategies, and product engineering.
									</p>
								</motion.div>

								<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap gap-3 mt-12">
									{ebookCategories.map((category: string) => (
										<button
											key={category}
											onClick={() => setActiveCategory(category)}
											className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${activeCategory === category
												? "bg-[#F4C906] text-black border-[#F4C906] shadow-lg shadow-[#F4C906]/20"
												: "bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 border-black/5 dark:border-white/10 hover:border-[#F4C906]/50 hover:text-black dark:hover:text-white"
												}`}
										>
											{category}
										</button>
									))}
								</motion.div>
							</div>
						</section>

						{/* Featured */}
						{featuredEbook && activeCategory === "All" && (
							<FeaturedEbook
								slug={featuredEbook.slug}
								title={featuredEbook.title}
								excerpt={featuredEbook.excerpt}
								category={featuredEbook.category}
								author={featuredEbook.author}
								date={featuredEbook.date}
								pages={featuredEbook.pages}
								image={featuredEbook.image}
							/>
						)}

						{/* Grid */}
						<section className="px-6 md:px-12 py-12 md:py-20">
							<div className="max-w-7xl mx-auto">
								<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-between mb-12">
									<div className="flex items-center gap-4">
										{/* <div className="w-10 h-[2px] bg-[#F4C906]" /> */}
										<h2 className="text-2xl font-black tracking-tight">{activeCategory === "All" ? "All E-Books" : activeCategory}</h2>
										<span className="text-sm text-black/40 dark:text-white/40 font-bold">({filteredEbooks.length})</span>
									</div>
								</motion.div>

								<AnimatePresence mode="wait">
									<motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
										{filteredEbooks.map((ebook: any, i: number) => (
											<EbookCard key={ebook.slug} slug={ebook.slug} title={ebook.title} excerpt={ebook.excerpt} category={ebook.category} author={ebook.author} date={ebook.date} pages={ebook.pages} image={ebook.image} downloadUrl={ebook.downloadUrl} index={i} />
										))}
									</motion.div>
								</AnimatePresence>

								{filteredEbooks.length === 0 && (
									<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
										<p className="text-2xl font-black mb-2">No e-books yet</p>
										<p className="text-black/50 dark:text-white/50 font-medium">We&apos;re crafting deep dives for this category. Stay tuned!</p>
									</motion.div>
								)}
							</div>
						</section>

						<ContactForm />
					</main>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
