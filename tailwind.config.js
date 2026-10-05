/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#FF385C',
        ink: '#222222',
        secondary: '#717171',
        hairline: '#DDDDDD',
        fill: '#F7F7F7',
      },
      fontFamily: {
        sans: [
          '"Nunito Sans"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      maxWidth: {
        listing: '1120px',
      },
    },
  },
  plugins: [],
};
