/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // specifying paths to all files where tailwind classes might be used, includes all JavaScript, TypeScript, and JSX/TSX files in the `src` directory and its subdirectories
  ],
  // used to explicitly include certain classes that might not be detected in the scanned files  
  safelist: [
    // commonly used background color utilities with hover effects for different color
    'bg-black','bg-black-500', 'hover:bg-black-300', 'hover:bg-black-500', 'hover:bg-black-200', 'hover:bg-black-100',
    'hover:bg-red-500', 'hover:bg-red-200', 'hover:bg-red-100',
    'hover:bg-green-500', 'hover:bg-green-200', 'hover:bg-green-100',
    'hover:bg-blue-500', 'hover:bg-blue-200', 'hover:bg-blue-100',
    'hover:bg-teal-500', 'hover:bg-teal-200', 'hover:bg-teal-100',
    'hover:bg-pink-500', 'hover:bg-pink-200', 'hover:bg-pink-100',
    'hover:bg-purple-500', 'hover:bg-purple-200', 'hover:bg-purple-100',
    'hover:bg-cyan-500', 'hover:bg-cyan-200', 'hover:bg-cyan-100',
    'hover:bg-orange-500', 'hover:bg-orange-200', 'hover:bg-orange-100',
    'hover:bg-yellow-500', 'hover:bg-yellow-200', 'hover:bg-yellow-100',

    // allows dynamic class patterns to be safely included, matches classes with the format: bg-, text-, hover:bg-, or border- followed by a color and intensity (e.g., purple-500, blue-100)
    {
      pattern: /(bg|text|hover:bg|border)-((red|green|blue|teal|pink|purple|cyan|orange|yellow)-(50|100|200|500|600|700|800))/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

