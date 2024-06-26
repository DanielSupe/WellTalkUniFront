import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'bright': 'linear-gradient(to right, #ffffff, #f0f0f0)',
        'primary-pastel': '#d6bae4',
        'darkBG': '#111010',
        'primaryWellTalkUni':"#d1643e",
        'bgCalendar':"#232323"
      },
      fontFamily:{
        body: ["Open Sans", "sans-serif"],
        title:["Timmana", "sans-serif"],
      },
      colors:{
        'primary-pastel': '#b19cd9',
        'primaryWellTalkUni':"#d1643e"
      }

    },
  },
  plugins: [],
};
export default config;

