/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
    fontFamily: {
      "inter": ["Inter", "ui-sans-serif"],
      "knewave": ["Knewave", "Inter"]
    },
    fontSize: {
      "sm": "1rem",
      "md": "1.375rem",
      "lg": "2rem",
      "xl": "4rem",
      "2xl": "5.625rem"
    }
  },
  plugins: [],
}

