/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        main: "hsl(180, 52%, 96%)",
        filter: "hsl(180, 31%, 95%)",
      },
    },
  },
  plugins: [],
};
