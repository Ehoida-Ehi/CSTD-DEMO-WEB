import React from 'react'
import Vision from '../components/Vision'
import Mission from '../components/Mission'
import History from '../components/History'
import Sip from '../components/Sip'

import Fade from '../components/Fade'

const About = () => {
  return (
    <div> 
      <Fade />
      <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 lg:px-16 mt-4'>
            <Vision />
            <Mission />
          </div>
          <History />
          <Sip />
      </div>
      
    </div>
  )
}

export default About
