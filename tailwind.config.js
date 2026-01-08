/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D10",
        panel: "#111418",
        muted: "#9CA3AF",
        accent: "#7C7CFF",
      },
    },
  },
  plugins: [],
}
