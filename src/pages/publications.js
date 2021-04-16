import React from "react"
import { graphql } from "gatsby"

import Thesis from "../../content/assets/thesis.pdf"

import Layout from "../components/layout"
import Publication from "../components/publication"
import SEO from "../components/seo"

const PublicationsPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Publications " />
      <p class="title"> Publications </p>
      <ul class="publications-list">
        <Publication
          title={"Learning Formality from Japanese-English Parallel Corpora"}
          authors={<span><b>Liam Dugan</b></span>}
          venue={"Master's Thesis"}
          links={<span><a href={Thesis}>(pdf)</a> <a href="https://youtu.be/KoZvpKZ4k60">(video)</a></span>}
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
    </Layout>
  )
}

export default PublicationsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
