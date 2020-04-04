import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/shared/Container'
import Carousel from '../components/shared/Carousel'


const IndexPage = () => {
  const card = {
    image:
      'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80',
    icon:
      'https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?w=800&q=80',
    title: 'The Banyan Tree',
    suburbDetails: 'Carlton • 2.4 km away',
    description: 'Breakfast, Brunch, Cafe Takeaway, Drive-thru',
  }

  const cards = [card, card, card, card, card, card, card, card, card]

  return (
    <Page>
      <Container>
        <Link to="/srp">Go to Search Results Page</Link>
        <Carousel cards={cards} />
      </Container>
    </Page>
  )
}

export default IndexPage
