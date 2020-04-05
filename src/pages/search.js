import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexa'

import BusinessCard from '../components/shared/BusinessCard'
import Container from '../components/shared/Container'
import Page from '../components/shared/Page'
import SearchBar from '../components/search/SearchBar'
import SelectInput from '../components/shared/SelectInput'

import { categories } from '../utils/presets'
import media from '../utils/media'

const FormSection = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${media.sm`
    display: flex;
  `}
`
const ListingsSection = styled.div``

const LocationWrapper = styled.div`
  padding-bottom: 1rem;

  ${media.sm`
  flex: 3;
    padding-bottom: 0;
    padding-right: 1rem;
  `}
`

const CategoryWrapper = styled.div`
  flex: 1;
`

const SearchResultsPage = ({ data }) => {
  console.log('🚓', data)
  const allBusinesses = data.allBusinesses.edges

  const [values, setValues] = useState({
    searchInput: '',
    categories: '',
    listings: allBusinesses,
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const filteredListings = values.listings.filter(({ node: listing }) => {
    const { name, address, categories } = listing
    const actualSuburb = address.suburb || ''
    const searchValue = values.searchInput.toLowerCase()
    const selectedCategory = values.categories.toLowerCase()

    // TODO: look into this, this might not be performant at all
    const results = {
      matchedSuburb: actualSuburb.toLowerCase().includes(searchValue),
      matchedName: name.toLowerCase().includes(searchValue),
      matchedCategory:
        categories.map(c => c.name.toLowerCase()).includes(selectedCategory) ||
        selectedCategory === '',
    }

    return (
      (results.matchedSuburb || results.matchedName) && results.matchedCategory
    )
  })

  return (
    <Page>
      <Container>
        <FormSection>
          <LocationWrapper>
            <SearchBar
              name="searchInput"
              onChange={handleInputChange}
              value={values.searchInput}
            />
          </LocationWrapper>

          <CategoryWrapper>
            <SelectInput
              name="categories"
              value={values.category}
              options={categories}
              onChange={handleInputChange}
              initialOption={() => <option value="">All Categories</option>}
            />
          </CategoryWrapper>
        </FormSection>
      </Container>

      <ListingsSection>
        <Container>
          <Row>
            {filteredListings.map(({ node: listing }, index) => (
              <Col display="flex" xs={12} sm={6} md={4} key={index}>
                <BusinessCard listing={listing}></BusinessCard>
              </Col>
            ))}
          </Row>
        </Container>
      </ListingsSection>
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
