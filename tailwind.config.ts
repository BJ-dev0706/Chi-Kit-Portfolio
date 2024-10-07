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
      },
      fontFamily: {
        tillana: ['"Tillana"', 'system-ui'], // Custom font family
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      }
    },
  },
  plugins: [],
};
export default config;
