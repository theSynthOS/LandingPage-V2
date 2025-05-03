/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat-Regular', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-Semibold', 'sans-serif'],
        'montserrat-lightitalic': ['Montserrat-LightItalic', 'sans-serif'],
        'tt-travels-medium': ['TT-Travels-Medium', 'sans-serif'],
        'tt-travels-demi': ['TT-Travels-DemiBold', 'sans-serif'],
      },
      // Other theme extensions
    },
    animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
  },
  plugins: [],
}
