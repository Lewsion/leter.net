/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#f5f5f5",
        surface: "#050505",
        panel: "#0b0b0b",
        text: "#f5f5f5",
        muted: "#a3a3a3"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 255, 255, 0.35), 0 12px 28px rgba(255, 255, 255, 0.14)"
      }
    }
  },
  plugins: []
};
