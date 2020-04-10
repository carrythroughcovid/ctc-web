import React from 'react'
import { Helmet } from 'react-helmet'

const TITLE = 'Carry Through Covid'

const createTitle = title => (title ? `${TITLE} - ${title}` : `${TITLE}`)

const SEO = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    {<title>{createTitle(title)}</title>}
    {description && <meta name="description" content={description} />}
  </Helmet>
)

export default SEO
