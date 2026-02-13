import React from 'react';
import { BackgroundEffects } from "@/components/ui/BackgroundEffects";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import Section1_Opening from "@/components/Section1_Opening";
import Section2_Moments from "@/components/Section2_Moments";
import Section3_Core from "@/components/Section3_Core";
import Section4_Proud from "@/components/Section4_Proud";
import Section5_Memory from "@/components/Section5_Memory";
import Section6_Final from "@/components/Section6_Final";

const App = () => {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background text-foreground selection:bg-gold/30">
      <BackgroundEffects />
      <ScrollProgress />

      <div className="relative z-10 flex flex-col">
        <Section1_Opening />
        <Section2_Moments />
        <Section3_Core />
        <Section4_Proud />
        <Section5_Memory />
        <Section6_Final />
      </div>
    </main>
  );
};

export default App;
