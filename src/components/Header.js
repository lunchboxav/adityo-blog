import React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'
import vCover from '../../assets/img/cover-vertical.png'
import hCover from '../../assets/img/cover-horizontal.png'

const HeaderWrapper = styled.div`
  background: #1ece6f;
  display: flex;
  width: 240px;
  height: 100vh;
  background: url(${vCover});
  background-position: center;

  @media (max-width: 1200px) {
    margin-bottom: 1.45rem;
    height: 100%;
    width: 100vw;
    background: url(${hCover});
    background-position: center;

  }

`

const Headline = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
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