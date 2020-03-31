import React, { useState } from "react"
import styled from "styled-components"

import listings from "../../mockContent/listings"
import Listing from "../components/Listing"
import Container from "../components/Container"
import Page from "../components/Page"
import SelectGroup from  "../components/SelectGroup"

import { offerings, categories, states } from "../utils/presets"
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
  const [values, setValues] = useState({ searchInput: "", offering: "", category: "", state: "" })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const filteredListings = listings.filter(
    ({ suburb, businessName, offerings, businessType, state }) => {
      const searchValue = values.searchInput.toLowerCase()
      const selectedOffering = values.offering.toLowerCase()
      const selectedCategory = values.category.toLowerCase()
      const selectedState = values.state.toLowerCase()
      // TODO: look into this, this might not be performant at all
      const results = {
        matchedSuburb: suburb.toLowerCase().includes(searchValue),
        matchedName: businessName.toLowerCase().includes(searchValue),
        matchedOffering:
          offerings.includes(selectedOffering) || selectedOffering === "",
        matchedCategory:
        businessType.toLowerCase().includes(selectedCategory) || selectedCategory === "",
        matchedState:
        state.toLowerCase().includes(selectedState) || selectedState === "",
      }

      return (
        (results.matchedSuburb || results.matchedName) &&
        results.matchedOffering && results.matchedCategory && results.matchedState
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
            <SelectGroup name="offering" value={values.offering} items = {offerings} onSelect = {handleInputChange}></SelectGroup>
            <SelectGroup name="state" value={values.state} items = {states} onSelect = {handleInputChange}></SelectGroup>
            <SelectGroup name="category" value={values.category} items = {categories} onSelect = {handleInputChange}></SelectGroup>
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
