import React from 'react'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h2>About This Site</h2>
    <p>
      This site is free space for me to do random things I find interesting.
    </p>
    <p>
      Source code for this website is available on my Github:{' '}
      <a
        href='https://github.com/prozvora/website-v5'
        target='_blank'
        rel='noopener noreferrer'
      >
        prozvora/website-v5
      </a>
    </p>
  </Layout>
)

export default IndexPage
