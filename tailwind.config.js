module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chemcrux: {
          light: '#F2F2F2',
          dark: '#0F0E17',
          primary: '#6C63FF',
          secondary: '#FF7D00',
          accent: '#00B4D8'
        }
      },
    },
  },
  plugins: [],
}
