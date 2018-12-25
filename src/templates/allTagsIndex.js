import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout";

const AllTagsTemplate = ({data, pageContext}) => {
  const { tags } = pageContext
  return (
    <Layout>
      <div>
        <ul>
          {tags.map((tagName, index) => {
            return (
              <li key={index}>
                <Link to={`/tags/${tagName}`}>
                  {tagName}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default AllTagsTemplate