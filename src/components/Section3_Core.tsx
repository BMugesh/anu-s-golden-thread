import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Section3_Core = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const bgTextX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] flex flex-col items-center justify-center py-20 px-6 overflow-hidden">

            {/* Background Name Reveal */}
            <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-[0.03]">
                <motion.div style={{ x: bgTextX }} className="whitespace-nowrap text-[20vh] font-serif text-lavender-muted/50 leading-none">
                    Anu Akka  Anu Akka  Anu Akka  Anu Akka
                </motion.div>
                <motion.div style={{ x: useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]) }} className="whitespace-nowrap text-[20vh] font-serif text-lavender-muted/50 leading-none ml-20">
                    Anu Akka  Anu Akka  Anu Akka  Anu Akka
                </motion.div>
                <motion.div style={{ x: bgTextX }} className="whitespace-nowrap text-[20vh] font-serif text-lavender-muted/50 leading-none">
                    Anu Akka  Anu Akka  Anu Akka  Anu Akka
                </motion.div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-24">

                {/* Scripture Introduction */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 font-light">
                        Philippians 1:3
                    </p>
                    <p className="text-xl md:text-2xl font-serif text-foreground/80 italic leading-relaxed">
                        &ldquo;I thank my God every time I remember you.&rdquo;
                    </p>
                </motion.div>

                <div className="space-y-8">
                    <motion.h2
                        initial={{ opacity: 0, filter: "blur(15px)", y: 30 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-serif text-foreground"
                    >
                        You have this calm strength about you.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-xl md:text-2xl font-light text-foreground/70"
                    >
                        The kind that doesn&rsquo;t try to prove anything.
                    </motion.p>
                </div>

                <div className="space-y-6 pt-12">
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", x: -20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-lg md:text-xl text-foreground/60"
                    >
                        And honestly?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: "blur(15px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
                        className="relative inline-block"
                    >
                        <span className="absolute -inset-8 bg-gold/10 blur-2xl rounded-full" />
                        <p className="text-3xl md:text-5xl font-serif text-foreground relative z-10">
                            Having you as my sister feels&hellip; <span className="text-gold font-medium">safe</span>.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                    className="pt-20 max-w-2xl mx-auto space-y-8"
                >
                    <p className="text-xl md:text-3xl font-light text-foreground/80 leading-relaxed">
                        It feels good knowing there&rsquo;s someone out there who understands me without judging me.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                        className="pt-8 border-t border-foreground/10"
                    >
                        <p className="text-base md:text-lg text-foreground/60 italic">
                            God brought you into my life for a reason.<br />
                            And I&rsquo;m grateful every single day.
                        </p>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default Section3_Core;
