/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, html}"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fade: "fadeOut 1s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.black") },
          "100%": { backgroundColor: theme("colors.transparent") },
        },
      }),
    },
  },
  plugins: [require("daisyui")],
};
