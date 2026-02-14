import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface EmotionalPauseProps {
    duration?: number; // in seconds
    onComplete?: () => void;
    children: React.ReactNode;
    showIndicator?: boolean;
}

export const EmotionalPause = ({
    duration = 3,
    onComplete,
    children,
    showIndicator = false
}: EmotionalPauseProps) => {
    const controls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            // Show content
            await controls.start({
                opacity: 1,
                transition: { duration: 1.5, ease: "easeOut" }
            });

            // Hold for emotional pause
            await new Promise(resolve => setTimeout(resolve, duration * 1000));

            // Signal completion
            if (onComplete) {
                onComplete();
            }
        };

        sequence();
    }, [controls, duration, onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={controls}
            className="relative"
        >
            {children}
            {showIndicator && (
                <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1 h-4 bg-gold/30 rounded-full"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: duration, ease: "linear" }}
                />
            )}
        </motion.div>
    );
};
