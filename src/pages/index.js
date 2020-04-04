import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/shared/Container'
import Carousel from '../components/shared/Carousel'
import styled from 'styled-components'

const CapitalName = styled.div`
  text-transform: capitalize;
`

const IndexPage = ({ data }) => {
  console.log(data)

  const allCategories = data.allCategories.edges

  const carouselCards = allCategories.map(({ node: category }) => {
    const cards = category.businesses.map(business => {
      return {
        name: business.name,
        image:
          'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80',
        icon:
          'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80',
        description: 'Breakfast, Brunch, Cafe Takeaway, Drive-thru',
        suburbDetails: 'Carlton • 2.4 km away',
      }
    })

    return {
      name: category.name,
      cards: cards,
    }
  })

  return (
    <Page>
      <Container>
        <Link to="/srp">Go to Search Results Page</Link>
        {carouselCards.map(carouselCard => {
          return (
            <>
              <CapitalName>{carouselCard.name}</CapitalName>
              <Carousel cards={carouselCard.cards} />
            </>
          )
        })}
      </Container>
    </Page>
  )
}

export const query = graphql`
  query {
    allCategories {
      edges {
        node {
          id
          name
          businesses {
            name
            id
          }
        }
      }
    }
  }
`

export default IndexPage
