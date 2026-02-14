import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Section6_Final = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const [showPullback, setShowPullback] = useState(false);

    // Trigger camera pull-back after all content is shown
    React.useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setShowPullback(true);
            }, 12000); // After handwritten + signature
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <motion.section
            className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative bg-transparent z-10 text-center"
            initial={{ scale: 1 }}
            animate={{ scale: showPullback ? 0.98 : 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
        >
            {/* Warm Near-Black Fade Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-dusk-deep to-dusk -z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: showPullback ? 1 : 0 }}
                transition={{ duration: 3, delay: 0.5 }}
            />

            {/* Golden Glow Linger */}
            <motion.div
                className="absolute inset-0 bg-gold/5 -z-10 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: showPullback ? [0, 0.3, 0] : 0 }}
                transition={{ duration: 4.5, delay: 1 }}
            />

            <div className="max-w-3xl mx-auto space-y-16">

                {/* Cross Symbol */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <div className="w-[2px] h-20 bg-gold/40 mx-auto" />
                        <div className="w-14 h-[2px] bg-gold/40 absolute top-7 left-1/2 -translate-x-1/2" />
                    </div>
                </motion.div>

                {/* Text Sequence */}
                <div className="space-y-8">
                    <motion.p
                        initial={{ opacity: 0, scale: 0.98, filter: "blur(15px)" }}
                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        viewport={{ once: true }}
                        transition={{ duration: 3.5, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-serif text-foreground"
                    >
                        Happy Valentine&rsquo;s Day, Anu Akka.
                    </motion.p>

                    <div className="space-y-4">
                        <motion.p
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            whileInView={{ opacity: 1, filter: "blur(0px)" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 2, ease: "easeOut" }}
                            className="text-xl md:text-2xl text-foreground/70 relative"
                        >
                            Not the couple version. The real one.
                            {/* Soft Golden Glow Pulse */}
                            <motion.span
                                className="absolute -inset-8 bg-gold/10 blur-2xl rounded-full -z-10"
                                animate={{
                                    scale: [1, 1.03, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: 2,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.8, delay: 2, ease: "easeOut" }}
                            className="text-xl md:text-3xl text-foreground/90 leading-relaxed"
                        >
                            The one that celebrates people who make life lighter,<br />
                            warmer, and a little less lonely.
                        </motion.p>
                    </div>
                </div>

                {/* Handwritten Animation - Extended Pause */}
                <div ref={ref} className="h-32 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                        initial={{ width: "0%", filter: "blur(5px)" }}
                        animate={{
                            width: isInView ? "100%" : "0%",
                            filter: isInView ? "blur(0px)" : "blur(5px)"
                        }}
                        transition={{ duration: 5, ease: "easeInOut", delay: 0.5 }}
                        className="overflow-hidden whitespace-nowrap text-3xl md:text-5xl font-serif text-gold italic relative"
                    >
                        Anu Akka... I&rsquo;m glad it&rsquo;s you.
                        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-gold/50 animate-pulse" />
                    </motion.div>
                </div>

                {/* Christian Blessing - After Extended Pause */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(15px)", y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        filter: isInView ? "blur(0px)" : "blur(15px)",
                        y: isInView ? 0 : 20
                    }}
                    transition={{ duration: 2.5, delay: 6, ease: "easeOut" }}
                    className="pt-12 space-y-8"
                >
                    <div className="border-t border-foreground/10 pt-8 space-y-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-foreground/50 font-light">
                            Numbers 6:24-26
                        </p>
                        <p className="text-base md:text-lg text-foreground/80 italic leading-relaxed">
                            &ldquo;The Lord bless you and keep you;<br />
                            the Lord make his face shine on you and be gracious to you;<br />
                            the Lord turn his face toward you and give you peace.&rdquo;
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-foreground/70 font-light">
                        May God continue to bless our bond, Anu Akka.
                    </p>
                </motion.div>

                {/* Signature - Much Later */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                        filter: isInView ? "blur(0px)" : "blur(10px)",
                        y: isInView ? 0 : 20
                    }}
                    transition={{ duration: 3, delay: 11, ease: "easeOut" }}
                    className="pt-12 border-t border-foreground/10 w-full max-w-xs mx-auto"
                >
                    <p className="text-sm md:text-base text-foreground/60">
                        &mdash; Your forever annoying,<br />slightly overprotective brother
                    </p>
                </motion.div>

            </div>
        </motion.section>
    );
};

export default Section6_Final;
