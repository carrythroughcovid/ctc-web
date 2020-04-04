import React, { useState } from 'react'
import styled from 'styled-components'

import Listing from '../components/Listing'
import Container from '../components/shared/Container'
import Page from '../components/Page'
import SelectGroup from '../components/SelectGroup'
import SearchBar from '../components/search/SearchBar'

import { offerings, categories, states } from '../utils/presets'
import media from '../utils/media'

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

const SearchResultsPage = ({ data }) => {
  const allBusinesses = data.allBusinesses.edges
  console.log(allBusinesses)

  const allBusinessesWithState = allBusinesses.map(({ node: business }) => ({
    node: {
      ...business,
      state: 'vic',
    },
  }))

  const [values, setValues] = useState({
    searchInput: '',
    offering: '',
    category: '',
    state: '',
    listings: allBusinessesWithState,
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const filteredListings = values.listings.filter(({ node: listing }) => {
    const { name, address, offerings, categories, state } = listing
    const actualSuburb = address.suburb || ''
    const searchValue = values.searchInput.toLowerCase()
    const selectedOffering = values.offering.toLowerCase()
    const selectedCategory = values.category.toLowerCase()
    const selectedState = values.state.toLowerCase()

    // TODO: look into this, this might not be performant at all
    const results = {
      matchedSuburb: actualSuburb.toLowerCase().includes(searchValue),
      matchedName: name.toLowerCase().includes(searchValue),
      matchedOffering:
        offerings.map(o => o.name.toLowerCase()).includes(selectedOffering) ||
        selectedOffering === '',
      matchedCategory:
        categories.map(c => c.name.toLowerCase()).includes(selectedCategory) ||
        selectedCategory === '',
      matchedState:
        state.toLowerCase().includes(selectedState) || selectedState === '',
    }

    return (
      (results.matchedSuburb || results.matchedName) &&
      results.matchedOffering &&
      results.matchedCategory &&
      results.matchedState
    )
  })

  return (
    <Page>
      <Container>
        <Form>
          <FieldGroup>
            <SearchBar
              name="searchInput"
              onChange={handleInputChange}
              value={values.searchInput}
            />
          </FieldGroup>
          <FieldGroup>
            <SelectGroup
              name="offering"
              value={values.offering}
              items={offerings}
              onSelect={handleInputChange}
            ></SelectGroup>
            <SelectGroup
              name="state"
              value={values.state}
              items={states}
              onSelect={handleInputChange}
            ></SelectGroup>
            <SelectGroup
              name="category"
              value={values.category}
              items={categories}
              onSelect={handleInputChange}
            ></SelectGroup>
          </FieldGroup>
        </Form>

        <ListingsContainer>
          {filteredListings.map(({ node: listing }, index) => (
            <Listing key={index} listing={listing}></Listing>
          ))}
        </ListingsContainer>
      </Container>
    </Page>
  )
}

export default SearchResultsPage

export const query = graphql`
  query {
    allBusinesses {
      edges {
        node {
          id
          name
          offerings {
            id
            name
          }
          categories {
            id
            name
          }
          businessId
          slug
          address {
            id
            suburb
          }
        }
      }
    }
  }
`
