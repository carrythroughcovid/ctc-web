import React from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "styled-components"
import { Helmet } from "react-helmet"

import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"

const Document = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        {children}
      </>
    </ThemeProvider>
  )
}

export default Document
