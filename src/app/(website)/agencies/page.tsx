"use client";

import { useState } from "react";
import { ReactLenis } from "lenis/react";
import PageRevealer from "@/app/Revealer";

// Components
import Hero from "@/Components/AgenciesPage/Hero";
import ProblemSection from "@/Components/AgenciesPage/ProblemSection";
import SolutionSection from "@/Components/AgenciesPage/SolutionSection";
import HowItWorks from "@/Components/AgenciesPage/HowItWorks";
import ServicesSection from "@/Components/AgenciesPage/ServicesSection";
import Credibility from "@/Components/Common/Credibility";
import ROISection from "@/Components/Common/ROISection";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import Footer from "@/Components/Common/Footer";

export default function AgenciesPage() {
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
					<div className="min-h-screen bg-white dark:bg-black overflow-hidden selection:bg-[#F4C906] selection:text-black">
						<Hero />
						<ProblemSection />
						<SolutionSection />
						<HowItWorks />
						<ServicesSection />
						<Credibility />
						<ROISection />
						<Testimonials />
						<ContactForm />
					</div>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}
