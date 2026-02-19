"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import PageRevealer from "@/app/Revealer";
import BlogHero from "@/Components/Blog/BlogHero";
import BlogGrid from "@/Components/Blog/BlogGrid";
import FeaturedPost from "@/Components/Blog/FeaturedPost";
import ContactForm from "@/Components/Common/ContactForm";
import { blogPosts } from "@/lib/constants/data";

export default function BlogPage() {
	const [revealComplete, setRevealComplete] = useState(false);
	const [activeCategory, setActiveCategory] = useState("All");

	const featuredPost = blogPosts.find((p: any) => p.featured);

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
						<BlogHero
							activeCategory={activeCategory}
							onCategoryChange={setActiveCategory}
						/>

						{featuredPost && activeCategory === "All" && (
							<FeaturedPost
								slug={featuredPost.slug}
								title={featuredPost.title}
								excerpt={featuredPost.excerpt}
								category={featuredPost.category}
								author={featuredPost.author}
								date={featuredPost.date}
								readTime={featuredPost.readTime}
								image={featuredPost.image}
							/>
						)}

						<BlogGrid posts={blogPosts as any} activeCategory={activeCategory} />

						<ContactForm />
					</main>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
