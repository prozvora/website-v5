import React from 'react'

import Layout from '../components/layout'
// import SEO from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

import '../css/about.css'

const About = () => (
  <Layout>
    {/* <SEO title="About" /> */}
    <h2>About Me</h2>
    <StaticImage
      src='../images/proz_pic.jpeg'
      alt='Me in Iceland'
      placeholder='blurred'
      layout='fixed'
      width={600}
      height={600}
    />
    <p>My name is Pavel (pronounced "Pah-vl").</p>
    <p>
      I'm a software engineer by trade. In my free time, I train Brazilian
      jiu-jitsu, play chess (mostly blitz), and practice solving the Rubik's
      cube, among other things.
    </p>
  </Layout>
)

export default About
