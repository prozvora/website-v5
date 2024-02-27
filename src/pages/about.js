import React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

import '../css/about.css'

const About = () => (
  <Layout>
    <h2>About Me</h2>
    <StaticImage
      src='../images/proz_pic.jpeg'
      alt='Me in Iceland'
      placeholder='blurred'
      layout='constrained'
      width={600}
      height={600}
    />
    <p>My name is Pavel (pronounced "Pah-vl").</p>
    <p>
      I'm a software engineer by trade. In my free time, I train Brazilian
      jiu-jitsu, play chess (mostly blitz), and practice solving the Rubik's
      cube, among other things.
    </p>
    <p>
      That stuff can sometimes be found on my{' '}
      <a
        href='https://www.instagram.com/pavelroz/'
        target='_blank'
        rel='noopener noreferrer'
      >
        Instagram
      </a>
      .
    </p>
  </Layout>
)

export default About
