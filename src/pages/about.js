import React from 'react'
import styled from 'styled-components'

import Page from '../components/shared/Page'
import AboutHeader from '../components/about/AboutHeader'
import { ButtonInternalLink as Button } from '../components/shared/Button'
import { ButtonLink } from '../components/shared/Button'
import MissionImage from '../images/about-mission.png'
import WhoWeAreImage from '../images/about-who-we-are.png'
import MobileDown from '../images/mobile-down.png'
import MobileUp from '../images/mobile-up.png'
import media from '../utils/media'
import theme from '../styles/theme'
import SEO from '../components/shared/SEO'

const GenericSection = styled.div`
  height: 400px;
  background-color: ${props => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    flex: 1;
  `}
`

const LargeSection = styled.div`
  background-color: white;

  display: none;
  ${media.md`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 400px;
  `}
`

const LargeSectionContainer = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
`

const ColumnRowDiv = styled.div`
  display: flex;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`

const ColumnSection = styled.div`
  width: ${props => props.width};
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.div`
  margin-bottom: 1em;
`

const CenteredText = styled.div`
  text-align: center;
`

const SmallImage = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`

const NumberTotal = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.colour.violet};
`

const WhatsUpDetails = styled.div`
  color: white;
  width: 300px;
`

const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.color};
  justify-content: space-around;
  flex-direction: column;
  height: 400px;
  ${media.md`
    flex-direction: row;
  `}
`

const AbsoluteImage = styled.img`
  width: 500px;
  position: absolute;
`

const MobileDownImage = styled(AbsoluteImage)`
  top: 0;
  right: 0;
`

const MobileUpImage = styled(AbsoluteImage)`
  bottom: 0;
  left: 0;
`

const About = ({ data }) => {
  const listingsTotal = data.allBusinesses.edges.length
  return (
    <>
      <SEO
        title="About"
        description="Information about the Carry Through COVID project"
      />
      <Page customHeader={() => <AboutHeader />}>
        <ColumnRowDiv>
          <GenericSection color={theme.colour.violet}>
            <ColumnSection width="300px">
              <SmallImage src={MissionImage}></SmallImage>
              <SectionTitle>OUR MISSION</SectionTitle>
              <CenteredText>
                We want to help keep small businesses afloat and enable
                community support through technology.
              </CenteredText>
            </ColumnSection>
          </GenericSection>
          <GenericSection color="#eef0f8">
            <ColumnSection width="300px">
              <SmallImage src={WhoWeAreImage}></SmallImage>
              <SectionTitle>WHO WE ARE</SectionTitle>
              <CenteredText>
                A group of volunteers and our service is completely FREE of
                charge.
              </CenteredText>
            </ColumnSection>
          </GenericSection>
        </ColumnRowDiv>

        <LargeSection>
          <LargeSectionContainer>
            <MobileUpImage src={MobileUp}></MobileUpImage>
            <MobileDownImage src={MobileDown}></MobileDownImage>
          </LargeSectionContainer>
        </LargeSection>

        <SectionContainer color={theme.colour.red}>
          <ColumnSection>
            <NumberTotal>{listingsTotal}</NumberTotal>
            <p style={{ color: 'white' }}>HELP EXPAND THE COMMUNITY</p>
            <p style={{ color: 'white' }}>
              {listingsTotal} local businesses have signed up already
            </p>
          </ColumnSection>
          <ColumnSection>
            <div style={{ color: 'white', marginBottom: '1rem' }}>
              PROMOTE YOUR NEW SERVICES
            </div>
            <WhatsUpDetails>
              {' '}
              Get your business into the pockets of the community.
            </WhatsUpDetails>
          </ColumnSection>
        </SectionContainer>

        <SectionContainer>
          <ColumnSection width="300px">
            <div style={{ marginBottom: '2rem' }}>
              If you are looking to inform your loyal customers or make new
              connections then we can help promote any of your new services
              without any fee.
            </div>
            <Button to="/signup">Sign up now!</Button>
          </ColumnSection>
          <ColumnSection width="300px">
            <SectionTitle>HAVE A QUESTION FOR US?</SectionTitle>
            <div style={{ marginBottom: '2rem' }}>
              Still not sure if this is for you, or have a few questions?  Our
              team will be happy to help!
            </div>
            <ButtonLink href="mailto:contact@carrythroughcovid.com">
              Contact our team
            </ButtonLink>
          </ColumnSection>
        </SectionContainer>
      </Page>
    </>
  )
}

export const query = graphql`
  query {
    allBusinesses {
      edges {
        node {
          id
        }
      }
    }
  }
`

export default About
