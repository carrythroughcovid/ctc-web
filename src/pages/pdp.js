import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Page from '../components/Page'
import Container from '../components/shared/Container'
import media from '../utils/media'

import mockListing from '../../mockContent/listings'

const BusinessImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;

  ${media.md`
    height: 24rem;
  `}
`

const BusinessLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  object-position: center;

  ${media.md`
    margin-top: 1rem;
  `}
`

const BusinessDetails = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 2.25rem;
  display: flex;
  align-items: center;

  ${media.md`
    flex-direction: column-reverse;
    align-items: start;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

const DetailsWrapper = styled.div`
  width: auto;
  flex-basis: auto;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};

  ${media.md`
    background-color: #f2f2f2;
    padding: 3rem 1.5rem;
    width: 24rem;
    flex-basis: 24rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`

const Details = styled.div`
  padding-left: 1rem;

  ${media.md`
    padding-left: 0;
  `}
`
const BusinessName = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding-bottom: 0.25rem;

  ${media.md`
    font-size: 1.75rem;
  `}
`

const BusinessLocation = styled.div`
  font-size: 0.875rem;

  ${media.md`
    padding-top: 2rem;
    font-size: 1rem;
  `}
`

const ButtonLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: ${props => props.theme.colour.primary};
  color: white;
  padding: 1rem;

  &:hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }
`

const DetailBlock = styled.div`
  padding-bottom: 1.5rem;
`

const BlockContent = styled.div`
  margin-top: 0.875rem;
  padding: 0.75rem 0.625rem;
  background-color: #ececec;
`

const DetailTitle = styled.div`
  padding-top: 1rem;
  padding-bottom: 0.875rem;
  font-weight: bold;

  ${media.md`
    font-weight: normal;
    font-size: 1.75rem;
    padding-top: 3.5rem;
  `}
`
const OfferingItem = styled.div`
  text-transform: capitalize;

  ${media.md`
    display: inline-block;
    padding-right: 2rem;
  `}
`

const Wrapper = styled.div`
  ${media.md`
    display: flex;
    flex-direction: row-reverse;
    padding-top: 2.875rem;
  `}
`

const ImageWrapper = styled.div`
  flex: 1;
`

const IndexPage = () => {
  // TODO hook up real data store
  const {
    image,
    businessLogo,
    businessType,
    businessName,
    suburb,
    details,
    about,
    offerings,
  } = mockListing[0]

  return (
    <Page>
      <Container fullWidth>
        <Wrapper>
          <ImageWrapper>
            <BusinessImage src={image} />
          </ImageWrapper>

          <DetailsWrapper>
            <BusinessDetails>
              <BusinessLogo src={businessLogo} />
              <Details>
                <BusinessName>{businessName}</BusinessName>
                <BusinessLocation>
                  {businessType}
                  <span> / {suburb}</span>
                </BusinessLocation>
              </Details>
            </BusinessDetails>
            <ButtonLink to="/">Visit Website</ButtonLink>
          </DetailsWrapper>
        </Wrapper>
      </Container>

      <Container>
        <DetailTitle>Products/Service</DetailTitle>
        <DetailBlock>
          Current offering
          <BlockContent>
            {offerings.map(offering => (
              // TODO: add icons and map them to offering names
              <OfferingItem>[x] {offering}</OfferingItem>
            ))}
          </BlockContent>
        </DetailBlock>

        <DetailBlock>
          Details
          {/* TODO: Make sure new lines/tabs display corectly */}
          <BlockContent>{details}</BlockContent>
        </DetailBlock>

        <DetailTitle>About</DetailTitle>
        <DetailBlock>
          <BlockContent>{about}</BlockContent>
        </DetailBlock>
      </Container>
    </Page>
  )
}

export default IndexPage
