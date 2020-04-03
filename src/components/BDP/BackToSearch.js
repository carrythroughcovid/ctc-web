import React from 'react'
import styled from 'styled-components'

import Container from '../shared/Container'

const BackBar = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
`

const BackLink = styled.a`
  color: ${({ theme }) => theme.colour.greyLight};
  text-decoration: none;
`

const Chevron = styled.span`
  color: ${({ theme }) => theme.colour.black};
`

const BackToSearch = () => (
  <BackBar>
    <Container>
      <BackLink onClick={() => window.history.back()}>
        <Chevron>&lt;</Chevron> Back to results
      </BackLink>
    </Container>
  </BackBar>
)

export default BackToSearch
