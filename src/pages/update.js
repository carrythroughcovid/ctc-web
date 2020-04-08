import React, { useState } from 'react'
import styled from 'styled-components'
import CheckboxGroup from '../components/CheckboxGroup'

const FormContainer = styled.form`
  max-width: 30rem;
  margin: 0 auto;
`

const FullInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
  font-size: 1rem;
  background-color: #f8f8f8;
`

const FullTextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.25rem;
  font-size: 1rem;
  height: 120px;
  background-color: #f8f8f8;
`

const FullButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.25rem;
  background-color: #f8f8f8;
`

const OfferingContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const UpdateListingPage = () => {
  const [values, setValues] = useState({
    name: '',
    businessName: '',
    suburb: '',
    details: '',
    about: '',
    options: {},
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const updateCheckboxValues = checkboxGroup => {
    const newValues = values.options
    newValues[checkboxGroup.checkboxId] = checkboxGroup.checkboxState
    setValues({ ...values, options: newValues })
  }

  const checkboxOfferings = [
    { checkboxId: 0, value: 'Online', isChecked: false },
    { checkboxId: 1, value: 'Delivery', isChecked: false },
    { checkboxId: 2, value: 'Virtual', isChecked: false },
    { checkboxId: 3, value: 'Credit', isChecked: false },
  ]

  const checkboxCategories = [
    { checkboxId: 0, value: 'Retail', isChecked: false },
    { checkboxId: 1, value: 'Hospitality', isChecked: false },
    { checkboxId: 2, value: 'Services', isChecked: false },
    { checkboxId: 3, value: 'Cafe', isChecked: false },
    { checkboxId: 4, value: 'Other', isChecked: false },
  ]

  return (
    <FormContainer
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div>Please tell us about your business.</div>
      <label htmlFor="businessName">
        <div>Business name</div>
        <FullInput
          type="text"
          name="businessName"
          value={values.businessName}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="name">
        <div>Your name</div>
        <FullInput
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="suburb">
        <div>Suburb</div>
        <FullInput
          type="text"
          name="suburb"
          value={values.suburb}
          onChange={handleInputChange}
        />
      </label>
      <OfferingContainer>
        <label htmlFor="offering">
          <div>Offering</div>
          <CheckboxGroup
            name="offering"
            style={{ width: '100%' }}
            checkboxId="offerings"
            checkboxState={checkboxOfferings}
            handleCheck={updateCheckboxValues}
          />
        </label>
        <label htmlFor="categories">
          <div>Categories</div>
          <CheckboxGroup
            name="categories"
            checkboxId="categories"
            checkboxState={checkboxCategories}
            handleCheck={updateCheckboxValues}
          />
        </label>
      </OfferingContainer>

      <label htmlFor="details">
        <div>Details</div>
        <FullTextArea name="details" onChange={handleInputChange} />
      </label>
      <label htmlFor="about">
        <div>About</div>
        <FullTextArea name="about" onChange={handleInputChange} />
      </label>
      <FullButton type="submit" value="Submit">
        Submit
      </FullButton>
    </FormContainer>
  )
}

export default UpdateListingPage
