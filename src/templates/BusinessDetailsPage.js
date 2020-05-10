import React from 'react'
import { graphql } from 'gatsby'

import { FiPhone, FiLink, FiMail } from 'react-icons/fi'

import Page from '../components/shared/Page'
import BackToSearch from '../components/BDP/BackToSearch'
import Container from '../components/shared/Container'
import Pill from '../components/shared/Pill'
import { ButtonLink } from '../components/shared/Button'
import NoImage from '../components/shared/NoImage'

import {
  BusinessBlock,
  BlockWrapper,
  BusinessInfo,
  BusinessName,
  BusinessLocation,
  ContactDetailsBlock,
  ContactLinkWrapper,
  ContactLink,
  BusinessImageWrapper,
  BusinessImage,
  DetailsBlock,
  DetailsWrapper,
  ServicesDetails,
  ServiceCallout,
  ServiceInfo,
  OfferingsTitle,
  OfferingWrapper,
  Offerings,
  NewProducts,
  AboutDetails,
  Heading,
  Spacer,
  AboutContent,
} from '../components/BDP/styles'

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
  const newProductsSplit = new_products
    ? new_products.split('\n').filter(s => s !== '')
    : []

  return (
    <Page noMargin>
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
                <ContactLinkWrapper>
                  <FiPhone size="1.5rem" />
                  <ContactLink href={`tel:${business_number}`}>
                    {business_number}
                  </ContactLink>
                </ContactLinkWrapper>
              )}

              {website && (
                <ContactLinkWrapper>
                  <FiLink size="1.5rem" />
                  <ContactLink
                    href={website}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    visit our website
                  </ContactLink>
                </ContactLinkWrapper>
              )}

              {business_email && (
                <ContactLinkWrapper>
                  <FiMail size="1.5rem" />
                  <ContactLink href={`mailto:${business_email}`}>
                    {business_email}
                  </ContactLink>
                </ContactLinkWrapper>
              )}
            </ContactDetailsBlock>
          </BusinessInfo>
          <BusinessImageWrapper>
            {images.header_image ? (
              <BusinessImage
                width={928}
                height={456}
                src={images.header_image}
                imgixParams={{ q: 90, fit: 'crop' }}
                alt="The businesses header image"
              />
            ) : (
              <NoImage />
            )}
          </BusinessImageWrapper>
        </BlockWrapper>
      </BusinessBlock>

      <DetailsBlock>
        <Container small>
          <DetailsWrapper>
            <ServicesDetails>
              {headline && <ServiceCallout>{headline}</ServiceCallout>}
              {product_details && <ServiceInfo>{product_details}</ServiceInfo>}
              {offerings.length >= 1 && (
                <>
                  <OfferingsTitle>
                    We now offer these new services:
                  </OfferingsTitle>
                  <OfferingWrapper>
                    {offerings.map(({ name, id }) => (
                      <Offerings>
                        <Pill key={id}>{name}</Pill>
                      </Offerings>
                    ))}
                  </OfferingWrapper>
                </>
              )}
              {newProductsSplit.length >= 1 && (
                <NewProducts>
                  {newProductsSplit.map(product => {
                    return <p>{product}</p>
                  })}
                </NewProducts>
              )}
            </ServicesDetails>
            <AboutDetails>
              <Heading>Our Story</Heading>
              <Spacer />
              <AboutContent>{business_details}</AboutContent>
              {website && (
                <>
                  <ButtonLink
                    href={website}
                    rel="noreferrer noopener"
                    target="_blank"
                    fullWidthMobile
                  >
                    Visit our website
                  </ButtonLink>
                </>
              )}
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
