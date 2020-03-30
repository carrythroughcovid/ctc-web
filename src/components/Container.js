import styled, { css } from "styled-components"

import media from "../utils/media"

const Container = styled.div`
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${props =>
    props.fullWidth &&
    css`
      padding-left: 0;
      padding-right: 0;
      ${media.md`
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      `}
    `}
`

export default Container
