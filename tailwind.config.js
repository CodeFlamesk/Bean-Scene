/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {

    extend: {
      lineHeight: {

      },

      borderColor: ['focus', 'valid', 'invalid'],
      outlineColor: ['focus', 'valid', 'invalid'],
      screens: {


      },
      fontSize: {

      },

      spacing: {

      },
      borderRadius: {

      },

    },

    colors: {

      "white": "#FFFFFF",
      "dark": "#1E1E1E",
      "orange-btn": "#F9C06A",
      "color-coffee": "#603809",
      "grey": "#707070",
      "grey-second": "#B3AEA9",
      "orange-lite": "#FFF9F1",
      "yellow-lite": "#F3D83B",
      "color-hover": "#FFEED8",
      "twitter": "#1DA1F2",
      "instagram": "#E1306C",
      "facebook": "#17A9FD",

      "green": "#4CB051",
      "red": "#fe0000",



    },

  },
  plugins: [],
  variants: {},

}

