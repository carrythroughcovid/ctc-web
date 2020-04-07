import React, { useState } from 'react'
import styled from 'styled-components'
import { TextInput } from 'grommet'

const TextInputContainer = styled.div``

const TextFormField = ({
  errorMsg,
  label,
  component = <TextInput />,
  ...rest
}) => {
  const [active, setActive] = useState(false)

  const onFocus = () => setActive(true)
  const onBlur = () => setActive(false)

  return (
    <TextInputContainer>
      {active && label}
      {React.cloneElement(component, { onFocus, onBlur, ...rest })}
      {errorMsg && <p>errorMsg</p>}
    </TextInputContainer>
  )
}

export default TextFormField
