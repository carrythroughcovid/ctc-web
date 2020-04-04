import React from 'react'
import styled from 'styled-components'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Container from '../shared/Container'

const StyledTabs = styled(Tabs)`
  padding-top: 1rem;
`

const StyledTabList = styled(TabList)`
  padding: 0;
  margin: 0;
  height: 3rem;
  border-bottom: 2px solid ${({ theme }) => theme.colour.greySuperLight};
`

const StyledTab = styled(Tab)`
  display: inline-flex;
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 500;
  margin-right: 1rem;
  margin-left: 1rem;
  margin-bottom: -2px;
  height: 100%;
  align-items: center;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colour.greyLight};

  &.react-tabs__tab--selected {
    border-bottom-color: ${({ theme }) => theme.colour.violet};
    color: ${({ theme }) => theme.colour.black};
  }
`

const TabContentWrapper = styled.div`
  background-color: #fdfdfd;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 100%;
`

const DetailsTabs = ({ tabs }) => {
  const { titles, content } = tabs.reduce(
    (acc, val) => {
      acc.titles.push(val.title)
      acc.content.push(val.content)

      return acc
    },
    { titles: [], content: [] }
  )

  return (
    <StyledTabs>
      <StyledTabList>
        <Container style={{ height: '100%' }}>
          {titles.map((title, index) => (
            <StyledTab key={index}>{title}</StyledTab>
          ))}
          {/* <StyledTab>Updates</StyledTab>
          <StyledTab>About Us</StyledTab> */}
        </Container>
      </StyledTabList>

      <TabContentWrapper>
        <Container>
          {/* <TabPanel>Any content 1</TabPanel>
          <TabPanel>Any content 2</TabPanel> */}
          {content.map((content, index) => (
            <TabPanel key={index}>{content()}</TabPanel>
          ))}
        </Container>
      </TabContentWrapper>
    </StyledTabs>
  )
}

export default DetailsTabs
