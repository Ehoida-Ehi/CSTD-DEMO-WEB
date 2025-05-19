import React from 'react'
import sipImage from '../assets/images/CSTD SIP.png'
const Sip = () => {
  return (
    <>
    <div className='flex justify-center items-center p-4 bg--gray-100 rounded-lg shadow-md'>
      <img 
      src={sipImage} 
      alt="SIP"
      className='max-w-full h-auto rounded-lg shadow-lg'
      />
    </div>
      <p className='text-black text-2xl flex justify-center items-center mt-2'>The Pillars of SIP</p>
    </>
  )
}

export default Sip
