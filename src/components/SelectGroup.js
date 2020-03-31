import React from "react"

const SelectGroup = ({name, items, onSelect, value}) => {

  return (
    <label style={{marginRight: '1rem'}}>
        {name}: &nbsp;
        <select
          name={name}
          value={value}
          onChange={(e) => onSelect(e)}
        >
          <option value="">All</option>
          {items.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
  )
}

export default SelectGroup
