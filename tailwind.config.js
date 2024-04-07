/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(180, 29%, 50%)",
        main: "#EFFAFA",
        header: "#209E9E",
        filter: "hsl(180, 31%, 95%)",
        filterClearButton: "#7C8F8F",
        filterItem: "#5ca5a51a",
        filterItemColor: "#5CA5A5",
        filterItemButton: "#5CA5A5",
        filterItemButtonHover: "#2B3939",
      },
      backgroundImage: {
        headerMobile: "url('/assets/bg-header-mobile.svg')",
        headerDesktop: "url('/assets/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
