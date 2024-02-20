/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.hbs"],
  theme: {
    fontFamily: {
      sans: "Proxima Nova",
      serif: "PT Serif"
    },
    extend: {}
  },
  plugins: [require("@tailwindcss/typography")]
};
