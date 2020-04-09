import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, connectAutoComplete } from 'react-instantsearch-dom'
import AsyncSelect from 'react-select/async'
import { Select } from 'grommet'

const searchClient = algoliasearch(
  'TGPZX7CMYY',
  '859c34030d228a6188c83731bb6e456f'
)

const Autocomplete = ({
  onChange,
  currentOption,
  hits,
  refine,
  placeholder,
}) => {
  const loadOptions = (input, callback) => input && callback(hits)
  const handleInputChange = input => input && refine(input)
  const handleChoose = input => {
    refine(input)
    onChange(input)
  }
  return (
    <AsyncSelect
      value={currentOption}
      defaultOptions={hits}
      placeholder={placeholder}
      loadOptions={loadOptions}
      onInputChange={handleInputChange}
      onChange={handleChoose}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      formatOptionLabel={option => (
        <span>
          {option.suburb} {option.state} {option.postcode}
        </span>
      )}
    />
  )
}

const LocationSearch = ({ onChange, currentOption, placeholder }) => {
  const CustomAutocomplete = connectAutoComplete(Autocomplete)
  return (
    <InstantSearch searchClient={searchClient} indexName="prod_suburb_centroid">
      <CustomAutocomplete
        onChange={onChange}
        currentOption={currentOption}
        placeholder={placeholder}
      />
    </InstantSearch>
  )
}

export default LocationSearch
