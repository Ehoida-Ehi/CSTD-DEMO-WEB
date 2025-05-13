import React from 'react'
import sipImage from '../assets/images/DG-3-point-Agenda-1.jpg'
const Sip = () => {
  return (
    <div className='flex justify-center items-center p-4 bg--gray-100 rounded-lg shadow-md'>
      <img 
      src={sipImage} 
      alt="SIP"
      className='max-w-full h-auto rounded-lg shadow-lg'
      />
    </div>
  )
}

export default Sip
