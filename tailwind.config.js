/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        border: "#d7d6db",
        black: "#353439",
        gray: "#605f6f",
        primary: "#4825c8",
        "soft-primary": "#6466f1",
        error: "#f87071",
        "bg-blue": "#edf2ff",
        "text-blue": "#c6d2ff",
      },
    },
  },
  plugins: [],
};
