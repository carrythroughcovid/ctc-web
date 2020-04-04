import React, { useState, useEffect } from 'react'
import Checkbox from '../components/Checkbox'

const CheckboxGroup = ({ checkboxId, checkboxState, handleCheck }) => {
  const [values, setValues] = useState({
    checkboxId,
    checkboxState,
    handleCheck,
  })

  const updateValues = ({ checkboxId, value, isChecked }) => {
    const newCheckboxDetail = {
      isChecked: isChecked,
      value: value,
    }

    const newValues = values.checkboxState
    newValues[checkboxId] = newCheckboxDetail

    setValues({ ...values, checkboxState: newValues })
  }

  useEffect(() => {
    values.handleCheck({
      checkboxId: values.checkboxId,
      checkboxState: values.checkboxState,
    })
  }, [values])

  return checkboxState.map(checkBox => {
    return (
      <Checkbox
        key={checkBox.checkboxId}
        checkboxId={checkBox.checkboxId}
        value={checkBox.value}
        isChecked={checkBox.isChecked}
        handleCheck={updateValues}
      ></Checkbox>
    )
  })
}

export default CheckboxGroup
