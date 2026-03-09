/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          azulete: '#0043BE',
          naranja: '#D66528',
          pasto: '#CAD64A',
          arena: '#DDD6CC',
          piedra: '#F0EFEA',
          granito: '#8C8884',
          negro: '#171E22',
          blanco: '#FFFFFF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px rgba(23, 30, 34, 0.08)',
      },
      maxWidth: {
        content: '1280px',
      },
      letterSpacing: {
        brand: '-0.04em',
      },
      borderRadius: {
        brand: '1.5rem',
      },
    },
  },
  plugins: [],
}
