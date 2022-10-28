import React from 'react'
import ImageSlider from './ImageSlider'
import car1 from '../img/carsite1.png'
import car2 from '../img/carsite2.png'
import car3 from '../img/carsite3.png'




require('../../css/Projects.css')


function Projects() {

    const Slides = [
        { url: `${car1}`, title: "boat" },
        { url: `${car2}`, title: "forest" },
        { url: `${car3}`, title: "city" },
      ];

      
  return (
    <section className='Projects'>
        <h2 style={{marginLeft: '2vw', marginBottom:0}}>Featured Project</h2>
        <h3 style={{marginTop: 0, marginLeft: '2vw', color:'rgb(110, 110, 110)'}}>Car Retailer</h3>



        <container className='Featured'>
          <div className='containerStyles'>
            <ImageSlider slides={Slides} />
          </div>
          <article className='featured-summary'>
            <div className='articleClass'>
              <h3>Summary</h3>
              <p>A front end car retailer built with React, React Router, CSS, and other tools. The store allows users to browse, add, and remove items from their cart.</p>
            </div>
            <div
            style={{
                width:'40%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                
            }}>
                <a href="https://cesarsantana01.github.io/carshop/#/" target={'_blank'} rel="noopener noreferrer"  className='btn-98'>View Live Preview ↗</a>
            </div>
          </article>
        </container>
    </section>
  )
}

export default Projects