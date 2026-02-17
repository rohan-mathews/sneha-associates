/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 THIS IS THE MAGICAL LINE! (It fixes the button)
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-playfair)"], 
      },
    },
  },
  plugins: [],
};