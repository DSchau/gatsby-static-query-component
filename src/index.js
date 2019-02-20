import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

function Meta() {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <h1>{data.site.siteMetadata.title}</h1>
  )
}

export default Meta