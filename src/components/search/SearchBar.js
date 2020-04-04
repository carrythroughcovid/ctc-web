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

const SearchBar = ({ ...input }) => {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput
        placeholder="Search by location or business name"
        type="text"
        {...input}
      />
    </SearchWrapper>
  )
}

export default SearchBar
