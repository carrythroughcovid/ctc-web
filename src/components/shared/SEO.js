import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Carry Through Covid'

const createTitle = title => (title ? `${TITLE} - ${title}` : `${TITLE}`)

const SEO = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    {<title>{createTitle(title)}</title>}
    {description && <meta name="description" content={description} />}
    <meta
      name="og:image"
      content="https://carrythroughcovid.s3-ap-southeast-2.amazonaws.com/ctc_facebook3.png"
    />
  </Helmet>
)

export default SEO
