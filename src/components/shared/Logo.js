import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'
import LogoDark from '../../assets/logoDark.svg'
import LogoLight from '../../assets/logoLight.svg'
import LogoLightSmall from '../../assets/logoLightSmall.svg'

const DesktopLogo = styled.div`
  display: none;

  ${media.sm`
    display: block;
  `}
`
const MobileLogo = styled.div`
  display: block;

  ${media.sm`
    display: none;
  `}
`

const Logo = ({ light }) => (
  <>
    <DesktopLogo>{light ? <LogoDark /> : <LogoLight />}</DesktopLogo>
    <MobileLogo>
      <LogoLightSmall />
    </MobileLogo>
  </>
)

export default Logo
