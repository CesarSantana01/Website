import {motion, useAnimation} from 'framer-motion'
import React, {useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import _, { delay } from 'lodash'
import expressIcon from '../img/expressIcon.svg'

require('../../css/TechStacks.css')

function TechStacks() {

    const {ref, inView} = useInView({threshold: .2});
    
    const techStackAnimation1 = useAnimation();

    useEffect(() => {
        if(inView){
            techStackAnimation1.start({
                
                opacity: '1',
                filter: 'blur(0px)',
                transition: {
                   duration: .5,
                }
            })
            
        }else{
            techStackAnimation1.start({opacity:0, filter: 'blur(3px)'})
        }
    },[inView])

  return (
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
                    animate={techStackAnimation1}
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
                    animate={techStackAnimation1}
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
                    animate={techStackAnimation1}
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
                    animate={techStackAnimation1}
                    >
                        <img style={{margin: 0, filter: 'drop-shadow(0px 0px 4px white)'}} height={100} width={110} className='tech-stack-img' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                        <label style={{marginTop:'10px'}}>GitHub</label>
                    </motion.li>

                    <motion.li
                    animate={techStackAnimation1}
                    >
                        <img style={{filter:"drop-shadow(0px 0px 1px white)"}} height={80} width={140} className='tech-stack-img' src={expressIcon} alt="" />
                        <label style={{margin: 0}}>Express</label>
                    </motion.li>
            </ul>
        </section>
  )
}

export default TechStacks