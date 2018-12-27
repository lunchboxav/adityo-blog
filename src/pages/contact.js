import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const ContactPage = ({data}) => {
  return(
    <Layout>
      <h1>Let's Talk</h1>
      <p>Though one of these days, I'm looking forward to quit, but for now, social media is the best place to contact me. <Link to='http:/www.linkedin.com/in/apratomo'>LinkedIn</Link> or <Link to='http:/www.twitter.com/kotakmakan'>@kotakmakan</Link> work best for the time being.</p>
      <p>Also, feel free to <Link to='/'>read more of my thoughts</Link>.</p>
    </Layout>
  )
}

export default ContactPage