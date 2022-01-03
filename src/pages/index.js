import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data


  return (
    <Layout>
      <Hero showHero />
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          author
          category
          date(formatString: "MMMM,Do YYYY")
          readTime
          slug
          title
        }
        id
      }
    }
  }
`

export default IndexPage
