import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 0;
  margin-bottom: 2rem;
`

const Item = styled.li`
  list-style: none;
`

const Label = styled.span`
  font-weight: ${({ isRefined }) => (isRefined ? 'bold' : '')};
`

const SubCategoriesRefinements = ({ items, refine }) => (
  <List>
    {items
      .filter(item => item.count > 0)
      .map(item => (
        <Item key={item.label}>
          <input
            type="checkbox"
            checked={item.isRefined}
            onClick={event => {
              event.preventDefault()
              refine(item.value)
            }}
          />
          <Label
            isRefined={item.isRefined}
            onClick={event => {
              event.preventDefault()
              refine(item.value)
            }}
          >
            {item.label} ({item.count})
          </Label>
        </Item>
      ))}
  </List>
)

export default SubCategoriesRefinements
