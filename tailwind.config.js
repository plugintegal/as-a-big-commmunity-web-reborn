module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '98': '26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
