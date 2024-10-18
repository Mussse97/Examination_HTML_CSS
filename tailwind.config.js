/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',  // Alla HTML-filer i rotmappen
    './src/**/*.html',  // Alla HTML-filer i /src eller dess undermappar (om du använder en src-mapp)
    './src/**/*.js',  // Alla JavaScript-filer om du använder JS med Tailwind-klasser
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
