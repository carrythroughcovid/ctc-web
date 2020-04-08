import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'
import { ButtonInternalLink as Button } from '../shared/Button'

const Alt = styled.div`
  color: ${({ theme }) => theme.colour.brand};
`

const AltSub = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
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
    <Button to="/#explore" large={true} fixedWidth={true}>
      Explore offerings
    </Button>
  </>
)

const AboutHeader = () => (
  <HeroHeader
    sub={() => <AltSub>Who we are</AltSub>}
    title={() => <Title />}
    actions={() => <Actions />}
    large={true}
  />
)

export default AboutHeader
