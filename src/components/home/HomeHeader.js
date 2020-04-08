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
    <Button to="/signup" secondary={true} large={true} fixedWidth={true}>
      Sign up now
    </Button>
    <Button to="/about" large={true} fixedWidth={true}>
      About us
    </Button>
  </>
)

const HomeHeader = () => (
  <HeroHeader
    sub="we are"
    title={() => <Title />}
    actions={() => <Actions />}
    large={true}
  />
)

export default HomeHeader
