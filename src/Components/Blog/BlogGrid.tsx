"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogCard from "./BlogCard";

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

interface BlogGridProps {
    posts: BlogPost[];
    activeCategory: string;
}

export default function BlogGrid({ posts, activeCategory }: BlogGridProps) {
    const filteredPosts =
        activeCategory === "All"
            ? posts.filter((p) => !p.featured)
            : posts.filter(
                (p) => p.category === activeCategory && !p.featured
            );

    return (
        <section className="px-6 md:px-12 py-12 md:py-20">
            <div className="max-w-7xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between mb-12"
                >
                    <div className="flex items-center gap-4">
                        {/* <div className="w-10 h-[2px] bg-[#F4C906]" /> */}
                        <h2 className="text-2xl font-black tracking-tight">
                            {activeCategory === "All" ? "All Articles" : activeCategory}
                        </h2>
                        <span className="text-sm text-black/40 dark:text-white/40 font-bold">
                            ({filteredPosts.length})
                        </span>
                    </div>
                </motion.div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredPosts.map((post, i) => (
                            <BlogCard
                                key={post.slug}
                                slug={post.slug}
                                title={post.title}
                                excerpt={post.excerpt}
                                category={post.category}
                                author={post.author}
                                date={post.date}
                                readTime={post.readTime}
                                image={post.image}
                                index={i}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24"
                    >
                        <p className="text-2xl font-black mb-2">No articles yet</p>
                        <p className="text-black/50 dark:text-white/50 font-medium">
                            We&apos;re crafting expert content for this category. Stay tuned!
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
