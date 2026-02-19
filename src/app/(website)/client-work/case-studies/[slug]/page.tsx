"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageRevealer from "../../../../Revealer";

// Data
import { getCaseStudyBySlug } from "@/lib/case-studies";

// Components
import DetailHero from "@/Components/CaseStudyDetail/DetailHero";
import AboutClient from "@/Components/CaseStudyDetail/AboutClient";
import Challenge from "@/Components/CaseStudyDetail/Challenge";
import Solution from "@/Components/CaseStudyDetail/Solution";
import DetailROI from "@/Components/CaseStudyDetail/DetailROI";
import Results from "@/Components/CaseStudyDetail/Results";
import RoadAhead from "@/Components/CaseStudyDetail/RoadAhead";
import Footer from "@/Components/Common/Footer";

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudyDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [revealComplete, setRevealComplete] = useState(false);

    const caseStudy = getCaseStudyBySlug(slug);

    // Similar lenis sync effect as Home page
    useEffect(() => {
        if (!revealComplete) return;

        const syncLenisWithGSAP = () => {
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop(value) {
                    if (value !== undefined) {
                        window.lenis?.scrollTo(value);
                    } else {
                        return window.lenis?.scroll?.instance?.scroll?.y || 0;
                    }
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                },
            });

            const update = () => ScrollTrigger.update();
            window.lenis?.on("scroll", update);
            ScrollTrigger.addEventListener("refresh", update);
            ScrollTrigger.refresh();

            return () => {
                window.lenis?.off("scroll", update);
                ScrollTrigger.removeEventListener("refresh", update);
            };
        };

        const timer = setTimeout(syncLenisWithGSAP, 300);
        return () => clearTimeout(timer);
    }, [revealComplete]);

    if (!caseStudy) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                        Case Study Not Found
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        The case study you're looking for doesn't exist.
                    </p>
                    <a
                        href="/client-work/case-studies"
                        className="px-6 py-3 bg-[#F4C906] text-black font-semibold rounded-full hover:bg-[#e5e9b5] transition-colors"
                    >
                        View All Case Studies
                    </a>
                </div>
            </div>
        );
    }

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
                    onScroll={() => ScrollTrigger.update()}
                >
                    <div className="min-h-screen bg-white dark:bg-black overflow-hidden selection:bg-[#F4C906] selection:text-black">
                        <DetailHero caseStudy={caseStudy} />
                        <AboutClient about={caseStudy.about} client={caseStudy.client} />
                        <Challenge challenges={caseStudy.challenges} />
                        <Solution solution={caseStudy.solution} />
                        <DetailROI roi={caseStudy.roi} />
                        <Results
                            results={caseStudy.results}
                            campaignPerformance={caseStudy.campaignPerformance}
                        />
                        <RoadAhead roadAhead={caseStudy.roadAhead} />
                        <Footer />
                    </div>
                </ReactLenis>
            )}
        </PageRevealer>
    );
}
