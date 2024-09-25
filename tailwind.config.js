/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow:{
        shadowhan: '5px 5px 15px 5px rgba(0,0,0,0.14)', 

      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};

