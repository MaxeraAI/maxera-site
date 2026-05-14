/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("@relume_io/relume-tailwind")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0A0B",
          950: "#08080A",
          900: "#0E0E10",
          850: "#121214",
          800: "#16171A",
          700: "#1F2024",
          600: "#2A2B30",
          500: "#3A3B41",
          400: "#5A5C64",
          300: "#7E8089",
          200: "#A8AAB1",
          100: "#D4D5D8",
          50: "#F4F5F4",
        },
        saffron: {
          DEFAULT: "#F5C518",
          50: "#FFF9DD",
          100: "#FEEFA6",
          200: "#FCE173",
          300: "#FAD544",
          400: "#F7CC2C",
          500: "#F5C518",
          600: "#D9AC0E",
          700: "#A6830A",
          800: "#6E5707",
          900: "#3D2F04",
        },
      },
      fontFamily: {
        display: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-geist)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        "tightest-2": "-0.045em",
        "tightest-1": "-0.035em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 1.2s ease-out both",
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
};
