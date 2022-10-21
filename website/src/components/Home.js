import React, {useEffect} from 'react'
import Contact from './HomeSections/Contact'
import Projects from './HomeSections/Projects'
import TechStacks from './HomeSections/TechStacks'

require('../css/Home.css')

function Home() {

  return (
    <container className='flex'>
        <main className='mainImage'>
            <span className='grad'>
                <p style={{marginTop: '20vh'}}>CESAR SANTANA</p>
                <p>FRONTEND DEVELOPER</p>
            </span>
        </main>

        <TechStacks></TechStacks>

        <Projects></Projects>

        <Contact/>        
    </container>
  )
}

export default Home