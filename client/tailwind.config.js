/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3a5549",
        secondary: "#f9f7f6",
        accent: "#151118",
      },
    },
  },
  plugins: [],
};
