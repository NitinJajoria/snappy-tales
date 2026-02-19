"use client";

import { useState } from "react";
import { ReactLenis } from "lenis/react";
import PageRevealer from "../../../Revealer";

// Components
import Hero from "@/Components/EngagementModel/Hero";
import OneOffProjects from "@/Components/EngagementModel/OneOffProjects";
import RetainerEngagement from "@/Components/EngagementModel/RetainerEngagement";
import HireTeamFTE from "@/Components/EngagementModel/HireTeamFTE";
import NotSureSection from "@/Components/EngagementModel/NotSureSection";
import Credibility from "@/Components/Common/Credibility";
import ROISection from "@/Components/Common/ROISection";
import FloatingPricingToggles from "@/Components/PricingPage/FloatingPricingToggles";
import Testimonials from "@/Components/Common/Testimonials";
import ContactForm from "@/Components/Common/ContactForm";
import Footer from "@/Components/Common/Footer";
import { CurrencyProvider } from "@/lib/currency-context";

export default function EngagementModelPage() {
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
                            <OneOffProjects />
                            <RetainerEngagement />
                            <HireTeamFTE />
                            <NotSureSection />
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

