/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-gray': '#1c1e24',
        'custom-light-gray': '#2b313a',
        'custom-green': '#1ad499',
        'custom-text-gray' : '#BBBBBB',
        'custom-text-dark-gray' : '#838A8A',
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'],
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      }
    },

  },
  plugins: [],
}
