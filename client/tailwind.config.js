/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#07090D',
          light: '#F8FAFC'
        },
        surface: {
          dark: '#0D1117',
          light: '#FFFFFF'
        },
        teal: {
          glow: '#00D6C9',
          primary: '#00AFA8',
          deep: '#137F83'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Inter"', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', '"Inter"', 'sans-serif']
      },
      animation: {
        'wave-slow': 'wave 16s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-medium': 'wave 11s cubic-bezier(0.36, 0.45, 0.63, 0.53) -4s infinite',
        'wave-fast': 'wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -2s infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite'
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' }
        }
      }
    },
  },
  plugins: [],
}
