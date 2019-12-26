import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <div>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div
              key={frontmatter.path}
              style={{marginBottom: '2rem'}}
            >
              <h2>
                <Link to={frontmatter.path}>
                  {frontmatter.title}
                </Link>
              </h2>
              <p className="subheading">
                {frontmatter.date}
              </p>
              <p>
                {frontmatter.excerpt}
              </p>
            </div>
          )
        })}

        {/*<div>
          <Link to='/tags'>Browse by Tag</Link>
        </div> */}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomepageQuery {
    allMarkdownRemark(
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
            excerpt
          }
        }
      }
    } 
  }
`

export default IndexPage 
