/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        GeistRegular:['GeistRegular','sans-serif'],
        Poppins:['Poppins','sans-serif'],
        ArabicSignature:['ArabicSignature','sans-serif']
      }
    },
  },
  plugins: [],
}

