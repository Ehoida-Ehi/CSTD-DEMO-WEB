import React from "react";

const SatelliteMission = () => {
  const satellites = [
    {
      id: "sat1",
      name: "NigeriaSat-1 (Sat‑1)",
      role: "Nigeria's first Earth observation satellite, focused on disaster monitoring and environmental management.",
      launchDate: "27 September 2003",
      launchVehicle: "Kosmos‑3M",
      launchSite: "Plesetsk Cosmodrome, Russia",
      orbit: "Low Earth Orbit (~700 km)",
      payload: [
        "Medium‑resolution multispectral imager (32m spatial resolution)",
        "Three spectral bands: Green, Red, Near‑Infrared (NIR)",
        "Wide 600 km swath for large‑area coverage",
      ],
      features: [
        "Core member of the Disaster Monitoring Constellation (DMC)",
        "Provides imagery for land‑use mapping, agriculture and urban planning",
        "Supports national and international disaster response initiatives",
      ],
      applications: [
        "Land cover and land‑use classification",
        "Desertification and deforestation monitoring",
        "Flood and disaster mapping within Nigeria and beyond",
      ],
      ctaHref: "/sat1",
    },
    {
      id: "sat2",
      name: "NigeriaSat-2 (Sat‑2)",
      role: "High‑resolution Earth observation satellite designed for precision mapping and national planning.",
      launchDate: "17 August 2011",
      launchVehicle: "Dnepr Rocket",
      launchSite: "Yasny Launch Base, Russia",
      orbit: "Sun‑synchronous Low Earth Orbit (~700 km)",
      payload: [
        "Very‑high‑resolution panchromatic imager (≈2.5m)",
        "Multispectral imager (≈5m resolution)",
        "Advanced attitude and orbit control system for precise pointing",
      ],
      features: [
        "Enables detailed mapping of cities, infrastructure and critical assets",
        "Improves food security through precision agriculture and crop monitoring",
        "Supports security, border monitoring and strategic planning",
      ],
      applications: [
        "National topographic and cadastral mapping",
        "Urban growth and infrastructure planning",
        "Environmental and climate‑related studies",
      ],
      ctaHref: "/sat2",
    },
    {
      id: "satx",
      name: "NigeriaSat‑X (Sat‑X)",
      role: "Technology demonstration satellite built largely by Nigerian engineers as a milestone in local capacity development.",
      launchDate: "17 August 2011",
      launchVehicle: "Dnepr Rocket",
      launchSite: "Yasny Launch Base, Russia",
      orbit: "Sun‑synchronous Low Earth Orbit",
      payload: [
        "Experimental multispectral imager",
        "On‑board technology demonstrators for future missions",
        "Platform subsystems developed with strong Nigerian participation",
      ],
      features: [
        "First satellite with significant indigenous design and engineering input",
        "Serves as a learning platform for future Nigerian missions",
        "Helps validate new components and subsystems in orbit",
      ],
      applications: [
        "Hands‑on training for Nigerian satellite engineers",
        "Test‑bed for new space technologies and mission concepts",
        "Complementary imagery for environmental and agricultural monitoring",
      ],
      ctaHref: "/satx",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase mb-4">
                Nigerian Satellite Missions
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-50 mb-5">
                Imaging Nigeria from Space,
                <span className="block text-blue-400">
                  Empowering Decisions on Earth.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-6">
                Explore Nigeria&apos;s pioneering satellite missions –{" "}
                <span className="font-semibold text-slate-100">
                  Sat‑1, Sat‑2 and Sat‑X
                </span>{" "}
                – designed to support disaster management, environmental
                monitoring, national planning and technology development.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="#missions"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors"
                >
                  View Satellite Missions
                </a>
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-slate-600/70 hover:border-blue-400/70 text-sm sm:text-base font-semibold text-slate-100 hover:text-blue-200 bg-slate-900/40 hover:bg-slate-800/70 transition-colors"
                >
                  Mission Overview
                </a>
              </div>

              <dl className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-slate-300">
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Operational Missions
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-50">
                    3+
                  </dd>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    Primary Payloads
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-50">
                    EO &amp; Tech Demo
                  </dd>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-slate-400">
                    First Launch
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-50">
                    2003
                  </dd>
                </div>
              </dl>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-blue-500/10 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8 shadow-2xl shadow-blue-900/40">
                <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-4">
                  Mission Snapshot
                </p>
                <ul className="space-y-4 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <p>
                      <span className="font-semibold text-slate-50">
                        Sat‑1
                      </span>{" "}
                      kick‑started Nigeria&apos;s participation in the Disaster
                      Monitoring Constellation (DMC), delivering wide‑area
                      imagery for global emergencies.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400" />
                    <p>
                      <span className="font-semibold text-slate-50">
                        Sat‑2
                      </span>{" "}
                      brought high‑resolution mapping capabilities, enabling
                      detailed urban, infrastructure and resource planning.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-violet-400" />
                    <p>
                      <span className="font-semibold text-slate-50">
                        Sat‑X
                      </span>{" "}
                      marked a major technology transfer milestone, with
                      significant design and engineering input from Nigerian
                      teams.
                    </p>
                  </li>
                </ul>

                <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 px-4 py-3">
                    <p className="font-semibold text-slate-50 mb-1">
                      Key Domains
                    </p>
                    <p>Disaster response, agriculture, urban planning.</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 border border-slate-700/70 px-4 py-3">
                    <p className="font-semibold text-slate-50 mb-1">
                      Lead Agency
                    </p>
                    <p>CSTD / NASRDA in collaboration with global partners.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        id="overview"
        className="border-t border-slate-800 bg-slate-950/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-50 mb-4">
              Strategic Role of Nigerian Satellites
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mb-4">
              Nigeria&apos;s satellite missions are designed to address practical
              national needs:{" "}
              <span className="font-semibold text-slate-100">
                disaster risk reduction, food security, environmental
                stewardship, infrastructure planning and security support.
              </span>{" "}
              Each mission contributes unique imaging capabilities and technology
              insights that strengthen Nigeria&apos;s space programme.
            </p>
            <p className="text-slate-300 text-sm sm:text-base">
              Through Sat‑1, Sat‑2 and Sat‑X, Nigeria has built a portfolio of
              missions that balance{" "}
              <span className="font-semibold text-slate-100">
                operational Earth observation
              </span>{" "}
              with{" "}
              <span className="font-semibold text-slate-100">
                indigenous capacity development
              </span>
              , ensuring that local engineers and institutions gain the skills
              needed to design, build and operate future satellites.
            </p>
          </div>
        </div>
      </section>

      {/* Satellite Cards Section */}
      <section
        id="missions"
        className="border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-50">
                Nigerian Satellite Missions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-2xl">
                Explore the key characteristics of Sat‑1, Sat‑2 and Sat‑X –
                their launch history, payloads and the national value they
                deliver.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {satellites.map((sat) => (
              <article
                key={sat.id}
                className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-950/70 hover:bg-slate-900 transition-colors shadow-lg shadow-slate-950/40"
              >
                <div className="border-b border-slate-800 px-5 pt-5 pb-4">
                  <p className="text-xs font-semibold tracking-[0.25em] text-blue-400 uppercase mb-2">
                    {sat.id === "satx" ? "Tech Demonstration" : "Earth Observation"}
                  </p>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-50">
                    {sat.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300">
                    {sat.role}
                  </p>
                </div>

                <div className="flex-1 px-5 py-4 space-y-4 text-xs sm:text-sm text-slate-300">
                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">
                      Launch &amp; Orbit
                    </h4>
                    <dl className="grid grid-cols-1 gap-y-1 text-slate-300">
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-400">Launch date</dt>
                        <dd className="font-medium text-slate-100">
                          {sat.launchDate}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-400">Launch vehicle</dt>
                        <dd className="font-medium text-slate-100 text-right">
                          {sat.launchVehicle}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-400">Launch site</dt>
                        <dd className="font-medium text-slate-100 text-right">
                          {sat.launchSite}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-2">
                        <dt className="text-slate-400">Orbit</dt>
                        <dd className="font-medium text-slate-100 text-right">
                          {sat.orbit}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">
                      Payload Highlights
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {sat.payload.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">
                      Mission Features
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {sat.features.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-100 mb-1">
                      Key Applications
                    </h4>
                    <ul className="space-y-1 list-disc list-inside">
                      {sat.applications.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-slate-800 px-5 py-4 flex items-center justify-between">
                  <div className="text-[0.7rem] sm:text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Part of Nigeria&apos;s national space programme
                    </span>
                  </div>
                  <a
                    href={sat.ctaHref}
                    className="inline-flex items-center text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300"
                  >
                    View detailed page
                    <svg
                      className="ml-1 h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SatelliteMission;


