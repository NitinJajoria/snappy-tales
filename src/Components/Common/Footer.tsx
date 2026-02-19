"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Send, ArrowUp } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { contactInfo, socialLinks } from "@/Components/ContactUs/contactInfo";
import Button from "@/Components/ui/Button";

export default function Footer() {
	const [email, setEmail] = useState("");
	const [isSubscribed, setIsSubscribed] = useState(false);
	const [isSubscribing, setIsSubscribing] = useState(false);
	const footerRef = useRef<HTMLElement>(null);
	const isInView = useInView(footerRef, { once: true, amount: 0.1 });

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		if (email && !isSubscribing) {
			setIsSubscribing(true);
			await new Promise((resolve) => setTimeout(resolve, 1500));

			console.log("Subscribing email:", email);
			setIsSubscribed(true);
			setIsSubscribing(false);

			setTimeout(() => {
				setIsSubscribed(false);
				setEmail("");
			}, 3000);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const footerSections = [
		{
			title: "Services",
			links: [
				{
					name: "Website & App Dev",
					href: "/services/website-app-development",
				},
				{
					name: "Branding & UI/UX",
					href: "/services/branding-ui-ux-design",
				},
				{ name: "Marketing & Growth", href: "/services/marketing-growth" },
				{
					name: "GTM & Scaling",
					href: "/services/gtm-scaling-strategy",
				},
				{
					name: "Investor Support",
					href: "/services/accelerator-investor-connect",
				},
			],
		},
		{
			title: "Industries",
			links: [
				{ name: "Startups", href: "/industries/startups" },
				{ name: "SaaS", href: "/industries/saas" },
				{ name: "D2C & E-com", href: "/industries/d2c" },
				{ name: "Enterprises", href: "/industries/enterprises" },
			],
		},
		{
			title: "Tools",
			links: [
				{ name: "CRM Solutions", href: "/tools/crm" },
				{ name: "AI Automation", href: "/tools/ai-automation" },
				{ name: "Analytics Hub", href: "/tools/analytics" },
			],
		},
		{
			title: "Resources",
			links: [
				{ name: "Success Blog", href: "/resources/blog" },
				// { name: "Video Tutorials", href: "/resources/videos" },
				{ name: "Deep Dives", href: "/resources/ebooks" },
				{ name: "Latest News", href: "/resources/news" },
			],
		},
		{
			title: "Company",
			links: [
				{ name: "Agencies", href: "/agencies" },
				{ name: "Case Studies", href: "/client-work/case-studies" },
				{ name: "Portfolio", href: "/client-work/portfolio" },
				{ name: "Wall of Love", href: "/client-work/testimonials" },
				{ name: "Pricing", href: "/pricing" },
				{ name: "Contact", href: "/contact" },
			],
		},
	];

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

	return (
		<motion.footer
			ref={footerRef}
			initial={{ opacity: 0 }}
			animate={isInView ? { opacity: 1 } : {}}
			transition={{ duration: 0.8 }}
			className="bg-white dark:bg-black text-black dark:text-white border-t border-black/5 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
		>
			{/* Background Decorative Elements */}
			<motion.div
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.05, 0.08, 0.05],
					x: [0, 50, 0],
				}}
				transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
				className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F4C906]/5 blur-[120px] rounded-full pointer-events-none"
			/>
			<motion.div
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.05, 0.07, 0.05],
					x: [0, -30, 0],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: "easeInOut",
					delay: 1,
				}}
				className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"
			/>

			<div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
				{/* Top Section - Newsletter & Brand */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-black/5 dark:border-white/10">
					{/* Left - Brand & Socials */}
					<div className="lg:col-span-5 space-y-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6 }}
							whileHover="hover"
							className="flex items-center gap-3 cursor-pointer"
						>
							<motion.div
								variants={{
									hover: { scale: 1.1, rotate: 5 },
								}}
								className="relative group"
							>
								<div className="absolute -inset-2 bg-[#F4C906]/20 rounded-xl blur-lg group-hover:bg-[#F4C906]/30 transition-all" />
								<svg
									width="48"
									height="48"
									viewBox="0 0 32 32"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="relative"
								>
									<path
										d="M4 8C4 5.79086 5.79086 4 8 4H12C14.2091 4 16 5.79086 16 8V12C16 14.2091 14.2091 16 12 16H8C5.79086 16 4 14.2091 4 12V8Z"
										fill="currentColor"
									/>
									<motion.path
										variants={{
											hover: { fill: "#fff" },
										}}
										d="M20 4H24C26.2091 4 28 5.79086 28 8V12C28 14.2091 26.2091 16 24 16H20C17.7909 16 16 14.2091 16 12V8C16 5.79086 17.7909 4 20 4Z"
										fill="#F4C906"
									/>
									<motion.path
										variants={{
											hover: { fill: "#fff" },
										}}
										d="M4 20C4 17.7909 5.79086 16 8 16H12C14.2091 16 16 17.7909 16 20V24C16 26.2091 14.2091 28 12 28H8C5.79086 28 4 26.2091 4 24V20Z"
										fill="#F4C906"
									/>
								</svg>
							</motion.div>
							<motion.span
								variants={{
									hover: { x: 5, color: "#F4C906" },
								}}
								className="text-3xl font-black tracking-tighter transition-colors"
							>
								SNAPPY TALES
							</motion.span>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={isInView ? { opacity: 1, y: 0 } : {}}
							transition={{ duration: 0.6, delay: 0.2 }}
							className="text-gray-600 dark:text-gray-400 text-xl font-medium leading-relaxed max-w-md"
						>
							Your Growth, Our Mission. Empowering businesses with cutting-edge
							digital solutions and strategic scaling.
						</motion.p>

						{/* Social Links */}
						<motion.div
							variants={containerVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="flex items-center gap-4"
						>
							{socialLinks.map((social, idx) => (
								<motion.a
									key={idx}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									variants={itemVariants}
									whileHover={{
										y: -5,
										scale: 1.1,
										rotate: idx % 2 === 0 ? 5 : -5,
									}}
									className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-[#F4C906] hover:text-black transition-all duration-300 shadow-sm border border-black/5 dark:border-white/5"
								>
									{social.icon}
								</motion.a>
							))}
						</motion.div>
					</div>

					{/* Right - Newsletter & Contact */}
					<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
						{/* Newsletter */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="space-y-6"
						>
							<h3 className="text-2xl font-black">Stay Ahead.</h3>
							<p className="text-gray-600 dark:text-gray-400 font-medium">
								Get the latest industry insights and scaling tips delivered to
								your inbox.
							</p>
							<form onSubmit={handleSubscribe} className="relative group">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									className="w-full px-6 py-4 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl text-black dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#F4C906] transition-all"
									required
								/>
								<Button
									className="!absolute right-2 top-2 bottom-2 px-6 bg-black dark:bg-white text-white dark:text-black text-sm flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed !rounded-xl"
									onClick={handleSubscribe}
								>
									{isSubscribed ? "DONE" : isSubscribing ? "..." : "JOIN"}
									{!isSubscribed && !isSubscribing && <Send size={16} />}
									{isSubscribing && (
										<motion.div
											animate={{ rotate: 360 }}
											transition={{
												duration: 1,
												repeat: Infinity,
												ease: "linear",
											}}
										>
											<Send size={16} />
										</motion.div>
									)}
								</Button>
							</form>
							<AnimatePresence>
								{isSubscribed && (
									<motion.p
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0 }}
										className="text-[#F4C906] text-sm font-bold flex items-center gap-2"
									>
										<span className="w-2 h-2 bg-[#F4C906] rounded-full animate-pulse" />
										Thanks for joining our community!
									</motion.p>
								)}
							</AnimatePresence>
						</motion.div>

						{/* Quick Contact */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={isInView ? { opacity: 1, x: 0 } : {}}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="space-y-6"
						>
							<h3 className="text-2xl font-black">Get in Touch.</h3>
							<div className="space-y-4">
								{contactInfo.map((info, idx) => (
									<a
										key={idx}
										href={info.href}
										target={info.href.startsWith("http") ? "_blank" : undefined}
										rel={
											info.href.startsWith("http")
												? "noopener noreferrer"
												: undefined
										}
										className="flex items-center gap-4 group cursor-pointer"
									>
										<div className="w-10 h-10 rounded-xl bg-[#F4C906]/10 flex items-center justify-center text-[#F4C906] group-hover:scale-110 group-hover:bg-[#F4C906] group-hover:text-black transition-all duration-300">
											{info.icon}
										</div>
										<span className="font-bold group-hover:text-[#F4C906] transition-colors line-clamp-2 max-w-[250px]">
											{info.text}
										</span>
									</a>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				{/* Middle Section - Links Grid */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 py-20"
				>
					{footerSections.map((section, idx) => (
						<motion.div key={idx} variants={itemVariants} className="space-y-6">
							<h4 className="text-[#F4C906] font-black text-xs uppercase tracking-[0.2em]">
								{section.title}
							</h4>
							<ul className="space-y-4">
								{section.links.map((link, linkIdx) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all font-bold text-sm hover:translate-x-1 inline-block"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>

				{/* Bottom Section - Copyright & Back to Top */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.6 }}
					className="pt-10 border-t border-black/5 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-8"
				>
					<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
						<p className="text-gray-400 font-bold text-sm">
							© {new Date().getFullYear()} Snappy Tales. All rights reserved.
						</p>
						<div className="flex gap-6 text-xs font-black uppercase tracking-widest">
							<Link
								href="/legal/privacy"
								className="text-gray-400 hover:text-[#F4C906] transition-colors"
							>
								Privacy
							</Link>
							<Link
								href="/legal/terms"
								className="text-gray-400 hover:text-[#F4C906] transition-colors"
							>
								Terms
							</Link>
						</div>
					</div>

					<Button
						onClick={scrollToTop}
						className="flex items-center gap-3 px-6 py-3 !rounded-2xl bg-black dark:bg-white text-white dark:text-black text-xs tracking-widest shadow-xl"
					>
						BACK TO TOP
						{/* <ArrowUp
							size={16}
							className="group-hover:-translate-y-1 transition-transform"
						/> */}
					</Button>
				</motion.div>
			</div>
		</motion.footer>
	);
}
