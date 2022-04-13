module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'XL': {'max': '1047px'},
        'L': {'max': '1024px'}
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}