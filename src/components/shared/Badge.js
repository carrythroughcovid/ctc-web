import styled, { css } from 'styled-components'

const Badge = styled.span`
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  color: #ffffff;
  font-size: 0.75rem;
  background-color: ${props => props.theme.colour.black};

  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.colour.purpleDark};
    `}

  ${props =>
    props.secondary &&
    css`
      background-color: ${props.theme.colour.tealDark};
    `}
`

export default Badge
