/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      screens: {
        macbook13: "2560px", // Custom width class w-200
        macbook14: "3024px", // Custom width class w-300
        macbook15: "2880px", // Custom width class w-300
        macbook16: "3072px", // Custom width class w-300
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
