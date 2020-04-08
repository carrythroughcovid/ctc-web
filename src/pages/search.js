import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexa'
import algoliasearch from 'algoliasearch/lite'

import {
  InstantSearch,
  connectInfiniteHits,
  connectStateResults,
  connectMenu,
  connectCurrentRefinements,
  connectSearchBox,
} from 'react-instantsearch-dom'

import BusinessCard from '../components/shared/BusinessCard'
import Container from '../components/shared/Container'
import SearchBar from '../components/search/SearchBar'
import SearchMenu from '../components/search/SearchMenu'
import Page from '../components/shared/Page'
import Button from '../components/shared/Button'
import media from '../utils/media'
import Spinner from '../components/shared/Spinner'
import HomeHeader from '../components/home/HomeHeader'

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

const NoResults = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colour.grey};
`

const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const InfiniteHits = ({ hits, hasMore, refineNext }) => {
  return (
    <>
      <Row>
        {hits.map((hit, index) => (
          <Col display="flex" xs={12} sm={6} md={4} lg={3} key={index}>
            <BusinessCard listing={hit}></BusinessCard>
          </Col>
        ))}
      </Row>

      {hits.length === 0 && <NoResults>No Results found</NoResults>}

      {hasMore && (
        <Button fullWidthMobile disabled={!hasMore} onClick={refineNext}>
          {hasMore ? 'Show more results' : 'No more results'}
        </Button>
      )}
    </>
  )
}

const ClearButton = ({ items, refine }) => (
  <Button onClick={() => refine(items)} fullWidthMobile>
    Clear search
  </Button>
)

const ClearClearButton = connectCurrentRefinements(ClearButton)
const CustomHits = connectInfiniteHits(InfiniteHits)
const CustomSearchBox = connectSearchBox(SearchBar)
const CustomMenu = connectMenu(SearchMenu)

const Results = connectStateResults(
  ({ searching, searchState, searchResults, children }) => {
    if (searchResults && searchResults.nbHits !== 0) {
      return children
    } else {
      if (searching) {
        return (
          <LoadingContainer>
            <Spinner></Spinner>
          </LoadingContainer>
        )
      } else {
        return (
          <>
            <p>No results have been found for "{searchState.query}"</p>
            <ClearClearButton clearsQuery />
          </>
        )
      }
    }
  }
)

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
