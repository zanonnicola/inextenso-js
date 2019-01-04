import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Footer from '../components/footer'
import styles from './article.module.css'

class ArticleTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { next, prev } = this.props.pageContext
    return (
      <Layout isWorkPage={true}>
        <Helmet
          title={`${post.frontmatter.title} | In Extenso JS`}
          meta={[
            {
              name: 'description',
              content: `${post.frontmatter.description}`,
            },
          ]}
        />
        <section className="section section--page">
          <div className="wrapper">
            <h1>Helloo!!!</h1>
          </div>
        </section>
        <Footer />
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        description
        link
        }
      }
    }
  }
`
