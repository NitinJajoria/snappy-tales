"use client";
import React, { useRef, useCallback, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Button from "@/Components/ui/Button";

export interface CaseStudy {
    id: number;
    clientName: string;
    title: string;
    description: string;
    subDescription: string;
    image: string;
    industry: string;
    accentColor: string;
    logo: string;
}

interface ROISectionProps {
    caseStudies?: CaseStudy[];
    title?: string;
    subtitle?: string;
    ctaText?: string;
    ctaLink?: string;
}

const defaultCaseStudies: CaseStudy[] = [
    {
        id: 1,
        clientName: "McArthurGlen",
        title: "McArthurGlen x Snappy Tales Scaling CRM to 1,500 campaigns/year with +50% click rate",
        description: "From 0 to 1,500: McArthurGlen's CRM Campaigns, Supercharged by Snappy Tales",
        subDescription: "How Snappy Tales Helped McArthurGlen Maximize CRM Impact and Clicks.",
        image: "/engagement/trophy-chess.png",
        industry: "Retail",
        accentColor: "#E3543D",
        logo: "/engagement/trophy-chess.png",
    },
    {
        id: 2,
        clientName: "Ogilvy",
        title: "Empowering Global Teams: How Snappy Tales Helped Ogilvy Social.Lab Scale Efficiently",
        description: "Scaling Global Operations with Precision and Speed",
        subDescription: "From Costly to Cost-Effective: Ogilvy Social.Lab Saves 35% with Snappy Tales",
        image: "/engagement/trophy-chess.png",
        industry: "Advertising",
        accentColor: "#0052CC",
        logo: "/engagement/trophy-chess.png",
    },
    {
        id: 3,
        clientName: "Dentsu",
        title: "Dentsu Aegis Network x Snappy Tales: Revolutionizing Digital Marketing Operations",
        description: "Operations at Scale: A Partnership for the Future",
        subDescription: "How we helped Dentsu optimize their internal workflows for 40% better efficiency.",
        image: "/engagement/trophy-chess.png",
        industry: "Marketing",
        accentColor: "#0052CC",
        logo: "/engagement/trophy-chess.png",
    },
];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex-[0_0_85%] min-w-0 md:flex-[0_0_70%] lg:flex-[0_0_60%] px-3 md:px-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Reduced from min-h-[450px] lg:h-[550px] to min-h-[360px] lg:h-[440px] (20% reduction) */}
            <div className="relative w-full rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl min-h-[360px] lg:h-[440px] transition-transform duration-500">
                {/* Left Pane (Image with hover-scroll) */}
                <div className="w-full lg:w-[55%] h-[220px] lg:h-full relative overflow-hidden bg-gray-50">
                    <motion.div
                        className="absolute top-0 left-0 w-full h-[200%] cursor-pointer"
                        animate={{
                            y: isHovered ? "-50%" : "0%",
                        }}
                        transition={{
                            duration: 4,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src={study.image}
                            alt={study.title}
                            fill
                            className="object-cover object-top p-6 lg:p-10"
                        />
                    </motion.div>

                    {/* Overlay Logo/Industry */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                            <div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white font-bold text-[10px] italic">
                                S
                            </div>
                            <span className="font-bold text-[11px] tracking-tight text-black">
                                Snappy Tales
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-4 right-4 z-10 pointer-events-none">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100">
                            Industry: <span className="text-black">{study.industry}</span>
                        </div>
                    </div>
                </div>

                {/* Right Pane (Content) */}
                <div
                    className="w-full lg:w-[45%] p-6 lg:p-10 flex flex-col justify-between text-black dark:text-white relative"
                    style={{ backgroundColor: study.accentColor }}
                >
                    <div className="relative z-10">
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider mb-6">
                            {study.clientName}
                        </div>

                        <h3 className="text-lg md:text-2xl font-extrabold mb-3 leading-[1.2] tracking-tight">
                            {study.description}
                        </h3>

                        <p className="text-xs md:text-sm font-medium opacity-80 leading-relaxed mb-6">
                            {study.subDescription}
                        </p>
                    </div>

                    <div className="relative z-10 mt-auto">
                        <Link
                            href="#"
                            className="inline-flex items-center gap-2 font-bold text-xs border-b-2 border-white/30 pb-1 hover:border-white transition-all group"
                        >
                            Read more
                            <ExternalLink
                                size={14}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ROISection({
    caseStudies = defaultCaseStudies,
    title = "ROI in action:",
    subtitle = "case studies",
    ctaText = "View all case studies",
    ctaLink = "/client-work/case-studies"
}: ROISectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        loop: true,
        skipSnaps: false,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section
            ref={sectionRef}
            className="py-24 px-4 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
        >
            <div className="w-full">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-20 text-center"
                >
                    <div className="inline-block relative">
                        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl">
                            {title}{" "}
                            <span className="bg-[#F4C906] text-black px-4 py-1 rounded-lg inline-block mx-1">
                                {subtitle}
                            </span>{" "}
                            <br className="hidden md:block" />
                            that highlight real growth
                        </h2>
                    </div>
                </motion.div>

                {/* Embla Carousel Container */}
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-4">
                            {caseStudies.map((study) => (
                                <CaseStudyCard key={study.id} study={study} />
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center gap-6 mt-12">
                        <button
                            onClick={scrollPrev}
                            className="w-14 h-14 rounded-full bg-gray-200 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-[#F4C906] hover:text-black transition-all duration-300 shadow-lg group active:scale-95"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft
                                size={28}
                                className="group-hover:-translate-x-0.5 transition-transform"
                            />
                        </button>
                        <button
                            onClick={scrollNext}
                            className="w-14 h-14 rounded-full bg-gray-200 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-800 flex items-center justify-center text-black dark:text-white hover:bg-[#F4C906] hover:text-black transition-all duration-300 shadow-lg group active:scale-95"
                            aria-label="Next slide"
                        >
                            <ChevronRight
                                size={28}
                                className="group-hover:translate-x-0.5 transition-transform"
                            />
                        </button>
                    </div>
                </div>

                {/* Bottom CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 flex justify-center"
                >
                    <Link href={ctaLink}>
                        <Button className="px-12 py-5 text-sm tracking-widest shadow-2xl shadow-[#F4C906]/30 uppercase flex items-center gap-3">
                            {ctaText}
                            <ChevronRight size={18} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
