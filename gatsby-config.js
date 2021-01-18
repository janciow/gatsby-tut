/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby tutorial",
    description: "some random description",
    author: "@jondoe",
    data: ["itam 1", "item 2"],
    person: { name: "janek", age: 41 },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `i9ngs8jkd4hg`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `zrgt6FaG3W1_bvLiFGSp4rJaTkEQnils1fKxV_0oZPI`,
      },
    },
  ],
}
