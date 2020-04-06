import React, { useRef, useState, useCallback } from 'react'
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
  const {
    handleSubmit,
    control,
    errors,
    getValues,
    triggerValidation,
    formState,
  } = useForm()
  const [businessType, setBusinessType] = useState('')
  const [otherOfferingChecked, setOtherOfferingChecked] = useState(false)
  const [offeringsChecked, setOfferingsChecked] = useState(0)

  const headerImageRef = useRef(null)
  const businessOwnerImageRef = useRef(null)
  const logoRef = useRef(null)

  const validateOfferings = _ => {
    const values = getValues({ nest: true })

    return (
      Object.keys(values.offering_type).filter(v =>
        Boolean(values.offering_type[v])
      ).length >= 1 || 'Select at least 1 offering.'
    )
  }

  const onSubmit = data => {
    const formData = new FormData()
    Object.keys(data).forEach(key => formData.append(key, data[key]))
    formData.append('header_image', headerImageRef.current.files[0])
    formData.append('logo', logoRef.current.files[0])
    formData.append(
      'business_owner_image',
      businessOwnerImageRef.current.files[0]
    )
    fetch('http://localhost:3000/api/businesses', {
      method: 'POST',
      body: formData,
    }).then(() => alert('done'))
  }

  const handleCheckboxChange = useCallback(
    evt => {
      const { name } = evt.target
      triggerValidation({ name })
    },
    [formState.touched, triggerValidation]
  )

  return (
    <Grommet plain>
      <FormContainer>
        <StyledForm
          ref={formRef}
          name="businessForm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInputs>
            <Controller
              as={
                <StyledFormField
                  name="name"
                  label="Business Name"
                  error={errors.name && errors.name.message}
                />
              }
              name="name"
              control={control}
              rules={{
                required: { value: true, message: 'Business name is required' },
                maxLength: { value: 200, message: 'Business name is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="owner_name"
                  label="Your Name"
                  error={errors.owner_name && errors.owner_name.message}
                />
              }
              name="owner_name"
              control={control}
              rules={{
                required: { value: true, message: 'Name is required' },
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
                    name="business_type"
                  />
                }
                name="business_type"
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
              {errors.business_type && (
                <ErrorMessage>{errors.business_type.message}</ErrorMessage>
              )}
            </SelectContainer>
            {businessType === 'Other' && (
              <Controller
                as={
                  <StyledFormField
                    name="business_type_other"
                    placeholder="Type of Business"
                  />
                }
                name="business_type_other"
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
                />
              }
              name="headline"
              control={control}
              rules={{
                required: { value: true, message: 'Headline is required' },
                maxLength: { value: 200, message: 'Headline is too long' },
              }}
            />
            <SelectContainer>
              <BorderlessFormField label="Product Updates" pad="true">
                {offeringOptions.map((offering, i) => (
                  <Controller
                    as={
                      <CheckBox name="offering_type" label={offering.label} />
                    }
                    name={`offering_type[${offering.value}]`}
                    control={control}
                    onChange={selected => {
                      handleCheckboxChange(selected[0])
                      const { currentTarget: current } = selected[0]
                      console.log(current.value)
                      current.value === 'true'
                        ? setOfferingsChecked(offeringsChecked - 1)
                        : setOfferingsChecked(offeringsChecked + 1)
                      if (current.name.match(/offering_type.+other/g)) {
                        setOtherOfferingChecked(current.checked)
                      }
                      return `${current.checked}`
                    }}
                    rules={{
                      validate: validateOfferings,
                    }}
                  />
                ))}
              </BorderlessFormField>
              {formState.isSubmitted && offeringsChecked === 0 && (
                <ErrorMessage>Please select at least one product</ErrorMessage>
              )}
            </SelectContainer>
            {otherOfferingChecked && (
              <Controller
                as={
                  <FormField
                    name="offering_type_other"
                    placeholder="Other offering"
                  />
                }
                name="offering_type_other"
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
              error={errors.product_details && errors.product_details.message}
            >
              <Controller
                as={<StyledTextAreaField name="product_details" />}
                name="product_details"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'These details are required',
                  },
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
              error={errors.business_details && errors.business_details.message}
            >
              <Controller
                as={<StyledTextAreaField name="business_details" />}
                name="business_details"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'These details are required',
                  },
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
                  name="suburb"
                  label="Suburb"
                  error={errors.suburb && errors.suburb.message}
                />
              }
              name="suburb"
              control={control}
              rules={{
                required: {
                  value: true,
                  message:
                    'Suburb is required. Please still enter one if you are an online store.',
                },
                maxLength: { value: 50, message: 'Suburb is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="contact_number"
                  label="Contact Number (only for our records)"
                  error={errors.contact_number && errors.contact_number.message}
                />
              }
              name="contact_number"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Contact number is required.',
                },
                maxLength: { value: 15, message: 'Contact Number is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="website"
                  label="Website URL (optional)"
                  error={errors.website && errors.website.message}
                />
              }
              name="website"
              control={control}
              rules={{
                maxLength: { value: 500, message: 'Website is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="website_secondary"
                  label="Ordering/Online Store URL (e.g. to Menulog) (optional)"
                  error={
                    errors.website_secondary && errors.website_secondary.message
                  }
                />
              }
              name="website_secondary"
              control={control}
              rules={{
                maxLength: { value: 500, message: 'Ordering URL is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField
                  name="business_number"
                  label="Business Phone (displayed on website)  (optional)"
                  error={
                    errors.business_number && errors.business_number.message
                  }
                />
              }
              name="business_number"
              control={control}
              rules={{
                maxLength: { value: 15, message: 'Phone is too long' },
              }}
            />
            <Controller
              as={
                <StyledFormField name="header_image" label="Main Image">
                  <input type="file" ref={headerImageRef} />
                </StyledFormField>
              }
              name="header_image"
              control={control}
            />
            <Controller
              as={
                <StyledFormField name="logo" label="Logo">
                  <input type="file" ref={logoRef} />
                </StyledFormField>
              }
              name="logo"
              control={control}
            />
            <Controller
              as={
                <StyledFormField
                  name="business_owner_image"
                  label="Your Headshot"
                >
                  <input type="file" ref={businessOwnerImageRef} />
                </StyledFormField>
              }
              name="business_owner_image"
              control={control}
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
