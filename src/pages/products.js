import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import styles from "../components/blog.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title} <span>{product.price}</span>
              </h3>
              <Link to={`/products/${product.slug}`}>go to</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        price
        title
        slug
        id
      }
    }
  }
`

export default ComponentName
