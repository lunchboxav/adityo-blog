import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout';

const Template = ({data, pageContext}) => {
  const {next, prev} = pageContext

  const {markdownRemark} = data
  const title = markdownRemark.frontmatter.title
  const html = markdownRemark.html
  return (
    <Layout>
      <h1>{title}</h1>
      <div className='blogpost'
        dangerouslySetInnerHTML={{__html: html}} style={{fontFamily:'avenir'}}
      />

      <div style={{marginBottom: '1rem'}}>
        {next &&
          <Link to={next.frontmatter.path}>
            Next: {`${next.frontmatter.title}`}
          </Link>
        }
      </div>
      <div>
        {prev &&
          <Link to={prev.frontmatter.path}>
            Prev: {`${prev.frontmatter.title}`}
          </Link>
        }
      </div>
  </Layout>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug} }) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default Template