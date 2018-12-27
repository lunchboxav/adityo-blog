import React from "react"
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
// import Header from '../components/Header'
// import { GlobalStyle } from "../theme/globalStyle";

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
              style={{marginBottom: '1rem'}}
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

/*
const Layout = ({data}) => {
  const { edges } = data.allMarkdownRemark
  return (
    <div>
      <GlobalStyle />
      <Header />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {edges.map(edge => {
          const {frontmatter} = edge.node
          return (
            <div
              key={frontmatter.path}
              style={{marginBottom: '1rem'}}
            >
              <Link to={frontmatter.path}>
                {frontmatter.title}
              </Link>
            </div>
          )
        })}

        <div>
          <Link to='/tags'>Browse by Tag</Link>
        </div>
      </div>
    </div>
  )
} 
*/

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