import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import GoldenReveal from "@/components/GoldenReveal";

const Index = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSubtitle(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollLines = [
    "You walked into my life quietly.",
    "But your presence changed the atmosphere.",
    "Some people are loud support.",
    "You are steady strength.",
  ];

  return (
    <div className="film-grain bg-background text-foreground">
      {/* Opening Scene */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-serif-display text-6xl md:text-8xl font-medium tracking-tight animate-cinematic-fade text-foreground">
          Anu.
        </h1>
        <div
          className={`mt-16 max-w-md text-center transition-all duration-[2000ms] ease-out ${
            showSubtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
            Six months.
          </p>
          <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light mt-4">
            And yet, you feel like someone who was always meant to be here.
          </p>
        </div>
      </section>

      {/* Scroll Storytelling */}
      {scrollLines.map((line, i) => (
        <section key={i} className="min-h-[70vh] flex items-center justify-center px-6">
          <ScrollReveal delay={i * 100}>
            <p className="font-serif-display text-2xl md:text-4xl text-center max-w-2xl leading-relaxed font-normal italic text-foreground/90">
              {line}
            </p>
          </ScrollReveal>
        </section>
      ))}

      {/* Emotional Highlight */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <ScrollReveal>
          <div className="text-center max-w-xl">
            <p className="font-serif-display text-3xl md:text-5xl leading-snug font-semibold text-foreground">
              You didn't just stay.
            </p>
            <p className="font-serif-display text-3xl md:text-5xl leading-snug font-semibold text-golden mt-4">
              You became important.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Hidden Reveal */}
      <GoldenReveal />

      {/* Final Frame */}
      <section className="min-h-screen flex items-center justify-center bg-deep-night px-6 transition-colors duration-1000">
        <ScrollReveal>
          <div className="text-center">
            <p className="font-serif-display text-3xl md:text-5xl text-ivory/90 font-medium leading-snug">
              Happy Valentine's Day, Anu.
            </p>
            <p className="font-body text-sm md:text-base text-ivory/50 mt-12 tracking-[0.15em] uppercase font-light">
              — Your forever annoying brother
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
