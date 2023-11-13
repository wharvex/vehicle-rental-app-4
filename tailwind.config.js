/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        aliceblue: "#ebf5ff",
        white: "#fff",
        "gray-900": "#101828",
        limegreen: "#63ff55",
      },
      spacing: {},
      fontFamily: {
        "red-hat-mono": "'Red Hat Mono'",
        "header-footer-button-extra-small": "Cabin",
        "body-large": "'Fira Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "3xs": "10px",
      "13xl": "32px",
      "21xl": "40px",
      "36xl": "55px",
      "11xl": "30px",
      "41xl": "60px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
