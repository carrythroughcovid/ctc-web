import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Imgix from 'react-imgix'
import { FiPhone, FiLink, FiMail } from 'react-icons/fi'

import media from '../utils/media'
import Page from '../components/shared/Page'
import BackToSearch from '../components/BDP/BackToSearch'
import Container from '../components/shared/Container'
import Pill from '../components/shared/Pill'
import { ButtonLink } from '../components/shared/Button'
import NoImage from '../components/shared/NoImage'

const BusinessBlock = styled.div`
  display: grid;
  min-height: 28.5rem;

  ${media.md`
    grid-template-columns: 1fr ${({ theme }) => theme.maxWidthSmall} 1fr;
  `}

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 11.25rem ${({ theme }) => theme.maxWidthSmall} 11.25rem 1fr;
  }
`
const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;

  ${media.md`
    flex-direction: row;
    grid-column-start: 2;
    grid-column-end: 4;
  `}

  @media (min-width: 1440px) {
    grid-column-start: 3;
    grid-column-end: 5;
  }
`

const BusinessInfo = styled.div`
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
  flex-direction: column;
  justify-content: center;
  padding-top: 2.25rem;
  padding-bottom: 1rem;

  ${media.md`
    width: 20.75rem;
    flex-basis: 20.75rem;
    display: flex;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
  `}
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

const ContactLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  > svg {
    color: ${({ theme }) => theme.colour.violet};
    margin-right: 0.875rem;
    flex-shrink: 0;
  }
`

const ContactLink = styled.a`
  color: ${({ theme }) => theme.colour.grey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const BusinessImage = styled(Imgix)`
  flex: 1;
  width: 100%;
  height: 15rem;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colour.black};

  ${media.md`
    height: 28.5rem;
  `}
`

const DetailsBlock = styled.div`
  background-color: ${({ theme }) => theme.colour.greySuperLight};
  padding-top: 1.75rem;
  padding-bottom: 4rem;

  ${media.md`
    padding-top: 4.25rem;
  `}
`
const DetailsWrapper = styled.div`
  ${media.md`
    display: flex;
  `}
`
const ServicesDetails = styled.div`
  background-color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 2.5rem 1.75rem;

  ${media.md`
    flex-basis: 23.75rem;
    width: 23.75rem;
  `}
`
const ServiceCallout = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
  font-size: 1.5rem;
  line-height: 2rem;
  padding-bottom: 1.125rem;
`
const ServiceInfo = styled.div`
  padding-bottom: 1.125rem;
  line-height: 1.5rem;
`

const OfferingsTitle = styled.div`
  font-weight: bold;
  padding-bottom: 2rem;
`
const OfferingWrapper = styled.div`
  padding-bottom: 0.5rem;
`

const Offerings = styled.div`
  padding-bottom: 1rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`
const NewProducts = styled.div`
  padding-top: 1rem;
  line-height: 1.5rem;
`

const AboutDetails = styled.div`
  flex: 1;
  padding-top: 3rem;

  ${media.md`
  padding-left: 3.75rem;
  padding-top: 5rem;
  `}
`
const Heading = styled.div`
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colour.brand};
  font-family: ${({ theme }) => theme.font.alt};

  padding-bottom: 1.5rem;
`

const Spacer = styled.div`
  width: 5.75rem;
  height: 3px;
  background-color: ${({ theme }) => theme.colour.brand};
  margin-bottom: 2rem;
`

const AboutContent = styled.div`
  line-height: 1.5rem;
  padding-bottom: 2rem;
`

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
                    {website}
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
                    Vist our website
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
