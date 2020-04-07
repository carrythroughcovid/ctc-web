import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from './Logo'

const StyledHeader = styled.header`
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.colour.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
`

const Header = () => (
  <StyledHeader>
    <Link to={`/`}>
      <Logo />
    </Link>
  </StyledHeader>
)

export default Header
