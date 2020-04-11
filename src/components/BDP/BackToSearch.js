import React from 'react'
import styled from 'styled-components'
import { FiChevronLeft } from 'react-icons/fi'

import Container from '../shared/Container'
import media from '../../utils/media'

const BackBar = styled.div`
  height: 3rem;
  background-color: ${({ theme }) => theme.colour.greySuperLight};
  display: flex;
  align-items: center;

  ${media.sm`
    height: 4rem;
  `}
`

const Chevron = styled.span`
  color: ${({ theme }) => theme.colour.black};
  display: inline-flex;
  padding-right: 0.25rem;
`

const BackLink = styled.a`
  color: ${({ theme }) => theme.colour.black};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;

  ${media.sm`
    padding-left: 0rem;
  `}

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => theme.colour.primary};

    & > ${Chevron} {
      color: ${({ theme }) => theme.colour.primary};
    }
  }
`

const BackToSearch = () => (
  <BackBar>
    <Container fullWidth small>
      <BackLink onClick={() => window.history.back()}>
        <Chevron>
          <FiChevronLeft size="2rem" />
        </Chevron>{' '}
        Back to results
      </BackLink>
    </Container>
  </BackBar>
)

export default BackToSearch
