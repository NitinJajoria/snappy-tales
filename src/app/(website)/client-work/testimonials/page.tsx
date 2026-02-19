"use client";

import React, { useState, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useInView } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import Footer from "@/Components/Common/Footer";
import ContactForm from "@/Components/Common/ContactForm";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

interface Testimonial {
	id: number;
	text: string;
	author: string;
	role: string;
	company: string;
	image?: string;
	rating: number;
}

const testimonials: Testimonial[] = [
	{
		id: 1,
		text: "Partnering with Snappy Tales was one of the best decisions we made. Their team didn't just execute our vision; they enhanced it with strategic insights that drove real growth.",
		author: "Elena Melnykova",
		role: "Marketing Consultant",
		company: "RedPandas",
		image: "/images/avatar/avatar1.png",
		rating: 5,
	},
	{
		id: 2,
		text: "The web development team at Snappy Tales is top-notch. They built a robust, scalable platform for us that handles thousands of concurrent users without a hitch.",
		author: "Tommy Sugishita",
		role: "Product Manager",
		company: "Ranking Coach",
		image: "/images/avatar/avatar2.png",
		rating: 5,
	},
	{
		id: 3,
		text: "We needed a complete brand overhaul, and Snappy Tales delivered beyond our expectations. The new identity feels fresh, modern, and perfectly aligned with our values.",
		author: "Emma Lynch",
		role: "Creative Director",
		company: "Boom Digital",
		image: "/images/avatar/avatar3.png",
		rating: 5,
	},
	{
		id: 4,
		text: "Their attention to detail is unmatched. Every pixel was considered, and the final product is flawless. Highly recommend their design services.",
		author: "Kevin Calgren",
		role: "Founder",
		company: "Javelin",
		image: "/images/avatar/avatar4.png",
		rating: 5,
	},
	{
		id: 5,
		text: "Communication was seamless throughout the project. They kept us in the loop at every stage and were always quick to address any feedback.",
		author: "Cameron West",
		role: "Director",
		company: "Blinds In Print",
		image: "/images/avatar/avatar5.png",
		rating: 5,
	},
	{
		id: 6,
		text: "Snappy Tales helped us increase our conversion rates by 40% through their CRO expertise. The ROI has been incredible.",
		author: "Richard Quinn",
		role: "CEO",
		company: "LiveSwitch",
		rating: 5,
	},
	{
		id: 7,
		text: "A truly collaborative partner. They felt like an extension of our internal team rather than an external agency.",
		author: "Sarah Jenkins",
		role: "VP of Operations",
		company: "Rumi",
		rating: 5,
	},
	{
		id: 8,
		text: "The mobile app they developed for us has received rave reviews from our users. The UX is intuitive and the performance is silky smooth.",
		author: "David Chen",
		role: "CTO",
		company: "Haven Specialty Coffee",
		rating: 5,
	},
	{
		id: 9,
		text: "Expert guidance and execution. They helped us navigate a complex digital transformation with ease.",
		author: "Michelle Tan",
		role: "Head of Digital",
		company: "Airtasker",
		rating: 5,
	},
];

const TestimonialCard = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	return (
		<div
			ref={ref}
			className="break-inside-avoid mb-6 md:mb-8"
		>
			<motion.div initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }} className="group relative bg-zinc-50 dark:bg-zinc-900 border border-black/5 dark:border-white/10 p-8 rounded-[2rem] shadow-lg hover:shadow-xl hover:shadow-[#F4C906]/5 hover:border-[#F4C906]/30 transition-all duration-500">
				{/* Decorative Quote Icon */}
				<div className="absolute top-8 right-8 text-[#F4C906]/10 group-hover:text-[#F4C906]/20 transition-colors duration-500">
					<Quote size={64} fill="currentColor" />
				</div>

				{/* Content */}
				<div className="relative z-10 flex flex-col gap-6">

					{/* Company Badge (Optional if available or just text) */}
					<div className="inline-block px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 text-xs font-bold tracking-wider uppercase text-black/60 dark:text-white/60 w-fit">
						{testimonial.company}
					</div>

					<p className="text-lg md:text-xl font-medium text-black/80 dark:text-white/80 leading-relaxed">
						"{testimonial.text}"
					</p>

					<div className="flex items-center gap-1 text-[#F4C906]">
						{[...Array(testimonial.rating)].map((_, i) => (
							<Star key={i} size={16} fill="currentColor" />
						))}
					</div>

					<div className="flex items-center gap-4 pt-6 border-t border-black/5 dark:border-white/5">
						<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F4C906] to-[#F4C906]/50 p-[2px]">
							<div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden relative">
								{testimonial.image ? (
									<Image
										src={testimonial.image}
										alt={testimonial.author}
										fill
										className="object-cover"
									/>
								) : (
									<div className="w-full h-full flex items-center justify-center font-bold text-[#F4C906]">
										{testimonial.author.charAt(0)}
									</div>
								)}
							</div>
						</div>
						<div>
							<h4 className="font-bold text-black dark:text-white leading-tight">
								{testimonial.author}
							</h4>
							<p className="text-sm font-medium text-black/50 dark:text-white/50">
								{testimonial.role}
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div >
	);
};

export default function TestimonialsPage() {
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
						<section className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
							<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#F4C906]/10 blur-[120px] -z-10 rounded-full" />

							<motion.div
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, ease: "easeOut" }}
								className="max-w-7xl mx-auto"
							>
								<span className="text-center text-xs md:text-sm font-black tracking-[0.3em] text-[#F4C906] uppercase mb-4 block">
									WALL OF LOVE
								</span>
								<h1 className="text-center text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-8">
									CLIENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C906] to-[#F4C906]/50">STORIES.</span>
								</h1>
								<p className="text-center text-lg md:text-xl text-black/60 dark:text-white/60 max-w-7xl mx-auto font-medium leading-relaxed">
									Don't just take our word for it. Here is what our partners have to say about building with Snappy Tales.
								</p>
							</motion.div>
						</section>

						{/* Masonry Grid Section */}
						<section className="px-6 md:px-12 pb-20 max-w-7xl mx-auto">
							<div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
								{testimonials.map((testimonial, index) => (
									<TestimonialCard
										key={testimonial.id}
										testimonial={testimonial}
										index={index}
									/>
								))}
							</div>
						</section>

						{/* CTA / Contact Section Reuse */}
						<ContactForm />
					</main>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
