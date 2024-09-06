/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        siteName: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
