"use client";

import React, { useState } from "react";
import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, Tag, Download } from "lucide-react";
import PageRevealer from "@/app/Revealer";
import ContactForm from "@/Components/Common/ContactForm";
import EbookCard from "@/Components/Ebooks/EbookCard";
import { ebooks, getEbookBySlug } from "@/lib/constants/data";
import { useParams } from "next/navigation";

export default function EbookDetailPage() {
    const [revealComplete, setRevealComplete] = useState(false);
    const params = useParams();
    const slug = params?.slug as string;
    const ebook = getEbookBySlug(slug);

    if (!ebook) {
        return (
            <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-black">E-Book Not Found</h1>
                    <Link href="/resources/ebooks" className="text-[#F4C906] font-bold hover:underline">← Back to E-Books</Link>
                </div>
            </div>
        );
    }

    const formattedDate = new Date(ebook.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const relatedEbooks = ebooks.filter((e: any) => e.slug !== ebook.slug && e.category === ebook.category).slice(0, 3);

    return (
        <PageRevealer onRevealComplete={() => setRevealComplete(true)}>
            {revealComplete && (
                <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
                    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">
                        <div className="max-w-7xl mx-auto px-6 pt-20">
                            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                                <Link href="/resources/ebooks" className="inline-flex items-center gap-2 text-sm font-bold text-black/50 dark:text-white/50 hover:text-[#F4C906] transition-colors group">
                                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                    Back to E-Books
                                </Link>
                            </motion.div>
                        </div>

                        <article className="max-w-7xl mx-auto px-6 pt-8 pb-20">
                            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-8">
                                <div className="flex flex-wrap items-center gap-4">
                                    <span className="px-4 py-1.5 rounded-full bg-[#F4C906] text-black text-xs font-black uppercase tracking-wider">{ebook.category}</span>
                                    <div className="flex items-center gap-1.5 text-black/40 dark:text-white/40">
                                        <BookOpen size={14} />
                                        <span className="text-xs font-bold">{ebook.pages}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-black/40 dark:text-white/40">
                                        <Calendar size={14} />
                                        <span className="text-xs font-bold">{formattedDate}</span>
                                    </div>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-black leading-[1.05] tracking-tighter">{ebook.title}</h1>
                                <p className="text-xl text-black/60 dark:text-white/60 leading-relaxed font-medium max-w-3xl">{ebook.excerpt}</p>

                                {/* Author + Download CTA */}
                                <div className="flex items-center justify-between pt-4 pb-8 border-b border-black/5 dark:border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#F4C906]/40">
                                            <Image src={ebook.author.avatar} alt={ebook.author.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-bold">{ebook.author.name}</p>
                                            <p className="text-sm text-black/40 dark:text-white/40">{ebook.author.role}</p>
                                        </div>
                                    </div>

                                    <Link
                                        href={ebook.downloadUrl}
                                        className="flex items-center gap-2 px-6 py-3 bg-[#F4C906] text-black rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-[#F4C906]/20"
                                    >
                                        <Download size={16} />
                                        Download Free
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden my-12 shadow-2xl shadow-[#F4C906]/5 border border-black/5 dark:border-white/5">
                                <Image src={ebook.image} alt={ebook.title} fill className="object-cover" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-black/70 prose-p:dark:text-white/70 prose-p:leading-relaxed prose-p:font-medium prose-a:text-[#F4C906] prose-a:font-bold prose-a:no-underline hover:prose-a:underline prose-strong:text-black prose-strong:dark:text-white"
                                dangerouslySetInnerHTML={{ __html: ebook.content }}
                            />

                            {/* Download CTA Banner */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-16 p-8 md:p-12 rounded-3xl bg-zinc-900 text-white border border-white/10 text-center space-y-6"
                            >
                                <h3 className="text-2xl md:text-3xl font-black">Ready to dive deeper?</h3>
                                <p className="text-white/60 max-w-lg mx-auto font-medium">Download the full e-book for free and unlock all the frameworks, templates, and insights.</p>
                                <Link
                                    href={ebook.downloadUrl}
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#F4C906] text-black rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-[#F4C906]/20"
                                >
                                    <Download size={18} />
                                    Download E-Book — Free
                                </Link>
                            </motion.div>

                            {ebook.tags && ebook.tags.length > 0 && (
                                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex items-center gap-3 flex-wrap mt-16 pt-8 border-t border-black/5 dark:border-white/10">
                                    <Tag size={16} className="text-[#F4C906]" />
                                    {ebook.tags.map((tag: string) => (
                                        <span key={tag} className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-xs font-bold uppercase tracking-wider border border-black/5 dark:border-white/10">{tag}</span>
                                    ))}
                                </motion.div>
                            )}
                        </article>

                        {relatedEbooks.length > 0 && (
                            <section className="px-6 md:px-12 py-20 bg-gray-50 dark:bg-[#080808]">
                                <div className="max-w-7xl mx-auto">
                                    <div className="flex items-center gap-4 mb-12">
                                        {/* <div className="w-10 h-[2px] bg-[#F4C906]" /> */}
                                        <h2 className="text-2xl font-black tracking-tight">Related E-Books</h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {relatedEbooks.map((re: any, i: number) => (
                                            <EbookCard key={re.slug} slug={re.slug} title={re.title} excerpt={re.excerpt} category={re.category} author={re.author} date={re.date} pages={re.pages} image={re.image} downloadUrl={re.downloadUrl} index={i} />
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
