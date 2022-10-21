import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './Home'
import About from './About'


function RouteSwitch() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/' element={<About/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default RouteSwitch