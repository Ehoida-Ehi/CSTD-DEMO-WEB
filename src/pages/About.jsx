import React from 'react'
import Vision from '../components/Vision'
import Mission from '../components/Mission'
import History from '../components/History'
import Sip from '../components/Sip'
import AboutHero from '../components/AboutHero'
import Fade from '../components/Fade'

const About = () => {
  return (
    <div className='container mx-auto py-20'> 
      {/* <AboutHero /> */}
      <Fade />
      <Vision />
      <Mission />
      <History />
      <Sip />
    </div>
  )
}

export default About
