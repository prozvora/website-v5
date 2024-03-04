import React from 'react'

import Layout from '../components/layout'
import RubiksSection from '../components/rubiks_section'
import { ollPatterns } from '../../static/rubiks_oll_data'

import '../css/rubiks.css'

const Rubiks = () => (
  <Layout>
    <h2>Rubiks Cube OLL Algorithms</h2>
    <p>
      Click a tile, or tab to a tile and press any key, to toggle showing its
      algorithm.
    </p>
    <h3>Jump To:</h3>
    <div className='jumpTo'>
      {ollPatterns.map((pattern) => (
        <div className='jumpToHeading'>{pattern.heading}</div>
      ))}
    </div>
    {ollPatterns.map((pattern) => (
      <>
        <h3>{pattern.heading}</h3>
        <RubiksSection data={pattern.patterns} />
      </>
    ))}
  </Layout>
)

export default Rubiks
