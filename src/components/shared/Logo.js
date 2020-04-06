import React from 'react'
import styled from 'styled-components'

import LogoDark from '../../assets/logoDark.svg'
import LogoLight from '../../assets/logoLight.svg'

const StyledLogo = styled.div`
  font-size: 28px;
  line-height: 1;
  color: black;
`

const Alt = styled.span`
  color: ${({ theme }) => theme.colour.primary};
`

const Logo = ({ light }) => {
  return <StyledLogo>{light ? <LogoDark /> : <LogoLight />}</StyledLogo>
}

export default Logo
