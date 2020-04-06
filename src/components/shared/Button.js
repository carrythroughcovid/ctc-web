import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import media from '../../utils/media'

const buttonStyles = css`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colour.violet};
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 0;

  &:hover {
    ${props =>
      !props.disabled &&
      css`
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.125) 0px 0px 0px 20rem inset;
      `}
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 20rem inset;
  }

  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${props =>
    props.fullWidthMobile &&
    css`
      width: 100%;
      ${media.sm`
        display: inline;
        width: max-content;
      `}
    `}

  ${props =>
    props.large &&
    css`
      padding: 1rem 1.5rem;
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 0px 20rem inset;
    `}

    ${props =>
      props.secondary &&
      css`
        background-color: ${({ theme }) => theme.colour.accent2};
      `}
`

export const ButtonLink = styled.a`
  ${buttonStyles}

  &:hover {
    text-decoration: none;
  }
`
export const ButtonInternalLink = styled(Link)`
  ${buttonStyles}

  &:hover {
    text-decoration: none;
  }
`

const Button = styled.button`
  ${buttonStyles}
`

export default Button
