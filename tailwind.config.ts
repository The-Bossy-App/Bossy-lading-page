import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          200: "#C9CFFF2E",
          800: "#243FFF",
        },
        grey: {
          800: "#5A5858",
          700: "#8A8A8A",
          600: "#838383",
          300: "#DDDDDD",
          200: "#F7F7F7",
        },
        dark: {
          800: "#0F172A",
        },
      },
    },
    data: {
      true: 'true="true"',
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
