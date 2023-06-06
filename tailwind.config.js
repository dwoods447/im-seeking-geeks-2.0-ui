/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('@/assets/homepage/bg-masthead.jpg')"
      }
    }
  },
}
