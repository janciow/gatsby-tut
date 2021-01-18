import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      info: {
        title,
        person: { name, age },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      {/* <h1>name: {data.site.siteMetadata.person.name}</h1> */}
      {/* <h1>age: {data.site.siteMetadata.person.age}</h1> */}
      <h1>title: {title}</h1>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
    </div>
  )
}

export default Header
