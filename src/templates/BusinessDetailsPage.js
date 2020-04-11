import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Imgix from 'react-imgix'
import { FiPhone, FiLink, FiMail } from 'react-icons/fi'

import mockListing from '../../mockContent/listings'
import media from '../utils/media'
import Page from '../components/shared/Page'
import BackToSearch from '../components/BDP/BackToSearch'
import Container from '../components/shared/Container'
import Pill from '../components/shared/Pill'
import { ButtonLink } from '../components/shared/Button'
import BusinessTypeIcon from '../components/shared/BusinessTypeIcon'
import DetailsTabs from '../components/BDP/DetailsTabs'

const BusinessBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 11.25rem ${({ theme }) => theme.maxWidthSmall} 11.25rem 1fr;
  min-height: 28.5rem;
`
const BlockWrapper = styled.div`
  grid-column-start: 3;
  grid-column-end: 5;
  display: flex;
`

const BusinessInfo = styled.div`
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
  width: 20.75rem;
  flex-basis: 20.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BusinessName = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  line-height: 2rem;
`
const BusinessLocation = styled.div`
  padding-top: 0.75rem;
  text-transform: capitalize;
`
const ContactDetailsBlock = styled.div`
  padding-top: 2.5rem;
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colour.grey};
  display: flex;
  align-items: center;
  padding-bottom: 1.875rem;

  > svg {
    color: ${({ theme }) => theme.colour.violet};
    margin-right: 0.875rem;
  }
`

const BusinessImage = styled(Imgix)`
  flex: 1;
  height: 28.5rem;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colour.black};
`

const DetailsBlock = styled.div``
const DetailsWrapper = styled.div``
const ServicesDetails = styled.div``
const ServiceCallout = styled.div``
const ServiceInfo = styled.div``
const Offerings = styled.div``
const NewProducts = styled.div``

const AboutDetails = styled.div``
const Heading = styled.div``
const AboutContent = styled.div``

const BusinessDetailsPage = ({ data }) => {
  const {
    name,
    suburb,
    offerings,
    categories,
    imgix_images: images,
    business_details,
    business_number,
    business_email,
    product_details,
    new_products,
    headline,
    website,
  } = data.businesses
  const category = categories.length === 0 ? '' : categories[0].name

  return (
    <Page>
      <BackToSearch />
      <BusinessBlock>
        <BlockWrapper>
          <BusinessInfo>
            <BusinessName>{name}</BusinessName>
            <BusinessLocation>
              {category && category}
              {suburb && ` • ${suburb}`}
            </BusinessLocation>
            <ContactDetailsBlock>
              {business_number && (
                <ContactLink>
                  <FiPhone size="1.5rem" />
                  {business_number}
                </ContactLink>
              )}
              {website && (
                <ContactLink>
                  <FiLink size="1.5rem" />
                  {website}
                </ContactLink>
              )}
              {business_email && (
                <ContactLink>
                  <FiMail size="1.5rem" />
                  {business_email}
                </ContactLink>
              )}
            </ContactDetailsBlock>
          </BusinessInfo>
          <BusinessImage
            width={928}
            height={456}
            src={images.header_image}
            imgixParams={{ q: 90, fit: 'crop' }}
            alt="The businesses header image"
          />
        </BlockWrapper>
      </BusinessBlock>

      <DetailsBlock>
        <Container small>
          <DetailsWrapper>
            <ServicesDetails>
              {headline && <ServiceCallout>{headline}</ServiceCallout>}
              {product_details && <ServiceInfo>{product_details}</ServiceInfo>}
              {offerings.length >= 1 && <Offerings>TODO</Offerings>}
              {new_products && <NewProducts>{new_products}</NewProducts>}
            </ServicesDetails>
            <AboutDetails>
              <Heading>Our Story</Heading>
              <AboutContent>
                {business_details}
                <a>vist our website</a>
              </AboutContent>
            </AboutDetails>
          </DetailsWrapper>
        </Container>
      </DetailsBlock>
    </Page>
  )
}

export const query = graphql`
  query($slug: String!) {
    businesses(slug: { eq: $slug }) {
      id
      name
      business_details
      business_number
      business_email
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
      imgix_images {
        header_image
      }
    }
  }
`

export default BusinessDetailsPage
