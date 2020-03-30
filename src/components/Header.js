import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colour.primary};
`

const Header = ({title}) => {

  return (
    <header>
      <HeaderContainer>
            <Link 
              style ={{boxShadow: `none`,color: `inherit`}} 
              to={`/`}>{title}
            </Link>
      </HeaderContainer>
    </header>
  )
}

export default Header