/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        'primary-50': '#2a2c35',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3'
      },
      margin: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px'
      },
      margin: {
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/public/img/poster-background.jpg')",
        'gradient-horizontal': 'linear-gradient(90deg, #c25a5a, #e510e3)'
      }
    }
  },
  important: true,
  plugins: []
};
