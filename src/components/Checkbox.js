import React, {useState, useEffect} from "react"
import styled from "styled-components"

const CheckboxStyled = styled.div`
  list-style: none;
  font-size: 1rem;
`

const Checkbox = ({checkboxId, handleCheck, value, isChecked}) => {
  const [values, setValues] = useState({isChecked: isChecked, checkboxId: checkboxId, value: value})

  useEffect(() => {
    handleCheck({checkboxId: values.checkboxId, isChecked: values.isChecked, value: values.value})
  }, [values])

  const handleCheck2 = (_) => {
    setValues({...values, isChecked: !values.isChecked})  
  }

  return (
    <CheckboxStyled>
      <input style={{fontSize: '2rem'}} key={checkboxId} onChange={handleCheck2} type="checkbox" checked={values.isChecked} value={value} /> {value}
    </CheckboxStyled>
  )
}

export default Checkbox