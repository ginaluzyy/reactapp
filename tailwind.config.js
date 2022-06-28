/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/src/assets/blurFundo.png/)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },

      colors: {
        green: {
         700: '#015F43',
         500: '#00875F',
         300: '#00B37E',
        },

        blue: {
          500: '#81D8F7',
        },

        orange: {
          500: '#FBA94C',
        },

        red: {
          500: '#F75A68',
        },

        gray: {
          100:'#E1E1E6',
          200:'#C4C4CC',
          300:'#8D8D99',
          500:'#323238',
          600:'#121214',
          700:'#121214',
          900:'#09090A'
        }
      },
    },
  },
  plugins: [],
}
