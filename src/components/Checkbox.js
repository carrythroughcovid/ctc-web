import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const CheckboxStyled = styled.div`
  list-style: none;
  font-size: 1rem;
`

const Checkbox = ({ checkboxId, handleCheck, value, isChecked }) => {
  const [values, setValues] = useState({ checkboxId, handleCheck, isChecked })

  useEffect(() => {
    values.handleCheck({
      checkboxId: values.checkboxId,
      isChecked: values.isChecked,
    })
  }, [values])

  const updateIsChecked = _ => {
    setValues({ ...values, isChecked: !values.isChecked })
  }

  return (
    <CheckboxStyled>
      <input
        style={{ fontSize: '2rem' }}
        key={checkboxId}
        onChange={updateIsChecked}
        type="checkbox"
        checked={values.isChecked}
        value={value}
      />{' '}
      {value}
    </CheckboxStyled>
  )
}

export default Checkbox
