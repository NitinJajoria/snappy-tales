"use client";
import React, { useState, useRef } from "react";
import {
	ArrowRight,
	Smartphone,
	Layers,
	TrendingUp,
	Zap,
	DollarSign,
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Button from "@/Components/ui/Button";

const services = [
	{
		id: "web-app",
		label: "Website & App Dev",
		title: "WEBSITE & APP DEVELOPMENT",
		description:
			"High-performance web & mobile apps that deliver seamless experiences across all platforms and devices.",
		features: [
			"E-commerce portals (Shopify, WooCommerce)",
			"Custom Web Applications (React, Next.js)",
			"iOS and Android Apps (React Native, Flutter)",
			"Progressive Web Apps (PWAs)",
		],
		icon: Smartphone,
		image: "/images/agencies/website-app-development.jpeg",
	},
	{
		id: "branding",
		label: "Branding & UI/UX",
		title: "BRANDING & UI/UX DESIGN",
		description:
			"Identity and experience design that transforms your brand into a memorable visual journey.",
		features: [
			"Design Systems & Component Libraries",
			"Brand Identity & Visual Language",
			"Wireframing & Prototyping",
			"User Research & Testing",
		],
		icon: Layers,
		image: "/images/agencies/branding-ui-ux.jpeg",
	},
	{
		id: "marketing",
		label: "Marketing & Growth",
		title: "MARKETING & GROWTH",
		description:
			"Performance marketing & SEO strategies that drive measurable growth and customer acquisition.",
		features: [
			"SEO/SEM & Content Strategy",
			"Social Media Marketing",
			"Email & Marketing Automation",
			"Analytics & Performance Tracking",
		],
		icon: TrendingUp,
		image: "/images/agencies/marketing-growth.jpeg",
	},
	{
		id: "gtm",
		label: "GTM & Scaling",
		title: "GO-TO-MARKET & SCALING",
		description:
			"Strategic market entry plans and growth frameworks that accelerate your expansion.",
		features: [
			"Go-to-Market Strategy",
			"Growth Hacking & Experimentation",
			"Market Research & Analysis",
			"Launch Planning & Execution",
		],
		icon: Zap,
		image: "/images/agencies/gtm-scaling.jpeg",
	},
	{
		id: "investor",
		label: "Investor Support",
		title: "FUNDRAISING & INVESTOR SUPPORT",
		description:
			"Pitch decks and fundraising materials designed to captivate investors and close deals.",
		features: [
			"Pitch Deck Design & Storytelling",
			"Financial Modeling & Projections",
			"Investor Relations Materials",
			"Fundraising Strategy & Support",
		],
		icon: DollarSign,
		image: "/images/agencies/investor-support.jpeg",
	},
];

export default function ServicesSection() {
	const [activeTab, setActiveTab] = useState("web-app");
	const activeService = services.find((s) => s.id === activeTab) || services[0];
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<section
			ref={sectionRef}
			className="py-24 px-4 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
		>
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="text-center mb-16"
				>
					<motion.h4
						variants={itemVariants}
						className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2"
					>
						Services
					</motion.h4>
					<motion.h2
						variants={itemVariants}
						className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase"
					>
						EVERYTHING UNDER <br />
						<span className="text-[#F4C906]">ONE ROOF.</span>
					</motion.h2>
					<motion.p
						variants={itemVariants}
						className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
					>
						Corporate websites, microsites, & custom platforms.
					</motion.p>
				</motion.div>

				{/* Tabs */}
				<motion.div
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					variants={containerVariants}
					className="flex flex-wrap justify-center gap-4 mb-16"
				>
					{services.map((service) => (
						<motion.button
							key={service.id}
							variants={itemVariants}
							onClick={() => setActiveTab(service.id)}
							className={`px-6 py-2 rounded-full border transition-all duration-300 text-sm font-bold uppercase tracking-wide
                    ${
											activeTab === service.id
												? "bg-[#F4C906] text-black border-[#F4C906]"
												: "bg-transparent text-gray-400 border-gray-700 hover:border-[#F4C906] hover:text-[#F4C906]"
										}`}
						>
							{service.label}
						</motion.button>
					))}
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 20 }}
							transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							className="space-y-8"
						>
							<div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center text-[#F4C906] mb-6">
								<activeService.icon size={32} />
							</div>

							<h3 className="text-3xl md:text-4xl font-bold tracking-tight">
								{activeService.title}
							</h3>
							<p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg">
								{activeService.description}
							</p>

							<ul className="space-y-3">
								{activeService.features.map((feature, i) => (
									<li
										key={i}
										className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-[#F4C906]" />
										{feature}
									</li>
								))}
							</ul>

							<div className="pt-4">
								<Button
									variant="dark"
									className="px-6 py-3 text-sm flex items-center gap-2"
								>
									Get Pricing <ArrowRight size={18} />
								</Button>
							</div>
						</motion.div>
					</AnimatePresence>

					{/* Right Image Display */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={isInView ? { opacity: 1, scale: 1 } : {}}
						transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
						className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden"
					>
						{/* Image */}
						<AnimatePresence mode="wait">
							<motion.div
								key={activeTab}
								initial={{ opacity: 0, y: 20, rotateX: 10 }}
								animate={{ opacity: 1, y: 0, rotateX: 0 }}
								exit={{ opacity: 0, y: -20, rotateX: -10 }}
								transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
								className="relative z-10 w-full h-full"
							>
								<div className="relative w-full h-full">
									<Image
										src={activeService.image}
										alt={`${activeService.label} image`}
										fill
										sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 600px"
										className="object-cover rounded-3xl"
										priority={activeTab === "web-app"}
									/>
								</div>
							</motion.div>
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
