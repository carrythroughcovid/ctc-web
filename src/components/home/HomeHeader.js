import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../shared/Container'
import media from '../../utils/media'
import Logo from '../shared/Logo'
import { ButtonInternalLink } from '../shared/Button'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #292b3c;
  color: white;

  ${media.sm`
    min-height: 35rem;
  `}
`

const LogoWrapper = styled.div`
  padding-top: 1.75rem;
`

const HeroWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: normal;
  line-height: 1.2;
  font-family: ${({ theme }) => theme.font.alt};
  margin: 0;
  padding-top: 3rem;

  ${media.sm`
    font-size: 3.25rem;
    line-height: 4rem;
    padding-top: 0;
  `}
`
const TitleAlt = styled.div`
  color: ${({ theme }) => theme.colour.red};
`

const ButtonWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  font-family: ${({ theme }) => theme.font.alt};
  padding-left: 1rem;
  padding-right: 1rem;

  & > a {
    flex: 1;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: normal;
  }

  & > a:first-of-type {
    margin-bottom: 1rem;
  }

  ${media.sm`
    display: flex;
    padding-left: 0;
    padding-right: 0;

    & > a:first-of-type {
      margin-right: 1rem;
      margin-bottom: 0;
    }
  `}
`

const HomeHeader = () => {
  return (
    <HomeWrapper>
      <LogoWrapper>
        <Container>
          <Link to={`/`}>
            <Logo />
          </Link>
        </Container>
      </LogoWrapper>
      <HeroWrapper>
        <div>
          <Title>
            We are a platform <TitleAlt>supporting small business</TitleAlt>
            through COVID-19
          </Title>
          <ButtonWrapper>
            <ButtonInternalLink to="/signup" secondary large>
              Sign up
            </ButtonInternalLink>
            <ButtonInternalLink to="#explore" large>
              Explore now
            </ButtonInternalLink>
          </ButtonWrapper>
        </div>
      </HeroWrapper>
    </HomeWrapper>
  )
}

export default HomeHeader
