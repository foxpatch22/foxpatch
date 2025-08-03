module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bounceCode: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px) scale(1.1)' },
        },
        spinLogo: {
          '0%': { transform: 'rotate(0deg) scale(0.5)', opacity: '0' },
          '50%': { opacity: '1', transform: 'rotate(180deg) scale(1.2)' },
          '100%': { transform: 'rotate(360deg) scale(1)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 2s ease-in-out infinite',
        bounceCode: 'bounceCode 1s ease-in-out infinite',
        spinLogo: 'spinLogo 1.5s ease-in-out',
        marquee: 'marquee 20s linear infinite', // <-- NEW for logos
      },
    },
  },
  plugins: [],
};