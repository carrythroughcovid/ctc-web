import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../../utils/media'

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
    /* box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset; */
  }

  &:active {
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset; */
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

const BaseLabel = styled.div`
  border-radius: 0.25rem;
  position: absolute;
  padding: 0.25rem;
  color: #ffffff;
  font-size: 0.75rem;
  display: block;
`

const SuburbLabel = styled(BaseLabel)`
  left: 1rem;
  top: 1rem;
  background-color: #be52f2;
`

const CategoryLabel = styled(BaseLabel)`
  right: 1rem;
  top: 1rem;
  text-transform: capitalize;
  background-color: #6cd4c4;
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
  const { name, address, categories, slug, image } = listing
  const category = categories.length === 0 ? '' : categories[0].name

  return (
    <ListingCard>
      <ListingContainer to={`business/${slug}`}>
        <ImageContainer>
          <SuburbLabel>{address.suburb}</SuburbLabel>
          <CategoryLabel>{category}</CategoryLabel>
          <ListingImage src={image}></ListingImage>
        </ImageContainer>
        <ListingDetailsContainer>
          <BusinessName>{name}</BusinessName>
          <BusinessDescription>
            {truncateString(
              'This is the description of the business and how they would like the puclic to reachout to help them in these strange times.',
              60
            )}
          </BusinessDescription>
        </ListingDetailsContainer>
      </ListingContainer>
    </ListingCard>
  )
}

export default Listing
