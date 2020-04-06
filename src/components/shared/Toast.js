import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import media from '../../utils/media'

const StyledToast = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colour.primary};
  padding: 0.25rem;
  opacity: 0.7;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: 0.25rem;

  ${props =>
    !props.display &&
    css`
      display: none;
    `}
`

const Cross = styled.button`
  line-height: 2rem;
  height: 2rem;
  padding: 0 1rem 0 1rem;
  border-radius: 0.25rem;
  border: none;
  color: white;
  background-color: ${({ theme }) => theme.colour.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colour.purple};
  }
`

const Text = styled.div`
  line-height: 2rem;
  height: 2rem;
  color: white;
  padding-left: 0.5rem;
  font-size: 0.75rem;

  ${media.sm`
    font-size: 1rem;
  `}
`

const Toast = ({ children }) => {
  const handleClick = () => {
    setValues({ display: false })
  }

  const [values, setValues] = useState({ display: true })

  return (
    <StyledToast display={values.display}>
      <Text href="/signup">{children}</Text>
      <Cross onClick={handleClick}>x</Cross>
    </StyledToast>
  )
}

export default Toast
