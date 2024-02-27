import React from 'react'

import Layout from '../components/layout'
import RubiksSection from '../components/rubiks_section'
import {
  dot,
  line,
  cross,
  fourCorners,
  square,
  bolt,
  fish,
  wishbone,
  smallL,
  bigL,
  c,
  p,
  t,
  w,
  z,
} from '../../static/rubiks_oll_data'

import '../css/rubiks.css'

const Rubiks = () => (
  <Layout>
    <h2>Rubiks Cube OLL Algorithms</h2>
    <p>
      Click a tile, or tab to a tile and press any key, to toggle showing its
      algorithm.
    </p>
    <h3>Dot</h3>
    <RubiksSection data={dot} />
    <h3>Line</h3>
    <RubiksSection data={line} />
    <h3>Cross</h3>
    <RubiksSection data={cross} />
    <h3>4 corners</h3>
    <RubiksSection data={fourCorners} />
    <h3>Square</h3>
    <RubiksSection data={square} />
    <h3>Small Bolt</h3>
    <RubiksSection data={bolt} />
    <h3>Fish</h3>
    <RubiksSection data={fish} />
    <h3>Wishbone</h3>
    <RubiksSection data={wishbone} />
    <h3>Small L</h3>
    <RubiksSection data={smallL} />
    <h3>C</h3>
    <RubiksSection data={c} />
    <h3>L</h3>
    <RubiksSection data={bigL} />
    <h3>P</h3>
    <RubiksSection data={p} />
    <h3>T</h3>
    <RubiksSection data={t} />
    <h3>W</h3>
    <RubiksSection data={w} />
    <h3>Z</h3>
    <RubiksSection data={z} />
  </Layout>
)

export default Rubiks
