import React from "react"
import styled from "styled-components"

const StyledFooter = styled.header`
  height: ${props => props.theme.headerHeight};
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
  font-size: 0.75rem;
`

const Footer = () => {
  return (
    <StyledFooter>
      Questions or feedback? We'd love to hear from you&nbsp;
      <a href="mailto:contact@carrythroughcovid.com">
        contact@carrythroughcovid.com
      </a>
    </StyledFooter>
  )
}

export default Footer
