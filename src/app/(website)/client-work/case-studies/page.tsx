"use client";

import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageRevealer from "../../../Revealer";

// Components
import CaseStudiesHero from "@/Components/CaseStudiesPage/CaseStudiesHero";
import CaseStudiesGrid from "@/Components/CaseStudiesPage/CaseStudiesGrid";
import Footer from "@/Components/Common/Footer";

// Register GSAP plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function CaseStudiesPage() {
    const [revealComplete, setRevealComplete] = useState(false);

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
                        <CaseStudiesHero />
                        <CaseStudiesGrid />
                    </div>
                </ReactLenis>
            )}
        </PageRevealer>
    );
}
