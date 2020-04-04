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
  TextArea,
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
  max-width: 50%;
  margin: 0 auto;
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

const StyledTextAreaField = styled(TextArea)`
  margin-top: 1rem;
`

const FormInputs = styled.div`
  padding: 1rem;
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
                  name="owner_name"
                  label="Your Name"
                  error={errors.owner_name && errors.owner_name.message}
                  required="true"
                />
              }
              name="owner_name"
              control={control}
              rules={{
                maxLength: {
                  value: 100,
                  message: 'Name is too long',
                },
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
            <Controller
              as={
                <StyledFormField
                  name="headline"
                  label="Business 1-Liner"
                  error={errors.headline && errors.headline.message}
                  required="true"
                />
              }
              name="headline"
              control={control}
              rules={{
                maxLength: { value: 200, message: 'Headline is too long' },
              }}
            />
            <SelectContainer>
              <BorderlessFormField label="Product Updates" pad="true">
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
            <StyledFormField
              name="product_details"
              label="Product/Service Details"
            >
              <Controller
                as={
                  <StyledTextAreaField
                    name="product_details"
                    error={
                      errors.product_details && errors.product_details.message
                    }
                    required="true"
                  />
                }
                name="product_details"
                control={control}
                rules={{
                  maxLength: {
                    value: 700,
                    message: 'Product details is too long',
                  },
                }}
              />
            </StyledFormField>
            <StyledFormField
              name="business_details"
              label="Business Details / Your Story"
            >
              <Controller
                as={
                  <StyledTextAreaField
                    name="business_details"
                    error={
                      errors.business_details && errors.business_details.message
                    }
                    required="true"
                  />
                }
                name="business_details"
                control={control}
                rules={{
                  maxLength: {
                    value: 700,
                    message: 'Business details is too long',
                  },
                }}
              />
            </StyledFormField>
            <Controller
              as={
                <StyledFormField
                  name="primaryUrl"
                  label="Website URL"
                  error={errors.primaryUrl && errors.primaryUrl.message}
                />
              }
              name="primaryUrl"
              control={control}
              rules={{
                maxLength: { value: 500, message: 'Website is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="secondaryUrl"
                  label="Ordering/Online Store URL (e.g. to Menulog) (optional)"
                  error={errors.secondaryUrl && errors.secondaryUrl.message}
                />
              }
              name="secondaryUrl"
              control={control}
              rules={{
                maxLength: { value: 500, message: 'Ordering URL is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="businessPhone"
                  label="Business Phone (displayed on website)  (optional)"
                  error={errors.businessPhone && errors.businessPhone.message}
                />
              }
              name="secondaryUrl"
              control={control}
              rules={{
                maxLength: { value: 15, message: 'Phone is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="suburb"
                  label="Suburb (please still enter even if you are online only)"
                  required="true"
                />
              }
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
                  label="Contact Number (just for us if we need it)"
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
