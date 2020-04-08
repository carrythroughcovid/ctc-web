import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Badge from './Badge'
import { Highlight } from 'react-instantsearch-dom'
import { transformHttps } from '../../utils/url'

const ListingImage = styled.img`
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
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  overflow: hidden;
  flex-grow: 1;
  text-decoration: none;

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
  padding: 1rem 1rem 1.5rem;
  margin-bottom: 0rem;
`

const SuburbLabel = styled.div`
  left: 1rem;
  top: 1rem;
  position: absolute;
`

const CategoryLabel = styled.div`
  right: 1rem;
  top: 1rem;
  text-transform: capitalize;
  position: absolute;
`

const ImageContainer = styled.div`
  position: relative;
`

const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

const Listing = ({ listing }) => {
  const { location, categories, slug, images, headline } = listing
  const category = categories.length === 0 ? '' : categories[0].name

  return (
    <ListingCard>
      <ListingContainer to={`business/${slug}`}>
        <ImageContainer>
          {location && location.suburb && (
            <SuburbLabel>
              <Badge primary={true}>{location.suburb}</Badge>
            </SuburbLabel>
          )}
          {category && (
            <CategoryLabel>
              <Badge secondary={true}>{category}</Badge>
            </CategoryLabel>
          )}
          <ListingImage
            src={transformHttps(images.header_image)}
            alt=""
          ></ListingImage>
        </ImageContainer>
        <ListingDetailsContainer>
          <BusinessName>
            <Highlight attribute="name" hit={listing} />
          </BusinessName>
          <BusinessDescription>
            {truncateString(headline, 60)}
          </BusinessDescription>
        </ListingDetailsContainer>
      </ListingContainer>
    </ListingCard>
  )
}

export default Listing
