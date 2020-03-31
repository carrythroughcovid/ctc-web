import React, { useState } from "react"
import styled from "styled-components"

import listings from "../../mockContent/listings"
import Listing from "../components/Listing"
import Container from "../components/Container"
import Page from "../components/Page"

const SearchForm = styled.div`
  padding-top: 2rem;
`

const SearchResultsPage = ({}) => {
  const [values, setValues] = useState({ searchInput: "" })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const filteredListings = listings.filter(({ suburb, businessName }) => {
    const searchValue = values.searchInput.toLowerCase()
    // TODO: look into this, this might not be performant at all
    return (
      suburb.toLowerCase().includes(searchValue) ||
      businessName.toLowerCase().includes(searchValue)
    )
  })

  return (
    <Page>
      <Container>
        <SearchForm>
          <label>
            Search by location or business name: &nbsp;
            <input
              type="text"
              name="searchInput"
              onChange={handleInputChange}
              value={values.searchInput}
            />
          </label>
        </SearchForm>

        {filteredListings.map((listing, index) => (
          <Listing key={index} listing={listing}></Listing>
        ))}
      </Container>
    </Page>
  )
}

export default SearchResultsPage
