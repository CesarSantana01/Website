import React from 'react'
import {Link} from 'react-router-dom'
require('../css/Nav.css')

function Nav() {
  return (
    <nav>
        <Link
        style={{
            color: 'white'
        }}
         to={'/'}>Logo</Link>


        <div 
        style={{
            display: 'flex',
            gap: '2vh',
            color: 'white'
        }}>
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </nav>
  )
}

export default Nav