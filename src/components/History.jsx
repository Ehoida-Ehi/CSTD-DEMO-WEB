import { useState, useRef } from "react"


const History = () => {
  const [showAll, setShowAll] = useState(false);
  const historyRef = useRef(null);

    const cards = [
    { title: "Establishment", content: "The Centre for Satellite Technology Development (CSTD) is the heartbeat of NASRDA, established under Nigeria's National Space Policy. It focuses on designing, developing, and testing satellite systems for missions like Earth Observation and Communication." },
    { title: "Milestones", content: "Since 2001, CSTD has led satellite missions like NigeriaSat-1, NigeriaSat-2, and NigComSat-1R, working with foreign experts to strengthen Nigeria’s space capacity." },
    { title: "Development Impact", content: "CSTD’s satellites serve diverse sectors: defense, agriculture, education, disaster management, and navigation — aiding national development efforts." },
    { title: "Global Outlook", content: "The space economy is expected to reach £490 billion by 2030. CSTD aims to position Nigeria for leadership in satellite-driven solutions across Africa." },
    { title: "Strategic Planning", content: "The 2022–2026 Strategic and Implementation Plan (SIP) outlines objectives to help CSTD align with NASRDA’s continental vision." },
    { title: "Innovation Lab", content: "CSTD’s lab provides hands-on experience in nanosatellite technology, robotics, and payload development, supporting tech startups and universities." },
    { title: "Tech Partnerships", content: "CSTD collaborates with global agencies and universities for knowledge sharing and satellite component sourcing." },
    { title: "Education & Outreach", content: "The center runs outreach to promote STEM education in schools, inspiring future space scientists." },
    { title: "Disaster Response", content: "Through remote sensing, CSTD assists in early warning systems for floods, desertification, and oil spills." },
    { title: "Space Commercialization", content: "Efforts are underway to make Nigeria a hub for affordable satellite solutions in West Africa." },
    { title: "Environmental Monitoring", content: "Data from CSTD satellites help track deforestation, urban growth, and climate patterns in Nigeria." },
    { title: "Future Roadmap", content: "CSTD plans to launch next-gen satellites with AI capabilities for autonomous mission control." }
  ];

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div
      ref={historyRef}
      className="p-6 bg-gray-100 mt-2 rounded-lg shadow-md max-h-[80vh] overflow-y-auto"
    >
      <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">History of CSTD</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleCards.map((card, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-transform duration-300 transform hover:scale-105">
            <h3 className="text-lg font-semibold mb-2 text-green-800">{card.title}</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{card.content}</p>
          </div>
        ))}
      </div>

      <div className='flex items-center justify-center'>
        <button
          onClick={() => {
            setShowAll(!showAll);
            if (showAll && historyRef.current) {
              historyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="px-6 py-2 mt-6 bg-green-800 text-white hover:bg-blue-600 transition rounded"
        >
          {showAll ? 'Show Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

 

export default History