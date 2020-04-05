import React, { useState } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexa'
import algoliasearch from 'algoliasearch/lite'

import {
  InstantSearch,
  SearchBox,
  Highlight,
  connectInfiniteHits,
  Panel,
  MenuSelect
} from 'react-instantsearch-dom'

import BusinessCard from '../components/shared/BusinessCard'
import Container from '../components/shared/Container'
import Page from '../components/shared/Page'
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

const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)

const InfiniteHits = ({
  hits,
  hasPrevious,
  refinePrevious,
  hasMore,
  refineNext,
}) => (
  <div>
    <Row>
      {hits.map((hit, index) => (
        <Col display="flex" xs={12} sm={6} md={4} key={index}>
          <BusinessCard listing={hit}></BusinessCard>
        </Col>
      ))}
    </Row>

      <button disabled={!hasMore} onClick={refineNext}>
      Show more results
    </button>
  </div>
);

const CustomHits = connectInfiniteHits(InfiniteHits);

const SearchResultsPage = ({ data }) => {
  return (
    <Page>
    <InstantSearch searchClient={searchClient} indexName="prod_business">
      <Container>
        <FormSection>
          <LocationWrapper>
          <SearchBox />
          <div style={{display: 'flex'}}>
            <MenuSelect attribute='location.state'></MenuSelect>
            <MenuSelect attribute='categories.name'></MenuSelect>
            <MenuSelect attribute='offerings.name'></MenuSelect>
          </div>
          </LocationWrapper>
        </FormSection>
      </Container>
      <ListingsSection>
        <Container>
          <CustomHits/>
        </Container>
      </ListingsSection>
      </InstantSearch>
    </Page>
  )
}

export default SearchResultsPage
