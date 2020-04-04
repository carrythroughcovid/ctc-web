import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import media from '../../utils/media'

const HorizontalScroll = styled.div`
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  padding: 30px 0;
  display: flex;
  margin: 0 auto;
  width: 100%;

  ${media.sm`
    width: 80%;
  `}
`

const Carousel = ({ cards }) => {
  return (
    <HorizontalScroll>
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            suburbDetails={card.suburbDetails}
            image={card.image}
          ></Card>
        )
      })}
    </HorizontalScroll>
  )
}

export default Carousel
