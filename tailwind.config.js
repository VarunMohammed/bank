/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('/explore.jpg')",
        'explorebg': "url('/paddy.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-black': '#1E1E1E',
        'nav-black': '#1C1C1C',
        'nav-border': '#262626',
        'neon-green': '#CAFF33',
        'footer-black': '#1A1A1A',
        'footer-text': '#E4E4E7',
        'footer-secondary': '#151515'
      },
    },
  },
  plugins: [],
};
