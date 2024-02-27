import React from 'react'
import Layout from '../components/layout'
// import SEO from '../components/seo'

const Resume = () => (
  <Layout>
    {/* <SEO title="Resume" /> */}
    <h2>Resume</h2>
    <p>My current experience, as of February 2024</p>
    <a
      href='/assets/Pavel_Rozvora_Resume_2024.pdf'
      target='_blank'
      rel='noopener noreferrer'
    >
      {' '}
      Resume [PDF]
    </a>
  </Layout>
)

export default Resume
