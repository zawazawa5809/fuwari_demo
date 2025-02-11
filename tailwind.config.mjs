import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#e0eeff",
          200: "#c7dfff",
          300: "#a0caff",
          400: "#72aeff",
          500: "#3b82f6",
          600: "#2570eb",
          700: "#1d59d7",
          800: "#1e4baf",
          900: "#1e408a",
          DEFAULT: "rgb(59 130 246)",
        },
        secondary: {
          50: "#f0fdfd",
          100: "#ccfbfc",
          200: "#99f6f9",
          300: "#5deaf2",
          400: "#2dd6e0",
          500: "#06b6d4",
          600: "#0892b0",
          700: "#0e728c",
          800: "#155e73",
          900: "#164e61",
          DEFAULT: "#06b6d4",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        display: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "display-1": [
          "3.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-2": [
          "3rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-3": [
          "2.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        "heading-1": [
          "2rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-2": [
          "1.75rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
        "heading-3": [
          "1.5rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "600" },
        ],
      },
      spacing: {
        "content-sm": "0.5rem",
        "content-base": "1rem",
        "content-lg": "1.5rem",
        "content-xl": "2rem",
        "content-2xl": "3rem",
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
  safelist: [
    {
      pattern: /^bg-primary\/\d+$/,
      variants: ["hover"],
    },
  ],
};
