import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: {
          50: "#e8efe9",
          100: "#c6d5c8",
          200: "#9fb5a3",
          300: "#73927a",
          400: "#4f7258",
          500: "#345540",
          600: "#253f30",
          700: "#1a2e23",
          800: "#122018",
          900: "#0a140e",
          950: "#050a07",
        },
        ink: {
          DEFAULT: "#e8efe9",
          muted: "#9fb5a3",
          faint: "#4f7258",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 1.4s ease-out forwards",
        "fade-in-slow": "fadeIn 2.4s ease-out forwards",
        "rise": "rise 1.2s cubic-bezier(.2,.7,.2,1) forwards",
        "drift": "drift 24s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(10%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
