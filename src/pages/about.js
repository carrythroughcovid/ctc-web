import React from 'react'
import styled from 'styled-components'
import Page from '../components/shared/Page'
import MissionImage from '../images/about-mission.png'
import WhoWeAreImage from '../images/about-who-we-are.png'
import MobileDown from '../images/mobile-down.png'
import MobileUp from '../images/mobile-up.png'

import media from '../utils/media'
import { ButtonInternalLink as Button } from '../components/shared/Button'

const LeftSection = styled.div`
  height: 400px;
  background-color: ${({ theme }) => theme.colour.violet};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    flex: 1;
  `}
`

const RightSection = styled.div`
  height: 400px;
  background-color: #eef0f8;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    flex: 1;
  `}
`

const LargeSection = styled.div`
  background-color: white;
  overflow: hidden;

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

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${media.sm`
    flex-direction: row;
  `}
`

const LeftSectionDetailContainer = styled.div`
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RightSectionDetailContainer = styled.div`
  width: 300px;
  color: ${({ theme }) => theme.colour.violet};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionTitle = styled.div`
  margin-bottom: 1em;
`

const LeftSectionDetails = styled.div`
  text-align: center;
`

const RightSectionDetails = styled.div`
  text-align: center;
`

const LeftSectionImage = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`

const RightSectionImage = styled.img`
  width: 60px;
  margin-bottom: 1rem;
`

const NumberTotal = styled.div`
  font-size: 5rem;
  color: ${({ theme }) => theme.colour.violet};
`

const JoinUsLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const WhatNextContainer = styled.div`
  background-color: ${({ theme }) => theme.colour.red};
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${media.md`
    flex-direction: row;
    height: 300px;
  `}
`

const WhatsUpDetails = styled.div`
  color: white;
  width: 300px;
`

const MobileImageContainer = styled.div`
  position: relative;
`

const GotQuestionsSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 500px;
  ${media.md`
    flex-direction: row;
    height: 300px;
  `}
`

const SectionLeft = styled.div`
  display: flex;
  width: 300px;
  flex-direction: column;
`

const SectionRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const MobileDownImage = styled.img`
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
`

const MobileUpImage = styled.img`
  width: 500px;
  position: absolute;
  bottom: 0;
  left: 0;
`
const JoinUsRightContainer = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const About = ({ data }) => {
  const listingsTotal = data.allBusinesses.edges.length
  return (
    <Page>
      <AboutContainer>
        <LeftSection>
          <LeftSectionDetailContainer>
            <LeftSectionImage src={MissionImage}></LeftSectionImage>
            <SectionTitle>OUR MISSION</SectionTitle>
            <LeftSectionDetails>
              We want to help keep small businesses afloat and enable community
              support through technology.
            </LeftSectionDetails>
          </LeftSectionDetailContainer>
        </LeftSection>
        <RightSection>
          <RightSectionDetailContainer>
            <RightSectionImage src={WhoWeAreImage}></RightSectionImage>
            <SectionTitle>WHO WE ARE</SectionTitle>
            <RightSectionDetails>
              A group of volunteers and our service is completely FREE of
              charge.
            </RightSectionDetails>
          </RightSectionDetailContainer>
        </RightSection>
      </AboutContainer>
      <LargeSection>
        <LargeSectionContainer>
          <MobileUpImage src={MobileUp}></MobileUpImage>
          <MobileDownImage src={MobileDown}></MobileDownImage>
        </LargeSectionContainer>
      </LargeSection>
      <WhatNextContainer>
        <JoinUsLeftContainer>
          <NumberTotal>{listingsTotal}</NumberTotal>
          <p>HELP EXPAND THE COMMUNITY</p>
          <p>{listingsTotal} local businesses have signed up already</p>
        </JoinUsLeftContainer>
        <JoinUsRightContainer>
          <div style={{ color: 'white', marginBottom: '1rem' }}>
            PROMOTE YOUR NEW SERVICES
          </div>
          <WhatsUpDetails>
            {' '}
            Get your business into the pockets of the community.
          </WhatsUpDetails>
        </JoinUsRightContainer>
      </WhatNextContainer>

      <GotQuestionsSection>
        <SectionLeft>
          <div style={{ marginBottom: '2rem' }}>
            If you are looking to inform your loyal customers or make new
            connections then we can help promote any of your new services
            without any fee.
          </div>
          <Button href="">Sign up now!</Button>
        </SectionLeft>
        <SectionRight>
          <SectionTitle>HAVE A QUESTION FOR US?</SectionTitle>
          <div style={{ marginBottom: '2rem' }}>
            Still not sure if this is for you, or have a few questions?  Our
            team will be happy to help!
          </div>
          <Button href="">Contact our team</Button>
        </SectionRight>
      </GotQuestionsSection>
    </Page>
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
