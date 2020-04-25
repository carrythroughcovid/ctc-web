import styled, { css } from 'styled-components'

const Badge = styled.span`
  border-radius: 6.25rem;
  display: inline-block;
  padding: 0.375rem 0.625rem;
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

  ${props =>
    props.light &&
    css`
      background-color: #eceffd;
      color: ${props => props.theme.colour.black};
    `}
`

export default Badge
