/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        grisBarra: '#C1C1C1',
        azulOscuro: '#164863',
        azulClarito: '#9BBEC8',
        azulMedio: '#427D9D',
        azulMasClarito: '#92A6C5',
        colorFinalizado: '#90EE90',
        colorCancelado: '#FF4949',
        colorBloqueado:'#ECD71D'
      },

    },
  },
  
  plugins: [],
}
