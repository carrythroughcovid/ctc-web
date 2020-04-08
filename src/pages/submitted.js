import React from 'react'
import styled from 'styled-components'
import SEO from '../components/shared/SEO'
import Page from '../components/shared/Page'
import ThumbsUpImage from '../images/thumbs-up.png'
import theme from '../styles/theme'
import { ButtonLink as Button } from '../components/shared/Button'
import media from '../utils/media'

const Section1 = styled.div`
  background-color: ${props => props.colour};
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.sm`
    height: ${props => props.height};
  `}
`

const WidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: left;
  position: relative;
`

const Title = styled.div`
  color: ${props => props.colour};
  margin-bottom: 1rem;
`

const Details = styled.div`
  color: white;
  font-size: 2rem;
  line-height: 2.25rem;
`

const Image = styled.img`
  width: 40px;
  position: absolute;
  top: -1rem;
  right: 10rem;
`

const Submitted = () => {

  return (
    <>
    <SEO
      title="Submitted"
      description="Form submission complete."
    />
    <Page noMargin>

    <Section1 height='400px' colour='#292B3C'>
      <WidthContainer>
        <Image src={ThumbsUpImage}></Image>
        <Title colour={theme.colour.violet}>THANK YOU</Title>
        <Details>We have received your details</Details>
      </WidthContainer>
      
    </Section1>
    <Section1 height = '450px' colour='#6979F8'>
      <WidthContainer>

        <Title colour={theme.colour.greyDark}>IMPORTANT NEXT STEPS</Title>
        <div style={{color: 'white', lineHeight: '1.25rem', marginBottom: '1rem'}}>We want to make sure our community has the most up to date information. Please email us if any of your information changes and we will update your details.</div>
        <Button style={{backgroundColor: theme.colour.red}} href="mailto:contact@carrythroughcovid.com" fixedWidth large>
        Contact us
        </Button>
      </WidthContainer>

    </Section1>

    </Page>
    </>
  )
}

export default Submitted