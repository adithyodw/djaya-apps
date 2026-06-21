import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#15100a",
        "espresso-2": "#241810",
        cream: "#f7f1e6",
        "cream-2": "#fdf9f1",
        ink: "#2a1c12",
        "ink-soft": "#5b4636",
        clay: "#7a6450",
        terracotta: "#b15a2b",
        "terracotta-deep": "#8a4420",
        gold: "#c2974b",
        "gold-2": "#d4af61",
        "gold-3": "#e6c987",
        "gold-ink": "#a07b3e",
        "card-line": "#ecdfc9",
        "card-line-2": "#eaddc6",
        "dark-card": "#1d130c",
        wa: "#25803a",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-mulish)", "sans-serif"],
      },
      maxWidth: {
        app: "480px",
      },
      keyframes: {
        djRise: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        djRise: "djRise 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
