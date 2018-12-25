import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import vCover from '../../assets/img/cover-vertical.png'
import hCover from '../../assets/img/cover-horizontal.png'

const HeaderWrapper = styled.div`
  height: 100vh;
  background: url(${vCover});
  background-position: center;
  width: 25%;
  max-width: 320px;
  padding: 0 15px;
  @media (max-width: 800px) {
    
  }
  @media (max-width: 600px) {
    height: 100%;
    background: url(${hCover});
    background-position: center;
    min-width: 100%;
    padding: 0;
  }
`

const Headline = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin-bottom: 0;
    text-align: center;
  }
  p {
    margin-top: 0;
    color: #ffffff;
    text-align: center;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle, siteDescription }) => (
  <HeaderWrapper>
    <Headline>
      <h1>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </h1>
      <p>{siteDescription}</p>
    </Headline>
  </HeaderWrapper>
)

/*
const TitleAndDescription = ({data}) => {
  const title = data.site.siteMetadata.title
  const description = data.site.siteMetadata.description

  return (
    <div>
      <HeaderWrapper>
        <Headline>
          <h1>{title}</h1>
          <p>
            {description}
          </p>
        </Headline>
      </HeaderWrapper>
    </div>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => <TitleAndDescription data={data} />}
    />
  )
}
*/

export default Header