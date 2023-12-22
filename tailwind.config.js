/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        border: "#d7d6db",
        black: "#353439",
        gray: "#605f6f",
        primary: "#4825c8",
        error: "#f87071",
        "bg-disabled": "#edf2ff",
        "text-disabled": "#c6d2ff",
      },
    },
  },
  plugins: [],
};
