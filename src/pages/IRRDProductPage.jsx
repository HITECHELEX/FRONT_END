import { motion } from "framer-motion";
import { useState } from "react";

const IRRDProductPage = () => {
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

  // Data for reusable components
  const problemStatements = [
    {
      title: "Operator Safety Risk",
      desc: "Manual racking puts personnel at risk of arc flash exposure.",
      icon: "⚠️"
    },
    {
      title: "Breaker Damage",
      desc: "Inconsistent torque during manual operation can damage breakers.",
      icon: "⚡"
    },
    {
      title: "Lack of Feedback",
      desc: "No real-time monitoring of racking status in traditional methods.",
      icon: "📊"
    }
  ];

  const systemFeatures = [
    {
      title: "Arc Flash Protection",
      desc: "Racking is done outside the Arc Flash Zone, protecting the operator.",
      icon: "🛡️"
    },
    {
      title: "Torque Control",
      desc: "Torque-limiting control and auto-trip on over-torque prevents damage.",
      icon: "🔧"
    },
    {
      title: "Multi-Breaker Support",
      desc: "Custom configuration for various breaker models and types.",
      icon: "🔄"
    },
    {
      title: "Position Feedback",
      desc: "Continuous monitoring of the racking process.",
      icon: "📈"
    },
    {
      title: "Data Logging",
      desc: "Stores racking operation data for historical tracking.",
      icon: "💾"
    },
    {
      title: "Remote Operation",
      desc: "Wireless control allows operation from up to 10 meters away.",
      icon: "📶"
    }
  ];

  const benefits = [
    {
      title: "Operator Safety",
      desc: "Keeps personnel outside the arc flash zone, reducing risk of injury.",
      stat: "100%",
      statDesc: "outside arc flash boundary"
    },
    {
      title: "Breaker Protection",
      desc: "Torque limiting and auto-trip features prevent mechanical damage.",
      stat: "60%",
      statDesc: "reduction in breaker damage"
    },
    {
      title: "Remote Operation",
      desc: "Wireless control allows safe breaker racking from up to 10 meters away.",
      stat: "10m",
      statDesc: "operating distance"
    },
    {
      title: "Real-Time Feedback",
      desc: "Continuous monitoring of racking status improves reliability.",
      stat: "24/7",
      statDesc: "monitoring"
    },
    {
      title: "Data Logging",
      desc: "Stores racking data for analysis and predictive maintenance.",
      stat: "100+",
      statDesc: "operations logged"
    },
    {
      title: "Cost Savings",
      desc: "Reduces PPE costs and breaker maintenance expenses.",
      stat: "40%",
      statDesc: "cost reduction"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Tata Power (Mumbai Division)",
      problem: "Operators manually racked 11kV VCBs in confined switchgear rooms, increasing arc flash exposure.",
      action: "IRRD deployed on all 11kV feeder panels.",
      outcomes: [
        "Breaker racking performed remotely from outside arc flash boundary",
        "28% reduction in breaker drive box maintenance calls",
        "Adopted as standard safety device for other substations"
      ]
    },
    {
      id: 2,
      title: "Oil & Gas Sector",
      problem: "Breakers in hazardous areas posed high arc flash risk with limited PPE compliance.",
      action: "Wireless IRRD enabled safe breaker racking from 10 meters away.",
      outcomes: [
        "Allowed racking without entering gas-prone area",
        "Passed safety audit with commendation from safety officer",
        "22% reduction in breaker downtime during operations",
        "Saved ₹4.5 Lakhs annually on PPE kits and risk allowances"
      ]
    }
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
                <span className="text-hitech-teal font-medium">SAFETY INNOVATION</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal leading-tight">
                Intelligent Remote Racking Device
              </h1>
              <p className="text-lg sm:text-xl mb-8 text-gray-300 max-w-2xl">
                Revolutionizing breaker operation safety with our patented remote racking technology that keeps operators out of harm's way while providing precise control and real-time feedback.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-hitech-orange hover:bg-hitech-orange/90 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg transition-colors flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Request Demo
                </motion.button>
                <a
                  href="https://drive.google.com/uc?export=download&id=1L45-tx2LUGnsoHAogzCzOdsAS2Gp9XfG"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-hitech-teal text-hitech-teal hover:bg-hitech-teal/10 px-6 py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Brochure
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
                    <div className="font-bold">NFPA 70E Compliant</div>
                    <div className="text-sm text-gray-400">Arc flash safety</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-hitech-teal/20 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold">10m Range</div>
                    <div className="text-sm text-gray-400">Wireless operation</div>
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
                      src="/img/IRRD_PRODUCT.jpeg" 
                      alt="IRRD Device in industrial setting" 
                      className="w-full h-full object-contain p-8"
                      loading="eager"
                    />
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gray-900/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-lg">
                  <div className="text-hitech-teal font-bold text-sm">PATENTED TECHNOLOGY</div>
                  <div className="text-white text-xs">INDIAN Patent #IN10424445B2</div>
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
          <motion.div 
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Critical Safety Challenge in Breaker Racking
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Traditional breaker racking methods expose operators to dangerous arc flash hazards and can lead to equipment damage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problemStatements.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/70 hover:bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-hitech-teal/50 transition-all group"
                variants={childVariants}
                whileHover={{ y: -8 }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xl font-bold text-hitech-orange mb-2 group-hover:text-hitech-teal transition-colors">
                  {item.title}
                </div>
                <p className="text-gray-300">{item.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="text-xs text-gray-400">RISK FACTOR</div>
                  <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                    <div 
                      className="bg-hitech-orange h-2 rounded-full" 
                      style={{ width: `${70 + (index * 15)}%` }}
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
          <motion.div 
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Advanced Racking Technology
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our IRRD system combines safety, precision, and intelligence for modern electrical operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemFeatures.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900/70 hover:bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-hitech-teal/50 transition-all group relative overflow-hidden"
                variants={childVariants}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -right-6 -top-6 text-8xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {item.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-hitech-teal font-bold text-sm mb-2">FEATURE {index+1}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:py-20 bg-gray-900/50 relative">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Measurable Operational Benefits
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The IRRD delivers tangible improvements to safety, efficiency, and cost management.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/70 p-6 rounded-xl border border-gray-700 hover:border-hitech-teal/50 transition-all group"
                variants={childVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start">
                  <div className="bg-hitech-teal/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-hitech-orange">{item.title}</h3>
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

      {/* Technical Specifications */}
      <section className="py-16 px-4 sm:py-20 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Engineered for reliability and performance in demanding environments.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={childVariants}
          >
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-hitech-teal">General Specifications</h3>
              <div className="space-y-4">
                {[
                  { name: "Operating Voltage", value: "24V DC ±10%" },
                  { name: "Power Consumption", value: "<100W" },
                  { name: "Operating Temperature", value: "-10°C to 55°C" },
                  { name: "Storage Temperature", value: "-20°C to 70°C" },
                  { name: "Relative Humidity", value: "5% to 95% non-condensing" },
                  { name: "Weight", value: "8.5 kg (complete unit)" },
                  { name: "Dimensions", value: "420mm × 320mm × 180mm" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-hitech-teal">Performance Characteristics</h3>
              <div className="space-y-4">
                {[
                  { name: "Wireless Range", value: "10m (line of sight)" },
                  { name: "Racking Speed", value: "Adjustable 0.5-2 RPM" },
                  { name: "Torque Range", value: "5-50 Nm (configurable)" },
                  { name: "Torque Accuracy", value: "±2% of full scale" },
                  { name: "Position Feedback", value: "0.5° resolution" },
                  { name: "Data Logging", value: "1000+ operations" },
                  { name: "Compatibility", value: "Most 11kV-33kV breakers" },
                ].map((spec, i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-gray-700">
                    <span className="text-gray-300">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/dot-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Proven Industry Applications
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              The IRRD has been successfully deployed across multiple sectors with measurable results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div 
                key={study.id}
                className="bg-gray-900/70 hover:bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-hitech-orange/50 transition-all"
                variants={childVariants}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-hitech-orange/20 text-hitech-orange px-3 py-1 rounded-full text-sm font-bold mr-3">
                    CASE STUDY 0{study.id}
                  </div>
                  <div className="h-px bg-gray-700 flex-1"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                
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
                        <svg className="w-5 h-5 text-hitech-orange mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              READY TO TRANSFORM YOUR OPERATIONS?
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Schedule Your Personalized Demonstration
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              See how the IRRD can enhance safety and efficiency in your facility. Our experts will guide you through a live demo tailored to your specific needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-hitech-orange hover:bg-hitech-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact Sales
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-hitech-teal text-hitech-teal hover:bg-hitech-teal/10 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Request Demo
              </motion.button>
            </div>
            
            <div className="mt-8 text-gray-400 text-sm">
              <p>Have questions? Email us at <a href="mailto:support@hitechelectric.com" className="text-hitech-teal hover:underline">support@hitechelectric.com</a></p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default IRRDProductPage;