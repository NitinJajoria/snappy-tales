"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCurrency } from "@/lib/currency-context";
import { User, ShieldCheck, Briefcase, Palette } from "lucide-react";
import Button from "@/Components/ui/Button";

export default function HiringTable() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
	const { currency, setCurrency, formatPrice } = useCurrency();

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
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	const roles = [
		{
			title: "Web developer",
			partTime: 1500,
			fullTime: 2500,
			icon: <User className="w-5 h-5" />,
		},
		{
			title: "QA specialist",
			partTime: 1200,
			fullTime: 2000,
			icon: <ShieldCheck className="w-5 h-5" />,
		},
		{
			title: "Project manager",
			partTime: 1800,
			fullTime: 3000,
			icon: <Briefcase className="w-5 h-5" />,
		},
		{
			title: "Designer",
			partTime: 1400,
			fullTime: 2400,
			icon: <Palette className="w-5 h-5" />,
		},
	];

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-24 px-4 md:px-12 lg:px-20 bg-[#F4C906] dark:bg-[#F4C906]/90 transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
			>
				<div className="max-w-6xl mx-auto">
					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-12">
						<motion.div
							variants={itemVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="space-y-4"
						>
							<h2 className="text-4xl md:text-5xl font-extrabold text-black">
								Hire a dedicated
								<br />
								managed web expert
							</h2>
							<p className="text-black/80 text-lg max-w-xl">
								Flexible hiring options for various roles. Enhance your team with
								our specialists who work as a seamless extension.
							</p>
						</motion.div>

						{/* Currency Toggle */}
						<motion.div
							variants={itemVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="flex items-center gap-2 bg-black/10 p-1 rounded-xl border border-black/20"
						>
							<button
								onClick={() => setCurrency("USD")}
								className={`px-6 py-2 rounded-lg font-bold transition-all ${currency === "USD"
										? "bg-black text-[#F4C906] shadow-lg"
										: "text-black/60 hover:text-black"
									}`}
							>
								USD
							</button>
							<button
								onClick={() => setCurrency("INR")}
								className={`px-6 py-2 rounded-lg font-bold transition-all ${currency === "INR"
										? "bg-black text-[#F4C906] shadow-lg"
										: "text-black/60 hover:text-black"
									}`}
							>
								INR
							</button>
						</motion.div>
					</div>

					{/* Pricing Table */}
					<motion.div
						variants={itemVariants}
						initial="hidden"
						animate={isInView ? "visible" : "hidden"}
						className="overflow-hidden rounded-3xl bg-white/40 backdrop-blur-sm border border-black/10 shadow-xl"
					>
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-black text-[#F4C906]">
										<th className="py-6 px-8 font-extrabold text-xl uppercase tracking-wider">Role</th>
										<th className="py-6 px-8 text-center font-extrabold text-xl uppercase tracking-wider border-l border-white/10">Part Time</th>
										<th className="py-6 px-8 text-center font-extrabold text-xl uppercase tracking-wider border-l border-white/10">Full Time</th>
									</tr>
								</thead>
								<tbody>
									{roles.map((role, index) => (
										<motion.tr
											key={index}
											whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
											className="border-b border-black/10 last:border-0 transition-colors"
										>
											<td className="py-6 px-8 font-bold text-black flex items-center gap-4">
												<div className="p-2 bg-black text-[#F4C906] rounded-lg">
													{role.icon}
												</div>
												{role.title}
											</td>
											<td className="py-6 px-8 text-center font-black text-black text-lg border-l border-black/5">
												{formatPrice(role.partTime)}
											</td>
											<td className="py-6 px-8 text-center font-black text-black text-lg border-l border-black/5">
												{formatPrice(role.fullTime)}
											</td>
										</motion.tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>

					{/* Footer Note & CTA */}
					<div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
						<motion.p
							variants={itemVariants}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							className="text-black/60 font-medium"
						>
							* All prices are starting from and may vary based on specific requirements.
						</motion.p>
						<motion.div variants={itemVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
							<Button variant="dark" className="cursor-pointer">
								HIRE DEDICATED EXPERT
							</Button>
						</motion.div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}
