"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import NewsCard from "@/Components/News/NewsCard";
import FeaturedNews from "@/Components/News/FeaturedNews";
import ContactForm from "@/Components/Common/ContactForm";
import { newsPosts, newsCategories } from "@/lib/constants/data";

export default function NewsPage() {
	const [revealComplete, setRevealComplete] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");

	const featuredPost = newsPosts.find((p: any) => p.featured);

	const filteredPosts =
		activeCategory === "All"
			? newsPosts.filter((p: any) => !p.featured)
			: newsPosts.filter((p: any) => p.category === activeCategory && !p.featured);

	return (
		<PageRevealer onRevealComplete={() => setRevealComplete(true)}>
			{revealComplete && (
				<ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
					<main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">
						{/* Hero */}
						<section className="relative py-20 px-6 md:px-12 overflow-hidden">
							<div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#F4C906]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
							<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

							<div className="max-w-7xl mx-auto">
								<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
									<span className="text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase">Resources</span>
									<h1 className="text-5xl md:text-8xl font-black leading-tight tracking-tighter">Latest News</h1>
									<p className="text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl font-medium leading-relaxed">
										Stay updated with the latest company announcements, industry trends, and milestone celebrations.
									</p>
								</motion.div>

								{/* Category Filter */}
								<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex flex-wrap gap-3 mt-12">
									{newsCategories.map((category: string) => (
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
						{featuredPost && activeCategory === "All" && (
							<FeaturedNews
								slug={featuredPost.slug}
								title={featuredPost.title}
								excerpt={featuredPost.excerpt}
								category={featuredPost.category}
								date={featuredPost.date}
								readTime={featuredPost.readTime}
								image={featuredPost.image}
								source={featuredPost.source}
							/>
						)}

						{/* Grid */}
						<section className="px-6 md:px-12 py-12 md:py-20">
							<div className="max-w-7xl mx-auto">
								<motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center justify-between mb-12">
									<div className="flex items-center gap-4">
										{/* <div className="w-10 h-[2px] bg-[#F4C906]" /> */}
										<h2 className="text-2xl font-black tracking-tight">{activeCategory === "All" ? "All News" : activeCategory}</h2>
										<span className="text-sm text-black/40 dark:text-white/40 font-bold">({filteredPosts.length})</span>
									</div>
								</motion.div>

								<AnimatePresence mode="wait">
									<motion.div key={activeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
										{filteredPosts.map((post: any, i: number) => (
											<NewsCard key={post.slug} slug={post.slug} title={post.title} excerpt={post.excerpt} category={post.category} date={post.date} readTime={post.readTime} image={post.image} source={post.source} index={i} />
										))}
									</motion.div>
								</AnimatePresence>

								{filteredPosts.length === 0 && (
									<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
										<p className="text-2xl font-black mb-2">No news yet</p>
										<p className="text-black/50 dark:text-white/50 font-medium">Stay tuned for updates in this category!</p>
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
