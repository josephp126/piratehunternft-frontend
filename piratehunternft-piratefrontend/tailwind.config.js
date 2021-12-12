module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        // "footer-texture": "url('/img/footer-texture.png')",
      },
      colors: {
        primary: "#E7973D",
        tranparent: "rgba(0, 0, 0, 0.74)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        "6xl": "1200px",
      },
      fontSize: {
        tiny: "11px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
