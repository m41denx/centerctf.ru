/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: "#090915",
        darkblue: "#1D1D43",
      },
      fontFamily: {
        'avant': ["ITC Avant Garde Std Md", "sans-serif"],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
      },
    },
  },
  plugins: [],
};
