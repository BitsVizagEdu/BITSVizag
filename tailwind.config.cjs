/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'purpleS3': '#a598e7',
        'purpleS2': '#5c45d3',
        'purpleS1': '#432cba',
      },
    },
  },
  plugins: [],
}
