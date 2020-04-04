import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/shared/Page'
import Container from '../components/shared/Container'

const NotFoundPage = () => (
  <Page>
    <Container>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <p>
        Head back to our <Link to="/search">search page here.</Link>
      </p>
    </Container>
  </Page>
)

export default NotFoundPage
