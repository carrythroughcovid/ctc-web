import styled from 'styled-components'

const Spinner = styled.span`
  width: 4rem;
  height: 4rem;
  border-top-color: ${({ theme }) => theme.colour.primary};
  border-left-color: ${({ theme }) => theme.colour.purple};

  animation: spinner 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 6px;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: middle;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
