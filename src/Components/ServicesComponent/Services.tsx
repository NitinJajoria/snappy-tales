"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle2, TrendingUp, Rocket } from "lucide-react";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import Button from "../ui/Button";
import Link from "next/link";
import { serviceDetails } from "@/lib/serviceDetails";
import { BOOKING_URL } from "@/lib/constants";

const mont = Montserrat({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// --- Styled Component Primitives ---

const IridescentBorder = () => (
  <div className="absolute inset-0 rounded-[inherit] p-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
    <div className="w-full h-full rounded-[inherit] bg-gradient-to-br from-[#F4C906] via-white to-transparent" />
  </div>
);

const FloatingPrimitives = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 45, 0],
        opacity: [0.1, 0.3, 0.1]
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-10 left-10 w-24 h-24 border border-[#F4C906]/30 rounded-full"
    />
    <motion.div
      animate={{
        y: [0, 20, 0],
        rotate: [0, -30, 0],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-10 right-10 w-32 h-32 border border-white/20 rounded-lg"
    />
  </div>
);

// Service card images mapped by index
const serviceImages = [
  "/images/services/web-app-development.png",
  "/images/services/branding-ui-ux.png",
  "/images/services/marketing-growth.png",
  "/images/services/gtm-scaling.png",
  "/images/services/investor-support.png",
];

// --- Components ---

const techLogos = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Flutter", color: "#02569B" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Node.js", color: "#339933" },
  { name: "AWS", color: "#FF9900" },
  { name: "Vercel", color: "#FFFFFF" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Python", color: "#3776AB" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Services: React.FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);

  const servicesInView = useInView(servicesRef, { once: true, amount: 0.05 });
  const logosInView = useInView(logosRef, { once: true, amount: 0.3 });
  const whyInView = useInView(whyRef, { once: true, amount: 0.2 });

  const servicesList = serviceDetails.map((service, index) => ({
    ...service,
    id: index + 1,
    description: service.overview.description,
    items: service.overview.bullets,
  }));

  const handleCalendly = () => {
    window.open("https://calendly.com/capitalhub-discovery/meeting-with-ceo", "_blank");
  };

  return (
    <div id="services" className={`relative overflow-hidden ${mont.className} bg-gray-50 dark:bg-black py-10 px-6 md:px-12 transition-colors duration-500`}>

      {/* Background noise/grain overlay simplified for performance */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto space-y-10">

        {/* Sections: Service Cards */}
        <div ref={servicesRef} />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4 mb-10">
            <motion.span variants={cardVariants} className="text-[#F4C906] font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#F4C906]/10 border border-[#F4C906]/20">
              Our Expertise
            </motion.span>
            <motion.h2 variants={cardVariants} className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mt-10">
              Services that <span className="bg-gradient-to-r from-[#F4C906] dark:via-white to-[#F4C906] bg-clip-text text-transparent">Scale</span>.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group relative flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 rounded-[2.5rem] border border-gray-200/60 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-xl hover:shadow-2xl hover:shadow-[#F4C906]/20 hover:border-[#F4C906]/20 transition-all duration-500"
              >
                {/* <IridescentBorder /> */}
                <FloatingPrimitives />

                {/* Left: Illustration */}
                <div className="relative flex-shrink-0 w-full lg:w-[350px] aspect-square lg:aspect-video rounded-[2rem] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-zinc-900 dark:to-black flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Right: Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-[#F4C906] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F4C906]/20 flex items-center justify-center border border-[#F4C906]/30">
                          <CheckCircle2 size={12} className="text-[#F4C906]" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center gap-6">
                    <Link href={`/services/${service.slug}`}>
                      <Button>
                        Explore Service
                      </Button>
                    </Link>
                    <Link href={BOOKING_URL} className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2 hover:gap-3 transition-all underline decoration-[#F4C906] decoration-2 underline-offset-4">
                      Book a Sprint
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Logo Marquee Section */}
        <div ref={logosRef} className="relative py-12 border-y border-gray-200/50 dark:border-white/5">
          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-50 dark:from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-50 dark:from-black to-transparent" />
          </div>

          <div className="space-y-8">
            <p className="text-center text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
              Technical Stack & Tools
            </p>

            <div className="overflow-hidden flex gap-20">
              <motion.div
                animate={{ x: [0, -1200] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-16 whitespace-nowrap px-12 py-4"
              >
                {[...techLogos, ...techLogos, ...techLogos].map((logo, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group cursor-default">
                    <div
                      className="px-6 py-3 rounded-xl border-2 border-gray-200/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm group-hover:scale-110 group-hover:border-[#F4C906]/40 transition-all duration-500"
                      style={{
                        borderColor: `${logo.color}20`,
                      }}
                    >
                      <span
                        className="text-base font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity"
                        style={{
                          color: logo.color,
                        }}
                      >
                        {logo.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Why Founders (Bentogrid) */}
        <div ref={whyRef} />
        <motion.div
          initial="hidden"
          animate={whyInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
              Built for <span className="text-[#F4C906] underline decoration-gray-200 dark:decoration-zinc-800 underline-offset-8">Momentum</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={cardVariants} className="md:col-span-2 p-8 md:p-12 rounded-[2rem] bg-[#F4C906] text-black space-y-8 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-black/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10 space-y-4">
                <h4 className="text-3xl font-black tracking-tight uppercase">One Partner, Every Solution.</h4>
                <p className="text-black/80 text-lg leading-relaxed max-w-xl">
                  We bridge the gap between idea and exit. Tech, design, marketing, and capital connections — all under one roof to eliminate the fragmentation of multiple agencies.
                </p>
              </div>
              <Button variant="dark">Our Full Story</Button>
            </motion.div>

            <motion.div variants={cardVariants} className="p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-zinc-900/40 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#F4C906]/20 flex items-center justify-center text-[#F4C906]">
                <Rocket size={24} />
              </div>
              <h4 className="text-xl font-bold dark:text-white uppercase tracking-tight">Speed + Quality</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We execute at venture speed without compromising on the pixel-perfect quality your vision deserves.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-white/5 bg-white dark:bg-zinc-900/40 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-500">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold dark:text-white uppercase tracking-tight">Data Driven</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Decisions are backed by traction signals, user feedback, and market research, not just intuition.
              </p>
            </motion.div>

            <motion.div variants={cardVariants} className="md:col-span-2 p-8 md:p-12 rounded-[2rem] border border-gray-200 dark:border-white/5 bg-gradient-to-br from-zinc-800 to-black text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group">
              <div className="flex-1 space-y-4">
                <h4 className="text-3xl font-black tracking-tight uppercase">Founder First Approach.</h4>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We don't just deliver tasks; we solve problems. Every member of our squad operates with co-founder level ownership.
                </p>
                <div className="flex items-center gap-4 text-[#F4C906] font-bold">
                  <div className="flex -space-x-2">
                    {["/images/avatar/avatar1.png", "/images/avatar/avatar2.png", "/images/avatar/avatar3.png", "/images/avatar/avatar4.png", "/images/avatar/avatar5.png"].map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                        <Image src={src} alt={`Founder ${i + 1}`} width={40} height={40} className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span>5.0 Rated by Founders</span>
                </div>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-3 opacity-20 group-hover:opacity-40 transition-opacity">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-16 h-16 rounded-xl border border-white/20" />)}
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center pt-8">
            <Button onClick={handleCalendly}>Request a Demo</Button>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="py-10 text-center"
        >
          <motion.h3
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% auto" }}
            className="text-6xl md:text-[10rem] font-black tracking-tighter text-gray-900/10 dark:text-white/5 uppercase leading-[0.8] select-none pointer-events-none mb-[-2rem] md:mb-[-4rem]"
          >
            Dream. Scale. Repeat.
          </motion.h3>
          <div className="relative z-10 px-6">
            <h4 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight">
              Ready to <span className="bg-[#F4C906] text-black px-4 py-1 skew-x-[-12deg] inline-block">Ignite</span> your next big chapter?
            </h4>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button onClick={handleCalendly} className="w-full sm:w-auto shadow-2xl shadow-[#F4C906]/20">Get Started Now</Button>
              <p className="text-gray-500 font-medium">No obligation. Just momentum.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Services;