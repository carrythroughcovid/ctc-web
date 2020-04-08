import React from 'react'
import { Link } from 'gatsby'

import Page from '../components/shared/Page'
import Container from '../components/shared/Container'
import SEO from '../components/shared/SEO'

const NotFoundPage = () => (
  <>
    <SEO
      title="404: Not found"
      description="Could not find the page you were looking for"
    />
    <Page>
      <Container>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <p>
          Head back to our <Link to="/search">search page here.</Link>
        </p>
      </Container>
    </Page>
  </>
)

export default NotFoundPage
