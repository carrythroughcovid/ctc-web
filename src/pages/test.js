import React, { useRef, useState, useCallback } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, connectAutoComplete } from 'react-instantsearch-dom'
import AsyncSelect from 'react-select/async'
import { useForm, Controller } from 'react-hook-form'
import { Grommet, Form as GrommetForm, FormField, Button } from 'grommet'
import Page from '../components/shared/Page'
const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)
const Autocomplete = ({
  onChange,
  currentOption,
  hits,
  currentRefinement,
  refine,
}) => {
  const loadOptions = (_, callback) => {
    callback(hits)
  }
  const handleInputChange = input => {
    if (input) {
      refine(input)
    }
  }
  const handleChoose = input => {
    refine(input)
    onChange(input)
  }
  return (
    <AsyncSelect
      value={currentOption}
      defaultOptions
      loadOptions={loadOptions}
      onInputChange={handleInputChange}
      onChange={handleChoose}
      formatOptionLabel={option => (
        <span>
          {option.suburb} {option.state} {option.postcode}
        </span>
      )}
    />
  )
}
const ChonkyBoi = ({ onChange, currentOption }) => {
  const CustomAutocomplete = connectAutoComplete(Autocomplete)
  return (
    <InstantSearch searchClient={searchClient} indexName="prod_suburb_centroid">
      <CustomAutocomplete onChange={onChange} currentOption={currentOption} />
    </InstantSearch>
  )
}
const Test = () => {
  const { handleSubmit, control, watch } = useForm()
  const onSubmit = data => console.log(data)
  const searchResult = watch('customSearch')
  return (
    <Page>
      <Grommet plain>
        <GrommetForm onSubmit={handleSubmit(onSubmit)} name="testForm">
          <Controller
            as={<FormField name="test" label="Test Input 1" />}
            name="test"
            control={control}
          />
          <Controller
            as={<FormField name="test1" label="Test Input 2" />}
            name="test1"
            control={control}
          />
          <Controller
            as={ChonkyBoi}
            control={control}
            currentOption={searchResult}
            name="customSearch"
          />
          <Controller
            as={<FormField name="test2" label="Test Input 3" />}
            name="test2"
            control={control}
          />
          <Button type="submit" label="Submit" />
        </GrommetForm>
      </Grommet>
    </Page>
  )
}
export default Test
