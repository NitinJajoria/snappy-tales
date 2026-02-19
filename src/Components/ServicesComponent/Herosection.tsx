"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import Button from "@/Components/ui/Button";
import HeroLogo, { DarkHeroLogo } from "@/svgs/Herosection/HeroLogo";

const mont = Montserrat({ subsets: ["latin"] });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Herosection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={heroRef}
      className={`${mont.className} relative w-full min-h-screen overflow-hidden bg-white dark:bg-black transition-colors duration-300`}
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#F4C906]/20 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -right-32 bottom-20 h-[360px] w-[360px] rounded-full bg-[#F4C906]/15 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-16 pb-16 md:flex-row md:items-center md:gap-12 md:px-12 md:pt-10 lg:px-20">
        {/* Left content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-1 flex-col gap-6"
        >
          <motion.div variants={textVariants} className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F4C906]/30 bg-[#F4C906]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#F4C906]">
              <Sparkles className="h-3.5 w-3.5" />
              Full-Stack Venture Studio
            </span>
          </motion.div>

          <motion.h1
            variants={textVariants}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl"
          >
            Everything Your Startup Needs to{" "}
            <span className="bg-gradient-to-r from-[#F4C906] via-[#FFE55C] to-[#F4C906] bg-clip-text text-transparent">
              Launch, Grow & Scale
            </span>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="max-w-lg text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg"
          >
            Snappy Tales isn&apos;t just an agency — we&apos;re your venture studio +
            growth partner. From tech to traction, we handle everything so you can
            focus on building your vision.
          </motion.p>

          <motion.div variants={textVariants} className="flex flex-wrap gap-4 pt-4">
            <Link href={BOOKING_URL} target="_blank">
              <Button className="inline-flex items-center gap-2">
                Book a Discovery Call
              </Button>
            </Link>
            <Link href="#services">
              <Button
                variant="dark"
                className="inline-flex items-center gap-2 bg-transparent border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900"
              >
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right — decorative illustration */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 flex flex-1 items-center justify-center md:mt-0"
        >
          {/* Abstract grid / illustration */}
          <div className="relative h-[340px] w-[340px] md:h-[420px] md:w-[420px]">
            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-2 border-dashed border-yellow-500"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-2 border-dashed border-gray-500"
            />

            {/* Center S logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                className="scale-75 md:scale-90"
              >
                <HeroLogo />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
                className="scale-75 md:scale-90"
              >
                <DarkHeroLogo />
              </motion.div>
            </div>

            {/* Floating badges */}
            <motion.div
              variants={floatVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.8 }}
              className="absolute -top-2 right-4 rounded-xl border border-gray-200/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/90"
            >
              <p className="text-2xl font-bold text-[#F4C906]">120+</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Products Launched
              </p>
            </motion.div>

            <motion.div
              variants={floatVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1 }}
              className="absolute bottom-6 -left-4 rounded-xl border border-gray-200/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/90"
            >
              <p className="text-2xl font-bold text-[#F4C906]">5.0 ★</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Founder Rated
              </p>
            </motion.div>

            <motion.div
              variants={floatVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 1.2 }}
              className="absolute bottom-0 right-8 rounded-xl border border-gray-200/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-white/10 dark:bg-zinc-900/90"
            >
              <p className="text-2xl font-bold text-[#F4C906]">$65M</p>
              <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Capital Unlocked
              </p>
            </motion.div>

            {/* Orbiting dots */}
            {[0, 90, 180, 270].map((deg) => (
              <motion.div
                key={deg}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 + deg / 500 }}
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${deg}deg) translateX(170px)`,
                }}
              >
                <div className="h-3 w-3 rounded-full bg-[#F4C906] shadow-md shadow-[#F4C906]/40" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative w-full overflow-hidden border-y border-gray-200/60 bg-gray-50/80 py-3 dark:border-white/5 dark:bg-white/[0.02]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex w-max items-center gap-10 whitespace-nowrap"
        >
          {[
            "Product Engineering",
            "•",
            "UI/UX Design",
            "•",
            "Brand Identity",
            "•",
            "Growth Marketing",
            "•",
            "GTM Strategy",
            "•",
            "Investor Connect",
            "•",
            "Product Engineering",
            "•",
            "UI/UX Design",
            "•",
            "Brand Identity",
            "•",
            "Growth Marketing",
            "•",
            "GTM Strategy",
            "•",
            "Investor Connect",
            "•",
          ].map((item, i) => (
            <span
              key={i}
              className={`text-xs font-semibold uppercase tracking-[0.3em] ${item === "•"
                ? "text-[#F4C906]"
                : "text-gray-500 dark:text-gray-400"
                }`}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Herosection;
