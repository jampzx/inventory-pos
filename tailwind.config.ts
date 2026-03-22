import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "sans-serif"],
        display: ["var(--font-display)", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lamaSky: "#0f9f9d",
        lamaSkyLight: "#e7f8f7",
        lamaPurple: "#87a3ee",
        lamaPurpleLight: "#eef2ff",
        lamaYellow: "#f5792f",
        lamaYellowLight: "#fff2df",
      },
    },
  },
  plugins: [],
};
export default config;
