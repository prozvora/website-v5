import React, { useState } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import '../css/rubiks.css'
import CubeTopGrid from './rubiks_top_view'

const RubiksSection = ({ data }) => {
  return (
    <div className='algSection'>
      {data.map((algorithm) => (
        <RubiksAlgorithm key={algorithm.algorithm} {...algorithm} />
      ))}
    </div>
  )
}

RubiksSection.propTypes = {
  data: PropTypes.array.isRequired,
}

const RubiksAlgorithm = ({ algorithm, layout }) => {
  const [visible, setVisible] = useState(true)
  const handleClick = () => setVisible(!visible)
  const handleKeyPress = (e) => {
    // prevent page scroll on spacebar click
    if (e.key === ' ') {
      e.preventDefault()
    }
    // prevent toggle on navigation
    if (e.key !== 'Tab' && e.key !== 'Shift') {
      setVisible(!visible)
    }
  }

  return (
    <div
      className='algDescription'
      onClick={handleClick}
      onKeyDown={handleKeyPress}
      role='button'
      tabIndex={0}
    >
      <div className='algImgCont'>
        <CubeTopGrid layout={layout} />
      </div>
      <div className={cx('algMoves', { hidden: !visible })}>{algorithm}</div>
    </div>
  )
}
RubiksAlgorithm.propTypes = {
  algorithm: PropTypes.string.isRequired,
  layout: PropTypes.array,
}

export default RubiksSection
