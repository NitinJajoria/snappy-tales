"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
	Clock,
	Ban,
	DollarSign,
	Users,
	AlertTriangle,
	Activity,
} from "lucide-react";

const problems = [
	{
		id: "01",
		title: "Hiring Delays",
		description:
			"Recruitment cycles eat into project timelines and stall client work indefinitely.",
		icon: Clock,
	},
	{
		id: "02",
		title: "Quality Control",
		description:
			"Inconsistent output from freelancers damages your agency's hard-earned reputation.",
		icon: AlertTriangle,
	},
	{
		id: "03",
		title: "High Overheads",
		description:
			"Office space, equipment, and benefits drain your margins before you even start.",
		icon: DollarSign,
	},
	{
		id: "04",
		title: "Retention Issues",
		description:
			"Employee turnover disrupts workflows and forces constant retraining cycles.",
		icon: Users,
	},
	{
		id: "05",
		title: "Training Burdens",
		description:
			"Senior staff waste billable hours upskilling new hires instead of delivering.",
		icon: Activity,
	},
	{
		id: "06",
		title: "Operational Chaos",
		description:
			"Managing multiple fragmented teams leads to miscommunication and errors.",
		icon: Ban,
	},
];

export default function ProblemSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 50, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	};

	return (
		<section
			ref={sectionRef}
			className="py-32 px-4 bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors duration-300 relative overflow-hidden"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				{/* Background Gradients/Glows */}
				<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
					<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F4C906]/5 rounded-full blur-[100px]" />
				</div>

				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="mb-20"
					>
						<h4 className="text-[#F4C906] font-black tracking-[0.3em] text-xs uppercase mb-4">
							THE PROBLEM
						</h4>
						<h2 className="text-4xl md:text-5xl font-black leading-none tracking-tighter text-black dark:text-white uppercase">
							SCALING SHOULDN&apos;T <br />
							MEAN <span className="text-[#F4C906]">BURNING OUT</span>
						</h2>
						<div className="mt-8">
							<p className="text-gray-600 dark:text-white/40 max-w-xl text-sm md:text-base font-medium leading-relaxed">
								These are the friction points every growing agency hits and
								exactly where we come in to restore your growth trajectory.
							</p>
						</div>
					</motion.div>

					{/* Cards Grid */}
					<motion.div
						variants={containerVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					>
						{problems.map((problem, index) => (
							<motion.div
								key={index}
								variants={cardVariants}
								whileHover={{ y: -8 }}
								className="p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F4C906]/50 hover:bg-[#F4C906]/5 transition-all duration-500 group relative overflow-hidden"
							>
								{/* Decorative ID */}
								<div className="absolute top-8 right-8 text-4xl font-black text-black/5 dark:text-white/5 group-hover:text-[#F4C906]/10 transition-colors duration-500 italic">
									{problem.id}
								</div>

								<div className="w-14 h-14 rounded-2xl bg-[#F4C906]/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#F4C906] transition-all duration-500">
									<problem.icon className="w-7 h-7 text-[#F4C906] group-hover:text-black transition-colors duration-500" />
								</div>

								<h3 className="text-xl font-black text-black dark:text-white mb-4 group-hover:text-[#F4C906] transition-colors duration-500 uppercase tracking-tight">
									{problem.title}
								</h3>
								<p className="text-gray-600 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/70 transition-colors duration-500 leading-relaxed font-medium text-sm">
									{problem.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
}
