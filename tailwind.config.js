module.exports = {
  content: [
    './layout/**/*.{liquid,json}',
    './sections/**/*.{liquid,json}',
    './snippets/**/*.{liquid,json}',
    './templates/**/*.{liquid,json}',
    './templates/customers/**/*.{liquid,json}',
    './assets/**/*.js',
  ],
  theme: {
    screens: {
      sm: '100%',
      md: '750px',
      lg: '990px',
      xlg: '1440px',
      x2lg: '1920px',
      pageMaxWidth: '1440px',
    },
    extend: {
      fontFamily: {
        heading: 'var(--font-heading-family)',
      },
    },
  },
  plugins: [],
};
