import React from 'react'

import SearchResultsPage from '../pages/search'
import CategoryHeader from '../components/categoryLanding/CategoryHeader'

const CategoryLandingPage = ({ pageContext }) => {
  const customHeader = () => <CategoryHeader title={pageContext.name} />
  return (
    <SearchResultsPage header={customHeader} categorySlug={pageContext.slug} />
  )
}

export default CategoryLandingPage
