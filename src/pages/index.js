import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Video from '../components/video'
import Footer from '../components/footer'

const IndexPage = ({ data }) => (
  <Layout>
    <Video />
    <section className="section">
      <div className="wrapper">
        <h1 className="primary">meet the artist</h1>
        <h2 className="secondary">a brief story</h2>
       </div>
    </section>
    <Footer />
  </Layout>
)

export default IndexPage
