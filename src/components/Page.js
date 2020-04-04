import React from 'react'
import styled from 'styled-components'

import Document from './Document'
import Header from './Header'
import Footer from './Footer'

import media from '../utils/media'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`

const Main = styled.main`
  flex: 1;
  margin-bottom: 2rem;

  ${media.sm`
    margin-bottom: 4rem;
  `}
`

const Page = ({ children }) => (
  <Document>
    <Wrapper>
      <Header title="Carry through Covid" />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  </Document>
)

export default Page
