/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: "#0a0a0a",
        border: "#1f1f1f",
        muted: "#a1a1aa",
      },
      fontFamily: {
        sans: ["SF Pro Display", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

