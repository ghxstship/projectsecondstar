import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        paper: "#F5F2EC",
        cyan: {
          DEFAULT: "#00E5FF",
          deep: "#00BCD4",
        },
        fog: "#1A1A1A",
        dust: "#2A2A28",
        line: "#333333",
        muted: "#8A8A86",
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        sub: ["var(--font-bebas)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        hard: "8px 8px 0 #0A0A0A",
        "hard-cyan": "8px 8px 0 #00E5FF",
        soft: "4px 4px 0 #0A0A0A",
        "hard-xl": "12px 12px 0 #0A0A0A",
        "hard-xl-cyan": "12px 12px 0 #00E5FF",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-line": "pulse-line 2s infinite",
        "fade-in": "fade-in 0.4s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-line": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
