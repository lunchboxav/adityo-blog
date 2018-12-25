import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import { GlobalStyle } from '../theme/globalStyle'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-around;
  height: 100%;
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Personal Website of Adityo Pratomo' },
            { name: 'keywords', content: 'tech, personal, writing, design' }
          ]}>
          <html lang="en" />
        </Helmet>
        <MainContainer>
          <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
          <ContentWrapper>{children}</ContentWrapper>
        </MainContainer>
      </>
    )}
  />
)

export default Layout