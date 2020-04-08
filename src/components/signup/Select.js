import React from 'react'
import { Select as GrommetSelect, ThemeContext } from 'grommet'
import theme from '../../styles/theme'

const { colour } = theme

const Select = props => (
  <ThemeContext.Extend
    value={{
      select: { icons: { color: colour.violet } },
      global: {
        control: { border: { color: colour.greyLight, width: '0.75px' } },
        focus: { border: { color: 'black' }, boxShadow: null },
      },
    }}
  >
    <GrommetSelect {...props} />
  </ThemeContext.Extend>
)

export default Select
