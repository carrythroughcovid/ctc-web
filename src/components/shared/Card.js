import React from 'react'
import styled from 'styled-components'
import media from '../../utils/media'
import { Link } from 'gatsby'

const CardContainer = styled(Link)`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  margin-left: 1rem;
  border-radius: 1rem;
  display: block;
  width: 80%;
  position: relative;
  max-width: 16rem;

  ${media.sm`
  height: 13rem;
  max-width: 18rem;
`}

  &:hover {
    text-decoration: none;
  }
`

const CardDetails = styled.section`
  padding: 0.5rem;
`

const CardImage = styled.img`
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`

const CardImageContainer = styled.section``

const IconCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  border: 1px solid white;
  margin: 0 auto;
  left: 50%;
  margin-left: -1.5rem;
  top: 5rem;
  margin-top: -1.5rem;
`

const IconImage = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: cover;
`

const Title = styled.div`
  text-align: center;
  font-style: ${({ theme }) => theme.font.base};
  color: #1d1f24;
  margin-top: 0.5rem;
`

const SuburbDetails = styled.div`
  color: #1d1f24;
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
`

const Description = styled.div`
  color: #1d1f24;
  opacity: 0.7;
  font-size: 0.75rem;
  word-wrap: break-word;
  white-space: pre-wrap;
`

const Card = ({ image, icon, title, suburbDetails, description }) => {
  return (
    <CardContainer>
      <IconCircle>
        <IconImage src={icon}></IconImage>
      </IconCircle>
      <CardImageContainer>
        <CardImage src={image} />
      </CardImageContainer>
      <CardDetails>
        <Title>{title}</Title>
        <SuburbDetails style={{ overflow: 'hidden' }}>
          {suburbDetails}
        </SuburbDetails>
        <Description>{description}</Description>
      </CardDetails>
    </CardContainer>
  )
}

export default Card
