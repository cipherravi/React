/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Include all your source files (JSX and TSX)
    // "./src/Components/**/*.{js,jsx,ts,tsx}", // Match all files in Components folder
    // "./src/pages/**/*.{js,jsx,ts,tsx}", // Match all files in pages folder
  ],
  theme: {
    extend: {
      colors: {
        menuShimmer: "#181A29",
      },
    },
  },
  plugins: [],
};
