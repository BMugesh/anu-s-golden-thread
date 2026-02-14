import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { EnvelopeIntro } from "@/components/EnvelopeIntro";
import Section1_Opening from "@/components/Section1_Opening";
import Section2_Moments from "@/components/Section2_Moments";
import Section3_Core from "@/components/Section3_Core";
import Section3_5_Protective from "@/components/Section3_5_Protective";
import Section4_Proud from "@/components/Section4_Proud";
import Section5_Memory from "@/components/Section5_Memory";
import Section6_Final from "@/components/Section6_Final";

const App = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* Envelope Intro */}
      <EnvelopeIntro onComplete={() => setIntroComplete(true)} />

      {/* Main Website - Fades in after intro */}
      <AnimatePresence>
        {introComplete && (
          <motion.main
            className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-gold/30"
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.98 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            <BackgroundEffects />
            <ScrollProgress />

            <div className="relative z-10 flex flex-col">
              <Section1_Opening />
              <Section2_Moments />
              <Section3_Core />
              <Section3_5_Protective />
              <Section4_Proud />
              <Section5_Memory />
              <Section6_Final />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default App;

