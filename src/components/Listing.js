import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import media from '../utils/media'

const ListingImage = styled.img`
  width: 100%;
  height: 10rem;
  ${media.sm`
    height: 12rem;
  `}
  object-fit: cover;
  object-position: center;
`

const BusinessName = styled.div`
  text-align: center;
  font-size: 1.25rem;
  font-family: Lato;
  font-weight: bold;
  line-height: 2rem;
  color: #1d1f24;
  margin-bottom: 1rem;
`

const BusinessDescription = styled.div`
  color: #1d1f24;
  opacity: 0.7;
  padding-bottom: 1rem;
  line-height: 1rem;
  max-height: 2rem;
  overflow: hidden;
`

const ListingContainer = styled(Link)`
  margin: 1rem auto;
  display: block;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  height: 19rem;
  width: 100%;

  ${media.sm`
    max-width: 16rem;
    height: 24rem;
  `}

  ${media.md`
    height: 24rem;
    max-width: 20rem
  `}

  ${media.lg`
    max-width: 20rem;
    height: 24rem;
  `}

  &:hover {
    text-decoration: none;
    /* box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset; */
  }

  &:active {
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset; */
  }
`

const ListingDetailsContainer = styled.div`
  background-color: #ffffff;
  padding: 0rem 1rem 0rem 1rem;
  margin-bottom: 0rem;
  margin-top: 1rem;
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
  background-color: #6cd4c4;
`

const ImageContainer = styled.div`
  position: relative;
`

const Listing = ({ listing }) => {
  const { name, suburb, categories, slug } = listing
  const category = categories.length === 0 ? '' : categories[0].name

  return (
    <ListingContainer to={`business/${slug}`}>
      <ImageContainer>
        <SuburbLabel>{suburb}</SuburbLabel>
        <CategoryLabel>{category}</CategoryLabel>
        <ListingImage src="https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80"></ListingImage>
      </ImageContainer>
      <ListingDetailsContainer>
        <BusinessName>{name}</BusinessName>
        <BusinessDescription>
          This is the description of the business and how they would like the
          puclic to reachout to help them in these strange times.
        </BusinessDescription>
      </ListingDetailsContainer>
    </ListingContainer>
  )
}

export default Listing
