import React from 'react'
import { Row, Col } from 'react-flexa'
import { Link } from 'gatsby'
import { FiArrowRight } from 'react-icons/fi'

import SectionTitle from './SectionTitle'
import BusinessCard from '../shared/BusinessCard'
import styled from 'styled-components'

const Section = styled.div`
  padding-top: 2rem;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.25rem;
`

const ViewAllLink = styled(Link)`
  color: ${({ theme }) => theme.colour.brand};
  text-decoration: none;
  display: flex;
  align-items: center;
`

const Icon = styled.span`
  display: inline-flex;
  padding-left: 1rem;
`

const CategorySection = ({ categoryInfo, results }) => {
  const { name, slug } = categoryInfo
  return (
    <Section>
      <TitleWrapper>
        <SectionTitle>{name}</SectionTitle>
        <ViewAllLink to={`/category/${slug}`}>
          View all{' '}
          <Icon>
            <FiArrowRight size="1.5rem" />
          </Icon>
        </ViewAllLink>
      </TitleWrapper>
      <Row>
        {results.map(
          (result, index) =>
            console.log(result.node) || (
              <Col display="flex" xs={12} sm={6} lg={3} key={index}>
                <BusinessCard listing={result.node} />
              </Col>
            )
        )}
      </Row>
    </Section>
  )
}

export default CategorySection
