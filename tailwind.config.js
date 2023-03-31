/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ghostwhite: '#F4F4F9',
      lightblue: '#B8DBD9',
      paynesgray: '#586F7C',
      charcoal: '#2F4550',
      black: '#000000',
      'success-green': '#28A745',
      'danger-red': '#DC3545',
      orange: '#FFB017',
      coral: '#FF8691',
      lightpurple: '#A259FE',
      lightgray: '#9ca3af',
      darkgray: '#111827',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      mdlg: '875px',
      // => @media (min-width: 875px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      techstack: '1140px',
      // => @media (min-width: 1140px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
