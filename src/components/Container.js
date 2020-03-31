import styled, { css } from "styled-components"

import media from "../utils/media"

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};

  ${props =>
    props.fullWidth &&
    css`
      padding-left: 0;
      padding-right: 0;
      ${media.md`
      padding-left: ${({ theme }) => theme.containerGutter};
      padding-right: ${({ theme }) => theme.containerGutter};
      `}
    `}
`

export default Container
