/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}', './index.html'],
  prefix: '',
  corePlugins: {
    preflight: false // disable preflight (reset)
  },
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {}
  },
  plugins: [
    'postcss-import',
    'postcss-nesting',
    'tailwindcss',
    'autoprefixer',
    'tailwindcss-animate'
  ]
}
