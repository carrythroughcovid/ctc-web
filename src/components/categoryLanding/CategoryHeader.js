import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'

const CategoryHeader = ({ title }) => (
  <HeroHeader title={title} small noBackground />
)

export default CategoryHeader
