/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: '1400px',
    },
    extend: {
      colors: {
        bodyColor: "hsl(300, 100%, 2%)",
        sectionColor: "hsl(300, 100%, 5%)",
        cardColor: "hsl(300, 100%, 10%)",
        titleColor: "hsl(300, 100%, 23%)",
        textColor: "hsl(0, 0%, 100%)",
      }
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif;"],
      DancingScript: ["Dancing Script", "cursive"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      }
    }
  },
  plugins: [],
}