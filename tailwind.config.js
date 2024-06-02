module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 50: "#f6f7fc", 200: "#efefef", 300: "#dddddd", 600: "#7f7f7f", 800: "#4e4e4e", 900: "#0f162e" },
        white: { A700: "#ffffff", A700_33: "#ffffff33", A700_11: "#ffffff11", A700_cc: "#ffffffcc" },
        black: { 900: "#000000" },
        indigo: { A400: "#435bfe", "50_7f": "#e2e7f57f" },
        blue_gray: { 100: "#cfd0d5", 900: "#292d32" },
        blue: { A700: "#0b62f0" },
        indigo_A700: "#0141e9",
      },
      boxShadow: {},
      fontFamily: { manrope: "Manrope" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
