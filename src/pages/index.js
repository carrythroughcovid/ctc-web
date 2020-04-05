import React from 'react'

import SearchResultsPage from './search'

const IndexPage = ({ data }) => <SearchResultsPage data={data} />

export default IndexPage

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
