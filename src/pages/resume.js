import React from 'react'
import Layout from '../components/layout'

const Resume = () => (
  <Layout>
    <h2>Resume</h2>
    <p>My current experience, as of February 2024</p>

    <p>
      <a
        href='/assets/Pavel_Rozvora_Resume_2024.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        {' '}
        Resume [PDF]
      </a>
    </p>
    <p>
      <a
        href='https://github.com/prozvora'
        target='_blank'
        rel='noopener noreferrer'
      >
        GitHub
      </a>
    </p>
    <p>
      <a
        href='https://www.linkedin.com/in/pavel-rozvora/'
        target='_blank'
        rel='noopener noreferrer'
      >
        LinkedIn
      </a>
    </p>
  </Layout>
)

export default Resume
