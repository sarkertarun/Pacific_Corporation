/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': "#00413D",
        
       'paraColor': "#676767",
        
        'btnbgColor':"#89D32A",
        
      },
      fontFamily: {
        'openSans' :["Open Sans"],

      },
      maxWidth: {
        "container": "1180px",
      },
    },
  },
  plugins: [],
}
