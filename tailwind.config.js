/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "375px",
      "lg": "1440px",
    },
    extend: {
      colors: {
        "very-dark-blue": "hsl(233, 47%, 7%)",
        "dark-desaturated-blue": "hsl(244, 38%, 16%)",
        "soft-violet": "hsl(277, 64%, 61%)",
        "hard-violet": "hsl(285, 78%, 30%)",
        "Slightly-transparent-white": "hsla(0, 0%, 100%, 0.75)",
        "More-Slightly-transparent-white": "hsla(0, 0%, 100%, 0.6)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Lexand: ["Lexend Deca", "sans-serif"]
      }
    },
  },
  plugins: [],
}