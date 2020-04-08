import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FiArrowRight, FiMail, FiFacebook, FiInstagram } from 'react-icons/fi'

import Container from '../shared/Container'
import Logo from '../shared/Logo'
import media from '../../utils/media'

const StyledFooter = styled.footer`
  display: flex;
  background-color: #2a2c2f;
  color: white;
  padding-top: 2.25rem;
  padding-bottom: 1.5rem;

  ${media.md`
    padding-bottom: 4rem;
  `}
`
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContentWrapperTop = styled(ContentWrapper)`
  flex-direction: column;
  align-items: flex-start;

  ${media.md`
    align-items: flex-end;
    flex-direction: row;
  `}
`

const FooterLink = styled(Link)`
  color: white;
  margin-right: 3.5rem;
  display: block;
  margin-top: 2rem;

  ${media.md`
    display: inline-flex;
  `}
`

const CTALink = styled(FooterLink)`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colour.accent2};
  margin-right: 0;
`

const ArrowIcon = styled(FiArrowRight)`
  margin-left: 0.5rem;
`

const HR = styled.hr`
  margin-top: 2rem;
  margin-bottom: 1.125rem;
  background-color: ${({ theme }) => theme.colour.greyLight};
  color: ${({ theme }) => theme.colour.greyLight};
  height: 1px;
  border: none;

  ${media.md`
  margin-top: 4.25rem;
  `}
`

const SocialWrapper = styled.div`
  flex-shrink: 0;
`

const SocialLink = styled.a`
  margin-right: 2rem;
  color: ${({ theme }) => theme.colour.brand};

  &:hover {
    color: ${({ theme }) => theme.colour.accent2};
  }
`

const CopyContent = styled.span`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colour.greyLight};
  letter-spacing: 0.5px;
  font-size: 0.875rem;
`

const Footer = () => (
  <StyledFooter>
    <Container>
      <ContentWrapperTop alignBottom stack>
        <Link to={`/`}>
          <Logo />
        </Link>
        <div>
          <FooterLink to="/about">About us</FooterLink>
          <FooterLink to="/#explore">Explore offerings</FooterLink>
          <FooterLink to="/terms">Terms</FooterLink>
          <CTALink to="/signup">
            Sign up now <ArrowIcon size="1.5rem" />
          </CTALink>
        </div>
      </ContentWrapperTop>

      <HR />

      <ContentWrapper>
        <SocialWrapper>
          <SocialLink href="mailto:contact@carrythroughcovid.com">
            <FiMail size="1.5rem" />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/carrythroughcovid"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FiFacebook size="1.5rem" />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/carrythroughcovid"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FiInstagram size="1.5rem" />
          </SocialLink>
        </SocialWrapper>
        <CopyContent>
          © {new Date().getFullYear()} carry through covid
        </CopyContent>
      </ContentWrapper>
    </Container>
  </StyledFooter>
)

export default Footer
