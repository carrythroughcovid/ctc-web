import React from 'react'
import styled from 'styled-components'

import categories from '../../utils/categoryMappings'
import CategoryIcon from '../shared/CategoryIcon'

const tileMinWidth = 168
const tileGutter = 16
const categoriesCount = categories.length
const overflowWidth =
  categoriesCount * tileMinWidth + (categoriesCount - 1) * tileGutter

const OverflowContainer = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  margin: 0 auto;
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
  overflow-x: scroll;
`

const Row = styled.div`
  display: flex;

  align-items: stretch;
`
const Col = styled.div`
  flex: 1;
  /* text-align: center; */
  padding-right: ${tileGutter / 16}rem;
  min-width: ${tileMinWidth / 16}rem;
  min-height: ${tileMinWidth / 16}rem;

  @media (min-width: ${overflowWidth}px) {
    &:last-of-type {
      padding-right: 0;
    }
  }
`

const CategoryTile = styled.div`
  background-color: ${props => props.colour};
  color: white;
  border-radius: 0.5rem;
  padding: 1.5rem 1.5rem 1rem;
  font-size: 1.125rem;
  height: 100%;
  line-height: 1.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
`

const CategoryShowcase = () => {
  return (
    <OverflowContainer>
      <Row>
        {categories.map((category, index) => (
          <Col key={index}>
            <CategoryTile colour={category.colour}>
              <CategoryIcon icon={category.icon} />
              {category.name}
            </CategoryTile>
          </Col>
        ))}
      </Row>
    </OverflowContainer>
  )
}

export default CategoryShowcase
