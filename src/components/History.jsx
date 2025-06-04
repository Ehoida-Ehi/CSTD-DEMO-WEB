const History = () => {
  return (
    <div id='history' className="p-6 bg-gray-50  mt-2 rounded-lg **shadow-md**">
      <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">History of CSTD</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Establishment</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            The Centre for Satellite Technology Development (CSTD) is the heartbeat of NASRDA, established under Nigeria's National Space Policy. It focuses on designing, developing, and testing satellite systems for missions like Earth Observation and Communication.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Milestones</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Since 2001, CSTD has led satellite missions like NigeriaSat-1, NigeriaSat-2, and NigComSat-1R, working with foreign experts to strengthen Nigeria’s space capacity.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Development Impact</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            CSTD’s satellites serve diverse sectors: defense, agriculture, education, disaster management, and navigation — aiding national development efforts.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Global Outlook</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            The space economy is expected to reach £490 billion by 2030. CSTD aims to position Nigeria for leadership in satellite-driven solutions across Africa.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-lg font-semibold mb-2 text-green-800">Strategic Planning</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            The 2022–2026 Strategic and Implementation Plan (SIP) outlines objectives to help CSTD align with NASRDA’s continental vision.
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <button className="px-6 py-2 bg-green-800 text-white rounded hover:bg-blue-700 transition">
          Read More
        </button>
      </div>
    </div>
  )
}

export default History