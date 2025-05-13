import React from 'react'

const Mission = () => {
  return (
   <div className="p-6 bg-white mt-2 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">CSTD MISSION</h2>
      <p className="text-gray-700 leading-relaxed">
        Monero was launched in 2014, and its goal is simple: to allow transactions to take place privately and with anonymity. 
        Even though it’s commonly thought that BTC can conceal a person’s identity, it’s often easy to trace payments back to 
        their original source because blockchains are transparent. On the other hand, XMR is designed to obscure senders and 
        recipients alike through the use of advanced cryptography.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        The team behind Monero says privacy and security are their biggest priorities, with ease of use and efficiency coming second. 
        It aims to provide protection to all users — irrespective of how technologically competent they are.
      </p>
      <p className="text-gray-700 leading-relaxed mt-4">
        Overall, XMR aims to allow payments to be made quickly and inexpensively without fear of censorship.
      </p>
    </div>
  )
}

export default Mission
