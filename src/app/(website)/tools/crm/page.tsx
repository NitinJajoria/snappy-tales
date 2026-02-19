"use client";

import CRMHero from "@/Components/Tools/CRM/CRMHero";
import CRMFeatures from "@/Components/Tools/CRM/CRMFeatures";
import CRMPricing from "@/Components/Tools/CRM/CRMPricing";
import CRMShowcase from "@/Components/Tools/CRM/CRMShowcase";
import CRMBusinessSegments from "@/Components/Tools/CRM/CRMBusinessSegments";
import CRMTrial from "@/Components/Tools/CRM/CRMTrial";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import Footer from "@/Components/Common/Footer";
import { ReactLenis } from "lenis/react";

export default function CRMPage() {
	return (
		<ReactLenis
			root
			options={{
				lerp: 0.05,
				duration: 1.2,
				smoothWheel: true,
			}}
		>
			<main className="overflow-hidden">
				<CRMHero />
				<CRMFeatures />
				<CRMPricing />
				<CRMShowcase />
				<CRMBusinessSegments />
				<CRMTrial />
				<Testimonials />
				<ContactForm />
			</main>
		</ReactLenis>
	);
}
