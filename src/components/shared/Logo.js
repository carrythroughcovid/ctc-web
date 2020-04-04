import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  font-size: 28px;
  line-height: 1;
  color: black;
`

const Alt = styled.span`
  color: ${({ theme }) => theme.colour.primary};
`

const Logo = ({ title }) => {
  return (
    <StyledLogo>
      carry<Alt>through</Alt>covid
    </StyledLogo>
  )
}

export default Logo
