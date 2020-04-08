import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    {title && <title>Carry Through COVID - {title}</title>}
    {description && <meta name="description" content={description} />}
  </Helmet>
)

export default SEO
