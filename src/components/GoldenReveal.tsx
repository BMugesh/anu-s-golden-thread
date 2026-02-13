import { useState } from "react";

const GoldenReveal = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-golden transition-colors duration-700 cursor-pointer border-b border-muted-foreground/30 hover:border-golden/50 pb-1"
        >
          There's something I don't say enough
        </button>
      ) : (
        <div className="text-center animate-golden-reveal golden-glow-box rounded-2xl px-12 py-16 max-w-lg">
          <p className="font-serif-display text-2xl md:text-3xl leading-relaxed text-foreground italic">
            Thank you for being constant.
          </p>
          <p className="font-serif-display text-2xl md:text-3xl leading-relaxed text-foreground italic mt-4">
            I'm grateful for you. Always.
          </p>
        </div>
      )}
    </div>
  );
};

export default GoldenReveal;
