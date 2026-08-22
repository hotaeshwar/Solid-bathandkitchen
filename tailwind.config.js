/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#c9a53a',
          goldDark: '#a68322',
          goldLight: '#e8d595',
          goldMuted: '#c9a53a25',
          bg: '#ffffff',
          alabaster: '#faf8f5',
          dark: '#0f0e0c',
          charcoal: '#141413',
          charcoalLight: '#1e1c19',
          grayLight: '#f6f5f2',
          graySoft: '#e5e2db',
          grayText: '#6e6b63',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(201, 165, 58, 0.35)',
        'gold-glow-sm': '0 0 12px rgba(201, 165, 58, 0.25)',
        'luxury': '0 20px 40px -15px rgba(15, 14, 12, 0.08)',
        'luxury-hover': '0 25px 50px -12px rgba(15, 14, 12, 0.15), 0 0 20px rgba(201, 165, 58, 0.25)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 15px rgba(201, 165, 58, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(201, 165, 58, 0.6)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 4s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
