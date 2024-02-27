import React from 'react'

import Layout from '../components/layout'
import Timer from '../components/timer'
// import SEO from '../components/seo'

const Countdown = () => (
  <Layout>
    {/* <SEO title="Countdown" /> */}
    <h2>How long do I have to wait?</h2>
    <Timer title='Until 2025' endDate='2025-01-01T00:00:00' />
    <Timer
      title='Until The Solar Eclipse covers Rochester, NY'
      endDate='2024-04-08T15:20:00'
    />
  </Layout>
)

export default Countdown
