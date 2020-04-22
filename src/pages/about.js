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
      <SEO title="About" keywords={[`blog`, `portfolio`, `ronald`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="hello-i-am-ronald">
            Hello! I am Ronald. I take photos here and there.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.scan305.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>This is me</figcaption>
          </figure>
          <h3 id="Vancouver/Montreal">Vancouver/Montreal mainly</h3>
          <p>
            But I do some traveling now and then.
          </p>
          <p>
            Currently I shoot with:
            <ul>
              <li>Meopta Flexaret VI</li>
              <li>Leica IIIc</li>
              <li>Nikon F90x</li>
              <li>Google Pixel 2</li>
              <li>And whatever 35mm point and shoot I've managed to get working again</li>
            </ul> 
            
            If you'd like to get in touch, feel free to shoot a message over to {" "}
            <a href="mailto:contact@rzyang.com?subject=Getting in touch">
              contact@rzyang.com
            </a>{" "}
            and I promise I'll probably read that email. Alternatively, you can use the form that may or may not work below. No guarantees there.
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
    scan305: file(
      relativePath: { eq: "Scan305.jpg" }
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
