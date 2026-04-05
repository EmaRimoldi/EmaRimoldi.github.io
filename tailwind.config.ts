import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "site-bg": "#ebe3db",
        "site-text": "#251f1d",
        "site-text-soft": "#5e564e",
        "site-line": "#c4b6a8",
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
