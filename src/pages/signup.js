import React, { useRef, useState, useCallback } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useForm, Controller } from 'react-hook-form'
import { Grommet, Form as GrommetForm, CheckBox } from 'grommet'

import Page from '../components/shared/Page'
import Spinner from '../components/shared/Spinner'
import { offeringOptions } from '../components/signup/presets'
import { API_HOST } from '../utils/constants'
import { validationRules } from '../components/signup/validationRules'
import { signupFields } from '../components/signup/signupFields'
import SignupHeader from '../components/signup/SignupHeader'
import Container from '../components/shared/Container'

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

const Section = ({ title, children }) => (
  <>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </>
)

const withError = (component, error) => React.cloneElement(component, { error })

const getErrorMessage = (field, errors) =>
  errors[field] && errors[field].message

const renderField = (field, errors) =>
  withError(signupFields[field], getErrorMessage(field, errors))

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

  const locationResult = watch('location_search')

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

  const renderControlledField = (fieldName, rest = null) => (
    <Controller
      as={renderField(fieldName, errors)}
      name={fieldName}
      control={control}
      rules={validationRules[fieldName]}
      onChange={rest ? rest.onChange : null}
      currentOption={rest ? rest.currentOption : null}
    />
  )

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

  return (
    <Page customHeader={() => <SignupHeader />}>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Grommet plain>
            <FormContainer>
              <GrommetForm
                name="businessForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Section title="Personal Details">
                  {renderControlledField('owner_name')}
                  {renderControlledField('email')}
                  {renderControlledField('contact_number')}
                </Section>

                <Section title="Business Summary">
                  {renderControlledField('name')}
                  <SelectContainer>
                    {renderControlledField('business_type', {
                      onChange: selected => {
                        setBusinessType(selected[0].value)
                        return selected[0].value
                      },
                    })}
                    {errors.business_type && (
                      <ErrorMessage>
                        {errors.business_type.message}
                      </ErrorMessage>
                    )}
                  </SelectContainer>
                  {businessType === 'Other' &&
                    renderControlledField('business_type_other')}
                  {renderControlledField('location_search', {
                    currentOption: locationResult,
                  })}
                </Section>

                <Section title="Brand Story">
                  {renderControlledField('headline')}
                  {renderControlledField('product_details')}
                  {renderControlledField('business_details')}
                </Section>

                <Section title="Your New Services">
                  <SelectContainer>
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
                    {formState.isSubmitted && offeringsChecked === 0 && (
                      <ErrorMessage>
                        Please select at least one product
                      </ErrorMessage>
                    )}
                  </SelectContainer>
                  {otherOfferingChecked &&
                    renderControlledField('offering_type_other')}
                </Section>

                <Section title="Display Images">
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
                          ref={logoRef}
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
                          ref={businessOwnerImageRef}
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
                  z
                </Section>

                <Section title="Optional Information">
                  {renderControlledField('website')}
                  {renderControlledField('website_secondary')}
                  {renderControlledField('business_number')}
                </Section>

                <button type="submit" disabled={buttonDisabled}>
                  Submit
                </button>
              </GrommetForm>
            </FormContainer>
          </Grommet>
        )}
      </Container>
    </Page>
  )
}

export default Form
