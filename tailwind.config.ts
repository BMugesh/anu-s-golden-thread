import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom emotional palette
        ivory: "#FFFFF0",
        lavender: {
          soft: "#F3E5F5",
          muted: "#E1BEE7",
        },
        gold: {
          light: "#F4E09E",
          DEFAULT: "#D4AF37",
          glow: "rgba(212, 175, 55, 0.5)",
        },
        dusk: {
          DEFAULT: "#2D283E",
          deep: "#1A1625",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Fluid typography using clamp()
        'fluid-xs': 'clamp(0.75rem, 1.5vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.5rem)',
        'fluid-4xl': 'clamp(2rem, 6vw, 3rem)',
        'fluid-5xl': 'clamp(2.25rem, 7vw, 4rem)',
        'fluid-6xl': 'clamp(2.5rem, 8vw, 5rem)',
        'fluid-7xl': 'clamp(3rem, 10vw, 6rem)',
        'fluid-8xl': 'clamp(3.5rem, 12vw, 7rem)',
      },
      spacing: {
        // Fluid spacing
        'fluid-xs': 'clamp(0.5rem, 2vw, 0.75rem)',
        'fluid-sm': 'clamp(0.75rem, 3vw, 1rem)',
        'fluid-md': 'clamp(1rem, 4vw, 1.5rem)',
        'fluid-lg': 'clamp(1.5rem, 5vw, 2rem)',
        'fluid-xl': 'clamp(2rem, 6vw, 3rem)',
        'fluid-2xl': 'clamp(3rem, 8vw, 4rem)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "background-pan": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "camera-forward": {
          "0%": { transform: "scale(1.03)", filter: "blur(8px)" },
          "100%": { transform: "scale(1.0)", filter: "blur(0px)" }
        },
        "camera-pullback": {
          "0%": { transform: "scale(1.0)" },
          "100%": { transform: "scale(0.98)" }
        },
        "golden-sweep": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "golden-pulse-slow": {
          "0%, 100%": { transform: "scale(1.0)", opacity: "0.3" },
          "50%": { transform: "scale(1.03)", opacity: "0.5" }
        },
        "drift-slow": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-10%) translateY(-5%)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "background-pan": "background-pan 15s ease infinite",
        "fade-in": "fade-in 1.5s ease-in-out forwards",
        "fade-up": "fade-up 1.5s ease-out forwards",
        "soft-pulse": "soft-pulse 4s ease-in-out infinite",
        "camera-forward": "camera-forward 3s ease-out forwards",
        "camera-pullback": "camera-pullback 3s ease-in-out forwards",
        "golden-sweep": "golden-sweep 2s ease-in-out",
        "golden-pulse-slow": "golden-pulse-slow 4s ease-in-out infinite",
        "drift-slow": "drift-slow 30s linear infinite"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
