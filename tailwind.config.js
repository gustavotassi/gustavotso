/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-dm-sans)',
        alt: 'var(--font-libre)',
      },
      invert: {
        25: '.25',
        50: '.5',
        75: '.75',
        90: '.90',
      },
    },
  },
  plugins: [],
}
