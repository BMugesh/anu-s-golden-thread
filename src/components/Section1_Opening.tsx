import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GoldenGlow } from "@/components/ui/GoldenGlow";

const Section1_Opening = () => {
    const [step, setStep] = useState(0);
    const [backgroundDim, setBackgroundDim] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            // Step 0: Initial blur
            await new Promise(r => setTimeout(r, 1000));
            setStep(1); // Show "Anu Akka." with golden glow

            await new Promise(r => setTimeout(r, 3500)); // Hold longer for emotional impact
            setStep(2); // Fade out "Anu Akka."

            // Step 3: "Okay first of all..."
            await new Promise(r => setTimeout(r, 1000));
            setStep(3);

            await new Promise(r => setTimeout(r, 3500)); // Extended pause
            setStep(4); // Fade out

            // Step 5: "You didn't grow up..."
            await new Promise(r => setTimeout(r, 1000));
            setStep(5);

            await new Promise(r => setTimeout(r, 4500)); // Extended pause
            setStep(6); // Fade out

            // Step 7: "But somehow..."
            await new Promise(r => setTimeout(r, 1000));
            setStep(7);

            // Step 8: Show final line with emotional weight
            await new Promise(r => setTimeout(r, 3500)); // Extended pause
            setStep(8);

            // Trigger background dim and golden pulse
            await new Promise(r => setTimeout(r, 500));
            setBackgroundDim(true);
        };

        sequence();
    }, []);

    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative bg-transparent overflow-hidden px-6">
            {/* Background with Camera Forward Motion */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-ivory/5 via-lavender-soft/10 to-background -z-10"
                initial={{ scale: 1.03, filter: "blur(15px)" }}
                animate={{ scale: 1.0, filter: "blur(0px)" }}
                transition={{ duration: 3, ease: "easeOut" }}
            />

            {/* Background Dim for Final Line */}
            <motion.div
                className="absolute inset-0 bg-dusk/10 -z-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: backgroundDim ? 1 : 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <GoldenGlow intensity="medium" pulse={false}>
                        <motion.h1
                            key="anu"
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", letterSpacing: "0.05em" }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                filter: "blur(0px)",
                                letterSpacing: "0.15em"
                            }}
                            exit={{ opacity: 0, filter: "blur(10px)", transition: { duration: 2 } }}
                            transition={{ duration: 2.5, ease: "easeOut" }}
                            className="text-4xl md:text-8xl font-serif text-foreground"
                        >
                            From your grateful brother.
                        </motion.h1>
                    </GoldenGlow>
                )}

                {step === 3 && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20, transition: { duration: 2 } }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        className="text-center space-y-6"
                    >
                        <p className="text-xl md:text-3xl font-light text-foreground/90">
                            Okay first of all&hellip;
                        </p>
                        <p className="text-xl md:text-4xl font-serif text-foreground leading-relaxed px-4">
                            how did six months turn into something<br className="hidden md:block" /> that feels this important?
                        </p>
                    </motion.div>
                )}

                {step === 5 && (
                    <motion.div
                        key="context"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 2 } }}
                        transition={{ duration: 2 }}
                        className="text-center space-y-8"
                    >
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="text-xl md:text-3xl font-light text-foreground/80"
                        >
                            You didn&apos;t grow up with me.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, delay: 1.8 }}
                            className="text-xl md:text-3xl font-light text-foreground/80"
                        >
                            You didn&apos;t see my childhood nonsense.
                        </motion.p>
                    </motion.div>
                )}

                {step >= 7 && (
                    <motion.div
                        key="conclusion"
                        className="text-center space-y-8 z-10"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                        >
                            <p className="text-2xl md:text-4xl font-light text-foreground/90">
                                But somehow&hellip;
                            </p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2, delay: 1.2 }}
                                className="text-2xl md:text-5xl font-serif mt-4 text-foreground"
                            >
                                you still chose to <span className="text-gold animate-soft-pulse relative inline-block">stay
                                    <span className="absolute inset-0 blur-lg bg-gold/30 rounded-full" />
                                </span>.
                            </motion.p>
                        </motion.div>

                        {step >= 8 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2.5, delay: 0.5 }}
                            >
                                {/* Final Line with Golden Pulse */}
                                <motion.div
                                    initial={{ scale: 1 }}
                                    animate={{
                                        scale: backgroundDim ? [1, 1.02, 1] : 1
                                    }}
                                    transition={{
                                        duration: 2,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <p className="text-base md:text-xl font-light text-foreground/60 mt-12 pb-20 px-4">
                                        And that means more than you think.
                                    </p>
                                </motion.div>

                                {/* Scroll Indicator - Appears Later */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 4, duration: 2 }}
                                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
                                >
                                    <span className="text-xs uppercase tracking-[0.2em] text-foreground/40">Scroll</span>
                                    <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-foreground/50 to-transparent" />
                                </motion.div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Section1_Opening;
