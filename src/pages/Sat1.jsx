import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const Sat1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900 pt-24 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12">
          {/* Back arrow and title row */}
          <div className="flex items-center justify-between mb-4">
            <Link
              to="/satellitemissions"
              className="text-gray-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Back to satellite missions"
            >
              <FaArrowLeft size={24} />
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-100 flex-1 text-center">
              NigeriaSAT-1
            </h1>
            <div className="w-6" /> {/* Spacer for symmetry */}
          </div>

          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto text-center">
            Nigeria's first Earth observation satellite for disaster monitoring and environmental management
          </p>

          <div className="mt-6 text-center">
            <a
              href="https://central.nasrda.gov.ng/space-missions/nigeriasat-1/"
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

        {/* Rest of the component remains unchanged */}
        {/* Mission Overview */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Mission Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3">Launch Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Launch Date:</span> September 2003</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Launch Site:</span> Plesetsk, Russia</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Cost:</span> $13 million</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Design Life:</span> 5 years</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Orbit:</span> 700km Low Earth Orbit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3">Constellation</h3>
              <p className="text-gray-600 dark:text-slate-300 mb-3">
                NigeriaSAT-1 is part of the Disaster Monitoring Constellation (DMC), a seven-nation network including:
              </p>
              <ul className="text-gray-600 dark:text-slate-300 space-y-1">
                <li>• United Kingdom</li>
                <li>• China</li>
                <li>• Algeria</li>
                <li>• Turkey</li>
                <li>• Thailand</li>
                <li>• Vietnam</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3">Spectral Bands</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Green:</span> 0.52-0.62µm</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Red:</span> 0.63-0.69µm</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">NIR:</span> 0.76-0.9µm</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-3">Imaging Capabilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Spatial Resolution:</span> 32m</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Swath Width:</span> 600km</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Revisit Cycle:</span> 3-5 days</li>
                <li className="text-gray-600 dark:text-slate-300"><span className="font-medium">Camera Operation:</span> Two banks</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-slate-700 rounded-lg">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>Note:</strong> NigeriaSAT-1 has spectral resolution comparable to SPOT XS and spatial resolution comparable to Landsat TM, making it highly suitable for forestry monitoring and natural resource management.
            </p>
          </div>
        </div>

        {/* Applications and Uses */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Applications and Uses</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-300 mb-4">National Applications</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <ul className="space-y-2 text-gray-600 dark:text-slate-300">
              <li>• Land Use/Land Cover revision</li>
              <li>• Environmental change research in Niger-Delta</li>
              <li>• Desertification early warning models</li>
              <li>• Gully erosion monitoring</li>
            </ul>
            <ul className="space-y-2 text-gray-600 dark:text-slate-300">
              <li>• Settlements and major roads mapping</li>
              <li>• Flood mapping in Kainji Lake area</li>
              <li>• Deforestation monitoring</li>
              <li>• Natural resource management</li>
            </ul>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-300 mb-4">International Disaster Response</h3>
          <p className="text-gray-600 dark:text-slate-300 mb-4">
            As part of the DMC, NigeriaSAT-1 has contributed to global disaster management efforts:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2 text-gray-600 dark:text-slate-300">
              <li>• Asian Tsunami disaster (2004)</li>
              <li>• Hurricane Katrina response</li>
              <li>• Flood monitoring in multiple countries</li>
              <li>• Volcanic eruption monitoring</li>
            </ul>
            <ul className="space-y-2 text-gray-600 dark:text-slate-300">
              <li>• Oil spill detection</li>
              <li>• Wildfire monitoring</li>
              <li>• Locust threat assessment</li>
              <li>• International Charter support</li>
            </ul>
          </div>
        </div>

        {/* Development and Training */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-slate-100 mb-6">Development and Training</h2>
          <div className="space-y-4 text-gray-600 dark:text-slate-300">
            <p>
              NigeriaSAT-1 was built by Surrey Satellite Technology (SSTL), a British-based company, which also provided comprehensive training to Nigerian technicians and engineers. This collaboration has helped build indigenous competence in satellite technology development.
            </p>
            <p>
              The satellite represents a significant milestone in Nigeria's space program, demonstrating the country's commitment to utilizing space technology for sustainable development and disaster management.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center bg-blue-600 rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Learn More About NigeriaSAT-1
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            For the most up-to-date information, technical specifications, and official documentation, visit the National Space Research and Development Agency (NASRDA) website.
          </p>
          <a
            href="https://central.nasrda.gov.ng/space-missions/nigeriasat-1/"
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

export default Sat1