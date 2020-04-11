import React from 'react'
import styled from 'styled-components'
import { FiImage } from 'react-icons/fi'

const ImageWrapper = styled.div`
  background-color: #eef0f8;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoImage = () => (
  <ImageWrapper>
    <FiImage />
  </ImageWrapper>
)

export default NoImage
