import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from './Container'
import media from '../../utils/media'
import Logo from './Logo'

import iconBG from '../../images/IconBG.png'

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292b3c;
  color: white;
  background-image: url(${iconBG});
  background-repeat: no-repeat;
  background-position: right;
  background-size: 50%;

  ${media.md`
    min-height: 34.5rem;
    background-size: initial;
  `}

  ${props =>
    props.large &&
    media.md`
    min-height: 44.5rem;
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
  padding-top: 5rem;
  padding-bottom: 3.75rem;

  ${media.md`
    padding-top: 0;
    padding-bottom: 0;
  `}
`

const SubTitle = styled.div`
  font-family: ${({ theme }) => theme.font.alt};
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colour.accent2};
  padding-bottom: 0.625rem;
`

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: normal;

  ${media.md`
    font-size: 3.25rem;
    line-height: 3.5rem;
  `}
`

const Description = styled.div`
  max-width: 38.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  padding-top: 2rem;
  display: none;

  ${media.sm`
    display: block;
  `}
`

const Actions = styled.div`
  padding-top: 3.25rem;

  & > * {
    margin-right: 1rem;
    margin-bottom: 1rem;
    display: block;

    ${media.sm`
      display: inline-block;
    `}
  }

  & > *:last-child {
    margin-right: 0;
  }
`

const renderFuncOrStr = entity =>
  typeof entity === 'function' ? entity() : entity

const HeroHeader = ({ sub, title, description, actions, large }) => (
  <Hero large={large}>
    <LogoWrapper>
      <Container>
        <Link to={`/`}>
          <Logo />
        </Link>
      </Container>
    </LogoWrapper>
    <HeaderContent>
      <Container small>
        <ContentWrapper>
          {sub && <SubTitle>{renderFuncOrStr(sub)}</SubTitle>}
          {title && <Title>{renderFuncOrStr(title)}</Title>}
          {description && (
            <Description>{renderFuncOrStr(description)}</Description>
          )}
          {actions && <Actions>{renderFuncOrStr(actions)}</Actions>}
        </ContentWrapper>
      </Container>
    </HeaderContent>
  </Hero>
)

export default HeroHeader
