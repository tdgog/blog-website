/** @type {import('tailwindcss').Config} */
module.exports = {

    safelist: [
  
      ...(() => {
        const suffixes = ['javascript', 'luau', 'reactnative', 't-level', 'white', 'black'];
        const prefixes = ['bg-', 'text-', 'border-', 'border-t-', 'focus:border-b-', 'group-hover:text-'];
  
        let safe = [];
  
        prefixes.forEach(prefix => {
          suffixes.forEach(suffix => {
            safe.push(prefix + suffix)
          })
        });
  
        return safe;
      })(),
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
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }