import React, { useRef, useState, useCallback } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, connectAutoComplete } from 'react-instantsearch-dom'
import AsyncSelect from 'react-select/async'
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

import Page from '../components/shared/Page'

const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)

const Test = () => {
  const [location, setLocation] = useState({})
  const testRef = useRef(null)
  const { handleSubmit, control } = useForm()

  const Autocomplete = ({ hits, currentRefinement, refine }) => {
    const loadOptions = (_, callback) => {
      console.log('load called')
      callback(hits)
    }

    const handleInputChange = input => {
      console.log('handle input called')
      console.log(input)
      console.log('currentRefinement', currentRefinement)
      if (input) {
        refine(input)
      }
    }

    const handleChoose = input => {
      console.log('handle choose called')
      console.log('input', input)
      refine(input)
    }

    return (
      <>
        <AsyncSelect
          value={currentRefinement || 'cat'}
          defaultOptions
          loadOptions={loadOptions}
          onInputChange={handleInputChange}
          onChange={handleChoose}
          ref={testRef}
          formatOptionLabel={o => (
            <span>
              {o.suburb} {o.state} {o.postcode}
            </span>
          )}
        />
      </>
    )
  }

  const CustomAutocomplete = connectAutoComplete(Autocomplete)

  const onSubmit = data => console.log(data)

  return (
    <Page>
      <InstantSearch
        searchClient={searchClient}
        indexName="prod_suburb_centroid"
      >
        <CustomAutocomplete />
      </InstantSearch>
      <Grommet plain>
        <GrommetForm onSubmit={handleSubmit(onSubmit)} name="testForm">
          <Controller
            as={<FormField name="test" label="test" />}
            name="test"
            control={control}
          />
          <Controller
            as={<FormField name="test1" label="test1" />}
            name="test1"
            control={control}
          />
          <Controller
            as={<FormField name="test2" label="test2" />}
            name="test2"
            control={control}
          />
          <button
            type="submit"
            onClick={() => console.log(testRef.current.props.value)}
          />
        </GrommetForm>
      </Grommet>
    </Page>
  )
}

export default Test
