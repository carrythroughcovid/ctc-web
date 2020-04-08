import React from 'react'
import styled from 'styled-components'

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

const LabelWrapper = styled.div`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colour.grey};
  font-size: 1rem;
  text-transform: capitalize;
`

const SearchMenu = ({ items, currentRefinement, refine, resourceName }) => (
  <label>
    <LabelWrapper>{resourceName}</LabelWrapper>
    <SelectWrapper>
      <Select
        value={currentRefinement || ''}
        onChange={event => refine(event.currentTarget.value)}
      >
        <option value="">All {resourceName}</option>
        {items.map(item => (
          <option
            key={item.label}
            value={item.isRefined ? currentRefinement : item.value}
          >
            {item.label}
          </option>
        ))}
      </Select>
    </SelectWrapper>
  </label>
)

export default SearchMenu
