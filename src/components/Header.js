import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import Logo from "./Logo"

const StyledHeader = styled.header`
  height: ${props => props.theme.headerHeight};
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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
  </StyledHeader>
)

export default Header
