import React from 'react'
import Background from '../components/background'
import Main from '../components/main'
import SEO from '../components/seo'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Background>
      <Main />
    </Background>

  </div>
)

export default IndexPage
