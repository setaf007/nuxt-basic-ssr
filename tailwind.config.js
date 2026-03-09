// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        store: {
          red: '#e31c5d',
          black: '#000000',
          white: '#ffffff',
          gold: '#f5c518',
          'gray-50': '#f8fafc',
          'gray-900': '#0f172a'
        }
      }
    }
  },
  plugins: []
}
