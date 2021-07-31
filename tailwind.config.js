const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      backgroundImage: {
        "hero-pattern1":
          "url('https://res.cloudinary.com/dk4dgvu4w/image/upload/v1625500624/Saly-7_cl8hzv.png')",
        "hero-pattern2":
          "url('https://res.cloudinary.com/dk4dgvu4w/image/upload/v1625500624/Saly-34_kguaag.png')",
      },
      zIndex: {
        "-1": "-1",
      },
      backgroundPosition: {
        "430px": "430px",
        "550px": "550px",
      },
      width: {
        "600px": "600px",
        "359px": "359px",
      },
      height: {
        "580px": "580px",
        "200px": "200px",
      },
      backgroundSize: {
        HW: "400px 450px",
      },
      spacing: {
        98: "26rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
