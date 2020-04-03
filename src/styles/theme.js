const font = {
  oswald: "'Oswald', sans-serif",
  lato: "'Lato', sans-serif",
}

const colour = {
  violet: '#6979F8',
  purple: '#BE52F2',
  purpleDark: '#9060EB',
  teal: '#6CD4C4',

  greyDark: '#1D1F24',
  grey: '#606265',
  greyLight: '#ECEBED',
}

const theme = {
  maxWidth: '64rem', // 1024px
  headerHeight: '4.25rem',
  containerGutter: '1.25rem',

  media: {
    lg: 1024,
    md: 768,
    sm: 576,
  },

  font: {
    ...font,
    base: font.lato,
    alt: font.oswald,
  },

  colour: {
    ...colour,
    primary: colour.purpleDark,
    black: colour.greyDark,
  },
}

export default theme
