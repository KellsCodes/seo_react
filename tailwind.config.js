/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      colors: {
        purple: {
          primary: "#7B049E",
        },
        white: {
          primary: "#FFFFFF"
        },
        pink: {
          primary: "#FF0F6A"
        },
        gray: {
          primary: "#1F2937",
          light: "#D1D5DB"
        },
        black: "#0A010D"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
