import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import React from 'react'
import styles from './bg.module.scss'

const Background = ({ children }) => {
  const query = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "potw2036a.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imageData = query.file.childImageSharp.fluid
  return (
    <BackgroundImage Tag="section" className={styles.bg} fluid={imageData}>
      {children}
      <section className={styles.imgCredit}>
        <h2>
          <a href="https://www.nasa.gov/image-feature/goddard/2020/hubble-stows-a-pocketful-of-stars">
            Hubble Stows a Pocketful of Stars
          </a>
        </h2>
        <p>
          Image by <a href="https://www.nasa.gov/">NASA</a>
        </p>
      </section>
    </BackgroundImage>
  )
}

export default Background
