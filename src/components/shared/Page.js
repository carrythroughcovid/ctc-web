import React from 'react'
import styled from 'styled-components'

import Document from './Document'
import Header from './Header'
import Footer from './Footer'

import media from '../../utils/media'

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #ffffff;
`

const Main = styled.main`
  flex: 1;
  margin-bottom: ${props => props.noMargin ? '0' : '2rem'};

  ${media.sm`
    margin-bottom: ${props => props.noMargin ? '0' : '4rem'};
  `}
`

const Page = ({ children, customHeader, noMargin }) => (
  <Document>
    <Wrapper>
      {!customHeader ? <Header /> : customHeader()}
      <Main noMargin={noMargin}>{children} </Main>
      <Footer />
    </Wrapper>
  </Document>
)

export default Page
