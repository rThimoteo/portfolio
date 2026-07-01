/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        ink: '#101820',
        paper: '#f4f7f5',
        graphite: '#263238',
        mint: '#14b8a6',
        lime: '#b6e55c',
        rust: '#c25a3f',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(16, 24, 32, 0.12)',
        line: '0 1px 0 rgba(16, 24, 32, 0.08)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        reveal: 'reveal 700ms ease both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        reveal: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
