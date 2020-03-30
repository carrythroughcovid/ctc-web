import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Page from "../components/Page"
import Container from "../components/Container"

// import media from "../utils/media"

import mockListing from "../../mockContent/listing1"

const BusinessImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  object-position: center;
`

const BusinessLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  object-fit: cover;
  object-position: center;
`

const BusinessDetails = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 2.25rem;
  display: flex;
  align-items: center;
`

const DetailsWrapper = styled.div`
  padding-left: 1rem;
`
const BusinessName = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  margin: 0;
  padding-bottom: 0.25rem;
`

const BusinessLocation = styled.div`
  font-size: 0.875rem;
`

const ButtonLink = styled(Link)`
  width: 100%;
  display: block;
  text-align: center;
  background-color: ${props => props.theme.colour.primary};
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;

  &:hover {
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }
`

const IndexPage = () => {
  // TODO hook up real data store
  const {
    image,
    businessLogo,
    businessType,
    businessName,
    suburb,
  } = mockListing

  return (
    <Page>
      <Container fullWidth>
        <BusinessImage src={image} />
      </Container>

      <Container>
        <BusinessDetails>
          <BusinessLogo src={businessLogo} />
          <DetailsWrapper>
            <BusinessName>{businessName}</BusinessName>
            <BusinessLocation>
              {businessType}
              <span> / {suburb}</span>
            </BusinessLocation>
          </DetailsWrapper>
        </BusinessDetails>

        <ButtonLink to="/">Visit Website</ButtonLink>

        <div>tabs Products/Services - Current offering - Details About</div>
      </Container>
    </Page>
  )
}

export default IndexPage
