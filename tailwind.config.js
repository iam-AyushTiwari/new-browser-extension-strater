/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./**/*.tsx",
    "!./node_modules/**/*"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#dc3545"
      }
    }
  },
  plugins: []
}
