import { useEffect, useRef, useState, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0 = no parallax, 0.5 = half speed, negative = reverse
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.3, className = "" }: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      setOffset(distanceFromCenter * speed * -1);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      <div
        style={{ transform: `translateY(${offset}px)`, willChange: "transform" }}
        className="transition-transform duration-100 ease-out"
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxSection;
