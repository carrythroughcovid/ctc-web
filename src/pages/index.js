import React from 'react'
import styled from 'styled-components'

import Page from '../components/shared/Page'
import HomeHeader from '../components/home/HomeHeader'
import Container from '../components/shared/Container'
import SEO from '../components/shared/SEO'
import CategoryShowcase from '../components/home/CategoryShowcase'
import SectionTitle from '../components/home/SectionTitle'
import CategorySection from '../components/home/CategorySection'
import { getCategoryFromSlug } from '../utils/categoryMappings'
import SearchResultsPage from './search'

const ExploreTitle = styled(SectionTitle)`
  margin-top: 2.75rem;
`

const renderCategory = (node, categoryInfo) => {
  const businesses = node.edges

  return businesses.length > 0 ? (
    <CategorySection categoryInfo={categoryInfo} results={businesses} />
  ) : (
    undefined
  )
}

const IndexPage = ({ data }) => {
  const { retail, health, beauty, services, home, hospitality, other } = data

  const categories = {
    retail,
    health,
    beauty,
    services,
    home,
    hospitality,
    other,
  }

  const DiscoverPage = () => (
    <>
      <Container>
        <ExploreTitle>Explore services</ExploreTitle>
      </Container>
      <CategoryShowcase />

      <Container>
        {Object.keys(categories).map(category => {
          const categoryInfo = getCategoryFromSlug(category)
          const categoryData = categories[category]
          return renderCategory(categoryData, categoryInfo)
        })}
      </Container>
    </>
  )

  return <SearchResultsPage renderUnlessSearch={() => <DiscoverPage />} />
}

export const query = graphql`
  fragment BusinessInfo on Businesses {
    id
    name
    business_details
    business_number
    business_email
    product_details
    new_products
    website
    headline
    offerings {
      id
      name
    }
    categories {
      id
      name
    }
    slug
    suburb
    imgix_images {
      header_image
    }
  }

  query {
    retail: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "retail" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    health: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "health" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    beauty: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "beauty" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    services: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "services" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    home: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "home" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    hospitality: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "hospitality" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
    other: allBusinesses(
      limit: 4
      filter: { categories: { elemMatch: { name: { eq: "other" } } } }
    ) {
      edges {
        node {
          ...BusinessInfo
        }
      }
    }
  }
`

export default IndexPage
