import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useForm, Controller } from 'react-hook-form'
import {
  Grommet,
  Form as GrommetForm,
  Select,
  CheckBox,
  TextArea,
} from 'grommet'

import Page from '../components/shared/Page'
import Spinner from '../components/shared/Spinner'
import LocationSearch from '../components/signup/LocationSearch'
import TextFormField from '../components/signup/TextFormField'
import { businessOptions, offeringOptions } from '../components/signup/presets'
import { API_HOST, EMAIL_REGEX } from '../utils/constants'
import { validationRules } from '../components/signup/validationRules'
import { signupFields } from '../components/signup/signupFields'

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const FormContainer = styled.div`
  padding: 1rem;
  margin: 0 auto;
`

const SelectContainer = styled.div`
  button {
    width: 100%;
  }
`

const ErrorMessage = styled.p`
  color: #ff4040;
  padding-left: 1rem;
  font-size: 0.75rem;
`

const SectionTitle = styled.h3`
  color: #6979f8;
  text-transform: uppercase;
`

const Loading = () => (
  <LoadingContainer>
    <Spinner display />
  </LoadingContainer>
)

const Form = () => {
  const [loading, setLoading] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const {
    handleSubmit,
    control,
    errors,
    getValues,
    triggerValidation,
    formState,
    watch,
  } = useForm()

  const locationResult = watch('locationSearch')

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
    Object.keys(locationResult).forEach(key =>
      formData.append(key, locationResult[key])
    )
    formData.append('latitude', locationResult['_geoloc'].lat)
    formData.append('longitude', locationResult._geoloc.lng)
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

  const withError = (component, error) =>
    React.cloneElement(component, { error })

  const getErrorMessage = (field, errors) =>
    errors[field] && errors[field].message

  const renderField = field =>
    withError(signupFields[field], getErrorMessage(field, errors))

  const renderControlledField = (fieldName, onChange = null) => (
    <Controller
      as={renderField(fieldName)}
      name={fieldName}
      control={control}
      rules={validationRules.fieldName}
      onChange={onChange}
    />
  )

  return (
    <Page>
      {loading ? (
        <Loading />
      ) : (
        <Grommet plain>
          <FormContainer>
            <GrommetForm name="businessForm" onSubmit={handleSubmit(onSubmit)}>
              <SectionTitle>Personal Details</SectionTitle>
              {renderControlledField('owner_name')}
              {renderControlledField('email')}
              {renderControlledField('contact_number')}

              <SectionTitle>Business Summary</SectionTitle>

              {renderControlledField('name')}
              <SelectContainer>
                {renderControlledField('business_type', selected => {
                  setBusinessType(selected[0].value)
                  return selected[0].value
                })}
                {errors.business_type && (
                  <ErrorMessage>{errors.business_type.message}</ErrorMessage>
                )}
              </SelectContainer>
              {businessType === 'Other' &&
                renderControlledField('business_type_other')}
              <Controller
                as={LocationSearch}
                control={control}
                currentOption={locationResult}
                name="locationSearch"
              />
              <SectionTitle>Brand Story</SectionTitle>
              <Controller
                as={
                  <TextFormField
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
                  <TextFormField
                    component={<TextArea />}
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
                  <TextFormField
                    component={<TextArea />}
                    name="business_details"
                    label="Business Details / Your Story"
                    placeholder="Tell us a bit about your background"
                    error={
                      errors.business_details && errors.business_details.message
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
                {formState.isSubmitted && offeringsChecked === 0 && (
                  <ErrorMessage>
                    Please select at least one product
                  </ErrorMessage>
                )}
              </SelectContainer>
              {otherOfferingChecked && (
                <Controller
                  as={
                    <TextFormField
                      name="offering_type_other"
                      placeholder="Other type of offering"
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
                  <>
                    <input
                      name="header_image"
                      id="header_image"
                      type="file"
                      ref={headerImageRef}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="header_image">Upload hero image</label>
                  </>
                }
                name="header_image"
                control={control}
              />
              <Controller
                as={
                  <>
                    <input
                      name="logo"
                      id="logo"
                      type="file"
                      ref={headerImageRef}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="logo">Upload logo</label>
                  </>
                }
                name="logo"
                control={control}
              />
              <Controller
                as={
                  <>
                    <input
                      name="business_owner_image"
                      id="business_owner_image"
                      type="file"
                      ref={headerImageRef}
                      style={{ display: 'none' }}
                    />
                    <label htmlFor="business_owner_image">
                      Upload profile photo
                    </label>
                  </>
                }
                name="business_owner_image"
                control={control}
              />
              <SectionTitle>Optional Information</SectionTitle>
              <Controller
                as={
                  <TextFormField
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
                  <TextFormField
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
                  <TextFormField
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
              <button type="submit" disabled={buttonDisabled}>
                Submit
              </button>
            </GrommetForm>
          </FormContainer>
        </Grommet>
      )}
    </Page>
  )
}

export default Form
