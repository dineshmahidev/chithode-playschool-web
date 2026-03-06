/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E31C78",
          dark: "#c4156a",
          light: "#f7418f",
          50: "#fff0f6",
          100: "#ffe0ee",
          200: "#ffc2de",
          300: "#ff8ec1",
          400: "#ff5aa5",
          500: "#E31C78",
          600: "#c4156a",
          700: "#a01057",
          800: "#7c0c43",
          900: "#5a0831",
        },
        yellow: {
          school: "#F5C518",
          dark: "#e0b014",
        },
        pink: {
          soft: "#fce4ec",
          light: "#f48fb1",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        fredoka: ['"Fredoka One"', "cursive"],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        "float-delay": "float 3s ease-in-out 1.5s infinite",
        "bounce-slow": "bounce 2s infinite",
        "spin-slow": "spin 8s linear infinite",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideUp: {
          from: { opacity: 0, transform: "translateY(30px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 60%)",
      },
      boxShadow: {
        card: "0 8px 32px rgba(227,28,120,0.15)",
        "card-lg": "0 16px 48px rgba(227,28,120,0.2)",
        yellow: "0 4px 20px rgba(245,197,24,0.4)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
