import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Define quais arquivos usar o Tailwind
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFC93D', // Cor dourada para textos
        secondary: '#1a1f36', // Cor preta para fundo
        background: '#f1f5f9',
      },
    },
  },
  plugins: [],
};

export default config;
