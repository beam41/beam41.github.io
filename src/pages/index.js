import React from 'react'
import SEO from '../components/seo'
import Title from '../components/title'
import styles from './index.module.scss'

function IndexPage() {
  return (
    <div className={styles.home}>
      <SEO title="Home" />
      <Title />
    </div>
  )
}

export default IndexPage
