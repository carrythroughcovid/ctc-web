import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from './Logo'
import { ButtonInternalLink as Button } from './Button'

const StyledHeader = styled.header`
  height: ${props => props.theme.headerHeight};
  background-color: white;
  border-bottom: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
`

const Header = () => (
  <StyledHeader>
    <Link to={`/`}>
      <Logo light />
    </Link>
    <Button to="/signup">Sign up</Button>
  </StyledHeader>
)

export default Header
