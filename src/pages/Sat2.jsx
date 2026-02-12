import React from 'react'

const Sat2 = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NigeriaSAT-2
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced Earth observation satellite for high-resolution imaging and African Resource Management
          </p>
          <div className="mt-6">
            <a
              href="https://central.nasrda.gov.ng/space-missions/nigeriasat-2/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Visit Official NASRDA Website
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Mission Overview */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Mission Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Launch Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Launch Date:</span> 2009</li>
                <li><span className="font-medium">Contract Signed:</span> October 10, 2006</li>
                <li><span className="font-medium">Contract Location:</span> Abuja, Nigeria</li>
                <li><span className="font-medium">Satellite Mass:</span> 300kg</li>
                <li><span className="font-medium">Manufacturer:</span> Surrey Satellite Technology Ltd (SSTL)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">African Collaboration</h3>
              <p className="text-gray-600 mb-3">
                NigeriaSAT-2 is part of a joint satellite program involving:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• South Africa (Lead)</li>
                <li>• Nigeria</li>
                <li>• Algeria</li>
                <li>• Kenya</li>
              </ul>
              <p className="text-gray-600 mt-3">
                This forms the cornerstone of the African Resource Management (ARM) Constellation.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Imaging Capabilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Panchromatic:</span> 2.5m GSD</li>
                <li><span className="font-medium">Multispectral:</span> 5.0m GSD in 4 bands</li>
                <li><span className="font-medium">Wide Coverage:</span> 32m GSD in 4 bands</li>
                <li><span className="font-medium">Swath Width (High Res):</span> 20 x 20 km</li>
                <li><span className="font-medium">Swath Width (Wide):</span> 300 x 300 km</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Advanced Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Camera Type:</span> Push broom scanner</li>
                <li><span className="font-medium">Stereo Imaging:</span> Capable of stereo pairs</li>
                <li><span className="font-medium">Memory Management:</span> On-board image memory</li>
                <li><span className="font-medium">Flexibility:</span> Multiple imaging modes</li>
                <li><span className="font-medium">Compatibility:</span> 32m resolution with NigeriaSAT-1</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Applications and Uses */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications and Uses</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ul className="space-y-2 text-gray-600">
              <li>• High-resolution mapping</li>
              <li>• Water resources management</li>
              <li>• Agricultural land use monitoring</li>
              <li>• Population estimation</li>
              <li>• Health hazard monitoring</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Disaster mitigation and management</li>
              <li>• NGDI project support</li>
              <li>• Environmental monitoring</li>
              <li>• African resource management</li>
              <li>• Capacity building support</li>
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-blue-600 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Learn More About NigeriaSAT-2
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For comprehensive technical specifications, mission updates, and official documentation, visit the National Space Research and Development Agency (NASRDA) website.
          </p>
          <a
            href="https://central.nasrda.gov.ng/space-missions/nigeriasat-2/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200"
          >
            Visit NASRDA Official Website
            <svg className="ml-2 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sat2
