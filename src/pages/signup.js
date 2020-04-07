import React, { useRef, useState, useCallback } from 'react'
import { navigate } from 'gatsby'
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
  TextInput,
} from 'grommet'

import Page from '../components/shared/Page'
import Spinner from '../components/shared/Spinner'

const API_HOST =
  process.env.NODE_ENV === 'production'
    ? 'https://carrythroughcovid.herokuapp.com/'
    : 'http://localhost:3000/'

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

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const FormContainer = styled.div`
  box-shadow: 0px 6px 12px rgba(125, 76, 219, 0.3);
  border: 1px solid #9060eb;
  border-radius: 3px;
  padding: 1rem;
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

  button {
    width: 100%;
  }
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

const SectionTitle = styled.h3`
  color: #6979f8;
  text-transform: uppercase;
`

const TextInputContainer = styled.div`
  /* display: flex; */
`

const TextInputField = ({ errorMsg, label, ...rest }) => {
  const [active, setActive] = useState(false)

  const onFocus = () => setActive(true)
  const onBlur = () => setActive(false)

  return (
    <TextInputContainer>
      {active && label}
      <TextInput {...rest} onFocus={onFocus} onBlur={onBlur} />
      {errorMsg && <p>errorMsg</p>}
    </TextInputContainer>
  )
}

const TextAreaField = ({ errorMsg, label, ...rest }) => {
  const [active, setActive] = useState(false)

  const onFocus = () => setActive(true)
  const onBlur = () => setActive(false)

  return (
    <TextInputContainer>
      {active && label}
      <TextArea {...rest} onFocus={onFocus} onBlur={onBlur} />
      {errorMsg && <p>errorMsg</p>}
    </TextInputContainer>
  )
}

const Form = () => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
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
    setButtonDisabled(true)
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      if (data[key] !== undefined) {
        formData.append(key, data[key])
      }
    })
    const offeringObj = data['offering_type']
    Object.keys(offeringObj).forEach(key =>
      formData.append(`offering_${key}`, offeringObj[key])
    )
    formData.append('header_image', headerImageRef.current.files[0])
    formData.append('logo', logoRef.current.files[0])
    formData.append(
      'business_owner_image',
      businessOwnerImageRef.current.files[0]
    )
    setLoading(true)
    fetch(`${API_HOST}api/businesses`, {
      method: 'POST',
      body: formData,
    }).then(() => navigate('/'))
  }

  const handleCheckboxChange = useCallback(
    evt => {
      const { name } = evt.target
      triggerValidation({ name })
    },
    [formState.touched, triggerValidation]
  )

  return (
    <Page>
      {loading ? (
        <LoadingContainer>
          <Spinner display />
        </LoadingContainer>
      ) : (
        <Grommet plain>
          <FormContainer>
            <StyledForm
              ref={formRef}
              name="businessForm"
              onSubmit={handleSubmit(onSubmit)}
            >
              <FormInputs>
                <SectionTitle>Personal Details</SectionTitle>
                <Controller
                  as={
                    <TextInputField
                      name="owner_name"
                      label="Your Name"
                      placeholder="Full Name"
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
                    <TextInputField
                      name="email"
                      label="Email"
                      placeholder="Your Email"
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
                <Controller
                  as={
                    <TextInputField
                      name="contact_number"
                      label="Phone Number"
                      placeholder="Your Phone Number"
                      error={
                        errors.contact_number && errors.contact_number.message
                      }
                    />
                  }
                  name="contact_number"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Contact number is required.',
                    },
                    maxLength: {
                      value: 15,
                      message: 'Contact Number is too long',
                    },
                  }}
                />
                <SectionTitle>Business Summary</SectionTitle>
                <Controller
                  as={
                    <TextInputField
                      name="name"
                      label="Business Name"
                      placeholder="Your Business Name"
                      errorMsg={errors.name && errors.name.message}
                    />
                  }
                  name="name"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: 'Business name is required',
                    },
                    maxLength: {
                      value: 200,
                      message: 'Business name is too long',
                    },
                  }}
                />
                <SelectContainer>
                  <Controller
                    as={
                      <Select
                        placeholder="Select business type"
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
                    <TextInputField
                      name="suburb"
                      label="Your Suburb"
                      placeholder="Suburb"
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
                <SectionTitle>Brand Story</SectionTitle>
                <Controller
                  as={
                    <TextInputField
                      name="headline"
                      label="What is your business headline?"
                      placeholder="Describe your business in 25 characters or less."
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
                <Controller
                  as={
                    <TextAreaField
                      name="product_details"
                      label="Product/Service Details"
                      placeholder="Tell us a bit about your business"
                      error={
                        errors.product_details && errors.product_details.message
                      }
                    />
                  }
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
                <Controller
                  as={
                    <TextAreaField
                      name="business_details"
                      label="Business Details / Your Story"
                      placeholder="Tell us a bit about your background"
                      error={
                        errors.business_details &&
                        errors.business_details.message
                      }
                    />
                  }
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
                <SectionTitle>Your New Services</SectionTitle>
                <SelectContainer>
                  <BorderlessFormField label="Product Updates" pad="true">
                    {offeringOptions.map((offering, i) => (
                      <Controller
                        as={
                          <CheckBox
                            name="offering_type"
                            label={offering.label}
                          />
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
                    <ErrorMessage>
                      Please select at least one product
                    </ErrorMessage>
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
                <SectionTitle>Display Images</SectionTitle>
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
                <SectionTitle>Optional Information</SectionTitle>
                <Controller
                  as={
                    <TextInputField
                      name="website"
                      label="Your website"
                      placeholder="Website URL"
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
                    <TextInputField
                      name="website_secondary"
                      label="Link to an ordering/online store"
                      placeholder="Ordering/online store URL"
                      error={
                        errors.website_secondary &&
                        errors.website_secondary.message
                      }
                    />
                  }
                  name="website_secondary"
                  control={control}
                  rules={{
                    maxLength: {
                      value: 500,
                      message: 'Ordering URL is too long',
                    },
                  }}
                />
                <Controller
                  as={
                    <TextInputField
                      name="business_number"
                      label="Phone number to display on website"
                      placeholder="Business phone number"
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
              </FormInputs>
              <ButtonContainer>
                <Button
                  type="submit"
                  label="Submit"
                  disabled={buttonDisabled}
                />
              </ButtonContainer>
            </StyledForm>
          </FormContainer>
        </Grommet>
      )}
    </Page>
  )
}

export default Form
