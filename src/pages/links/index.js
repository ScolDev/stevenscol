import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from '../../components/layout'
import Container from '../../components/container'
import Seo from '../../components/seo'
import Hero from '../../components/hero'
import Avatar from '../../components/avatar'
import Icon from '../../components/icon'
import PostList from '../../components/post-list'

import './index.sass'

const LinksPage = ({ data, pageContext }) => {
  const { siteMetadata} = data.site
  const { childImageSharp } = data.profilePhoto

  return (
    <>
      <Seo title='Links' />
      <Layout noHeader="true">
        <Container>
        <main className="Links">
          <section className="Links-content">
            <header className="Links-profile">
              <article  className="Links-avatar">
                <Avatar></Avatar>
              </article>
              <p>{ siteMetadata.nickname }</p>
            </header>
            <section className="Links-content Section">
              {
                siteMetadata.social.map(social => {
                  return (
                  <Link className="Links-button white-box" to={ social.url }>
                    <Icon icon={ social.name } />
                    <span>
                      { social.name }
                    </span>
                  </Link>
                )
                })
              }
            </section>
          </section>
        </main>
        </Container>
      </Layout>
    </>
  )
}

export default LinksPage

export const pageQuery = graphql`{
  profilePhoto: file(relativePath: {eq: "images/me.png"}) {
    childImageSharp {
      gatsbyImageData(width: 400, layout: CONSTRAINED)
    }
  }
  site {
    siteMetadata {
      title
      nickname
      author
      social {
        name
        url
      }
      blogPostPrefixPath
      blogPostsPaginatePrefixPath
    }
  }
}`
