import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'
import { ButtonInternalLink as Button } from '../shared/Button'

const Alt = styled.div`
  color: ${({ theme }) => theme.colour.brand};
`

const Title = () => (
  <>
    A platform<Alt>supporting small business</Alt>through COVID-19
  </>
)

const Actions = () => (
  <>
    <Button to="/signup" secondary large fixedWidth>
      Sign up now
    </Button>
    <Button to="/about" large fixedWidth>
      About us
    </Button>
  </>
)

const HomeHeader = () => (
  <HeroHeader
    sub="who we are"
    title={() => <Title />}
    actions={() => <Actions />}
    description="CarryThroughCovid is a new website and app for small retail and service businesses adapting to COVID-19 to access customers (regulars and new) and keep them up-to-date on your latest offerings at the touch of a finger - free of charge."
    large
  />
)

export default HomeHeader
