import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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

  return (
    <ListingContainer to="/pdp">
      <ListingImage src={listing.image}></ListingImage>

        <ListingDetailsContainer>
          <BusinessName>{listing.businessName}</BusinessName>
          <BusinessLocation>
              {listing.businessType}
              <span> / {listing.suburb}</span>
          </BusinessLocation>
        </ListingDetailsContainer>

  </ListingContainer>
  )
}

export default Listing