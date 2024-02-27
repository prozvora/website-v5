import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import '../css/sitenav.css'

const NavLink = ({ children }) => <div className='navLink'>{children}</div>

NavLink.propTypes = {
  children: PropTypes.node,
}

const Navbar = ({ children }) => (
  <div className='navbar'>
    {React.Children.map(children, (child) => (
      <NavLink>{React.cloneElement(child)}</NavLink>
    ))}
  </div>
)

Navbar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}

const SiteNav = () => (
  <Navbar>
    <Link to='/'>Home</Link>
    <Link to='/about/'>About</Link>
    <Link to='/countdown/'>Countdown</Link>
    <Link to='/recipes/'>Recipes</Link>
    <Link to='/resume/'>Resume</Link>
    <Link to='/rubiks/'>Rubiks OLL</Link>
  </Navbar>
)

export default SiteNav
