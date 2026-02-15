import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import FloatingParticles from "./ui/FloatingParticles";
import BackgroundAudio from "./ui/BackgroundAudio";

// Image Data with URL encoding for safety
const memories = [
    {
        src: "/Images/The%20Beginning.jpeg",
        title: "The Beginning",
        text: [
            "You were always there.",
            "Even before I understood what that meant."
        ],
        fit: "contain"
    },
    {
        src: "/Images/The%20Silent%20Protector.jpeg",
        title: "The Silent Protector",
        text: [
            "You protected me in ways I never noticed back then.",
            "But I see it now."
        ],
    },
    {
        src: "/Images/The%20Guide.jpeg",
        title: "The Guide",
        text: [
            "I learned more from watching you",
            "than from being told what to do."
        ],
    },
    {
        src: "/Images/The%20Strength.jpeg",
        title: "The Strength",
        text: [
            "You carried responsibilities quietly.",
            "You never asked for applause."
        ],
        fit: "contain"
    },
    {
        src: "/Images/The%20Gratitude.jpeg",
        title: "The Gratitude",
        text: [
            "If I’ve grown into someone stronger,",
            "it’s because I had you ahead of me.",
            "And I’m proud to be your brother."
        ],
        isFinal: true
    },
];

const MemorySection = ({ memory, index, targetRef }: { memory: any, index: number, targetRef: React.RefObject<HTMLDivElement> }) => {
    // Use a local ref for each section to track its position in viewport
    const sectionRef = useRef(null);
    const { scrollYProgress: sectionProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Visual Effects
    const y = useTransform(sectionProgress, [0, 1], ["-10%", "10%"]); // Parallax

    // Adjusted opacity to ensure images stay visible longer, especially the final one
    const opacity = useTransform(
        sectionProgress,
        [0.05, 0.2, 0.8, 1],
        [0, 1, 1, 0]
    );

    const scale = useTransform(sectionProgress, [0.1, 0.9], [1.0, 1.1]); // Ken Burns Zoom
    const blur = useTransform(sectionProgress, [0.1, 0.3, 0.8, 1], ["10px", "0px", "0px", "10px"]); // Blur to clear

    const isContain = memory.fit === "contain";

    return (
        <section
            ref={sectionRef}
            className="relative h-screen w-full overflow-hidden sticky top-0 snap-center"
            style={{ zIndex: index + 1 }} // Verify stacking order
        >
            {/* Background Image Layer */}
            <motion.div
                style={{ y, scale, filter: `blur(${blur})`, opacity }}
                className="absolute inset-0 w-full h-full z-0"
            >
                {/* Blurred Backdrop for Contain Mode */}
                {isContain && (
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-3xl opacity-50 scale-110"
                        style={{ backgroundImage: `url('${memory.src}')` }}
                    />
                )}

                <div
                    className={`absolute inset-0 bg-center ${isContain ? 'bg-contain bg-no-repeat' : 'bg-cover'}`}
                    style={{ backgroundImage: `url('${memory.src}')` }}
                />

                {/* Golden Hour Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" /> {/* Warmth */}
                <div className="absolute inset-0 bg-black/20" /> {/* Dimmer */}
            </motion.div>

            {/* Floating Particles/Dust */}
            <FloatingParticles />

            {/* Text Overlay - Static While In View */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 md:p-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }} // Triggers once when 30% visible
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                >
                    {memory.text.map((line: string, i: number) => (
                        <React.Fragment key={i}>
                            <p
                                className={`
                    font-serif text-ivory drop-shadow-2xl leading-relaxed
                    ${memory.isFinal && i === memory.text.length - 1
                                        ? "text-3xl md:text-5xl mt-6 text-gold font-medium"
                                        : "text-xl md:text-4xl text-white/90"
                                    }
                  `}
                                style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
                            >
                                {line}
                            </p>
                            {i < memory.text.length - 1 && <div className="h-4 md:h-8" />}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};


const Section5_Memory = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="relative bg-[#0a0908] z-30">
            <BackgroundAudio />

            {/* Film Grain Overall Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.07] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {memories.map((memory, index) => (
                <MemorySection
                    key={index}
                    memory={memory}
                    index={index}
                    targetRef={containerRef}
                />
            ))}

            {/* Final Spacer to allow smooth exit */}
            <div className="h-[20vh] bg-[#0a0908]" />
        </div>
    );
};

export default Section5_Memory;
