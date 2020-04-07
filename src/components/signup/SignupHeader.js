import React from 'react'
import styled from 'styled-components'

import HeroHeader from '../shared/HeroHeader'
import { ButtonLink as Button } from '../shared/Button'

const AltSub = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
`

const Actions = () => (
  <Button href="mailto:contact@carrythroughcovid.com" fixedWidth large>
    Contact us
  </Button>
)

const SignupHeader = () => (
  <HeroHeader
    sub={() => <AltSub>Get started</AltSub>}
    title="Sign up with us"
    actions={() => <Actions />}
  />
)

export default SignupHeader
