import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface CinematicCameraProps {
    children: ReactNode;
    enableForwardMotion?: boolean;
    enableParallax?: boolean;
    depth?: number; // 0-1, where 1 is furthest back
}

export const CinematicCamera = ({
    children,
    enableForwardMotion = true,
    enableParallax = true,
    depth = 0
}: CinematicCameraProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Forward camera motion (scale effect)
    const scale = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        enableForwardMotion ? [1.03, 1.0, 1.0, 0.98] : [1, 1, 1, 1]
    );

    // Parallax effect based on depth
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        enableParallax ? [depth * 50, depth * -50] : [0, 0]
    );

    // Blur transition (blur at edges, clear in middle)
    const blur = useTransform(
        scrollYProgress,
        [0, 0.2, 0.8, 1],
        ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                scale,
                y,
                filter: blur
            }}
            transition={{ ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
};
