import React from 'react'

import Page from '../components/shared/Page'
import HomeHeader from '../components/home/HomeHeader'
import Container from '../components/shared/Container'
import SEO from '../components/shared/SEO'

import CategoryShowcase from '../components/home/CategoryShowcase'

const IndexPage = () => {
  return (
    <>
      <SEO description="Our mission is to maximise community support for small businesses throughout COVID-19. Are you a supporter of small business?" />
      <Page customHeader={() => <HomeHeader />}>
        <CategoryShowcase />
        <Container>test</Container>
      </Page>
    </>
  )
}

export default IndexPage
