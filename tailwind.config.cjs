/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#4ade80",
        surface: "#090b0f",
        panel: "#11141a",
        text: "#f3f5f7",
        muted: "#9aa4b2"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(74, 222, 128, 0.35), 0 10px 30px rgba(74, 222, 128, 0.16)"
      }
    }
  },
  plugins: []
};
