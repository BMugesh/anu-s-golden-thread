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
        <section ref={containerRef} className="relative min-h-[200vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

            {/* Darkening Background */}
            <motion.div
                style={{ opacity: bgDarkness }}
                className="absolute inset-0 bg-dusk-deep -z-10"
            />

            <div className="max-w-4xl mx-auto text-center space-y-32 relative z-10">

                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
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
                        transition={{ duration: 2.4, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-light text-white/90 leading-relaxed"
                    >
                        If you ever feel tired&hellip;
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 2.4, delay: 0.6, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-light text-white/90 leading-relaxed"
                    >
                        or overwhelmed&hellip;
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-15%" }}
                        transition={{ duration: 2.4, delay: 1.2, ease: "easeOut" }}
                        className="text-2xl md:text-4xl font-light text-white/90 leading-relaxed"
                    >
                        or like the world expects too much&hellip;
                    </motion.p>
                </div>

                {/* Pause - More Breathing Room */}
                <div className="h-40" />

                {/* Remember This - Extended Pause */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.95 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <p className="text-3xl md:text-5xl font-serif text-white/80">
                        Remember this.
                    </p>
                </motion.div>

                {/* Main Promise - Enhanced Blue Spotlight */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(20px)", scale: 0.9 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 3, delay: 0.5, ease: "easeOut" }}
                    className="relative py-16"
                >
                    {/* Enhanced Blue Spotlight Glow */}
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="w-[600px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
                    </div>

                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.4, delay: 1, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <p className="text-3xl md:text-6xl font-serif text-white leading-relaxed">
                            You have a brother<br />
                            who will stand <span className="text-gold">behind you</span>,<br />
                            <span className="text-gold">beside you</span>,<br />
                            or <span className="text-gold">in front of you</span>.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Pause - Empty Space */}
                <div className="h-24" />

                {/* No Hesitation */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <p className="text-2xl md:text-4xl font-light text-white/90">
                        No hesitation.
                    </p>
                    <p className="text-2xl md:text-4xl font-light text-white/90">
                        No conditions.
                    </p>
                </motion.div>

                {/* Pause - Empty Space */}
                <div className="h-32" />

                {/* Softer Closing Line */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="pb-32"
                >
                    <p className="text-xl md:text-3xl font-light text-white/60 italic leading-relaxed">
                        Even if I don&rsquo;t say it every day.
                    </p>
                </motion.div>

                {/* Let it Breathe - Extra Space */}
                <div className="h-48" />

            </div>
        </section>
    );
};

export default Section3_5_Protective;
