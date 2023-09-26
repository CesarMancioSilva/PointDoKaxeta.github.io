/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens:{
      'cl':'100px',
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '1150px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    colors:{
      primary:"#E1D652",
      bgblack:"#121212",
      secondary:"#332F2E",
      bgmenu:"#474443",
      white:'#fff'
    },
    extend: {},
  },
  plugins: [],
}

