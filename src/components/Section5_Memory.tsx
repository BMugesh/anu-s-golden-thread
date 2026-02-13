import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Section5_Memory = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Images from public/Images folder - All 5 photos
    const images = [
        "/Images/WhatsApp Image 2026-02-13 at 11.32.57 AM.jpeg",
        "/Images/WhatsApp Image 2026-02-13 at 11.32.57 AM (1).jpeg",
        "/Images/WhatsApp Image 2026-02-13 at 11.32.58 AM.jpeg",
        "/Images/WhatsApp Image 2026-02-13 at 11.35.55 AM.jpeg",
        "/Images/WhatsApp Image 2026-02-13 at 11.35.55 AM (1).jpeg",
    ];

    // Trigger visibility when scrolled into view
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (latest > 0.3 && !isVisible) {
                setIsVisible(true);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, isVisible]);

    // Crossfade between images every 5 seconds
    useEffect(() => {
        if (!isVisible || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isVisible, images.length]);

    const darkOverlayOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 0.2]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 snap-center overflow-hidden"
        >
            {/* Darkening Overlay */}
            <motion.div
                style={{ opacity: darkOverlayOpacity }}
                className="absolute inset-0 bg-dusk z-0"
            />

            {/* Image Container with Cinematic Filter */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="sync">
                    {isVisible && (
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, filter: "blur(15px)", scale: 1.05 }}
                            animate={{
                                opacity: 0.6,
                                filter: "blur(0px)",
                                scale: 1.0,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 1.8, ease: "easeOut" },
                                filter: { duration: 1.8, ease: "easeOut" },
                                scale: { duration: 2.5, ease: "easeOut" },
                            }}
                            className="absolute inset-0"
                        >
                            {/* Cinematic Image with Filters */}
                            <div
                                className="w-full h-full bg-cover bg-center relative"
                                style={{
                                    backgroundImage: `url('${images[currentImageIndex]}')`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                {/* Cinematic Filter Overlays */}
                                {/* Warm tone overlay */}
                                <div className="absolute inset-0 bg-orange-400/8 mix-blend-overlay" />

                                {/* Slight exposure lift */}
                                <div className="absolute inset-0 bg-white/5" />

                                {/* Subtle vignette */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,22,37,0.3)_100%)]" />

                                {/* Film grain overlay */}
                                <div
                                    className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                                    }}
                                />

                                {/* Slight desaturation via reduced saturation overlay */}
                                <div className="absolute inset-0 bg-gray-500/5 mix-blend-saturation" />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Text Overlay */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <AnimatePresence>
                    {isVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{
                                duration: 2,
                                delay: 2.2,
                                ease: "easeOut"
                            }}
                        >
                            <motion.p
                                className="text-3xl md:text-5xl font-serif text-ivory leading-tight drop-shadow-2xl"
                                style={{
                                    textShadow: "0 4px 20px rgba(0,0,0,0.8), 0 2px 8px rgba(0,0,0,0.6)"
                                }}
                            >
                                &ldquo;Some bonds don&rsquo;t need years.
                                <br />
                                They just need <span className="text-gold">honesty</span>.&rdquo;
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ duration: 2, delay: 5 }}
                                className="mt-12 text-xs uppercase tracking-[0.3em] text-ivory/40"
                            >
                                Memory
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Gentle fade to background at section end */}
            <motion.div
                className="absolute inset-0 bg-background -z-10 pointer-events-none"
                style={{
                    opacity: useTransform(scrollYProgress, [0.7, 0.95], [0, 1])
                }}
            />
        </section>
    );
};

export default Section5_Memory;
