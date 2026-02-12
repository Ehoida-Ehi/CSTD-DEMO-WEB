import React from 'react'

const SatX = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            NigeriaSAT-X
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nigeria's indigenous training satellite built by Nigerian engineers and scientists
          </p>
          <div className="mt-6">
            <a
              href="https://central.nasrda.gov.ng/space-missions/nigeriasat-x/"
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
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Purpose</h3>
              <p className="text-gray-600 mb-4">
                NigeriaSAT-X was built as a flight-ready training model by 25 Nigerian engineers and scientists who participated in the Know How Technology Program of NigeriaSAT-2. The project was built in conjunction with Surrey Satellite Technology Limited (SSTL).
              </p>
              <p className="text-gray-600">
                The primary aim was to build the capacity of Nigerian engineers and scientists while serving as a complement to NigeriaSAT-1, whose design lifespan was nearly over.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Achievements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• First satellite built by Nigerian engineers</li>
                <li>• Capacity building in satellite technology</li>
                <li>• Indigenous knowledge development</li>
                <li>• Technology transfer from SSTL</li>
                <li>• Flight-ready training model</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Satellite Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Mass:</span> 100kg</li>
                <li><span className="font-medium">Design Life:</span> 5 years</li>
                <li><span className="font-medium">Orbit Type:</span> Sun-synchronous Low Earth Orbit</li>
                <li><span className="font-medium">Launch Vehicle:</span> DNEPR</li>
                <li><span className="font-medium">Launch Site:</span> Yasny, Russia</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Imaging System</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Resolution:</span> 22m NextGEN</li>
                <li><span className="font-medium">Swath Width:</span> 600km</li>
                <li><span className="font-medium">Spectral Bands:</span> 3 bands</li>
                <li><span className="font-medium">Revisit Time:</span> 3-5 days</li>
                <li><span className="font-medium">Sensor Type:</span> Optical</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800">
              <strong>Note:</strong> NigeriaSAT-X represents a significant milestone in Nigeria's space program, demonstrating the country's growing indigenous capability in satellite design and construction.
            </p>
          </div>
        </div>

        {/* Launch Information */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Launch Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Launch Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><span className="font-medium">Date:</span> August 17, 2011</li>
                <li><span className="font-medium">Launch Site:</span> Yasny, Russia</li>
                <li><span className="font-medium">Launch Vehicle:</span> DNEPR</li>
                <li><span className="font-medium">Operator:</span> NASRDA</li>
                <li><span className="font-medium">Mission Type:</span> Earth Observation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Mission Success</h3>
              <p className="text-gray-600 mb-3">
                The successful launch of NigeriaSAT-X marked a historic moment for Nigeria's space program, as it was the first satellite built entirely by Nigerian engineers and scientists.
              </p>
              <p className="text-gray-600">
                This achievement demonstrated Nigeria's commitment to building indigenous competence in space technology and marked a significant step forward in the country's space capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Applications and Uses */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Applications and Uses</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ul className="space-y-2 text-gray-600">
              <li>• Food security monitoring</li>
              <li>• Monthly crop monitoring</li>
              <li>• Disaster management</li>
              <li>• Security applications</li>
            </ul>
            <ul className="space-y-2 text-gray-600">
              <li>• Natural resource management</li>
              <li>• Environmental monitoring</li>
              <li>• Agricultural planning</li>
              <li>• Land use assessment</li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Agricultural Focus</h3>
            <p className="text-blue-800">
              NigeriaSAT-X's 22m resolution and 3-5 day revisit capability make it particularly well-suited for agricultural applications, including monthly crop monitoring which is crucial for food security in Nigeria and the broader African region.
            </p>
          </div>
        </div>

        {/* Capacity Building Impact */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Capacity Building Impact</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The NigeriaSAT-X project represents a significant investment in human capital development. By involving 25 Nigerian engineers and scientists in the complete satellite development process, NASRDA has created a pool of highly skilled professionals with hands-on experience in satellite design, construction, and testing.
            </p>
            <p>
              This indigenous capacity building ensures that Nigeria can maintain and potentially expand its satellite fleet without complete reliance on foreign expertise, while also positioning the country as a regional leader in space technology development.
            </p>
            <p>
              The knowledge and experience gained from the NigeriaSAT-X project continues to benefit Nigeria's space program and contributes to the country's broader technological development goals.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-blue-600 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Learn More About NigeriaSAT-X
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For comprehensive technical specifications, mission updates, and official documentation about Nigeria's indigenous training satellite, visit the National Space Research and Development Agency (NASRDA) website.
          </p>
          <a
            href="https://central.nasrda.gov.ng/space-missions/nigeriasat-x/"
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

export default SatX
