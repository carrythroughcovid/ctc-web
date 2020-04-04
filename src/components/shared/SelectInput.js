import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const SelectWrapper = styled.div`
  background-color: #fff;
`

const Select = styled.select`
  display: block;
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  border: 0;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding-left: 0.75rem;
  height: 3rem;
  border: 1px solid #c0c3dc;
`

const StyledOptions = styled.option`
  text-transform: capitalize;
`

const SelectInput = ({ options, initialOption, ...input }) => (
  <SelectWrapper>
    <Select {...input}>
      {initialOption()}
      {options.map((options, index) => (
        <StyledOptions key={index} value={options}>
          {options}
        </StyledOptions>
      ))}
    </Select>
  </SelectWrapper>
)

export default SelectInput
