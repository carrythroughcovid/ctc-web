import React from 'react'
import styled from 'styled-components'

import categories from '../../utils/categoryMappings'

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

  @media (min-width: ${overflowWidth}px) {
    padding-right: ${({ theme }) => theme.containerGutter};
  }
`

const Row = styled.div`
  display: flex;
  /* margin-left: -${tileGutter / 2 / 16}rem;
  margin-right: -${tileGutter / 2 / 16}rem; */
  overflow-x: scroll;
`
const Col = styled.div`
  flex: 1;
  text-align: center;
  /* padding-left: ${tileGutter / 2 / 16}rem; */
  padding-right: ${tileGutter / 16}rem;
  min-width: ${tileMinWidth / 16}rem;

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
  padding: 1rem;
  font-size: 1.125rem;
  line-height: 1.625rem;
`

const CategoryShowcase = () => {
  return (
    <OverflowContainer>
      <Row>
        {categories.map((category, index) => (
          <Col key={index}>
            <CategoryTile colour={category.colour}>
              {category.name}
            </CategoryTile>
          </Col>
        ))}
      </Row>
    </OverflowContainer>
  )
}

export default CategoryShowcase
