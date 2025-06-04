import sipImage from '../assets/images/DG-3-point-Agenda-1.jpg'
import React from 'react'

const AboutHero = () => {
  return (
    
      <div className='flex justify-center items-center p-4 bg--gray-100 **w-full** **shadow-md**'>
            <img 
            src={sipImage} 
            alt="SIP"
            className='max-w-full h-auto rounded-lg shadow-lg'
            />
        </div>
    
  )
}

export default AboutHero
