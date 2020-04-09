import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import { useForm, Controller } from 'react-hook-form'
import { Grommet, Form as GrommetForm, CheckBox, ThemeContext } from 'grommet'
import ImageUploader from 'react-images-upload'

import Page from '../components/shared/Page'
import Spinner from '../components/shared/Spinner'
import { offeringOptions } from '../components/signup/presets'
import { API_HOST } from '../utils/constants'
import { validationRules } from '../components/signup/validationRules'
import { signupFields } from '../components/signup/signupFields'
import SignupHeader from '../components/signup/SignupHeader'
import Container from '../components/shared/Container'
import SEO from '../components/shared/SEO'
import theme from '../styles/theme'
import { ButtonLink as Button } from '../components/shared/Button'

const { colour } = theme

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
`

const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 27rem;
  textarea {
    box-shadow: none;
  }
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
  font-family: ${({ theme }) => theme.font.alt};
  font-weight: normal;
  color: ${({ theme }) => theme.colour.violet};
  text-transform: uppercase;
`

const CheckBoxContainer = styled.div`
  padding: 0.75rem 0;
  label {
    color: ${({ theme }) => theme.colour.grey};
  }
`

const StyledButton = styled(Button)`
  margin-top: 3rem;
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
  const [logoImage, setLogoImage] = useState(null)
  const [headerImage, setHeaderImage] = useState(null)
  const [businessOwnerImage, setBusinessOwnerImage] = useState(null)

  const validateOfferings = _ => {
    const values = getValues({ nest: true })
    return (
      Object.keys(values.offering_type).filter(v =>
        Boolean(values.offering_type[v])
      ).length >= 1 || 'Select at least 1 offering.'
    )
  }

  // When adding a new field, it should be added to ./signupfields.js and validation rules should be added to ./validationRules.js
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

    logoImage && formData.append('logo_image', logoImage[0])
    headerImage && formData.append('header_image', headerImage[0])
    businessOwnerImage &&
      formData.append('business_owner_image', businessOwnerImage[0])

    setLoading(true)
    fetch(`${API_HOST}api/businesses`, {
      method: 'POST',
      body: formData,
    }).then(() => navigate('/submitted'))
  }

  const handleCheckboxChange = useCallback(
    evt => {
      const { name } = evt.target
      triggerValidation({ name })
    },
    [triggerValidation]
  )

  return (
    <>
      <SEO
        title="Signup"
        description="Signup as a business to list your offerings"
      />
      <Page customHeader={() => <SignupHeader />}>
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <Grommet theme={theme}>
              <ThemeContext.Extend
                value={{
                  global: {
                    control: {
                      border: { color: colour.greyLight, width: '0.75px' },
                    },
                    focus: { border: { color: 'black' } },
                  },
                  checkBox: { color: colour.violet },
                }}
              >
                <FormContainer>
                  <GrommetForm
                    name="businessForm"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Section title="Personal Details">
                      {renderControlledField('owner_name')}
                      {renderControlledField('contact_email')}
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
                          <CheckBoxContainer>
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
                                current.value === 'true'
                                  ? setOfferingsChecked(offeringsChecked - 1)
                                  : setOfferingsChecked(offeringsChecked + 1)
                                if (
                                  current.name.match(/offering_type.+other/g)
                                ) {
                                  setOtherOfferingChecked(current.checked)
                                }
                                return `${current.checked}`
                              }}
                              rules={{
                                validate: validateOfferings,
                              }}
                            />
                          </CheckBoxContainer>
                        ))}
                        {formState.isSubmitted && offeringsChecked === 0 && (
                          <ErrorMessage>
                            Please select at least one product
                          </ErrorMessage>
                        )}
                      </SelectContainer>
                      {otherOfferingChecked &&
                        renderControlledField('offering_type_other')}
                      {renderControlledField('new_products')}
                    </Section>

                    <Section title="Display Images">
                      <ImageUploader
                        withIcon={true}
                        onChange={setHeaderImage}
                        imgExtension={['.jpg', '.png']}
                        buttonText="Upload header image"
                        label="The main image to promote your business (landscape)"
                        withPreview={true}
                        singleImage={true}
                      />
                      <ImageUploader
                        withIcon={true}
                        onChange={setLogoImage}
                        imgExtension={['.jpg', '.png']}
                        buttonText="Upload logo"
                        label="Please submit in .jpg or .png format"
                        withPreview={true}
                        singleImage={true}
                      />
                      <ImageUploader
                        withIcon={true}
                        onChange={setBusinessOwnerImage}
                        imgExtension={['.jpg', '.png']}
                        buttonText="Upload profile photo"
                        label="A headshot of yourself (optional)"
                        withPreview={true}
                        singleImage={true}
                      />
                    </Section>

                    <Section title="Optional Information">
                      {renderControlledField('website')}
                      {renderControlledField('website_secondary')}
                      {renderControlledField('business_number')}
                      {renderControlledField('business_email')}
                    </Section>

                    <StyledButton
                      type="submit"
                      disabled={buttonDisabled}
                      fullWidth
                      onClick={handleSubmit(onSubmit)}
                    >
                      Submit
                    </StyledButton>
                  </GrommetForm>
                </FormContainer>
              </ThemeContext.Extend>
            </Grommet>
          )}
        </Container>
      </Page>
    </>
  )
}

export default Form
