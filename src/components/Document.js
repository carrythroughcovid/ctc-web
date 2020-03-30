import React from "react"
import { Normalize } from "styled-normalize"
import { ThemeProvider } from "styled-components"

import theme from "../styles/theme"
import GlobalStyles from "../styles/GlobalStyles"

const Document = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Normalize />
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export default Document
