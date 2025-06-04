import React from 'react'
import sipImage from '../assets/images/CSTD SIP.png'
const Sip = () => {
  return (
    <>
    <div className='flex justify-center items-center p-4 bg--gray-100 rounded-lg **shadow-md** **shadow-2xl**'>
      <img 
      src={sipImage} 
      alt="SIP"
      className='w-[80%] h-auto rounded-lg shadow-lg'
      />
    </div>
      {/* <p className='text-green-600 text-2xl font-semibold flex justify-center items-center my-10'>The Pillars of SIP</p> */}
    </>
  )
}

export default Sip
