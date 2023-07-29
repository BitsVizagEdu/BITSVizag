/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}',"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  plugins: [
    require('flowbite/plugin')
  ],
  theme: {
    screens: {
      '3xs': '320px',
      // => @media (min-width: 640px) { ... }
      
      '2xs': '375px',
      // => @media (min-width: 640px) { ... }
      
      'xs': '425px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'menu':'#234885',        
        'nav': '#2d2d2d',
        'navgray2': '#2d2d2d',
        'purpleS3': '#a598e7',
        'purpleS2': '#5c45d3',
        'purpleS1': '#432cba',
        'sortwhite': '#f4f4f4',
        'red1':'#cc0033',
        'gray1':"#d5d5d5"
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },

        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },

        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out',
        'fade-in-right': 'fade-in-right 1s ease-out',
        'fade-in-left': 'fade-in-left 1s ease-out',
      },
    },
  },
 
}
