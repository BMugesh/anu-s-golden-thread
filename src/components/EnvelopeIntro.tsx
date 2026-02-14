import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnvelopeIntroProps {
    onComplete: () => void;
}

export const EnvelopeIntro: React.FC<EnvelopeIntroProps> = ({ onComplete }) => {
    const [envelopeOpened, setEnvelopeOpened] = useState(false);
    const [letterRevealed, setLetterRevealed] = useState(false);
    const [readyToTransition, setReadyToTransition] = useState(false);

    const handleEnvelopeClick = () => {
        if (!envelopeOpened) {
            setEnvelopeOpened(true);
            setTimeout(() => setLetterRevealed(true), 1500);
        }
    };

    const handleLetterClick = () => {
        if (letterRevealed && !readyToTransition) {
            setReadyToTransition(true);
            setTimeout(() => onComplete(), 2500);
        }
    };

    return (
        <AnimatePresence>
            {!readyToTransition && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    {/* Background with warm ivory gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ivory via-lavender-muted/20 to-ivory" />

                    {/* Golden ambient glow */}
                    <motion.div
                        className="absolute inset-0 bg-gold/5"
                        animate={{
                            opacity: envelopeOpened ? 0.15 : 0.05
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Film grain overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                        }}
                    />

                    {/* Soft vignette */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(26,22,37,0.15)_100%)] pointer-events-none" />

                    {/* Floating dust particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-gold/20 rounded-full blur-sm"
                                style={{
                                    left: `${10 + i * 7}%`,
                                    top: `${20 + (i % 3) * 25}%`
                                }}
                                animate={{
                                    y: [-20, -60],
                                    x: [0, (i % 2 === 0 ? 20 : -20)],
                                    opacity: [0, 0.6, 0]
                                }}
                                transition={{
                                    duration: 8 + i * 0.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.8
                                }}
                            />
                        ))}
                    </div>

                    {/* Background dim on envelope open */}
                    <motion.div
                        className="absolute inset-0 bg-dusk/10 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: envelopeOpened ? 1 : 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Main content container */}
                    <motion.div
                        className="relative z-10"
                        initial={{ scale: 1 }}
                        animate={{
                            scale: envelopeOpened ? 1.03 : 1,
                            y: letterRevealed ? -50 : 0
                        }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        {/* Envelope */}
                        <AnimatePresence>
                            {!letterRevealed && (
                                <motion.div
                                    className="relative cursor-pointer"
                                    onClick={handleEnvelopeClick}
                                    animate={{
                                        scale: envelopeOpened ? [1, 1.02, 1] : [1, 1.02, 1]
                                    }}
                                    transition={{
                                        scale: {
                                            duration: 4,
                                            repeat: envelopeOpened ? 0 : Infinity,
                                            ease: "easeInOut"
                                        }
                                    }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                >
                                    {/* Envelope body */}
                                    <div className="relative w-[400px] h-[280px] bg-gradient-to-br from-[#f5f1e8] to-[#ebe5d9] rounded-sm shadow-2xl">
                                        {/* Paper texture */}
                                        <div
                                            className="absolute inset-0 opacity-[0.08] mix-blend-overlay rounded-sm"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)'/%3E%3C/svg%3E")`
                                            }}
                                        />

                                        {/* Envelope flap */}
                                        <motion.div
                                            className="absolute top-0 left-0 right-0 h-[140px] origin-top"
                                            style={{
                                                background: "linear-gradient(to bottom, #ebe5d9, #f5f1e8)",
                                                clipPath: "polygon(0 0, 50% 60%, 100% 0)"
                                            }}
                                            animate={{
                                                rotateX: envelopeOpened ? -180 : 0
                                            }}
                                            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                                        >
                                            {/* Wax seal */}
                                            <motion.div
                                                className="absolute top-[80px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gold/60 to-gold/40 shadow-lg"
                                                animate={{
                                                    opacity: envelopeOpened ? 0 : 1,
                                                    scale: envelopeOpened ? 0.8 : 1
                                                }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                            >
                                                <div className="absolute inset-2 rounded-full border border-gold/30" />
                                                <div className="absolute inset-0 flex items-center justify-center text-xs text-ivory/60 font-serif">A</div>
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* "Open when you're ready" text */}
                                    {!envelopeOpened && (
                                        <motion.p
                                            className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-foreground/60 text-sm font-light tracking-wide whitespace-nowrap"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                                        >
                                            Open when you&rsquo;re ready.
                                        </motion.p>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Letter */}
                        <AnimatePresence>
                            {letterRevealed && (
                                <motion.div
                                    className="relative cursor-pointer"
                                    onClick={handleLetterClick}
                                    initial={{ y: 100, opacity: 0, filter: "blur(15px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    exit={{ y: 100, opacity: 0, filter: "blur(15px)" }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                >
                                    {/* Letter paper */}
                                    <div className="relative w-[500px] min-h-[600px] bg-gradient-to-br from-ivory to-[#f5f1e8] rounded-sm shadow-2xl p-12">
                                        {/* Paper texture */}
                                        <div
                                            className="absolute inset-0 opacity-[0.05] mix-blend-overlay rounded-sm"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)'/%3E%3C/svg%3E")`
                                            }}
                                        />

                                        {/* Shadow edges */}
                                        <div className="absolute inset-0 shadow-inner rounded-sm pointer-events-none" />

                                        {/* Letter content */}
                                        <div className="relative z-10 space-y-6 font-serif text-foreground/80">
                                            {[
                                                { text: "My Anu,", delay: 0, glow: false },
                                                { text: "", delay: 0.3, glow: false },
                                                { text: "Before you scroll…", delay: 0.6, glow: false },
                                                { text: "Before you read anything else…", delay: 0.9, glow: false },
                                                { text: "", delay: 1.2, glow: false },
                                                { text: "I just need you to know something.", delay: 1.5, glow: false },
                                                { text: "", delay: 1.8, glow: false },
                                                { text: "Not in a loud way.", delay: 2.1, glow: false },
                                                { text: "Not in a dramatic way.", delay: 2.4, glow: false },
                                                { text: "", delay: 2.7, glow: false },
                                                { text: "Just honestly.", delay: 3.0, glow: true },
                                                { text: "", delay: 3.3, glow: false },
                                                { text: "You being in my life?", delay: 3.6, glow: false },
                                                { text: "It means more than I show.", delay: 3.9, glow: true },
                                                { text: "", delay: 4.2, glow: false },
                                                { text: "And this little space…", delay: 4.5, glow: false },
                                                { text: "is just my quiet way of saying thank you", delay: 4.8, glow: true },
                                                { text: "for staying.", delay: 5.1, glow: false }
                                            ].map((line, index) => (
                                                <motion.p
                                                    key={index}
                                                    className={`text-lg leading-relaxed relative ${line.text === "" ? "h-2" : ""}`}
                                                    initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
                                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                                    transition={{
                                                        duration: 1.5,
                                                        delay: line.delay,
                                                        ease: "easeOut"
                                                    }}
                                                >
                                                    {line.glow && line.text && (
                                                        <span className="absolute -inset-x-4 -inset-y-2 bg-gold/10 blur-xl rounded-full -z-10" />
                                                    )}
                                                    {line.text}
                                                </motion.p>
                                            ))}

                                            {/* "Scroll gently" at bottom */}
                                            <motion.p
                                                className="text-sm text-foreground/40 italic text-center pt-12"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 2, delay: 6, ease: "easeOut" }}
                                            >
                                                Scroll gently.
                                            </motion.p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
