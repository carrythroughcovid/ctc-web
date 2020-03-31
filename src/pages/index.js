import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Page from "../components/Page"
import Container from "../components/Container"
import srp from "./srp"

import media from "../utils/media"

const Heading = styled.h1`
  color: red;

  ${media.sm`
    color: blue;
  `}
`

const IndexPage = () => (
  <Page>
    <Container>
      <Heading>Hi people</Heading>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/pdp">Go to PDP</Link>
    </Container>
  </Page>
)

// TODO: just using SRP untill we have homepage design
export default srp
