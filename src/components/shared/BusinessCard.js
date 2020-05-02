import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Imgix from 'react-imgix'

import Badge from './Badge'
import { getCategoryFromSlug } from '../../utils/categoryMappings'
import CategoryIcon from './CategoryIcon'
import { Highlight } from 'react-instantsearch-dom'
import NoImage from '../shared/NoImage'

const ListingImage = styled(Imgix)`
  width: 100%;
  height: 7.75rem;
  object-fit: cover;
  display: block;
  object-position: center;
  background-color: ${({ theme }) => theme.colour.black};
`

const BusinessName = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-family: Lato;
  font-weight: bold;
  line-height: 1;
  color: #1d1f24;
  padding-bottom: 1.5rem;
`

const BusinessDescription = styled.div`
  color: #6c6f90;
  line-height: 1;
  text-align: center;
`

const ListingContainer = styled(Link)`
  display: block;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 0.625rem;
  overflow: hidden;
  flex-grow: 1;
  text-decoration: none;
  display: flex;
  flex-direction: column;

  &:hover {
    text-decoration: none;
  }
`

const ListingCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-bottom: 1.5rem;
`

const ListingDetailsContainer = styled.div`
  background-color: #ffffff;
  padding: 2.75rem 1rem 1rem;
  margin-bottom: 0rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`

const ImageContainer = styled.div`
  position: relative;
`

const CategoryIconBubble = styled.div`
  background-color: ${props => props.colour};
  border: 2px solid white;
  border-radius: 100%;
  width: 3.25rem;
  height: 3.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -1.625rem;
  margin-left: -1.625rem;
  left: 50%;

  > svg {
    height: 30px;
    width: auto;
  }
`

const BadgeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.5rem;

  > span {
    margin-right: 0.5rem;
    margin-top: 0.5rem;

    &:last-of-type {
      margin-right: 0;
    }
  }
`
const CapCase = styled.span`
  text-transform: capitalize;
`

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const Listing = ({ listing, highlight = false }) => {
  const {
    categories,
    slug,
    imgix_images: images,
    headline,
    name,
    offerings,
  } = listing
  const categorySlug = categories.length === 0 ? '' : categories[0].name
  const categoryInfo = getCategoryFromSlug(categorySlug)
  const offeringsSliced = offerings.slice(0, 2)

  return (
    <ListingCard>
      <ListingContainer to={`/business/${slug}`}>
        <ImageContainer>
          {categorySlug && (
            <CategoryIconBubble colour={categoryInfo.colour}>
              <CategoryIcon icon={categoryInfo.icon} />
            </CategoryIconBubble>
          )}
          {images.header_image ? (
            <ListingImage
              src={images.header_image}
              width={380}
              height={124}
              imgixParams={{ q: 70, fit: 'crop' }}
              alt=""
            />
          ) : (
            <NoImage height="7.75rem" />
          )}
        </ImageContainer>
        <ListingDetailsContainer>
          <div>
            <BusinessName>
              {highlight ? <Highlight attribute="name" hit={listing} /> : name}
            </BusinessName>
            <BusinessDescription>
              {truncateString(headline, 60)}
            </BusinessDescription>
          </div>
          <BadgeContainer>
            {offeringsSliced.length >= 1 &&
              offeringsSliced.map((offering, index) => (
                <Badge key={index} light>
                  <CapCase>{offering.name}</CapCase>
                </Badge>
              ))}
          </BadgeContainer>
        </ListingDetailsContainer>
      </ListingContainer>
    </ListingCard>
  )
}

export default Listing
