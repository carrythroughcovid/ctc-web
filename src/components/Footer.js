import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background-color: ${props => props.theme.colour.primary};
`

const Footer = () => {
  return (
    <FooterContainer>
      Carry through Covid
    </FooterContainer>
  )
}

export default Footer