import React from "react"
import styled from "styled-components"

const SelectContainer = styled.select`
  border: 2px solid gray;
`

const SelectGroup = ({ name, items, onSelect, value }) => {
  return (
      <select name={name} value={value} onChange={e => onSelect(e)}>
        <option value="">All {name}{name == "category" ? `'s` : 's'}</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
  )
}

export default SelectGroup
