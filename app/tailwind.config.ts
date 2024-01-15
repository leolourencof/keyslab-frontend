import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-gray": "#A1A1AA",
        "secondary-gray": "#27272A",
        "tertiary-gray": "#09090B",
        "primary-blue": "#009EFF",
        "secondary-blue": "#009EFF66",
        "primary-white": "#FAFAFA",
      },
      boxShadow: {
        "dark-blue": "0px 0px 0px 4px rgba(0, 168, 255, 0.10)",
        "dark-black": "0px 0px 0px 4px #09090b",
      },
      backgroundImage: {
        "blue-gradient":
          "linear-gradient(192deg, #051F40 -5.45%, #06425C 106%)",
      },
    },
  },
  plugins: [],
};
export default config;
