import React from 'react'
import styled from 'styled-components'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  connectMenu,
  connectSearchBox,
} from 'react-instantsearch-dom'

import Container from '../components/shared/Container'
import SearchBar from '../components/search/SearchBar'
import SearchMenu from '../components/search/SearchMenu'
import Page from '../components/shared/Page'
import media from '../utils/media'
import HomeHeader from '../components/home/HomeHeader'

const FormSection = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${media.sm`
    display: flex;
  `}
`

const LocationWrapper = styled.div`
  padding-bottom: 1rem;

  ${media.sm`
  flex: 2;
    padding-bottom: 0;
    padding-right: 1rem;
  `}
`

const CategoryWrapper = styled.div`
  flex: 1;
  display: flex;

  & > label {
    flex: 1;
  }

  & > label:not(:last-of-type) {
    margin-right: 1rem;
  }
`

const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)

const CustomSearchBox = connectSearchBox(SearchBar)
const CustomMenu = connectMenu(SearchMenu)

const SearchResultsPage = () => (
  <Page customHeader={() => <HomeHeader />}>
    <InstantSearch searchClient={searchClient} indexName="prod_business">
      <Container>
        <FormSection>
          <LocationWrapper>
            <CustomSearchBox showLoadingIndicator={true} />
          </LocationWrapper>
          <CategoryWrapper>
            <CustomMenu
              attribute="location.state"
              resourceName="states"
            ></CustomMenu>
            <CustomMenu
              attribute="categories.name"
              resourceName="categories"
            ></CustomMenu>
            <CustomMenu
              attribute="offerings.name"
              resourceName="offerings"
            ></CustomMenu>
          </CategoryWrapper>
        </FormSection>
      </Container>
    </InstantSearch>
  </Page>
)

export default SearchResultsPage
