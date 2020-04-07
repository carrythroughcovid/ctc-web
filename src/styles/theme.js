const font = {
  oswald: "'Oswald', sans-serif",
  lato: "'Lato', sans-serif",
}

const colour = {
  violet: '#6979F8',
  violetDark: '#5F6CD1',
  purple: '#BE52F2',
  purpleDark: '#A053C5',
  teal: '#6CD4C4',
  tealDark: '#24A390',
  red: '#F95861',

  greyDark: '#292B3C',
  grey: '#6C6F90',
  greyLight: '#C0C3DC',
  greySuperLight: '#F2F2F2',
}
const theme = {
  maxWidth: '80rem', // 1280px
  headerHeight: '3.75rem',
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

    // legacy, dont use
    primary: colour.purpleDark,
    black: colour.greyDark,

    // new
    brand: colour.violet,
    accent1: colour.teal,
    accent2: colour.red,
    accent3: colour.purple,
  },
}

export default theme
