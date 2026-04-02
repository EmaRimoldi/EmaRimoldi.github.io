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
        serif: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
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
