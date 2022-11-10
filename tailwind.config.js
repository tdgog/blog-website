/** @type {import('tailwindcss').Config} */
module.exports = {

  safelist: [
    // Background color
    ...[
      'javascript',
      'luau',
      'reactnative',
      't-level'
    ].map(x => 'bg-' + x),

    // Text colour
    ...[
      'javascript',
      'luau',
      'reactnative',
      't-level'
    ].map(x => 'text-' + x),

    // Border colour
    ...[
      'javascript',
      'luau',
      'reactnative',
      't-level'
    ].map(x => 'border-' + x),

    // Border top colour
    ...[
      'javascript',
      'luau',
      'reactnative',
      't-level'
    ].map(x => 'border-t-' + x)
  ],

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        javascript: '#f7df1e',
        luau: '#00a2ff',
        reactnative: '#61dbfb',
        't-level': '#FB431D'
      },
      fontFamily: {
        'comfortaa': 'Comfortaa Variable Weight',
        'opensans': 'Open Sans Variable Weight'
      }
    },
  },
  plugins: [],
}