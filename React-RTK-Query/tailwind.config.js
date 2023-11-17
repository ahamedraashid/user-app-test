/** @type {import('tailwindcss').Config} */
export default {
  important: '#app',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // multi-theme support
        primary: '#30515B',
        'primary-focus': '#30515B',
        'primary-content': '#000000',

        secondary: '#30515B',
        'secondary-focus': '#30515B',
        'secondary-content': '#000000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
