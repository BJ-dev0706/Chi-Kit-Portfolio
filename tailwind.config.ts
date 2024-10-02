import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#1E1E1E'
      },
      backgroundColor: {
        'dark': '#1E1E1E'
      }
    },
  },
  plugins: [],
};
export default config;
