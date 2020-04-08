import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description }) => (
  <Helmet>
    <meta charSet="utf-8" />
    {title && <title>{title}</title>}
    {description && <meta name="description" content={content} />}
  </Helmet>
)

export default SEO
