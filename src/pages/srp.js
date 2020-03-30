import React from "react"
import listings from "../../mockContent/listings"
import Listing from "../components/Listing"
import Container from "../components/Container"
import Page from "../components/Page"

const SearchResultsPage = ({}) => {
  return (
    <Page>
      <Container>
        {listings.map((listing, index) => (
              <Listing key={index} listing={listing}></Listing>
          ))
        }
       
      </Container>
    </Page>
  )
}

export default SearchResultsPage