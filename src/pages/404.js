import React from 'react'

import SEO from '../components/seo'

import styles from './404.module.scss'

const NotFoundPage = () => (
  <div className={styles.notFound}>
    <SEO title="404" />
    <h2>404</h2>
    <p>We cannot find the page you're looking for.</p>
  </div>
)

export default NotFoundPage
