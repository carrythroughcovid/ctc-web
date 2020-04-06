import React from 'react'
import styled from 'styled-components'
import Container from '../components/shared/Container'
import Page from '../components/shared/Page'
import MissionImage from '../images/about-mission.png'
import WhoWeAreImage from '../images/about-who-we-are.png'
import AboutMobileImage from '../images/about-mobile.png'
import media from '../utils/media'
import { ButtonInternalLink as Button } from '../components/shared/Button'

const LeftSection = styled.div`
  height: 300px;
  background-color: ${({theme}) => theme.colour.violet};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    flex: 1;
  `}
`

const RightSection = styled.div`
  height: 300px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    flex: 1;
  `}
`

const LargeSection = styled.div`
  background-color: #B4BAED;
  height: 300px;
  width: 100%;
  display: flex;
  overflow: hidden;
  ${media.sm`
    height: 350px;
  `}
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
  color: ${({theme}) => theme.colour.violet};
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

const LargeSectionDetails = styled.div`
  width: 400px;
  display: flex;
  width: 100%;
  align-items: center;
`

const LargeSectionLeft = styled.div`
  flex: 1;
  display: none;
  ${media.md`
    display: block;
  `}

`

const LargeSectionRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NumberTotal = styled.div`
  font-size: 5rem;
  color: ${({theme}) => theme.colour.red};
`

const JoinUsSection = styled.div`
  display: flex;
  margin-right: 2rem;
  margin-left: 2rem;
  align-items: center;

  ${media.sm`
    margin-top: 4rem;
    margin-left: 4rem;
  `}

`

const JoinUsRightContainer = styled.div`
  width: 20rem;
  color: ${({theme}) => theme.colour.greyDark};

`

const JoinUsLeftContainer = styled.div`
  margin-right: 2rem;

`

const WhatNextContainer = styled.div`
  background-color: ${({theme}) => theme.colour.red};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`

const WhatsUpDetails = styled.div`
  color: white;
  width: 300px;
`

const LargeSectionRightDetails = styled.div`
  width: 300px;
`

const MobileImage = styled.img`
  width: 400px;

`

const MobileImageContainer = styled.div`
  ${media.md`
    margin-left: 10rem;
  `}
`

const About = ({data}) => {
  const listingsTotal = data.allBusinesses.edges.length
  return (
    <Page>
        <AboutContainer>
        <LeftSection>
          <LeftSectionDetailContainer>
            <LeftSectionImage src={MissionImage}></LeftSectionImage>
            <SectionTitle>OUR MISSION</SectionTitle>
            <LeftSectionDetails>We want to help keep small businesses afloat and enable community support through technology.</LeftSectionDetails>
            </LeftSectionDetailContainer>
        </LeftSection>
        <RightSection>
          <RightSectionDetailContainer>
          <RightSectionImage src={WhoWeAreImage}></RightSectionImage>
          <SectionTitle>WHO WE ARE</SectionTitle>
            <RightSectionDetails>A group of volunteers and our service is completely FREE of charge.</RightSectionDetails>
          </RightSectionDetailContainer>
        </RightSection>
        </AboutContainer>
        <LargeSection>
          <LargeSectionLeft>
            <MobileImageContainer>
              <MobileImage src={AboutMobileImage}></MobileImage>  
            </MobileImageContainer>
            </LargeSectionLeft>
            <LargeSectionRight>
              <LargeSectionRightDetails>
                <div>IS THIS PLATFORM FOR ME?</div>
                <div>If you are looking to inform your local customers of what you're offering and your business has any of the following:</div>
                <div>- A new online store or delivery option</div>        
                <div>- Discounts</div>
                <div>- Virtual services</div>
                <div>- Pre-purchased credit options</div>
                <div>- Any updates to share with your community</div>
              </LargeSectionRightDetails>
       
            </LargeSectionRight>
        </LargeSection>
        <WhatNextContainer>
          <div style={{color: 'white', marginBottom: '1rem'}}>WHAT'S UP NEXT?</div>
          <WhatsUpDetails> Get your business into the pockets of the community.
Provide updates, offers and tell your story.</WhatsUpDetails>
        </WhatNextContainer>
        <JoinUsSection>
          <JoinUsLeftContainer>
            <NumberTotal>{listingsTotal}</NumberTotal>
          </JoinUsLeftContainer>
          <JoinUsRightContainer>
            <p>JOIN US TODAY</p>
            <p>{listingsTotal} local businesses have signed up already, join us today and grow your community.</p>
            <Button href="">Sign up now</Button>
          </JoinUsRightContainer>
        </JoinUsSection>
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

export default About;