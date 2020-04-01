import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import media from "../utils/media"

const ListingImage = styled.img`
  width: 100%;
  height: 16rem;
  object-fit: cover;
  object-position: center;
  display: block;
`

const BusinessName = styled.div`

`

const BusinessLocation = styled.div`
  font-size: 0.875rem;
`

const ListingContainer = styled(Link)`
  margin: 0.5rem 0 0.5rem 0;
  max-width: 400px;
  margin: 1rem auto;
  display: block;

  ${media.sm`
    flex-basis: 30%;
  `}

  &:hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }
`

const ListingDetailsContainer = styled.div`
  background-color: #C4C4C4;
  padding: 1rem;
`

const Listing = ({listing}) => {
  const {name, suburb, categories} = listing
  const category = categories.length === 0 ? '' : categories[0].name

  return (
    <ListingContainer to="/pdp">
      <ListingImage src='https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80'></ListingImage>

        <ListingDetailsContainer>
          <BusinessName>{name}</BusinessName>
          <BusinessLocation>
              {category}
              <span> / {suburb}</span>
          </BusinessLocation>
        </ListingDetailsContainer>

  </ListingContainer>
  )
}

export default Listing