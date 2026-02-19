"use client";
import React, { useRef } from "react";
import { Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";

const testimonials = [
    {
        text: "Their team felt like a direct extension of ours. We scaled delivery without any hiring stress whatsoever.",
        author: "Amulya Verma",
        role: "CEO, Pria",
        initials: "AV"
    },
    {
        text: "The quality of code and speed of delivery was unmatched. They handled our overflow work seamlessly.",
        author: "Rahul S.",
        role: "CTO, TechFlow",
        initials: "RS"
    },
    {
        text: "We were drowning in deadlines. Snappy Tales stepped in and cleared our backlog in 3 weeks.",
        author: "Sarah Jenkins",
        role: "Director, CreativeX",
        initials: "SJ"
    }
];

export default function AgenciesTestimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-black dark:bg-[#000000] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h4 className="text-[#F4C906] font-bold tracking-widest text-sm uppercase mb-2">Testimonial</h4>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">WHAT AGENCIES SAY.</h2>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {testimonials.map((item, index) => (
                        <motion.div 
                            key={index} 
                            variants={cardVariants}
                            whileHover={{ y: -10, borderColor: "#F4C906" }}
                            className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl relative group transition-colors duration-300"
                        >
                            <Quote className="text-[#F4C906] mb-6 opacity-50 block" size={40} />
                            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-[#F4C906] flex items-center justify-center text-black font-bold text-sm">
                                    {item.initials}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{item.author}</div>
                                    <div className="text-xs text-gray-500">{item.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

