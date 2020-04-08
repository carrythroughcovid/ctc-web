import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput, ThemeContext } from 'grommet'

import theme from '../../styles/theme'

const { colour } = theme

const Container = styled.div`
  input {
    box-shadow: none;
  }
`

const InputContainer = styled.div`
  padding: 0.875rem 0;
`

const LabelText = styled.span`
  font-size: 0.75rem;
`

const TextFormField = ({
  error,
  label,
  component = <TextInput />,
  ...rest
}) => {
  const [active, setActive] = useState(false)

  const onFocus = () => setActive(true)
  const onBlur = () => setActive(false)

  return (
    <Container>
      <ThemeContext.Extend
        value={{
          global: {
            control: { border: { color: colour.greyLight, width: '0.75px' } },
            focus: { border: { color: 'black' }, boxShadow: null },
          },
        }}
      >
        {active && <LabelText>{label}</LabelText>}
        <InputContainer>
          {React.cloneElement(component, { onFocus, onBlur, ...rest })}
        </InputContainer>
        {error && error}
      </ThemeContext.Extend>
    </Container>
  )
}

export default TextFormField
