import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section3_5_Protective = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgDarkness = useTransform(scrollYProgress, [0, 0.3], [0, 0.85]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex flex-col items-center justify-center py-12 px-6 overflow-hidden">

            {/* Darkening Background - Warmer Tone */}
            <motion.div
                style={{ opacity: bgDarkness }}
                className="absolute inset-0 bg-[#0a0908] -z-20"
            />

            {/* Ambient Warmth Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-black -z-10 pointer-events-none" />

            {/* Film Grain Texture */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay -z-10"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            <div className="max-w-4xl mx-auto text-center space-y-16 md:space-y-32 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    <p className="text-sm uppercase tracking-[0.4em] text-gold/60 font-light">
                        Protective Brother Mode
                    </p>
                    <div className="w-24 h-[1px] bg-gold/30 mx-auto" />
                </motion.div>

                {/* Opening Lines */}
                <div className="space-y-16">
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xl md:text-4xl font-light text-ivory/90 leading-relaxed"
                    >
                        If you ever feel tired&hellip;
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 2.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl md:text-4xl font-light text-ivory/90 leading-relaxed"
                    >
                        or overwhelmed&hellip;
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 2.0, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl md:text-4xl font-light text-ivory/90 leading-relaxed"
                    >
                        or like the world expects too much&hellip;
                    </motion.p>
                </div>

                {/* Pause - More Breathing Room */}
                <div className="h-20" />

                {/* Remember This - Extended Pause */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <p className="text-2xl md:text-5xl font-serif text-ivory/80">
                        Remember this.
                    </p>
                </motion.div>

                {/* Main Promise - Enhanced Warm Spotlight */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 2.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative py-16"
                >
                    {/* Enhanced Golden/Amber Spotlight Glow */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-[600px] h-[400px] bg-amber-600/10 blur-[120px] rounded-full mix-blend-screen" />
                    </div>

                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.0, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-6"
                    >
                        <p className="text-2xl md:text-6xl font-serif text-ivory leading-relaxed">
                            You have a brother<br />
                            who will stand <span className="text-gold drops-shadow-lg">behind you</span>,<br />
                            <span className="text-gold drops-shadow-lg">beside you</span>,<br />
                            or <span className="text-gold drops-shadow-lg">in front of you</span>.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Pause - Empty Space */}
                <div className="h-12" />

                {/* No Hesitation */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-8"
                >
                    <p className="text-2xl md:text-4xl font-light text-ivory/90">
                        No hesitation.
                    </p>
                    <p className="text-2xl md:text-4xl font-light text-ivory/90">
                        No conditions.
                    </p>
                </motion.div>

                {/* Pause - Empty Space */}
                <div className="h-16" />

                {/* Softer Closing Line */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
                    className="pb-32"
                >
                    <p className="text-lg md:text-3xl font-light text-ivory/60 italic leading-relaxed">
                        Even if I don&rsquo;t say it every day.
                    </p>
                </motion.div>

                {/* Let it Breathe - Extra Space */}
                <div className="h-24" />

            </div>
        </section>
    );
};

export default Section3_5_Protective;
