import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Logo from './Logo'
import { ButtonLink } from './Button'

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

const HeaderLink = styled(Link)`
  &:hover,
  &:active {
    text-decoration: none;
  }
`

const Header = () => (
  <StyledHeader>
    <HeaderLink to={`/`}>
      <Logo />
    </HeaderLink>
    <ButtonLink href="/signup">Sign up</ButtonLink>
  </StyledHeader>
)

export default Header
