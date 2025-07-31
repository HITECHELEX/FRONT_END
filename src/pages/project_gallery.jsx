import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "CORDLESS JIG SAW",
    image: "/img/products/ADTC.png",
    glow: "#48CFAD",
    description: "Precision cutting with zero resistance",
    features: [
      "20V MAX Lithium-Ion battery",
      "4-Stroke Orbital Action",
      "Tool-Free Blade Change"
    ],
    price: "$199.99"
  },
  {
    id: 2,
    name: "6-1/2\" CIRCULAR SAW",
    image: "/img/products/EDAQ.png", 
    glow: "#F8943A",
    description: "Ultra-compact with brushless motor",
    features: [
      "15 Amp Motor",
      "56° Bevel Capacity",
      "Dust Blower"
    ],
    price: "$179.99"
  },
  {
    id: 3, 
    name: "RIGHT ANGLE DRILL",
    image: "/img/products/IRRD.png",
    glow: "#5D9CEC",
    description: "Tight space access with 90° head",
    features: [
      "7.5V Brushless Motor",
      "LED Work Light",
      "Magnetic Bit Holder"
    ],
    price: "$159.99"
  },
  {
    id: 4,
    name: "IMPACT DRIVER",
    image: "/img/products/PHMS.png",
    glow: "#AC92EC",
    description: "High-torque fastening system",
    features: [
      "1800 RPM",
      "3-Speed Settings",
      "Quick-Release Chuck"
    ],
    price: "$149.99"
  },
  {
    id: 5,
    name: "MULTI-TOOL",
    image: "/img/products/LAMD.png",
    glow: "#ED5565",
    description: "Oscillating cutter/sander",
    features: [
      "Variable Speed",
      "Quick-Change Accessories",
      "Anti-Vibration Handle"
    ],
    price: "$129.99"
  }
];

export default function OptimizedProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const carouselRef = useRef(null);
  
  // Auto-rotate carousel with pause on hover
  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setActiveIndex(prev => (prev + 1) % products.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  // 3D positioning logic with responsive adjustments
  const getProductStyle = (index) => {
    const angle = (index * (360 / products.length)) - activeIndex * (360 / products.length);
    const distance = window.innerWidth < 768 ? 100 : 150;
    return {
      x: Math.sin(angle * Math.PI / 180) * distance,
      z: -Math.cos(angle * Math.PI / 180) * distance,
      rotateY: angle,
      scale: index === activeIndex ? 1.25 : 0.8,
      opacity: index === activeIndex ? 1 : 0.6,
      filter: index === activeIndex ? 
        `drop-shadow(0 0 20px ${products[index].glow}80)` : 
        "brightness(0.7) drop-shadow(0 0 5px rgba(0,0,0,0.3))",
      zIndex: index === activeIndex ? 10 : 1
    };
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-hitech-black to-gray-900 flex flex-col items-center justify-center py-12 px-4">
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <motion.div 
          className="absolute inset-0 bg-grid"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Tech Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-hitech-teal"
          style={{
            width: `${Math.random() * 4 + 2}px`,
            height: `${Math.random() * 4 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 0.2, 0]
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Main Header */}
      <motion.header 
        className="text-center mb-8 md:mb-12 px-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
        >
          INDUSTRIAL TOOLS
        </motion.h1>
        <motion.p 
          className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 0.3 }}
        >
          Professional-grade tools engineered for precision and durability
        </motion.p>
      </motion.header>

      {/* Interactive 3D Carousel */}
      <div 
        ref={carouselRef}
        className="relative h-[280px] sm:h-[320px] md:h-[360px] w-full max-w-4xl perspective-1000 flex items-center justify-center"
        onMouseEnter={() => setIsAutoRotating(false)}
        onMouseLeave={() => setIsAutoRotating(true)}
      >
        {products.map((product, index) => {
          const style = getProductStyle(index);
          return (
            <motion.div
              key={product.id}
              className="absolute cursor-pointer origin-center"
              style={{
                x: style.x,
                z: style.z,
                rotateY: `${style.rotateY}deg`,
                scale: style.scale,
                opacity: style.opacity,
                filter: style.filter,
                zIndex: style.zIndex,
                transformStyle: "preserve-3d"
              }}
              animate={{
                x: style.x,
                z: style.z,
                rotateY: `${style.rotateY}deg`,
                scale: style.scale,
                opacity: style.opacity,
                filter: style.filter,
                zIndex: style.zIndex
              }}
              transition={{ 
                type: "spring", 
                stiffness: 50, 
                damping: 15,
                mass: 0.7
              }}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoRotating(false);
              }}
              whileHover={{ 
                scale: style.scale * 1.08,
                transition: { duration: 0.15 } 
              }}
            >
              <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex items-center justify-center">
                {/* Optimized Product Image */}
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[80%] max-w-[80%] object-contain"
                  whileHover={{ 
                    y: [0, -3, 0],
                    transition: { 
                      duration: 0.8,
                      repeat: Infinity 
                    } 
                  }}
                  loading="lazy"
                  decoding="async"
                />
                
                {/* Enhanced Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ 
                    backgroundColor: product.glow,
                    filter: "blur(24px)"
                  }}
                  animate={{
                    opacity: [0.15, 0.3, 0.15],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Center Indicator */}
        <div className="absolute w-3 h-3 rounded-full bg-hitech-teal/40"></div>
      </div>

      {/* Product Info Panel */}
      <motion.section 
        className="mt-8 md:mt-12 text-center max-w-2xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 text-hitech-teal">
            {products[activeIndex].name}
          </h2>
          <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">
            {products[activeIndex].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <motion.button
              className="bg-hitech-teal text-hitech-black px-5 py-2 md:px-6 md:py-2 rounded-full font-medium flex items-center justify-center gap-2"
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 15px ${products[activeIndex].glow}`
              }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedProduct(products[activeIndex])}
            >
              <span>VIEW DETAILS</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
            <motion.button
              className="border border-hitech-teal text-hitech-teal px-5 py-2 md:px-6 md:py-2 rounded-full font-medium"
              whileHover={{ 
                scale: 1.03,
                backgroundColor: "rgba(72, 207, 173, 0.08)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              QUICK VIEW
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Navigation Controls */}
      <motion.div 
        className="flex items-center gap-4 sm:gap-6 mt-6 md:mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <button 
          onClick={() => {
            setActiveIndex(prev => (prev - 1 + products.length) % products.length);
            setIsAutoRotating(false);
          }}
          className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Previous product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-1.5 sm:gap-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoRotating(false);
              }}
              className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-hitech-teal scale-[1.4]' : 'bg-gray-600'}`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => {
            setActiveIndex(prev => (prev + 1) % products.length);
            setIsAutoRotating(false);
          }}
          className="p-1.5 sm:p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
          aria-label="Next product"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 to-hitech-black rounded-xl md:rounded-2xl overflow-hidden max-w-4xl w-full relative border border-gray-800"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Animated Glow Border */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden"
                style={{
                  background: `conic-gradient(from 0deg, transparent, ${selectedProduct.glow}, transparent)`,
                  zIndex: -1,
                  opacity: 0.4
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="p-6 md:p-8">
                <button
                  className="absolute top-3 right-3 md:top-4 md:right-4 z-10 p-1.5 md:p-2 rounded-full hover:bg-gray-800 transition-colors"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Close modal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                  <motion.div
                    className="flex-1 flex justify-center items-center bg-gray-800/40 rounded-lg p-6 md:p-8"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="relative w-full h-full max-h-[300px] flex items-center justify-center">
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name}
                        className="max-h-full max-w-full object-contain"
                        loading="eager"
                      />
                      <motion.div
                        className="absolute inset-0 rounded-lg pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, ${selectedProduct.glow}15, transparent 60%)`
                        }}
                        animate={{
                          opacity: [0.2, 0.35, 0.2]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity
                        }}
                      />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal">
                        {selectedProduct.name}
                      </h2>
                      <p className="text-sm md:text-base text-gray-400 mb-2">{selectedProduct.description}</p>
                      <div className="text-lg md:text-xl text-hitech-teal font-bold mb-4 md:mb-6">{selectedProduct.price}</div>
                    </motion.div>
                    
                    <motion.ul 
                      className="space-y-2 md:space-y-3 mb-6 md:mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedProduct.features.map((feature, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-start"
                          initial={{ x: -8, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 + i * 0.05 }}
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5 mt-0.5 mr-2 flex-shrink-0 text-hitech-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm md:text-base text-gray-300">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                    
                    <motion.div
                      className="flex flex-col sm:flex-row gap-3"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <button className="bg-hitech-teal text-hitech-black px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold flex-1 flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all text-sm md:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        ADD TO CART
                      </button>
                      <button className="border border-hitech-teal text-hitech-teal px-5 py-2.5 md:px-6 md:py-3 rounded-full font-bold flex-1 hover:bg-hitech-teal/10 transition-all text-sm md:text-base">
                        FULL SPECS
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <motion.div 
        className="mt-12 md:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link to="/">
          <motion.button
            className="px-6 py-2.5 md:px-8 md:py-3 rounded-full font-medium border border-gray-700 hover:border-hitech-teal transition-all relative overflow-hidden group text-sm md:text-base"
            whileHover={{ 
              scale: 1.03,
              backgroundColor: "rgba(40, 40, 40, 0.8)"
            }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              BACK TO HOME
            </span>
            <span className="absolute inset-0 bg-hitech-teal opacity-0 group-hover:opacity-10 transition-opacity"></span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Global Styles */}
      <style jsx global>{`
        .bg-grid {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0;
        }
      `}</style>
    </div>
  );
}