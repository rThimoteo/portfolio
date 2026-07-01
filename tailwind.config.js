/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      colors: {
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        graphite: 'rgb(var(--color-graphite) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        code: 'rgb(var(--color-code) / <alpha-value>)',
        codeText: 'rgb(var(--color-code-text) / <alpha-value>)',
        mint: 'rgb(var(--color-mint) / <alpha-value>)',
        lime: 'rgb(var(--color-lime) / <alpha-value>)',
        rust: 'rgb(var(--color-rust) / <alpha-value>)',
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
