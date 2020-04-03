import React from 'react'
import styled from 'styled-components'

const Circle = styled.div`
  display: flex;
  height: 3.75rem;
  width: 3.75rem;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colour.greySuperLight};
  border: 1px solid white;
`

const BusinessTypeIcon = () => {
  return <Circle>icon</Circle>
}

export default BusinessTypeIcon
