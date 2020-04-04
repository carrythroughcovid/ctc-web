import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm, Controller } from 'react-hook-form'
import {
  Grommet,
  Form as GrommetForm,
  FormField,
  Button,
  Select,
  CheckBox,
} from 'grommet'

const businessOptions = ['Hospitality', 'Retail', 'Services', 'Other']
const offeringOptions = [
  {
    label: 'Online Store',
    value: 'online',
  },
  {
    label: 'Takeaway',
    value: 'takeaway',
  },
  {
    label: 'Delivery',
    value: 'delivery',
  },
  {
    label: 'Discounts',
    value: 'discounts',
  },
  {
    label: 'Virtual Services',
    value: 'virtual',
  },
  {
    label: 'Pre-purchased Store Credit',
    value: 'credit',
  },
  {
    label: 'Other',
    value: 'other',
  },
]

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

const FormContainer = styled.div`
  box-shadow: 0px 6px 12px rgba(125, 76, 219, 0.3);
  border: 1px solid #9060eb;
  border-radius: 3px;
  padding: 2rem;
  width: 100%;
`

const StyledForm = styled(GrommetForm)`
  display: flex;
  flex-direction: column;

  span {
    font-size: 0.75rem;
  }
`

const StyledFormField = styled(FormField)`
  margin-top: 1rem;
`

const FormInputs = styled.div`
  max-width: 18rem;
`

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
`

const SelectContainer = styled.div`
  margin-top: 2rem;
`

const ErrorMessage = styled.p`
  color: #ff4040;
  padding-left: 1rem;
  font-size: 0.75rem;
`

const BorderlessFormField = styled(FormField)`
  > div {
    border: none;
  }
`

const Form = () => {
  const formRef = useRef(null)
  const { handleSubmit, control, errors } = useForm()
  const [businessType, setBusinessType] = useState('')
  const [otherOfferingChecked, setOtherOfferingChecked] = useState(false)

  const onSubmit = (_, e) => {
    formRef.current.submit()
  }

  return (
    <Grommet plain>
      <FormContainer>
        <StyledForm
          ref={formRef}
          name="businessForm"
          method="post"
          action="/submitted_business"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInputs>
            <Controller
              as={
                <StyledFormField
                  name="businessName"
                  label="Business Name"
                  error={errors.businessName && errors.businessName.message}
                  required="true"
                />
              }
              name="businessName"
              control={control}
              rules={{
                maxLength: { value: 200, message: 'Business name is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="email"
                  label="Email"
                  error={errors.email && errors.email.message}
                />
              }
              name="email"
              control={control}
              rules={{
                required: { value: true, message: 'Email is required' },
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Please enter a valid email',
                },
                maxLength: { value: 200, message: 'Email is too long' },
              }}
            />
            <SelectContainer>
              <Controller
                as={
                  <Select
                    placeholder="Type of Business"
                    options={businessOptions}
                    name="businessType"
                  />
                }
                name="businessType"
                control={control}
                onChange={selected => {
                  setBusinessType(selected[0].value)
                  return selected[0].value
                }}
                rules={{
                  required: {
                    value: true,
                    message: 'Please select a business type',
                  },
                }}
              />
              {errors.businessType && (
                <ErrorMessage>{errors.businessType.message}</ErrorMessage>
              )}
            </SelectContainer>
            {businessType === 'Other' && (
              <Controller
                as={
                  <StyledFormField
                    name="businessTypeOther"
                    placeholder="Type of Business"
                  />
                }
                name="businessTypeOther"
                control={control}
                rules={{
                  maxLength: {
                    value: 200,
                    message: 'Business type is too long',
                  },
                }}
              />
            )}
            <SelectContainer>
              <BorderlessFormField label="Offering" pad="true">
                {offeringOptions.map((offering, i) => (
                  <Controller
                    as={<CheckBox name="offeringType" label={offering.label} />}
                    name={`offeringType-${offering.value}`}
                    control={control}
                    onChange={selected => {
                      const { currentTarget: current } = selected[0]
                      if (current.name.match(/offeringType.+other/g)) {
                        setOtherOfferingChecked(current.checked)
                      }
                      return `${current.checked}`
                    }}
                  />
                ))}
              </BorderlessFormField>
            </SelectContainer>
            {otherOfferingChecked && (
              <Controller
                as={
                  <FormField
                    name="offeringTypeOther"
                    placeholder="Other offering"
                  />
                }
                name="offeringTypeOther"
                control={control}
                rules={{
                  maxLength: {
                    value: 200,
                    message: 'Offering type is too long',
                  },
                }}
              />
            )}
            <Controller
              as={<StyledFormField name="suburb" label="Suburb (optional)" />}
              name="suburb"
              control={control}
              rules={{
                maxLength: { value: 50, message: 'Suburb is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="mobile"
                  label="Mobile Number (optional)"
                />
              }
              name="mobile"
              control={control}
              rules={{
                maxLength: { value: 15, message: 'Mobile is too long' },
              }}
            />
          </FormInputs>
          <ButtonContainer>
            <Button type="submit" label="Submit" />
          </ButtonContainer>
        </StyledForm>
      </FormContainer>
    </Grommet>
  )
}

export default Form
