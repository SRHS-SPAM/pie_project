// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],

  content: ['./src/**/*.{html,js,svelte,ts}'], // Tailwind가 스캔할 파일 경로
  theme: {
    extend: {},
  },
};
