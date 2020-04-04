import React from 'react'
import styled from 'styled-components'

const StyledLogo = styled.div`
  font-size: 28px;
  color: black;
`

const Alt = styled.span`
  color: #7d4cdb;
`

const Logo = ({ title }) => {
  return (
    <StyledLogo>
      carry<Alt>through</Alt>covid
    </StyledLogo>
  )
}

export default Logo
