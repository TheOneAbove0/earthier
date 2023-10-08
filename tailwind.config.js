/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        'AdminPanel': '#DFE1E6',
        'BlueColor': '#1274FF',
        'LightGrey' : '#F3F7FD',
        'Tertiary' : '#9A9A9A',
        'Success' : '#24BE67',
        'Danger' : '#EF233C',


      },
    },
  },
  plugins: [],
};
