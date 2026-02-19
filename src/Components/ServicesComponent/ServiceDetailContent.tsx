"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "../ui/Button";
import type { ServiceDetail } from "@/lib/serviceDetails";
import { BOOKING_URL } from "@/lib/constants";
import { ChevronRight, Plus, Minus, ArrowUpRight } from "lucide-react";
import Credibility from "../Common/Credibility";
import ROISection from "../Common/ROISection";
import Testimonials from "../Common/Testimonials";
import ContactForm from "../Common/ContactForm";

// --- Visual Effects ---

const GrainOverlay = () => (
  <div className="fixed inset-0 pointer-events-none opacity-[0.04] dark:opacity-[0.07] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
);

const BackgroundGradient = () => (
  <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#F4C906]/5 blur-[120px]" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[120px]" />
  </div>
);

// --- Sub-Components ---

const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="group relative p-6 rounded-2xl bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm hover:border-[#F4C906]/30 transition-all duration-300">
      <p className="text-4xl md:text-5xl font-black text-black dark:text-white mb-1 tracking-tighter">
        {value}
      </p>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <div className="absolute top-4 right-4 text-[#F4C906] opacity-0 group-hover:opacity-100 transition-opacity">
        <Plus size={16} />
      </div>
    </div>
  )
}


const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-3xl border transition-all duration-300 cursor-pointer group bg-white dark:bg-white/5 backdrop-blur-md p-8 ${isOpen ? 'border-[#F4C906]/50' : 'border-black/5 dark:border-white/5'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white tracking-tight">{title}</h3>
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-[#F4C906] text-black' : 'bg-black/5 dark:bg-white/10 text-black dark:text-white'}`}
        >
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg"
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>

      {!isOpen && (
        <p className="text-gray-500 dark:text-gray-500 text-sm line-clamp-1">
          {description}
        </p>
      )}
    </motion.div>
  );
};

// --- Main Page Component ---

const revealUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const ServiceDetailContent: React.FC<{ service: ServiceDetail }> = ({ service }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="relative min-h-screen text-black dark:text-white selection:bg-[#F4C906] selection:text-black">
      <GrainOverlay />
      <BackgroundGradient />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#F4C906] origin-left z-[100]"
        style={{ scaleX } as any}
      />

      {/* --- HERO --- */}
      <section className="relative px-6 py-10 md:px-12 md:py-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-8 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {/* <span className="w-12 h-[2px] bg-[#F4C906]" /> */}
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#F4C906]">{service.hero.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter"
            >
              {service.hero.heading}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-medium"
            >
              {service.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              <Link href={service.hero.ctaHref}>
                <Button className="h-14 px-8 text-lg rounded-full">
                  {service.hero.ctaLabel}
                </Button>
              </Link>
              {service.hero.secondaryHref && (
                <Link href={service.hero.secondaryHref} className="group flex items-center gap-2 font-bold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  <span>{service.hero.secondaryLabel}</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              )}
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end gap-4">
            {service.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (i * 0.1) }}
              >
                <StatCard value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <section className="py-10 border-y border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-24 whitespace-nowrap">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 items-center"
          >
            {[...Array(4)].flatMap(() => service.marquee).map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#F4C906] mix-blend-difference">{item}</span>
                <div className="w-2 h-2 rounded-full bg-current opacity-20" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- OFFERING SNAPSHOT (BENTO GRID) --- */}
      <section className="py-12 px-6 md:py-20 md:px-12 bg-white dark:bg-[#050505] relative">
        {/* Subtle background gradient */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealUp}
              className="sticky top-32"
            >
              <h4 className="text-[#F4C906] font-bold text-sm uppercase tracking-[0.2em] mb-6">Offering Snapshot</h4>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8 tracking-tighter">
                Precision Crafted <br /> {service.title}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mb-8">
                {service.overview.description}
              </p>
              {/* <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-[#F4C906]/10 border border-black/5 dark:border-white/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div> */}
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {service.overview.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-gray-50/50 dark:bg-zinc-900/50 border border-black/5 dark:border-white/5 hover:border-[#F4C906]/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-all duration-300 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4C906]/10 flex items-center justify-center text-[#F4C906] group-hover:bg-[#F4C906] group-hover:text-black transition-colors shrink-0">
                      <ChevronRight size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-black dark:text-white">{bullet}</h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Comprehensive solution designed for maximum impact.</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES --- */}
      <section className="py-12 px-6 md:py-20 md:px-12 bg-gradient-to-b from-transparent to-black/5 dark:to-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-6">Signature DNA</h2>
            <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Built on pillars of excellence, designed for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <FeatureCard key={i} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      {/* --- THE RHYTHM (TIMELINE) --- */}
      <section className="py-12 px-6 md:py-20 md:px-12 bg-gray-50 dark:bg-[#080808] relative overflow-hidden">
        {/* Radial Gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F4C906]/5 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <h4 className="text-[#F4C906] font-bold text-sm uppercase tracking-[0.2em] mb-4">The Process</h4>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Our Motion</h2>
          </motion.div>

          <div className="relative grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#F4C906]/30 to-transparent dashed-line" />

            {service.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="w-24 h-24 rounded-full bg-[#f4c906] flex items-center justify-center text-4xl font-black text-black mb-8 relative z-10 shadow-lg shadow-[#F4C906]/20 mx-auto lg:mx-0">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 lg:pr-8">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed text-sm">
                  {step.description}
                </p>
                <div className="inline-block p-4 rounded-2xl border border-[#F4C906]/30 bg-[#F4C906]/5 text-[#F4C906] text-xs font-bold uppercase tracking-wider">
                  {step.result}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUTCOMES --- */}
      <section className="py-12 px-6 md:py-20 md:px-12">
        <div className="max-w-[1400px] mx-auto rounded-[3rem] bg-zinc-900 border border-white/10 p-12 md:p-24 relative overflow-hidden text-white shadow-2xl">
          {/* Enhanced Gradient Mesh */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F4C906]/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h4 className="text-[#F4C906] font-bold text-xs uppercase tracking-[0.2em] mb-8">Impact</h4>
              <h2 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter mb-8">
                Outcomes <br /> that Last.
              </h2>
              <p className="text-xl text-gray-400 max-w-md leading-relaxed">
                Measurable results that drive real business growth and long-term value.
              </p>
            </div>
            <div className="grid gap-6 content-center">
              {service.outcomes.map((o, i) => (
                <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors backdrop-blur-md">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#F4C906]" />
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white">{o.title}</h4>
                    <p className="text-gray-400 text-sm">{o.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 px-6 text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4C906]/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12 leading-[0.85]">
            READY TO  <span className="text-[#F4C906]">ASCEND?</span>
          </h2>
          <Link href={BOOKING_URL}>
            <Button className="px-12 py-8 text-2xl rounded-full shadow-2xl shadow-[#F4C906]/20 hover:scale-105 transition-transform">
              Book Discovery Call
            </Button>
          </Link>
        </div>
      </section>

      {/* --- CREDIBILITY --- */}
      <Credibility />

      {/* --- ROI --- */}
      <ROISection />

      {/* --- TESTIMONIALS --- */}
      <Testimonials />

      {/* --- CONTACT FORM --- */}
      <ContactForm />
    </div>
  );
};

export default ServiceDetailContent;