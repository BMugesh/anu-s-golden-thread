import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

const Section2_Moments = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.8, 0.9], [1, 0]);

    const items = [
        "The person I randomly text.",
        "The one I share stupid memes with.",
        "The one I secretly care about more than I show.",
    ];

    return (
        <section ref={containerRef} className="min-h-[200vh] relative py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-32">

                {/* Intro with Christian Touch */}
                <div className="min-h-[50vh] flex flex-col justify-center items-center text-center space-y-8">
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-2xl md:text-3xl font-light text-foreground/80"
                    >
                        You know what&rsquo;s funny?
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true, margin: "-20%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="text-3xl md:text-5xl font-serif text-foreground"
                    >
                        In just six months, you became&hellip;
                    </motion.p>
                </div>

                {/* Staggered Cards */}
                <div className="grid gap-12 md:gap-24">
                    {items.map((text, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, filter: "blur(15px)", x: index % 2 === 0 ? -50 : 50, y: 20 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{ duration: 2.2, ease: "easeOut", delay: index * 0.5 }}
                            className={cn(
                                "p-8 md:p-12 border border-foreground/10 rounded-lg bg-white/5 backdrop-blur-sm",
                                index === 1 ? "md:ml-auto md:mr-0 max-w-xl" : "md:mr-auto md:ml-0 max-w-xl",
                                "relative overflow-hidden"
                            )}
                        >
                            <p className="text-xl md:text-3xl font-light text-foreground/90 relative z-10">
                                {text}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Christian-Inspired Blessing Section */}
                <div className="min-h-[80vh] flex flex-col justify-center items-center text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="space-y-6 max-w-2xl"
                    >
                        <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 font-light">
                            Proverbs 17:17
                        </p>
                        <p className="text-2xl md:text-3xl font-serif text-foreground/80 italic leading-relaxed">
                            &ldquo;A friend loves at all times, and a sister is born for adversity.&rdquo;
                        </p>
                    </motion.div>

                    <div className="h-16"></div>

                    <motion.div
                        initial={{ opacity: 0, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        <p className="text-lg md:text-2xl text-foreground/70">I might tease you.</p>
                        <p className="text-lg md:text-2xl text-foreground/70">I might act dramatic.</p>
                    </motion.div>

                    <div className="h-16"></div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.02, filter: "blur(15px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 2.5, ease: "easeOut" }}
                        className="relative"
                    >
                        <div className="absolute -inset-10 bg-gold/20 blur-3xl -z-10 rounded-full" />
                        <p className="text-3xl md:text-5xl font-serif text-foreground mb-6">
                            But if anyone messes with you?
                        </p>
                        <motion.div
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                            className="relative overflow-hidden"
                        >
                            <p className="text-2xl md:text-4xl text-gold font-light relative z-10">
                                They&rsquo;ll meet the upgraded version of me.
                            </p>
                            {/* Golden Sweep Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent -z-10"
                                initial={{ x: "-100%" }}
                                whileInView={{ x: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                            />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 2 }}
                            className="text-sm md:text-base text-foreground/50 mt-8 italic"
                        >
                            Because protecting you is a blessing I take seriously.
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Section2_Moments;
