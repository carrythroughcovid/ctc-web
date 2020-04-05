import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexa'
import algoliasearch from 'algoliasearch/lite'

import {
  InstantSearch,
  SearchBox,
  connectInfiniteHits,
  connectMenu,
  connectSearchBox,
  MenuSelect,
} from 'react-instantsearch-dom'

import BusinessCard from '../components/shared/BusinessCard'
import Container from '../components/shared/Container'
import SearchBar from '../components/search/SearchBar'
import SearchMenu from '../components/search/SearchMenu'
import Page from '../components/shared/Page'
import Button from '../components/shared/Button'
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

const InfiniteHits = ({ hits, hasMore, refineNext }) => (
  <>
    <Row>
      {hits.map((hit, index) => (
        <Col display="flex" xs={12} sm={6} md={4} key={index}>
          <BusinessCard listing={hit}></BusinessCard>
        </Col>
      ))}
    </Row>

    {hasMore && (
      <Button fullWidthMobile disabled={!hasMore} onClick={refineNext}>
        {hasMore ? 'Show more results' : 'No more results'}
      </Button>
    )}
  </>
)

const CustomHits = connectInfiniteHits(InfiniteHits)
const CustomSearchBox = connectSearchBox(SearchBar)
const CustomMenu = connectMenu(SearchMenu)

const SearchResultsPage = ({ data }) => {
  return (
    <Page>
      <InstantSearch searchClient={searchClient} indexName="prod_business">
        <Container>
          <FormSection>
            <LocationWrapper>
              <CustomSearchBox />
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
            </CategoryWrapper>
          </FormSection>
        </Container>

        <ListingsSection>
          <Container>
            <CustomHits />
          </Container>
        </ListingsSection>
      </InstantSearch>
    </Page>
  )
}

export default SearchResultsPage
