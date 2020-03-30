import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  }
  a {
    text-decoration: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
  h1, h2, h3 ,h4 ,h5 ,h6 {
    font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  }
  ::selection {
    background-color: ${props => props.theme.colour.primary};
  }
`

export default GlobalStyles
