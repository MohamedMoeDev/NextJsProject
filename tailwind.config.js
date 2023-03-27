/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'from-red-500',
    'from-orange-500',
    'from-yellow-500',
    'from-green-500',
    'from-cyan-500',
    'from-blue-500',
    'from-indigo-500',
    'from-violet-500',
    'from-purple-500',
    'from-pink-500',
    'bg-blue'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}