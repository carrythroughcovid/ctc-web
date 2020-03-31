import React, { useState } from "react"
import styled from "styled-components"

import listings from "../../mockContent/listings"
import Listing from "../components/Listing"
import Container from "../components/Container"
import Page from "../components/Page"

import { offerings, categories } from "../utils/presets"
import media from "../utils/media"

const Form = styled.form`
  padding-top: 2rem;
`

const FieldGroup = styled.div`
  padding-bottom: 0.5rem;
`

const ListingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.sm`
    flex-direction: row;
    flex-wrap: wrap;
  `}

`

const SearchResultsPage = ({}) => {
  const [values, setValues] = useState({ searchInput: "", offering: "", category: "" })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const filteredListings = listings.filter(
    ({ suburb, businessName, offerings, businessType }) => {
      const searchValue = values.searchInput.toLowerCase()
      const selectedOffering = values.offering
      const selectedCategory = values.category
      // TODO: look into this, this might not be performant at all
      const results = {
        matchedSuburb: suburb.toLowerCase().includes(searchValue),
        matchedName: businessName.toLowerCase().includes(searchValue),
        matchedOffering:
          offerings.includes(selectedOffering) || selectedOffering === "",
        matchedCategory:
        businessType.includes(selectedCategory) || selectedCategory === "",
      }

      return (
        (results.matchedSuburb || results.matchedName) &&
        results.matchedOffering && results.matchedCategory
      )
    }
  )

  return (
    <Page>
      <Container>
        <Form>
          <FieldGroup>
            <label>
              Search by location or business name: &nbsp;
              <input
                type="text"
                name="searchInput"
                onChange={handleInputChange}
                value={values.searchInput}
              />
            </label>
          </FieldGroup>
          <FieldGroup>
            <label style={{marginRight: '1rem'}}>
              Offerings: &nbsp;
              <select
                name="offering"
                value={values.offering}
                onChange={handleInputChange}
              >
                <option value="">All</option>
                {offerings.map((offering, index) => (
                  <option key={index} value={offering}>
                    {offering}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Category: &nbsp;
              <select
                name="category"
                value={values.categories}
                onChange={handleInputChange}
              >
                <option value="">All</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </FieldGroup>
        </Form>

        <ListingsContainer>
          {filteredListings.map((listing, index) => (
            <Listing key={index} listing={listing}></Listing>
          ))}
        </ListingsContainer>

      </Container>
    </Page>
  )
}

export default SearchResultsPage
