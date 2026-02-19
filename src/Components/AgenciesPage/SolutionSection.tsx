"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/Components/ui/Button";

const solutions = [
	{
		id: "01",
		title: "Dedicated Teams",
		description:
			"Skilled professionals as a seamless extension of your agency.",
	},
	{
		id: "02",
		title: "Cost Efficiency",
		description: "Reduce overheads by up to 60% without compromising quality.",
	},
	{
		id: "03",
		title: "Fast Onboarding",
		description: "Get your team up and running in days, not months.",
	},
	{
		id: "04",
		title: "Quality Assurance",
		description:
			"Rigorous testing and code reviews ensure pixel-perfect delivery.",
	},
	{
		id: "05",
		title: "Scalability",
		description: "Scale your team up or down instantly based on project flow.",
	},
];

export default function SolutionSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
			},
		},
	};

	const stepVariants = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
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
			className="py-32 px-4 bg-white dark:bg-black text-black dark:text-white overflow-hidden relative"
		>
			{/* Background decorative text "SO" as seen in image */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-[#F4C906]/5 pointer-events-none select-none leading-none">
				SO
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-7xl mx-auto relative z-10"
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="text-right mb-24"
				>
					<h4 className="text-[#F4C906] font-black tracking-[0.3em] text-xs uppercase mb-4">
						THE SOLUTION
					</h4>
					<h2 className="text-4xl md:text-5xl font-black leading-none tracking-tighter uppercase">
						SAY YES TO <br />
						<span className="text-[#F4C906]">SMART OUTSOURCING</span>
					</h2>
					<p className="text-gray-600 dark:text-white/40 mt-6 max-w-md ml-auto text-sm md:text-base font-medium leading-relaxed">
						Not cost-cutting. Growth engineering. Here&apos;s how we become the
						invisible engine behind your agency.
					</p>
				</motion.div>

				{/* Steps Container */}
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
				>
					{solutions.map((item, index) => (
						<motion.div
							key={index}
							variants={stepVariants}
							whileHover={{ y: -10 }}
							className="relative h-[320px] bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F4C906] hover:bg-[#F4C906]/5 rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 group cursor-default"
						>
							<div className="space-y-4">
								<div className="text-6xl font-black text-black/5 dark:text-white/5 group-hover:text-[#F4C906]/20 transition-colors duration-500 italic">
									{item.id}
								</div>
								<h3 className="text-xl font-black text-black dark:text-white group-hover:text-[#F4C906] transition-colors duration-500 uppercase tracking-tight">
									{item.title}
								</h3>
							</div>

							<p className="text-sm text-gray-600 dark:text-white/40 group-hover:text-gray-700 dark:group-hover:text-white/70 transition-colors duration-500 leading-relaxed font-medium">
								{item.description}
							</p>

							{/* Bottom indicator */}
							<div className="absolute inset-x-8 bottom-0 h-1 bg-[#F4C906] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.8 }}
					className="mt-20 flex justify-center"
				>
					<Button className="px-10 py-5 text-sm flex items-center gap-3 uppercase tracking-widest shadow-2xl shadow-[#F4C906]/20">
						Build Your Team
						<ArrowRight size={20} />
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
