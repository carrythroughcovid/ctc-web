import React from "react"
import { Link } from "gatsby"

import Page from "../components/Page"
import Container from "../components/Container"

const IndexPage = () => (
  <Page>
    <Container>
      <Link to="/srp">Go to Search Results Page</Link>
    </Container>
  </Page>
)

export default IndexPage
