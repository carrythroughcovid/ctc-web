import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colour.greyDark};
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: ${({ theme }) => theme.font.base};
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colour.primary};

    :hover {
      text-decoration: underline;
    }
  }
  h1, h2, h3 ,h4 ,h5 ,h6 {
    font-family: ${({ theme }) => theme.font.base};
  }
  ::selection {
    background-color: ${({ theme }) => theme.colour.primary};
    color: white;
  }

  .ais-Highlight-highlighted {
    font-style: normal;
    color: ${({ theme }) => theme.colour.primary};
  }
`

export default GlobalStyles
