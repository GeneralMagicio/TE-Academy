/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },

      backgroundImage: {
        'dark-hero-pattern': "url('/public/dark_bg.svg')"
      },
      colors: {
        te: {
          green: '#EAFF6D',
          purple: '#9500DC',
          blue: '#1B66FF',
          dark: '#051425',
          lblue: '#03B3FF',
          lime: '#8EF54B',
          pink: '#FD40FE',
          dblue: '#0B58AF'
        }
      },
      fontFamily: {
        bai: ['Bai Jamjuree'],
        open: ['Open Sans']
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      }
    }
  },
  plugins: []
}
