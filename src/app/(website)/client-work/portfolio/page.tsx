"use client";

import React, { useState, useMemo } from "react";
import { ReactLenis } from "lenis/react";
import { motion, AnimatePresence } from "framer-motion";
import PageRevealer from "@/app/Revealer";
import Footer from "@/Components/Common/Footer";
import ContactForm from "@/Components/Common/ContactForm";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Button from "@/Components/ui/Button";

// --- Types ---
interface Project {
	id: number;
	title: string;
	category: string; // Industry
	technology: string;
	description: string;
	image: string;
	link: string;
	color?: string; // Optional accent color for tags/backgrounds
}

// --- Mock Data ---
const projects: Project[] = [
	{
		id: 1,
		title: "Full Stack AI Startup",
		category: "Technology",
		technology: "React",
		description:
			"Capital HUB provides 360' approach on how to build a successful startup. We helped them with full stack development and AI integration.",
		image: "/images/portfolio/ai-startup.png",
		link: "#",
		color: "#F4C906",
	},
	{
		id: 2,
		title: "Capital Hub",
		category: "Fintech",
		technology: "Next.js",
		description:
			"A comprehensive financial platform connecting investors with startups. Features include real-time analytics and secure document sharing.",
		image: "/images/portfolio/capitalhub.png",
		link: "#",
		color: "#F4C906",
	},
	{
		id: 3,
		title: "Safety Online",
		category: "EdTech",
		technology: "WordPress",
		description:
			"An educational platform promoting digital safety for children and parents. Includes interactive modules and progress tracking.",
		image: "/images/portfolio/safetyonline.png",
		link: "#",
	},
	{
		id: 4,
		title: "Parenting Plus",
		category: "Healthcare",
		technology: "Next.js",
		description:
			"A support community and resource hub for new parents. Features expert advice, forums, and personalized content recommendations.",
		image: "/images/portfolio/parenting-plus.png",
		link: "#",
	},
];

// --- Filter Component ---
const FilterDropdown = ({
	label,
	options,
	value,
	onChange,
}: {
	label: string;
	options: string[];
	value: string;
	onChange: (val: string) => void;
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative z-20">
			<button
				onClick={() => setIsOpen(!isOpen)}
				onBlur={() => setTimeout(() => setIsOpen(false), 200)}
				className="flex items-center justify-between w-full md:w-[280px] px-6 py-4 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-full text-left transition-colors hover:border-[#F4C906]"
			>
				<span className={`block truncate ${!value ? "text-gray-500" : "font-semibold"}`}>
					{value || label}
				</span>
				<ChevronDown
					size={16}
					className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ duration: 0.2 }}
						className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-zinc-900 border border-black/5 dark:border-white/5 rounded-3xl shadow-xl overflow-hidden py-2"
					>
						<button
							onClick={() => {
								onChange("");
								setIsOpen(false);
							}}
							className="w-full px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-gray-500"
						>
							All
						</button>
						{options.map((option) => (
							<button
								key={option}
								onClick={() => {
									onChange(option);
									setIsOpen(false);
								}}
								className="w-full px-6 py-3 text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors font-medium"
							>
								{option}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default function PortfolioPage() {
	const [revealComplete, setRevealComplete] = useState(false);
	const [industryFilter, setIndustryFilter] = useState("");
	const [techFilter, setTechFilter] = useState("");

	// Extract unique options
	const industries = useMemo(() => Array.from(new Set(projects.map((p) => p.category))), []);
	const technologies = useMemo(() => Array.from(new Set(projects.map((p) => p.technology))), []);

	const filteredProjects = useMemo(() => {
		return projects.filter((project) => {
			const matchesIndustry = industryFilter ? project.category === industryFilter : true;
			const matchesTech = techFilter ? project.technology === techFilter : true;
			return matchesIndustry && matchesTech;
		});
	}, [industryFilter, techFilter]);

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
					<main className="min-h-screen bg-zinc-50 dark:bg-black text-black dark:text-white transition-colors duration-300 selection:bg-[#F4C906] selection:text-black">

						{/* Header Section */}
						<section className="p-10 px-6 md:px-12 max-w-7xl mx-auto">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="max-w-4xl mx-auto text-4xl md:text-6xl font-black text-center mb-16 leading-tight"
							>
								A sneak peek into some of our{" "}
								<span className="text-[#9333EA] dark:text-[#A855F7]">best works.</span>
							</motion.h1>

							{/* Filters */}
							<div className="flex flex-col md:flex-row justify-center gap-4">
								<FilterDropdown
									label="Filter by industry"
									options={industries}
									value={industryFilter}
									onChange={setIndustryFilter}
								/>
								<FilterDropdown
									label="Filter by technology"
									options={technologies}
									value={techFilter}
									onChange={setTechFilter}
								/>
							</div>
						</section>

						{/* Projects Grid */}
						<section className="px-6 md:px-12 p-10 max-w-7xl mx-auto">
							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
							>
								<AnimatePresence mode="popLayout">
									{filteredProjects.map((project) => (
										<motion.div
											key={project.id}
											initial={{ opacity: 0, scale: 0.9 }}
											animate={{ opacity: 1, scale: 1 }}
											exit={{ opacity: 0, scale: 0.9 }}
											transition={{ duration: 0.4 }}
											className="group relative flex-shrink-0 rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-200 to-zinc-300 dark:from-[#1e1e1e] dark:to-[#000000] p-4 select-none shadow-lg shadow-gray-300/40 dark:shadow-black/50"
										>
											{/* Image Container */}
											<div className="rounded-xl mb-5 overflow-hidden h-[300px]">
												<Image
													src={project.image}
													alt={project.title}
													width={500}
													height={300}
													className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700"
													onError={(e) => {
														const target = e.target as HTMLImageElement;
														target.src = `https://via.placeholder.com/800x500/101010/FFFFFF?text=${encodeURIComponent(project.title)}`;
													}}
												/>
											</div>

											{/* Content Overlay/card */}
											<div className="bg-white/40 dark:bg-white/5 relative -mt-16 backdrop-blur-md rounded-xl p-6 border border-white/40 dark:border-white/10 flex flex-col justify-between gap-4 z-10 transition-colors duration-300">
												<div>
													<h3 className="text-yellow-500 font-black text-xl mb-2">{project.title}</h3>
													<p className="text-gray-800 dark:text-gray-400 text-sm leading-snug line-clamp-2">
														{project.description}
													</p>
												</div>

												<div className="flex items-center justify-between mt-auto pt-2">
													<div className="flex flex-col">
														<span className="text-[10px] font-bold uppercase tracking-wider text-black/50 dark:text-white/30">
															Industry
														</span>
														<span className="text-xs font-bold uppercase tracking-wider text-black/80 dark:text-white/70">
															{project.category}
														</span>
													</div>
													<Button
														href={project.link}
														className="text-xs !py-2 !px-4 shadow-lg shadow-[#F4C906]/20 hover:scale-105 transition-transform"
													>
														View Case Study
													</Button>
												</div>
											</div>
										</motion.div>
									))}
								</AnimatePresence>
							</motion.div>

							{filteredProjects.length === 0 && (
								<div className="text-center py-20 text-gray-500">
									No projects found matching current filters.
								</div>
							)}
						</section>

						<ContactForm />
					</main>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
