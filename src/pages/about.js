import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const AboutPage = ({data}) => {
  return(
    <Layout>
      <h1>Anything You've Heard...</h1>
      <p>...about me, consider it wrong, unless it's specified here. I've been creating software for about 10 years, with varying roles. From UX designer, full stack developer, all the way to managin software development project. I highly enjoy this activities because this is the time where I can create something out of nothing (though, the software is still, physically nothing). People can clamor about how digital era is carrying humanity to its new time, but for me, software is a happy medium to create.</p>
      <p>Also, feel free to <Link to='/contact'>contact me</Link> should you feel that we can work together.</p>
    </Layout>
  )
}

export default AboutPage
