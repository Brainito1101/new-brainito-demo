"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/section";
import Image from "next/image";

const storyItems = [
    {
        id: 1,
        yearTitle: "2015 — The First Startup",
        subtitle: "The First Startup and the Cost of Experimentation",
        description:
            "Our founder launched her first startup and gained early traction, but the marketing lacked clear direction. The experience revealed how quickly growth fails without clarity.",
        image: "/vectors/14.svg", // Using available vectors
    },
    {
        id: 2,
        yearTitle: "2018 — The Birth of Clarity",
        subtitle: "Turning Failure into Insight",
        description:
            "After the startup closed, the focus shifted to helping founders gain clarity before spending on marketing. This work became the foundation of the DIY Marketing Plan.",
        image: "/vectors/15.svg",
    },
    {
        id: 3,
        yearTitle: "2019 – 2023 — Scaling the DIY Approach",
        subtitle: "Helping Businesses Grow with Direction",
        description:
            "A small team helped more than 1,800 businesses create clear marketing plans they could execute without guesswork or wasted budgets.",
        image: "/vectors/16.svg",
    },
];

export function AboutStorySection() {
    const [activeId, setActiveId] = useState(1);

    const activeItem = storyItems.find(item => item.id === activeId) || storyItems[0];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background subtle elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,_#faf5ff_0%,_transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,_#faf5ff_0%,_transparent_50%)] pointer-events-none" />

            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32 relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[34px] md:text-5xl font-semibold text-[#101011] tracking-tight mb-5"
                        style={{ lineHeight: 1.25 }}
                    >
                        <span className="text-[#A359D9]">One mistake</span> shaped<br className="hidden md:block" />everything we do today
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[16px] md:text-[17px] text-[#606266] leading-relaxed max-w-[600px] mx-auto opacity-90"
                    >
                        You want to grow your business. You&apos;re motivated by impact and purpose.
                        And you want your marketing to make a difference. We want the same thing.
                    </motion.p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-0 max-w-[1100px] mx-auto relative z-10">
                    
                    {/* Left side: Sticky Laptop Mockup */}
                    <div className="w-full md:w-1/2 md:sticky md:top-36 flex justify-center mt-4 md:mt-24 order-2 md:order-1">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full max-w-[450px]"
                        >
                            {/* Simple CSS Laptop */}
                            <div className="relative px-2 pb-4 w-full group">
                                {/* Screen section */}
                                <div className="bg-[#E2E8F0] p-[5%] pt-[5%] pb-[6%] rounded-t-[1rem] rounded-b-[4px] border border-gray-300 border-b-gray-400 shadow-sm relative z-10 w-[94%] mx-auto transition-transform duration-500 hover:scale-[1.02]">
                                    <div className="bg-white rounded-[4px] border border-gray-200 overflow-hidden aspect-[16/10.5] relative shadow-inner">
                                        {storyItems.map((item) => (
                                              <Image
                                                key={item.id}
                                                src={item.image}
                                                alt={item.subtitle}
                                                fill
                                                className={`object-cover object-center transition-opacity duration-700 ${activeId === item.id ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                            />
                                        ))}
                                    </div>
                                    <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 text-[8px] text-gray-500 tracking-widest font-bold opacity-30">BRAINITO</div>
                                </div>
                                {/* Base section (wider) */}
                                <div className="bg-gradient-to-b from-[#F8FAFC] to-[#CBD5E1] h-[12px] md:h-[16px] rounded-b-xl border border-gray-300 border-t-0 relative z-20 w-full shadow-[0_8px_15px_rgba(0,0,0,0.1)]">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[3px] md:h-[4px] bg-gray-300 rounded-b-full shadow-inner"></div>
                                </div>
                                {/* Base shadow */}
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-4 bg-black/10 blur-xl rounded-full -z-10"></div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right side: Timeline Items */}
                    <div className="w-full md:w-1/2 relative order-1 md:order-2">
                        {/* Timeline Vertical Line */}
                        <div className="absolute left-[24px] md:left-[39px] top-6 md:top-10 bottom-6 w-[1.5px] bg-[#f0e8f6] z-0 hidden md:block">
                             {/* Small fade dot at top */}
                             <div className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[#f0e8f6]" />
                             {/* Arrow at bottom */}
                             <div className="absolute -bottom-2 -left-[4.5px] text-[#dbcced]">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
                             </div>
                        </div>

                        {/* Mobile line */}
                        <div className="absolute left-[24px] top-4 bottom-0 w-[1.5px] bg-[#f0e8f6] z-0 md:hidden">
                        </div>

                        <div className="flex flex-col gap-12 md:gap-20 relative z-10 py-4 md:py-8">
                            {storyItems.map((item) => {
                                const isActive = activeId === item.id;
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        className="relative pl-14 md:pl-24 group cursor-pointer"
                                        onMouseEnter={() => setActiveId(item.id)}
                                        onClick={() => setActiveId(item.id)}
                                    >
                                        {/* Number Circle */}
                                        <div className={`absolute left-0 md:left-4 top-0 w-[50px] h-[50px] rounded-full flex items-center justify-center text-[18px] transition-all duration-400 shadow-sm ${
                                            isActive 
                                                ? 'bg-[#A359D9] text-white shadow-[0_0_20px_rgba(163,89,217,0.3)] scale-100 font-medium border border-[#A359D9]' 
                                                : 'bg-white text-gray-500 border border-gray-200 group-hover:border-[#d9c4ec] group-hover:text-[#A359D9] scale-[0.95]'
                                        }`}>
                                            {item.id}
                                        </div>

                                        {/* Content */}
                                        <div className={`transition-all duration-500 pt-0 md:pt-2 pb-2 ${isActive ? 'opacity-100' : 'opacity-[0.65] group-hover:opacity-100'}`}>
                                            <h3 className={`text-[22px] md:text-[25px] font-medium tracking-tight mb-2 transition-colors duration-300 ${isActive ? 'text-[#71389A]' : 'text-[#71389A]'}`}>
                                                {item.yearTitle}
                                            </h3>
                                            <h4 className={`text-[17px] font-medium mb-3 transition-colors duration-300 ${isActive ? 'text-[#101011]' : 'text-[#606266]'}`}>
                                                {item.subtitle}
                                            </h4>
                                            <p className="text-[15px] text-[#606266] leading-[1.7] max-w-[420px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
