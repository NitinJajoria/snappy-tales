"use client";

import { useState } from "react";
import { ReactLenis } from "lenis/react";
import PageRevealer from "../../../Revealer";

// Components
import Hero from "@/Components/PricingPage/Hero";
import PricingSection from "@/Components/PricingPage/PricingSection";
import HiringTable from "@/Components/PricingPage/HiringTable";
import TechnologySection from "@/Components/PricingPage/TechnologySection";
import FactorsSection from "@/Components/PricingPage/FactorsSection";
import Credibility from "@/Components/Common/Credibility";
import ROISection from "@/Components/Common/ROISection";
import FloatingPricingToggles from "@/Components/PricingPage/FloatingPricingToggles";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import Footer from "@/Components/Common/Footer";
import { CurrencyProvider } from "@/lib/currency-context";

export default function PricingPage() {
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
					<CurrencyProvider>
						<div className="min-h-screen bg-white dark:bg-black overflow-hidden selection:bg-[#F4C906] selection:text-black transition-colors duration-300">
							<Hero />
							<PricingSection />
							<HiringTable />
							<TechnologySection />
							<FactorsSection />
							<Credibility />
							<ROISection />
							<Testimonials />
							<ContactForm />
							<FloatingPricingToggles showBillingToggle={false} />
						</div>
					</CurrencyProvider>
				</ReactLenis>
			)}
		</PageRevealer>
	);
}

