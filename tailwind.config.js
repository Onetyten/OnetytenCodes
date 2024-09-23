/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-blue': '#34353a',
        'my-yellow': '#ffc86b',
        'my-grey': '#9799aa',
        'my-grey-l-opacity': '#9799aa4d',
        'my-grey-lw-opacity': '#ffc96b6c',
      },
      backgroundImage: {
        'maury-page': "url('src/assets/WebImages/Maury.png')",
        'cara1': "url('src/assets/WebImages/Cara1.png')",
        'blackjack': "url('src/assets/WebImages/Blackjack.png')",
        'apodtemp': "url('src/assets/WebImages/Apodtemp.png')",
        'aexus': "url('src/assets/WebImages/AexusAir.png')",
      },

      keyframes:
      {rise:{
        "0%":{transform:"translateX(100px) translateY(200px) " ,opacity:"0.1"},
        "100%":{transform:"translateX(0px) translateY(0px)",opacity:"1"},
        },

      },
      animation:{
        "rise":"rise 2s ease-out 2s 1 normal backwards",



      },






    },
  },
  plugins: [],
}