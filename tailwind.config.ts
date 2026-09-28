import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#2D176A",
          pink: "#E6007E",
          yellow: "#FFD84D",
          lime: "#C9FF35",
        },
        surface: {
          lilac: "#F8F2FF",
          cream: "#FFF8EE",
          blush: "#FFF1F7",
        },
        ink: "#24154F",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(45, 23, 106, 0.11)",
        card: "0 12px 30px rgba(45, 23, 106, 0.09)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "ui-rounded", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -12px, 0) rotate(3deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(8px, 8px, 0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
