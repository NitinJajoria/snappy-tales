"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SEOHiringSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
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
			className="relative w-full py-16 px-4 md:px-12 lg:px-20 bg-white"
		>
			<motion.div
				variants={containerVariants}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : {}}
				transition={{ duration: 0.6 }}
				className="max-w-4xl mx-auto text-center"
			>
				<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
					Want to hire an SEO specialist to work with your in-house team?
					<br />
					<span className="text-blue-600">
						Onboard our experts full-time or part-time.
					</span>
				</h3>

				<button className="mt-6 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
					Know more
				</button>
			</motion.div>
		</section>
	);
}
