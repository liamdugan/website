import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import CV from "../../content/assets/cv.pdf"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const profile = data?.avatar?.childImageSharp?.fixed

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home Page" />
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <div class="tile is-child">
            <p class="title"> About Me </p>
            <p class="subtitle">
              Hi! My name is Liam Dugan. I'm a 2nd year Master's Student
              conducting research in Natural Language Processing in the lab of
              <a href="https://www.cis.upenn.edu/~ccb/"> Chris Callison-Burch</a>.
            </p>
            <p class="subtitle">
              My current research deals with human detection of generated
              text, machine translation, event extraction, and sentence-level
              formality estimation.
            </p>
            <p class="subtitle">
              My long term goal is to use NLP and AI to advance
              the science of language learning!
            </p>
          </div>
          <div class="tile is-child">
            <p class="subtitle">
              Feel free to look me up on
              <a href="https://scholar.google.com/citations?user=ILGf0IIAAAAJ&hl"> Google Scholar</a>,
              Twitter, or take my <a href={CV}>CV</a>.
            </p>
          </div>
        </div>
        <div class="tile">
          {profile && (
            <Image
              fixed={profile}
              alt={"Liam Dugan"}
              className="homepage-pic"
            />
          )}
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child">
          <p class="title"> News </p>
        </div>
        <div class="tile is-child">
          <p class="title"> Recent Blog Posts </p>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            return (
              <article
                key={post.fields.slug}
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
              </article>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 400, height: 400, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
