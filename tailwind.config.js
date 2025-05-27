/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/component/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        border: "rgba(139, 92, 246, 0.3)",
        ring: "rgba(124, 58, 237, 0.5)",
      },
      // Other theme extensions
    },
    animation: {
      shimmer: "shimmer 2s linear infinite",
      marquee: "marquee 20s linear infinite",
      scroll: "scroll 40s linear infinite",
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
      marquee: {
        '0%': {
          transform: 'translateX(0)',
        },
        '100%': {
          transform: 'translateX(-50%)',
        },
      },
      scroll: {
        to: {
          transform: 'translate(calc(-50% - 0.5rem))',
        },
      },
    },
  },
  plugins: [],
}
