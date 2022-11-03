/** @type {import('tailwindcss').Config} */
module.exports = {

  safelist: [
    // Background colour
    ...[
      'javascript'
    ].map(x => 'bg-' + x),

    // Text colour
    ...[
      'javascript',
      'luau'
    ].map(x => 'text-' + x),

    // Border colour
    ...[
      'javascript',
      'luau'
    ].map(x => 'border-' + x),
  ],

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        javascript: '#f7df1e',
        luau: '#00a2ff'
      }
    },
  },
  plugins: [],
}