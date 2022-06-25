/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //especifica para o taildcss os arquivos que será aplicado
    './src/**/*.tsx' //dentro do src, todos os diretórios com arquivos de extensão .tsx farão uso do tailwind
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif' //Carrega a fonte roboto e se não localizar carrega a sans-serif. A Roboto foi add no index.html e linkada com o google fonts
      },
      colors: {         //Alterando algumas cores padrões do tailwild para se adequar ao estilo do projeto
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
