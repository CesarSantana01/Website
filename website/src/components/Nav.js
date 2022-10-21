import React from 'react'
import CSlogo from './img/CSlogo.jpeg'

import {Link} from 'react-router-dom'
require('../css/Nav.css')

function Nav() {

  return (
    <nav>
        <Link
        style={{
            color: 'white'
        }}
         to={'/website'}><img width={'60px'} height={'30px'} src={CSlogo} alt=''></img></Link>


        <div 
        style={{
            display: 'flex',
            gap: '2vh',
            color: 'white'
        }}>
            <Link to={'/website'}>Home</Link>
            <Link to={'/about'}>About</Link>
        </div>
    </nav>
  )
}

export default Nav