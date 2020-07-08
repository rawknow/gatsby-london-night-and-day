import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/normalize.css"
import "../style/all.scss"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Resume" keywords={[`blog`, `portfolio`, `ronald`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="hello-i-am-ronald">
            Hello! I am Ronald. This is my resume.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.resume.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="Vancouver/Montreal">Vancouver/Montreal mainly</h3>
          <p>
            If you'd like to get in touch, feel free to drop a line below and I'll get back to you.
          </p>
        </div>
        <form name="contact" method="POST" data-netlify="true">
          <p>
             <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
             <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <input type="hidden" name="form-name" value="contact" />
        </form>
        


      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    resume: file(
      relativePath: { eq: "resume.pdf" }
    ) {
      childImageSharp {
        fluid(maxHeight: 5307) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
