import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from 'grommet'

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
      {active && <LabelText>{label}</LabelText>}
      <InputContainer>
        {React.cloneElement(component, { onFocus, onBlur, ...rest })}
      </InputContainer>
      {error && error}
    </Container>
  )
}

export default TextFormField
