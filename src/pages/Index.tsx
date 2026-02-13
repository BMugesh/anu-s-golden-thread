import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2000),
      setTimeout(() => setPhase(2), 4500),
      setTimeout(() => setPhase(3), 7000),
      setTimeout(() => setPhase(4), 9500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="film-grain bg-background text-foreground overflow-x-hidden">
      {/* SECTION 1 — OPENING FRAME */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <div className="soft-vignette" />
        <ParallaxSection speed={0.1}>
          <div className="text-center max-w-2xl">
            <h1 className="font-serif-display text-6xl md:text-8xl font-medium tracking-tight animate-cinematic-fade text-foreground">
              Anu Akka 🌸
            </h1>

            <div className={`mt-16 transition-all duration-[2000ms] ease-out ${phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light italic">
                Okay first of all…
              </p>
              <p className="font-body text-lg md:text-xl leading-relaxed text-muted-foreground font-light mt-2">
                how did six months turn into something that feels this important?
              </p>
            </div>

            <div className={`mt-12 transition-all duration-[2000ms] ease-out ${phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground/80 font-light">
                You didn't grow up with me.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground/80 font-light mt-1">
                You didn't see my childhood nonsense.
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground/80 font-light mt-1">
                But somehow…
              </p>
              <p className="font-body text-base md:text-lg leading-relaxed text-muted-foreground/80 font-light mt-1">
                you still chose to stay.
              </p>
            </div>

            <div className={`mt-12 transition-all duration-[2000ms] ease-out ${phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <p className="font-serif-display text-xl md:text-2xl leading-relaxed text-golden font-medium">
                And that means more than you think.
              </p>
            </div>

            <div className={`mt-16 transition-all duration-[2000ms] ease-out ${phase >= 4 ? "opacity-100" : "opacity-0"}`}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground/40 animate-gentle-pulse">
                scroll down
              </p>
            </div>
          </div>
        </ParallaxSection>
      </section>

      {/* SECTION 2 — CUTE BROTHER MOMENT */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <ParallaxSection speed={0.12}>
          <ScrollReveal>
            <p className="font-serif-display text-2xl md:text-4xl text-center max-w-2xl leading-relaxed font-normal text-foreground/90">
              You know what's funny?
            </p>
          </ScrollReveal>
        </ParallaxSection>

        <div className="mt-16">
          <ParallaxSection speed={0.08}>
            <ScrollReveal delay={200}>
              <p className="font-body text-lg md:text-xl text-center text-muted-foreground font-light">
                In just six months,
              </p>
              <p className="font-body text-lg md:text-xl text-center text-muted-foreground font-light mt-1">
                you became…
              </p>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        <div className="mt-16 flex flex-col gap-6 max-w-md w-full">
          {[
            "The person I randomly text.",
            "The one I share stupid memes with.",
            "The one I secretly care about more than I show.",
          ].map((line, i) => (
            <ParallaxSection key={i} speed={0.06}>
              <ScrollReveal delay={400 + i * 300}>
                <div className="border border-border/50 rounded-xl px-8 py-5 bg-card/50 backdrop-blur-sm">
                  <p className="font-body text-base md:text-lg text-foreground/80 font-light text-center">
                    {line}
                  </p>
                </div>
              </ScrollReveal>
            </ParallaxSection>
          ))}
        </div>
      </section>

      {/* Brother's protective side */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6">
        <ParallaxSection speed={0.15}>
          <ScrollReveal>
            <div className="text-center max-w-xl">
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light">
                I might tease you.
              </p>
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light mt-2">
                I might act dramatic.
              </p>
            </div>
          </ScrollReveal>
        </ParallaxSection>

        <div className="mt-16">
          <ParallaxSection speed={0.1}>
            <ScrollReveal delay={300}>
              <p className="font-serif-display text-2xl md:text-3xl text-center font-semibold text-foreground max-w-xl">
                But if anyone messes with you?
              </p>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        <div className="mt-12">
          <ParallaxSection speed={0.18}>
            <ScrollReveal delay={600}>
              <div className="golden-glow-box rounded-2xl px-10 py-8">
                <p className="font-serif-display text-xl md:text-3xl text-center font-medium text-golden italic">
                  They'll meet the upgraded version of me.
                </p>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* SECTION 3 — EMOTIONAL CORE */}
      {[
        "You have this calm strength about you.",
        "The kind that doesn't try to prove anything.",
      ].map((line, i) => (
        <section key={`core-${i}`} className="min-h-[60vh] flex items-center justify-center px-6">
          <ParallaxSection speed={0.1 + i * 0.05}>
            <ScrollReveal delay={i * 200}>
              <p className="font-serif-display text-2xl md:text-4xl text-center max-w-2xl leading-relaxed font-normal italic text-foreground/90">
                {line}
              </p>
            </ScrollReveal>
          </ParallaxSection>
        </section>
      ))}

      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <ParallaxSection speed={0.12}>
          <ScrollReveal>
            <div className="text-center max-w-xl warm-spotlight rounded-3xl px-8 py-12">
              <p className="font-body text-lg md:text-xl text-muted-foreground font-light">
                And honestly?
              </p>
              <p className="font-serif-display text-2xl md:text-3xl text-foreground font-medium mt-6">
                Having you as my sister feels… safe.
              </p>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </section>

      <section className="min-h-[70vh] flex items-center justify-center px-6">
        <ParallaxSection speed={0.08}>
          <ScrollReveal>
            <div className="text-center max-w-md">
              <p className="font-body text-lg md:text-xl leading-loose text-muted-foreground/80 font-light">
                It feels good knowing
                <br />there's someone out there
                <br />who understands me
                <br />without judging me.
              </p>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </section>

      {/* SECTION 4 — PROUD BROTHER MOMENT */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <ParallaxSection speed={0.12}>
          <ScrollReveal>
            <p className="font-serif-display text-2xl md:text-4xl text-center max-w-2xl leading-relaxed font-normal text-foreground">
              I hope one day when someone asks you about me…
            </p>
          </ScrollReveal>
        </ParallaxSection>

        <div className="mt-16">
          <ParallaxSection speed={0.08}>
            <ScrollReveal delay={300}>
              <p className="font-body text-lg md:text-xl text-center text-muted-foreground font-light">
                You smile and say—
              </p>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        <div className="mt-12">
          <ParallaxSection speed={0.15}>
            <ScrollReveal delay={600}>
              <div className="border-l-2 border-golden/40 pl-8 py-4 max-w-md">
                <p className="font-serif-display text-xl md:text-2xl text-foreground/80 italic leading-relaxed">
                  "Yeah… he's annoying.
                </p>
                <p className="font-serif-display text-xl md:text-2xl text-foreground/80 italic leading-relaxed mt-2">
                  But he's my brother."
                </p>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>

        <div className="mt-16">
          <ParallaxSection speed={0.1}>
            <ScrollReveal delay={900}>
              <div className="text-center golden-glow-box rounded-2xl px-10 py-8">
                <p className="font-serif-display text-xl md:text-3xl text-golden font-medium">
                  Because I already feel lucky
                </p>
                <p className="font-serif-display text-xl md:text-3xl text-golden font-medium mt-2">
                  to call you my sister.
                </p>
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </section>

      {/* SECTION 5 — FINAL FRAME */}
      <section className="min-h-screen flex items-center justify-center bg-deep-night px-6 transition-colors duration-1000">
        <ParallaxSection speed={0.08}>
          <ScrollReveal>
            <div className="text-center max-w-xl">
              <p className="font-serif-display text-3xl md:text-5xl text-ivory/90 font-medium leading-snug">
                Happy Valentine's Day, Anu Akka. 🌸
              </p>

              <div className="mt-12">
                <p className="font-body text-base md:text-lg text-ivory/60 font-light">
                  Not the couple version.
                </p>
                <p className="font-body text-base md:text-lg text-ivory/60 font-light mt-1">
                  The real one.
                </p>
              </div>

              <div className="mt-12">
                <p className="font-body text-base md:text-lg text-ivory/50 font-light leading-loose">
                  The one that celebrates people
                  <br />who make life lighter,
                  <br />warmer,
                  <br />and a little less lonely.
                </p>
              </div>

              <p className="font-body text-sm md:text-base text-ivory/40 mt-16 tracking-[0.1em] italic font-light">
                — Your forever annoying, slightly overprotective brother
              </p>
            </div>
          </ScrollReveal>
        </ParallaxSection>
      </section>
    </div>
  );
};

export default Index;
