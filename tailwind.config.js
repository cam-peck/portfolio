/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      ghostwhite: '#F4F4F9',
      lightblue: '#B8DBD9',
      paynesgray: '586F7C',
      charcoal: '#2F4550',
      black: '#000000',
      'success-green': '#28A745',
      'danger-red': '#DC3545',
      orange: '#FFB017',
      coral: '#FF8691',
      lightpurple: '#A259FE',
    },
  },
  plugins: [],
};
