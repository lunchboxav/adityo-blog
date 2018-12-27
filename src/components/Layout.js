import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './Header'
import { GlobalStyle } from '../theme/globalStyle'

const MainContainer = styled.div`
  padding: 0;
  margin: 0;
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }
`

const ContentWrapper = styled.div`
  margin: 0 auto;
  flex: 2;
  padding: 0px 1.875rem 1.45rem;
  padding-top: 10px;
  background-color: #e7fff2;
  margin: 80px;

  @media (max-width: 1024px) {
    margin: 50px;
  }

  @media (max-width: 800px) {
    margin: 0;
  }

  a {
    text-decoration: none;
    font-style: normal;
  }
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
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400i,700,700i,900|Raleway:300i,400,400i" rel="stylesheet"/>
        </Helmet>
        <MainContainer>
          <Header siteTitle={data.site.siteMetadata.title} siteDescription={data.site.siteMetadata.description} />
          <ContentWrapper>
              {children}
          </ContentWrapper>
        </MainContainer>
      </>
    )}
  />
)

export default Layout