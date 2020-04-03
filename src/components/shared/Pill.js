import styled from 'styled-components'

const Pill = styled.span`
  color: white;
  font-weight: bold;
  background-color: ${({ theme }) => theme.colour.teal};
  padding-left: 1rem;
  padding-right: 1rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  border-radius: 90px;
  margin-right: 1rem;
  text-transform: capitalize;
`

export default Pill
