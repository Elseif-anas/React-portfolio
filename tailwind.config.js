/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'text-reveal': 'text-reveal 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(102, 126, 234, 0.5)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.8)',
            transform: 'scale(1.05)'
          },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'text-reveal': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(102, 126, 234, 0.5)',
        'glow-secondary': '0 0 20px rgba(240, 147, 251, 0.5)',
        'glow-accent': '0 0 20px rgba(79, 172, 254, 0.5)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
        '.gradient-text': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'gradient-shift 3s ease-in-out infinite',
        },
        '.hover-lift': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.hover-lift:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
        },
        '.card-hover': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
        },
        '.card-hover::before': {
          content: '""',
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(240, 147, 251, 0.1))',
          opacity: '0',
          transition: 'opacity 0.3s ease',
          borderRadius: 'inherit',
        },
        '.card-hover:hover::before': {
          opacity: '1',
        },
        '.card-hover:hover': {
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)',
        },
        '.line-clamp-2': {
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}