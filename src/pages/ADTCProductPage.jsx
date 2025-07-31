import { motion } from "framer-motion";
import { useState } from "react";

const ADTCProductPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Data for reusable components based on PDF content
  const problemStatements = [
    {
      title: "Moisture-Induced Flashovers",
      desc: "High humidity causes condensation in TRF cable boxes, leading to flashovers.",
      icon: "💧",
    },
    {
      title: "Corrosion and Rust",
      desc: "Moisture and dust form semi-conductive films, causing rust and corrosion.",
      icon: "⚙️",
    },
    {
      title: "Frequent Outages",
      desc: "Recurring maintenance due to chirping noises and moisture-related issues.",
      icon: "⚠️",
    },
  ];

  const systemFeatures = [
    {
      title: "Peltier-Based Dehumidification",
      desc: "Uses Peltier module to condense and remove moisture effectively.",
      icon: "❄️",
    },
    {
      title: "Temperature Control",
      desc: "Maintains optimal temperature to prevent condensation.",
      icon: "🌡️",
    },
    {
      title: "Real-Time Monitoring",
      desc: "KIMO sensors provide humidity and temperature data via Modbus to SCADA.",
      icon: "📊",
    },
    {
      title: "Continuous Air Circulation",
      desc: "Internal fan ensures consistent air movement for moisture removal.",
      icon: "💨",
    },
    {
      title: "Automatic Drainage",
      desc: "Condensed water is drained via a pipe, ensuring dry conditions.",
      icon: "🚰",
    },
  ];

  const technicalSpecifications = [
    {
      title: "Power Supply",
      desc: "110-240V AC, 50/60 Hz, 100W max",
      icon: "🔌",
    },
    {
      title: "Dehumidification Capacity",
      desc: "Up to 300 mL/day at 30°C, 80% RH",
      icon: "💧",
    },
    {
      title: "Temperature Control Range",
      desc: "5°C to 40°C (±1°C accuracy)",
      icon: "🌡️",
    },
    {
      title: "Humidity Control Range",
      desc: "Maintains <50% RH (±3% accuracy)",
      icon: "📏",
    },
    {
      title: "Sensors",
      desc: "KIMO high-precision humidity and temperature sensors",
      icon: "📊",
    },
    {
      title: "Connectivity",
      desc: "Modbus RTU over RS-485 for SCADA integration",
      icon: "🔗",
    },
    {
      title: "Dimensions",
      desc: "250 x 150 x 100 mm (L x W x H)",
      icon: "📐",
    },
    {
      title: "Operating Conditions",
      desc: "-10°C to 50°C, 0-95% RH (non-condensing)",
      icon: "⚙️",
    },
  ];

  const benefits = [
    {
      title: "No Flashovers",
      desc: "Eliminates moisture-related flashovers in transformer cable boxes.",
      stat: "100%",
      statDesc: "flashover prevention",
    },
    {
      title: "Reduced Outages",
      desc: "Minimizes maintenance outages for chirping noise or inspections.",
      stat: "80%",
      statDesc: "outage reduction",
    },
    {
      title: "Equipment Longevity",
      desc: "Prevents corrosion and rust, extending equipment life.",
      stat: "50%",
      statDesc: "longer equipment life",
    },
    {
      title: "Real-Time Monitoring",
      desc: "Continuous humidity and temperature monitoring via SCADA.",
      stat: "24/7",
      statDesc: "monitoring",
    },
    {
      title: "Humidity Control",
      desc: "Maintains humidity below 50% in TRF cable boxes.",
      stat: "<50%",
      statDesc: "humidity level",
    },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Tata Power Carnac S/S",
      problem:
        "Over 5 years, 3 flashovers occurred in station transformer HT cable boxes due to moisture ingress and condensation.",
      action: "ADTC installed in transformer cable boxes to control humidity and temperature.",
      outcomes: [
        "No flashovers observed after installation",
        "80% reduction in outages for chirping noise or inspections",
        "Humidity maintained below 50%",
        "No partial discharge (PD) or tracking after 2 weeks of operation",
      ],
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-hitech-black to-gray-900 text-hitech-offwhite overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,182,172,0.1),transparent)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={childVariants} className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="h-px bg-hitech-teal w-8 mr-3"></div>
                <span className="text-hitech-teal font-medium">MOISTURE CONTROL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal leading-tight">
                Automatic Dehumidifier & Temperature Controller
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl">
                Protect your electrical installations with our advanced ADTC, designed to eliminate moisture and maintain optimal conditions in transformer cable boxes and MV panels.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-hitech-orange hover:bg-hitech-orange/90 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-colors flex items-center"
                  aria-label="Request a demo"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Request Demo
                </motion.button>
                <a href="https://www.hitechelex.com" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-hitech-teal text-hitech-teal hover:bg-hitech-teal/10 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center transition-colors"
                    aria-label="Visit Hi-Tech Elex website"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Visit Website
                  </motion.button>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="bg-hitech-teal/20 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">Moisture Protection</div>
                    <div className="text-sm text-gray-400">Prevents flashovers</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-hitech-teal/20 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">24/7 Monitoring</div>
                    <div className="text-sm text-gray-400">SCADA integration</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={childVariants}
              className="order-1 lg:order-2 flex justify-center relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full max-w-xl">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-hitech-teal/20 rounded-full filter blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-hitech-orange/20 rounded-full filter blur-xl"></div>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-hitech-teal/20 to-hitech-orange/20 rounded-3xl p-1.5 shadow-2xl">
                  <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden flex items-center justify-center">
                    <img
                      src="/img/products/ADTC.png"
                      alt="ADTC Device in transformer cable box"
                      className="w-full h-full object-contain p-8"
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-lg">
                  <div className="text-hitech-teal font-bold text-sm">PROVEN TECHNOLOGY</div>
                  <div className="text-white text-xs">Hi-Tech Elex Innovation</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Challenge of High Humidity in Electrical Systems</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              High humidity and temperature fluctuations cause condensation, leading to equipment damage and operational disruptions.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemStatements.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-hitech-teal/50 transition-all group"
                variants={childVariants}
                whileHover={{ y: -8 }}
                role="article"
                aria-labelledby={`problem-${index}`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div id={`problem-${index}`} className="text-xl font-bold text-hitech-orange mb-2 group-hover:text-hitech-teal transition-colors">
                  {item.title}
                </div>
                <p className="text-gray-300">{item.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400">RISK FACTOR</div>
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                    <div
                      className="bg-hitech-orange h-2 rounded-full"
                      style={{ width: `${70 + index * 15}%` }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-16 px-4 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(248,148,58,0.05),transparent)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Advanced Moisture Control Technology</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The ADTC combines Peltier-based dehumidification with real-time monitoring to protect electrical installations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemFeatures.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/70 hover:bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-hitech-teal/50 transition-all group relative overflow-hidden"
                variants={childVariants}
                whileHover={{ y: -5 }}
                role="article"
                aria-labelledby={`feature-${index}`}
              >
                <div className="absoluteNCY-right-6 -top-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-hitech-teal font-bold text-sm mb-2">FEATURE {index + 1}</div>
                  <h3 id={`feature-${index}`} className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 px-4 sm:py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Engineered for reliability, the ADTC delivers precise moisture and temperature control for critical electrical applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSpecifications.map((spec, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/70 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-hitech-teal/50 transition-all group relative overflow-hidden"
                variants={childVariants}
                whileHover={{ y: -5 }}
                role="article"
                aria-labelledby={`spec-${index}`}
              >
                <div className="absolute -right-6 -top-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {spec.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-hitech-teal font-bold text-sm mb-2">SPEC {index + 1}</div>
                  <h3 id={`spec-${index}`} className="text-xl font-bold mb-3">{spec.title}</h3>
                  <p className="text-gray-300">{spec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:py-20 bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Measurable Operational Benefits</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The ADTC delivers tangible improvements to equipment reliability and operational efficiency.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-hitech-teal/50 transition-all group"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
                role="article"
                aria-labelledby={`benefit-${index}`}
              >
                <div className="flex items-start">
                  <div className="bg-hitech-teal/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 id={`benefit-${index}`} className="text-xl font-bold mb-2 text-hitech-orange">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.desc}</p>
                    <div className="text-3xl font-bold text-hitech-teal">{item.stat}</div>
                    <div className="text-sm text-gray-400">{item.statDesc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dot-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div className="text-center mb-16" variants={childVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Proven Industry Applications</h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The ADTC has been successfully deployed to eliminate moisture-related issues in transformer cable boxes.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-gray-900/70 hover:bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-hitech-orange/50 transition-all"
                variants={childVariants}
                whileHover={{ y: -5 }}
                role="article"
                aria-labelledby={`case-study-${study.id}`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-hitech-orange/20 text-hitech-orange px-3 py-1 rounded-full text-sm font-bold mr-3">
                    CASE STUDY 0{study.id}
                  </div>
                  <div className="h-px bg-gray-700 flex-1"></div>
                </div>
                <h3 id={`case-study-${study.id}`} className="text-2xl font-bold mb-4">{study.title}</h3>
                <div className="mb-6">
                  <h4 className="font-semibold text-hitech-teal mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.problem}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-hitech-teal mb-2">Solution</h4>
                  <p className="text-gray-300">{study.action}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-hitech-teal mb-2">Results Achieved</h4>
                  <ul className="space-y-2">
                    {study.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-hitech-orange mr-2 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:py-24 bg-gradient-to-r from-hitech-teal/10 via-gray-900/50 to-hitech-orange/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div variants={childVariants}>
            <div className="inline-block bg-hitech-teal/20 text-hitech-teal px-4 py-1 rounded-full text-sm font-bold mb-6">
              READY TO PROTECT YOUR EQUIPMENT?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Schedule Your Personalized Demonstration</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how the ADTC can safeguard your electrical installations from moisture-related issues. Our experts will guide you through a live demo tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-hitech-orange hover:bg-hitech-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors flex items-center justify-center"
                aria-label="Contact sales team"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Contact Sales
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-hitech-teal text-hitech-teal hover:bg-hitech-teal/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                aria-label="Request a demo"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                Request Demo
              </motion.button>
            </div>
            <div className="mt-8 text-gray-400 text-sm">
              <p>
                Have questions? Email us at{" "}
                <a href="mailto:sales@hitechelex.com" className="text-hitech-teal hover:underline">
                  sales@hitechelex.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ADTCProductPage;