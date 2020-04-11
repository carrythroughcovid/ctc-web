import React from 'react'
import styled from 'styled-components'
import { FiImage } from 'react-icons/fi'

const ImageWrapper = styled.div`
  background-color: #eef0f8;
  height: ${props => props.height || '100%'};
  width: ${props => props.width || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled(FiImage)`
  color: white;
`

const NoImage = ({ ...props }) => (
  <ImageWrapper {...props}>
    <Icon size="4rem" />
  </ImageWrapper>
)

export default NoImage
