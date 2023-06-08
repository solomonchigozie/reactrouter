import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <hr />
    </div>
  )
}

export default Nav