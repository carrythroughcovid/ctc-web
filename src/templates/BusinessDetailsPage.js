import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import mockListing from '../../mockContent/listings'

import media from '../utils/media'
import Page from '../components/shared/Page'
import BackToSearch from '../components/BDP/BackToSearch'
import Container from '../components/shared/Container'
import Pill from '../components/shared/Pill'
import { ButtonLink } from '../components/shared/Button'
import BusinessTypeIcon from '../components/shared/BusinessTypeIcon'
import DetailsTabs from '../components/BDP/DetailsTabs'
import { transformHttps } from '../utils/url'

const BusinessImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colour.black};

  ${media.md`
    height: 20.5rem;
    border-radius: 0.5rem;
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
    padding: 0;
  `}
`

const DetailsWrapper = styled.div`
  width: auto;
  flex-basis: auto;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};

  ${media.md`
    padding: 3rem 1.5rem 3rem 0;
    width: 24rem;
    flex-basis: 20.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

const Details = styled.div`
  padding-left: 1rem;

  ${media.md`
    padding-left: 0;
  `}
`
const BusinessName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  padding-bottom: 0.5rem;

  ${media.md`
    font-size: 1.75rem;
    font-weight: normal;
  `}
`

const BusinessLocation = styled.div`
  color: ${({ theme }) => theme.colour.grey};
  font-size: 0.875rem;

  ${media.md`
    padding-top: 0.75rem;
    padding-bottom: 2rem;
    font-size: 1rem;
  `}
`

const DetailBlock = styled.div``

const BlockContent = styled.div`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colour.grey};
  margin-top: ${props => props.marginTop || '0'};
`

const BlockCallout = styled.div`
  font-size: 1.625rem;
  padding-bottom: 1rem;
  font-weight: 500;
`

const DetailTitle = styled.div`
  color: ${({ theme }) => theme.colour.primary};
  font-family: ${({ theme }) => theme.font.alt};
  text-transform: uppercase;
  letter-spacing: 1.75px;
  padding-top: 2rem;
  padding-bottom: 1.5rem;

  ${media.md`
    font-weight: normal;
    padding-top: 2.5rem;
  `}
`
const Wrapper = styled.div`
  ${media.md`
    display: flex;
    flex-direction: row-reverse;
    padding-top: 1.875rem;
  `}
`

const ImageWrapper = styled.div`
  flex: 1;
`

const BusinessTypeIconWrapper = styled.div`
  display: block;
  ${media.md`
    display: none;
  `}
`

const NewProduct = styled.li`
  padding-bottom: 0.5rem;
`

const UpdateTabBlock = ({ offerings, details, callout, newProducts }) => {
  const newProductsSplit = newProducts.split('-').filter(s => s !== '')
  return (
    <>
      <DetailBlock>
        <DetailTitle>Current Services</DetailTitle>
        <>
          {offerings.map(({ name, id }) => (
            <Pill key={id}>{name}</Pill>
          ))}
          <BlockContent marginTop="1rem">
            <ul>
              {newProductsSplit.map(p => {
                return <NewProduct>{p}</NewProduct>
              })}
            </ul>
          </BlockContent>
        </>
      </DetailBlock>

      <DetailBlock>
        <DetailTitle>Details</DetailTitle>
        {/* TODO: Make sure new lines/tabs display corectly */}
        <BlockCallout>{callout}</BlockCallout>
        <BlockContent>{details}</BlockContent>
      </DetailBlock>
    </>
  )
}

const AboutTabBlock = ({ details, headline }) => (
  <>
    <DetailBlock>
      <DetailTitle>Our Background</DetailTitle>
      <BlockCallout>{headline}</BlockCallout>
      <BlockContent>{details}</BlockContent>
    </DetailBlock>
  </>
)

const BusinessDetailsPage = ({ data }) => {
  const { businessType } = mockListing[0] // TODO hook up real data store
  const {
    name,
    suburb,
    offerings,
    images,
    business_details,
    product_details,
    new_products,
    headline,
    website,
  } = data.businesses

  const tabContent = [
    {
      title: 'Updates',
      content: () => (
        <UpdateTabBlock
          offerings={offerings}
          details={product_details}
          callout={headline}
          newProducts={new_products}
        />
      ),
    },
    {
      title: 'About us',
      content: () => (
        <AboutTabBlock details={business_details} headline={headline} />
      ),
    },
  ]

  return (
    <Page>
      <BackToSearch />
      <Container fullWidth={true}>
        <Wrapper>
          <ImageWrapper>
            <BusinessImage
              src={transformHttps(images.header_image)}
              alt="The businesses header image"
            />
          </ImageWrapper>

          <DetailsWrapper>
            <BusinessDetails>
              <BusinessTypeIconWrapper>
                <BusinessTypeIcon />
              </BusinessTypeIconWrapper>
              <Details>
                <BusinessName>{name}</BusinessName>
                <BusinessLocation>
                  {businessType}
                  <span> / {suburb}</span>
                </BusinessLocation>
              </Details>
            </BusinessDetails>
            <ButtonLink
              fullWidthMobile={true}
              large={true}
              href={website}
              target="_blank"
            >
              Visit our website
            </ButtonLink>
          </DetailsWrapper>
        </Wrapper>
      </Container>

      <DetailsTabs tabs={tabContent} />
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    businesses(slug: { eq: $slug }) {
      id
      name
      business_details
      product_details
      new_products
      website
      headline
      offerings {
        id
        name
      }
      categories {
        id
        name
      }
      slug
      suburb
      images {
        header_image
      }
    }
  }
`

export default BusinessDetailsPage
