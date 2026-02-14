import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoldenGlowProps {
    intensity?: "subtle" | "medium" | "strong";
    pulse?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const GoldenGlow = ({
    intensity = "medium",
    pulse = false,
    className,
    children
}: GoldenGlowProps) => {
    const intensityMap = {
        subtle: "w-[300px] h-[200px] bg-gold/10 blur-[60px]",
        medium: "w-[500px] h-[350px] bg-gold/20 blur-[80px]",
        strong: "w-[700px] h-[500px] bg-gold/30 blur-[100px]"
    };

    return (
        <div className={cn("relative inline-block", className)}>
            {/* Golden Glow Background */}
            <motion.div
                className={cn(
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full -z-10",
                    intensityMap[intensity]
                )}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: pulse ? [1, 1.1, 1] : 1
                }}
                transition={{
                    opacity: { duration: 2, ease: "easeOut" },
                    scale: pulse ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    } : { duration: 2, ease: "easeOut" }
                }}
            />
            {children}
        </div>
    );
};
