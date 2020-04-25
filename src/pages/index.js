import React from 'react'

import Page from '../components/shared/Page'
import HomeHeader from '../components/home/HomeHeader'
import Container from '../components/shared/Container'
import SEO from '../components/shared/SEO'

import CategoryShowcase from '../components/home/CategoryShowcase'
import SectionTitle from '../components/home/SectionTitle'
import CategorySection from '../components/home/CategorySection'

const IndexPage = () => {
  return (
    <>
      <SEO description="Our mission is to maximise community support for small businesses throughout COVID-19. Are you a supporter of small business?" />
      <Page customHeader={() => <HomeHeader />}>
        <Container>
          <SectionTitle>Explore services</SectionTitle>
        </Container>
        <CategoryShowcase />

        <Container>
          <CategorySection title="Retail" />
          <CategorySection title="Health and wellness" />
          <CategorySection title="Beauty" />
          <CategorySection title="Consulting" />
          <CategorySection title="Home and car" />
          <CategorySection title="Food and drink" />
          <CategorySection title="More" />
        </Container>
      </Page>
      test
    </>
  )
}

export default IndexPage
