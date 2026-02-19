"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, Newspaper } from "lucide-react";
import PageRevealer from "@/app/Revealer";
import ContactForm from "@/Components/Common/ContactForm";
import NewsCard from "@/Components/News/NewsCard";
import { newsPosts, getNewsPostBySlug } from "@/lib/constants/data";
import { useParams } from "next/navigation";

export default function NewsDetailPage() {
    const [revealComplete, setRevealComplete] = useState(false);
    const params = useParams();
    const slug = params?.slug as string;
    const post = getNewsPostBySlug(slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black">Article Not Found</h1>
                    <Link href="/resources/news" className="text-[#F4C906] font-bold hover:underline">← Back to News</Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const relatedPosts = newsPosts.filter((p: any) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

    return (
        <PageRevealer onRevealComplete={() => setRevealComplete(true)}>
            {revealComplete && (
                <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
                    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">
                        <div className="max-w-7xl mx-auto px-6 pt-20">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                                <Link href="/resources/news" className="inline-flex items-center gap-2 text-sm font-bold text-black/50 dark:text-white/50 hover:text-[#F4C906] transition-colors group">
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    Back to News
                                </Link>
                            </motion.div>
                        </div>

                        <article className="max-w-7xl mx-auto px-6 pt-8 pb-20">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="px-4 py-1.5 rounded-full bg-[#F4C906] text-black text-xs font-black uppercase tracking-wider">{post.category}</span>
                                    {post.source && (
                                        <div className="flex items-center gap-1.5">
                                            <Newspaper size={14} className="text-[#F4C906]" />
                                            <span className="text-xs font-bold text-black/60 dark:text-white/60">{post.source}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-1.5 text-black/40 dark:text-white/40">
                                        <Calendar size={14} />
                                        <span className="text-xs font-bold">{formattedDate}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-black/40 dark:text-white/40">
                                        <Clock size={14} />
                                        <span className="text-xs font-bold">{post.readTime}</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter">{post.title}</h1>
                                <p className="text-xl text-black/60 dark:text-white/60 leading-relaxed font-medium max-w-3xl">{post.excerpt}</p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden my-12 shadow-2xl shadow-[#F4C906]/5 border border-black/5 dark:border-white/5">
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-black/70 prose-p:dark:text-white/70 prose-p:leading-relaxed prose-p:font-medium prose-a:text-[#F4C906] prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-strong:dark:text-white"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {post.tags && post.tags.length > 0 && (
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 flex-wrap mt-16 pt-8 border-t border-black/5 dark:border-white/10">
                                    <Tag size={16} className="text-[#F4C906]" />
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-xs font-bold uppercase tracking-wider border border-black/5 dark:border-white/10">{tag}</span>
                                    ))}
                                </motion.div>
                            )}
                        </article>

                        {relatedPosts.length > 0 && (
                            <section className="px-6 md:px-12 py-20 bg-gray-50 dark:bg-[#080808]">
                                <div className="max-w-7xl mx-auto">
                                    <div className="flex items-center gap-4 mb-12">
                                        {/* <div className="w-10 h-[2px] bg-[#F4C906]" /> */}
                                        <h2 className="text-2xl font-black tracking-tight">Related News</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {relatedPosts.map((rp: any, i: number) => (
                                            <NewsCard key={rp.slug} slug={rp.slug} title={rp.title} excerpt={rp.excerpt} category={rp.category} date={rp.date} readTime={rp.readTime} image={rp.image} source={rp.source} index={i} />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}

                        <ContactForm />
                    </main>
                </ReactLenis>
            )}
        </PageRevealer>
    );
}
