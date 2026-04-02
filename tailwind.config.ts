import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "site-bg": "#F5EEE9",
        "site-text": "#262424",
        "site-text-soft": "#6E6763",
        "site-line": "#DDD4CE",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      maxWidth: {
        site: "1280px",
        content: "1180px",
        reading: "760px",
      },
    },
  },
  plugins: [],
};

export default config;
