import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c3dc;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  height: 3rem;
  position: relative;
`

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 1rem;
  z-index: 10;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  height: 100%;
  padding-left: 2.5rem;
  border-radius: 6px;
  outline: 0;
  border: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  &:focus {
    box-shadow: 0 0 0 2px rgba(112, 56, 186, 0.5);
  }
`

const LabelWrapper = styled.div`
  padding-bottom: 0.5rem;
  color: ${({ theme }) => theme.colour.grey};
  font-size: 1rem;
`

const SearchBar = ({ currentRefinement, refine, ...input }) => {
  return (
    <label>
      <LabelWrapper>Search by location or business name</LabelWrapper>
      <SearchWrapper>
        <SearchIcon />
        <SearchInput
          placeholder="Search"
          value={currentRefinement}
          onChange={event => refine(event.currentTarget.value)}
          type="search"
          {...input}
        />
      </SearchWrapper>
    </label>
  )
}

export default SearchBar
