/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [
    require('flowbite/plugin')
],
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily:{
        iran : ['iran' , 'sans-serif']
    },
    transitionTimingFunction: {
      'scroll': 'cubic-bezier(0.64, 0.57, 0.67, 1.53)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    }
  },
 
}};
