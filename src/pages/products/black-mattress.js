import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => {
return <div>
  <h1>{data.product.title}</h1>
  <p>{data.product.price}</p>
</div>

}

export const query = graphql`
  {
    product: contentfulProduct(slug: {eq: "black-mattress"}) {
      title
      price
    }
  }
`

export default ComponentName