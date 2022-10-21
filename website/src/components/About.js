import React from 'react'

require('../css/About.css')

function About() {

  
  return (
    <div>
      <div className='About'>
        <div className='About-info'>
          <h1>About</h1>
          <p>Hi, I'm Cesar, a passionate self-motivated web developer with 3 years of experience building websites and applications. I'm proficient with HTML, CSS, JavaScript and React. I've used my creativity and problem-solving skills to design and implement various websites for different needs.</p>
        </div>
        <div className="container3">
          <div className='hover'>Hover here</div>
          <div className="mockup mockup-macbook loaded opened">
            <div className="part top">
              <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-top.svg" alt="" className="top"/>
              <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover"/>
              <video playsInline autoplay muted loop >
                <source src="https://d1xm195wioio0k.cloudfront.net/images/video/support.mp4" type="video/mp4"/>
              </video>
            </div>
            <div className="part bottom">
              <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-cover.svg" alt="" className="cover"/>
              <img src="https://d1xm195wioio0k.cloudfront.net/images/mockup/macbook-bottom.svg" alt="" className="bottom"/>
            </div>
          </div>
        </div>
      </div>
      <div className='About-skills'>
        <div className='About-skills-cont'>
          <div>
            <ul>
              <h2>Front End</h2>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
            <ul>
            <h2>Back End</h2>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </div>
          <ul>
          <h2>Development Tools</h2>
            <li>Webpack</li>
            <li>NPM</li>
            <li>Babel</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
        
      </div>
    </div>

    
  )
}

export default About