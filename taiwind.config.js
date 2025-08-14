export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00D4BD",
        text: "#A2A2A2",
        secondary: "#000000",
        accent: "#FFFFFF",
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in': 'slideIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
