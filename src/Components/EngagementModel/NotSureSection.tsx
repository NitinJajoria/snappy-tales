"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Button from "@/Components/ui/Button";

export default function NotSureSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.22, 1, 0.36, 1],
			},
		},
	};

	return (
		<section
			ref={sectionRef}
			className="relative w-full py-20 px-4 md:px-12 lg:px-20 bg-white dark:bg-black transition-colors duration-300"
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto"
			>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
					className="bg-white rounded-3xl p-12 md:p-16 text-center shadow-2xl"
				>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6">
						<span className="text-[#F4C906]">not sure</span>{" "}
						<span className="text-black">which fits you</span>
						<br />
						<span className="text-[#F4C906]">best</span>
						<span className="text-black">?</span>
					</h2>

					<p className="text-gray-600 dark:text-gray-700 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
						Every dollar you invest should deliver measurable returns. You don't
						have to figure it out alone; share your goals with us, and we'll
						recommend the engagement model that delivers the best ROI.
					</p>

					<Button className="cursor-pointer">
						Schedule a call
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
