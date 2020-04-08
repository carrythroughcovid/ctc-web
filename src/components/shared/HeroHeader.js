import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from './Container'
import media from '../../utils/media'
import Logo from './Logo'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292b3c;
  color: white;

  ${media.md`
    min-height: 34.5rem;
  `}

  ${props =>
    props.large &&
    media.md`
    min-height: 34.5rem;
  `}
`
const LogoWrapper = styled.div`
  padding-top: 1.75rem;
`
const HeaderContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const ContentWrapper = styled.div`
  padding-top: 3.5rem;
  padding-bottom: 3.75rem;

  ${media.md`
    padding-top: 0;
    padding-left: 6.75rem;
    padding-bottom: 5rem;
  `}
`

const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.font.alt};
  text-transform: uppercase;
  letter-spacing: 1.5px;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: normal;

  ${media.md`
    font-size: 3.25rem;
  `}
`

const Actions = styled.div`
  padding-top: 3.25rem;

  & > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }

  & > *:last-child {
    margin-right: 0;
  }
`

const renderFuncOrStr = entity =>
  typeof entity === 'function' ? entity() : entity

const HeroHeader = ({ sub, title, actions, large }) => (
  <Hero large={large}>
    <LogoWrapper>
      <Container>
        <Link to={`/`}>
          <Logo />
        </Link>
      </Container>
    </LogoWrapper>
    <HeaderContent>
      <Container>
        <ContentWrapper>
          {sub && <SubTitle>{renderFuncOrStr(sub)}</SubTitle>}
          {title && <Title>{renderFuncOrStr(title)}</Title>}
          {actions && <Actions>{renderFuncOrStr(actions)}</Actions>}
        </ContentWrapper>
      </Container>
    </HeaderContent>
  </Hero>
)

export default HeroHeader
