import styled, { css } from 'styled-components'

import media from '../../utils/media'

const buttonStyles = css`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colour.violet};
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }

  ${props =>
    props.fullWidthMobile &&
    css`
      width: 100%;
      ${media.sm`
        display: inline;
        width: max-content;
      `}
    `}
`

export const ButtonLink = styled.a`
  ${buttonStyles}

  &:hover {
    text-decoration: none;
  }
`

// TODO export default regular button
