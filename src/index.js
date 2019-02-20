import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function Meta() {
  const data = useStaticQuery(query)

  return (
    <h1>{data.site.siteMetadata.title}</h1>
  )
}

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Meta