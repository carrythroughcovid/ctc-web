import styled from 'styled-components'
import Imgix from 'react-imgix'

import media from '../../utils/media'

export const BusinessBlock = styled.div`
  @media (min-width: ${({ theme }) => theme.maxWidthSmall}) {
    display: grid;
    grid-template-columns: 1fr ${({ theme }) => theme.maxWidthSmall} 1fr;
  }

  @media (min-width: 1440px) {
    grid-template-columns: 1fr 11.25rem ${({ theme }) => theme.maxWidthSmall} 11.25rem 1fr;
  }
`
export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;

  ${media.md`
    flex-direction: row;
  `}

  @media (min-width: ${({ theme }) => theme.maxWidthSmall}) {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  @media (min-width: 1440px) {
    grid-column-start: 3;
    grid-column-end: 5;
  }
`

export const BusinessInfo = styled.div`
  padding-left: ${({ theme }) => theme.containerGutter};
  padding-right: ${({ theme }) => theme.containerGutter};
  flex-direction: column;
  justify-content: center;
  padding-top: 2.25rem;
  padding-bottom: 1rem;

  ${media.md`
    width: 20.75rem;
    flex-basis: 20.75rem;
    display: flex;
    flex-shrink: 0;
    padding-top: 0;
    padding-bottom: 0;
  `}
`
export const BusinessName = styled.h1`
  margin: 0;
  font-size: 1.75rem;
  line-height: 2rem;
`
export const BusinessLocation = styled.div`
  padding-top: 0.75rem;
  text-transform: capitalize;
`
export const ContactDetailsBlock = styled.div`
  padding-top: 2.5rem;
`

export const ContactLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 1.5rem;

  > svg {
    color: ${({ theme }) => theme.colour.violet};
    margin-right: 0.875rem;
    flex-shrink: 0;
  }
`

export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colour.grey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const BusinessImageWrapper = styled.div`
  height: 15rem;
  flex: 1;
  ${media.md`
    height: 28.5rem;
  `}
`

export const BusinessImage = styled(Imgix)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  background-color: ${({ theme }) => theme.colour.black};
`

export const DetailsBlock = styled.div`
  background-color: ${({ theme }) => theme.colour.greySuperLight};
  padding-top: 1.75rem;
  padding-bottom: 4rem;

  ${media.md`
    padding-top: 4.25rem;
  `}
`
export const DetailsWrapper = styled.div`
  ${media.md`
    display: flex;
  `}
`
export const ServicesDetails = styled.div`
  background-color: white;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  word-wrap: break-word;

  padding: 2.5rem 1.75rem;

  ${media.md`
    flex-basis: 23.75rem;
    width: 23.75rem;
  `}
`
export const ServiceCallout = styled.div`
  color: ${({ theme }) => theme.colour.accent2};
  font-size: 1.5rem;
  line-height: 2rem;
  padding-bottom: 1.125rem;
`
export const ServiceInfo = styled.div`
  padding-bottom: 1.125rem;
  line-height: 1.5rem;
`

export const OfferingsTitle = styled.div`
  font-weight: bold;
  padding-bottom: 2rem;
`
export const OfferingWrapper = styled.div`
  padding-bottom: 0.5rem;
`

export const Offerings = styled.div`
  padding-bottom: 1rem;

  &:last-of-type {
    padding-bottom: 0;
  }
`
export const NewProducts = styled.div`
  padding-top: 1rem;
  line-height: 1.5rem;
`

export const AboutDetails = styled.div`
  flex: 1;
  padding-top: 3rem;

  ${media.md`
  padding-left: 3.75rem;
  padding-top: 5rem;
  `}
`
export const Heading = styled.div`
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colour.brand};
  font-family: ${({ theme }) => theme.font.alt};

  padding-bottom: 1.5rem;
`

export const Spacer = styled.div`
  width: 5.75rem;
  height: 3px;
  background-color: ${({ theme }) => theme.colour.brand};
  margin-bottom: 2rem;
`

export const AboutContent = styled.div`
  line-height: 1.5rem;
  padding-bottom: 2rem;
`
