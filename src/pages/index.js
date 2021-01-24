import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import CV from "../../content/assets/cv.pdf"
import Thesis from "../../content/assets/thesis.pdf"

import Bio from "../components/bio"
import NewsEntry from "../components/newsentry"
import Publication from "../components/publication"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Links from "../components/links"

const HomePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const profile = data?.avatar?.childImageSharp?.fixed

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home " />
      <div class="tile is-ancestor is-vertical">
        <div class="tile is-parent">
          <div class="tile is-child">
            <p class="title"> About Me </p>
            <div class="about-text">
              <p class="subtitle">
                Hi! My name is Liam Dugan. I'm a 2nd year Master's Student at the <a href="https://upenn.edu"> University of Pennsylvania </a>
                doing NLP research in the lab of
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
              <p class="subtitle">
                Feel free to look me up on
                <a href="https://scholar.google.com/citations?user=ILGf0IIAAAAJ&hl"> Google Scholar</a> or take my <a href={CV}>CV</a>.
              </p>
            </div>
          </div>
          <div class="tile is-child is-parent is-vertical">
            <div class="tile is-child homepage-pic-div">
              {profile && (
                <Image
                  fixed={profile}
                  alt={"Liam Dugan"}
                  className="homepage-pic"
                />
              )}
            </div>
            <div class="tile is-child">
              <Links />
            </div>
          </div>
        </div>

        <div class="tile is-parent is-vertical">
          <div class="tile is-child">
            <p class="title"> News </p>
            <table class="news">
              <NewsEntry date={"December 2020"} text={"I graduated from University of Pennsylvania with a Master's in Robotics!"}/>
              <NewsEntry date={"December 2020"} text={"I published my Master's Thesis \"Learning Formality from Japanese-English Parallel Corpora\""}/>
              <NewsEntry date={"September 2020"} text={"Our Demo Paper \"RoFT: A Tool for Evaluating Human Detection of Machine Generated Text\" was accepted to EMNLP 2020!"}/>
              <NewsEntry date={"May 2020"} text={"I graduated from the University of Pennsylvania with a Bachelor's in Computer Engineering and East Asian Studies (Japanese)!"}/>
            </table>
          </div>
          <div class="tile is-child">
            <p class="title"> Publications </p>
            <ul class="publications-list">
              <Publication
                title={"Learning Formality from Japanese-English Parallel Corpora"}
                authors={<span><b>Liam Dugan</b>, Chris Callison-Burch, C.J. Taylor</span>}
                venue={"Master's Thesis"}
                links={<span><a href={Thesis}>(pdf)</a></span>}
              />
              <br/>
              <Publication
                title={"RoFT: A Tool for Evaluating Human Detection of Machine Generated Text"}
                authors={<span><b>Liam Dugan*</b>, Daphne Ippolito*, Arun Kirubarajan*, Chris Callison-Burch</span>}
                venue={"EMNLP 2020 (Demo Track)"}
                links={<span><a href="https://arxiv.org/pdf/2010.03070">(pdf)</a> <a href="https://github.com/kirubarajan/roft">(code)</a> <a href="http://roft.io/">(demo)</a></span>}
              />
              <br/>
              <Publication
                title={"Cloud Chaser: Real Time Deep Learning Computer Vision on Low Computing Power Devices"}
                authors={<span>Zhengyi Luo, Austin Small, <b>Liam Dugan</b>, Stephen Lane</span>}
                venue={"ICMV 2018"}
                links={<span><a href="https://arxiv.org/pdf/1810.01069">(pdf)</a> <a href="https://github.com/ZhengyiLuo/Cloud-Chaser">(code)</a> </span>}
              />
            </ul>
          </div>
          <div class="tile is-child">
            <p class="title"> Blog </p>
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
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 300, height: 300, quality: 95) {
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
