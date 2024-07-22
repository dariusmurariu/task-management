/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
        sans: ['Omnes', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#2355D6'
      }
    },
  },
  plugins: [],
};
