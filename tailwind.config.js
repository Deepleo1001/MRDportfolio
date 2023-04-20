/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
  
    container:{
      center: true,
      padding:'30px',
    },
    
    extend: {
      colors:{
        warnadasar : '#172554',
        warnafontlink : '#eff6ff',
      },
      screens:{
        '2xl' : '1320px',
      }
    },
    
  },
  plugins: [],
}

