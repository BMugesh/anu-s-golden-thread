import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundAudio = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(e => console.log("Audio requires interaction first:", e));
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        // Auto-play attempt on mount (often blocked by browsers, but worth a try)
        // or simply set volume
        if (audioRef.current) {
            audioRef.current.volume = 0.3; // Low volume as requested
        }
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <audio ref={audioRef} loop src="/audio/memory-theme.mp3" />

            <button
                onClick={toggleAudio}
                className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 hover:bg-black/40 transition-all duration-500"
            >
                <div className="absolute inset-0 rounded-full border border-white/5 group-hover:scale-110 transition-transform duration-500" />

                {isPlaying ? (
                    // Sound Wave Animation
                    <div className="flex items-end gap-[2px] h-4">
                        <motion.div
                            animate={{ height: [4, 12, 6, 14, 4] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="w-[2px] bg-gold/80"
                        />
                        <motion.div
                            animate={{ height: [8, 4, 16, 6, 8] }}
                            transition={{ duration: 0.4, repeat: Infinity, delay: 0.1 }}
                            className="w-[2px] bg-gold/80"
                        />
                        <motion.div
                            animate={{ height: [6, 14, 4, 12, 6] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            className="w-[2px] bg-gold/80"
                        />
                    </div>
                ) : (
                    // Mute Icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-ivory/60 group-hover:text-gold transition-colors">
                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                    </svg>
                )}
            </button>

            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                <span className="text-white/60 text-xs tracking-widest uppercase font-light">
                    {isPlaying ? "Pause Music" : "Play Music"}
                </span>
            </div>
        </div>
    );
};

export default BackgroundAudio;
