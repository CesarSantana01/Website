import {animationControls, motion, useAnimation} from 'framer-motion'
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import _, { delay } from 'lodash'
import expressIcon from './img/expressIcon.svg'

require('../css/Home.css')


function Home() {

    const {ref, inView} = useInView({threshold: .2});
    
    const techStackAnimation1 = useAnimation();
    const techStackAnimation2 = useAnimation();

    useEffect(() => {
        if(inView){
            techStackAnimation1.start({
                x: 0,
                opacity:1,

                transition: {
                    type: 'ease', duration: 2
                }
            })
            techStackAnimation2.start({
                x: 0,
                opacity:1,
                transition: {
                    type: 'ease', duration: 2, delay:.5
                }
            })
        }else{
            techStackAnimation1.start({x: '-100vw', opacity:0})
            techStackAnimation2.start({x: '-100vw', opacity:0})
        }

    console.log('use effect hook, inView', inView)

    },[inView])


  return (
    <div className='flex'>
        <main className='mainImage'>
            <span className='grad'>
                <p style={{marginTop: '20vh'}}>CESAR SANTANA</p>
                <p>FRONTEND DEVELOPER</p>
            </span>
        </main>
        <section className='tech-stacks'>
            <h2 style={{marginLeft: '2vw'}}>Tech Stacks</h2>
            <ul ref={ref} className='tech-stacks-grid'>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img className='tech-stack-img' height={100} width={100} src="https://raw.githubusercontent.com/tomchen/stack-icons/634d5c036a2a7ca0115c94ab2ce86c7e79e01e13/logos/javascript.svg" alt="" />
                        <label>JavaScript</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation2}
                    >
                        <img height={100} width={100} className='tech-stack-img' src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-11.png" alt="" />
                        <label>HTML5</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img height={100} width={100} className='tech-stack-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
                        <label>CSS</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation2}
                    >
                        <img height={100} width={100} className='tech-stack-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
                        <label>React</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img style={{filter:"drop-shadow(0px 0px 1px white)"}} height={100} width={130} className='tech-stack-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" alt="" />
                        <label style={{margin: 0}}>Next.js</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation2}
                    >
                        <img height={100} width={130} className='tech-stack-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" alt="" />
                        <label>Node.js</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img height={80} width={140} className='tech-stack-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="" />
                        <label>Node Package Manager</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation2}
                    >
                        <img style={{margin: 0}} height={100} width={110} className='tech-stack-img' src="https://raw.githubusercontent.com/webpack/media/master/logo/icon-square-big.png" alt="" />
                        <label style={{margin: 0}}>Webpack</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img style={{filter:"drop-shadow(0px 0px 1px white)"}} height={80} width={140} className='tech-stack-img' src={expressIcon} alt="" />
                        <label style={{margin: 0}}>Express</label>
                    </motion.li>

                
            </ul>
        </section>
    </div>
  )
}

export default Home