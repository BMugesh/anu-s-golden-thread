import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section4_Proud = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const duskOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex flex-col items-center justify-center py-20 px-6">

            <div className="max-w-3xl mx-auto text-center space-y-24 relative z-10">

                {/* Cross Symbol */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <div className="w-[2px] h-16 bg-gold/30 mx-auto" />
                        <div className="w-12 h-[2px] bg-gold/30 absolute top-6 left-1/2 -translate-x-1/2" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <p className="text-xl md:text-3xl font-light text-foreground/90">
                        I hope one day when someone asks you about me&hellip;
                    </p>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-foreground/70 italic"
                    >
                        You smile and say&mdash;
                    </motion.p>
                </motion.div>

                {/* Dialogue Box - Handwritten Texture */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 2.2, delay: 0.3, ease: "easeOut" }}
                    className="bg-white/5 backdrop-blur-md border border-foreground/10 p-10 md:p-16 rounded-2xl relative overflow-hidden"
                >
                    {/* Subtle Handwritten Texture Overlay */}
                    <motion.div
                        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 0.03 }}
                        transition={{ duration: 2, delay: 0.5 }}
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />
                    {/* Warm Background Overlay */}
                    <div className="absolute inset-0 bg-orange-500/5 mix-blend-overlay" />

                    <span className="absolute -top-6 -left-4 text-6xl text-gold/20 font-serif">&ldquo;</span>
                    <div className="space-y-4 text-2xl md:text-4xl font-serif text-foreground relative z-10">
                        <p>Yeah&hellip; he&rsquo;s annoying.</p>
                        <p>But he&rsquo;s <span className="text-gold relative inline-block">
                            my brother
                            {/* Golden Glow Behind "my brother" */}
                            <span className="absolute -inset-4 bg-gold/30 blur-2xl rounded-full -z-10" />
                        </span>.</p>
                    </div>
                    <span className="absolute -bottom-10 -right-4 text-6xl text-gold/20 font-serif rotate-180">&rdquo;</span>
                </motion.div>

                {/* EMOTIONAL CLIMAX */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.2, delay: 0.8, ease: "easeOut" }}
                    className="pt-12 space-y-8 relative"
                >
                    {/* Deepened Vignette */}
                    <div className="absolute -inset-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,22,37,0.25)_100%)] pointer-events-none -z-10" />

                    {/* Main Line with Scale Emphasis */}
                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: [1, 1.05, 1.02] }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
                    >
                        <p className="text-2xl md:text-4xl font-light text-foreground/90 leading-relaxed">
                            Because I already feel lucky to call you my sister.
                        </p>
                    </motion.div>

                    {/* Golden Particles */}
                    <motion.div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-gold/60 rounded-full"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${30 + (i % 2) * 20}%`
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1.5, 0],
                                    y: [-20, -40]
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 2,
                                    delay: 1.5 + i * 0.2,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Extended Pause Before Scripture */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2.2, delay: 4, ease: "easeOut" }}
                        className="pt-8"
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 font-light mb-4">
                            1 Thessalonians 5:18
                        </p>
                        <p className="text-base md:text-lg text-foreground/80 italic">
                            &ldquo;Give thanks in all circumstances; for this is God&rsquo;s will for you.&rdquo;
                        </p>
                        <p className="text-sm md:text-base text-foreground/60 mt-6">
                            And I thank God for you, Anu Akka.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Section4_Proud;
