/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Caminhos para os arquivos que utilizam classes Tailwind
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC107', // Cor principal personalizada
        secondary: '#FFCA28', // Cor secundária personalizada
      },
    },
  },
  plugins: [],
};
