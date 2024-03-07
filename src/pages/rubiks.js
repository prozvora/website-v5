import React, { Fragment } from 'react'

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
    <h3>Jump To Section:</h3>
    <div className='jumpTo'>
      {ollPatterns.map((pattern) => (
        <div key={pattern.heading} className='jumpToHeading'>
          <a href={`#${pattern.heading}`}>{pattern.heading}</a>
        </div>
      ))}
    </div>
    {ollPatterns.map((pattern) => (
      <Fragment key={pattern.heading}>
        {/* add ref for jumping to heading */}
        <h3 id={pattern.heading}>{pattern.heading}</h3>
        <RubiksSection data={pattern.patterns} />
      </Fragment>
    ))}
  </Layout>
)

export default Rubiks
