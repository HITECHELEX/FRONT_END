









import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaCogs, FaPlug, FaChartLine } from 'react-icons/fa';

// Category data with images and icons
const categories = [
  {
    id: 1,
    name: 'Protective Relays',
    slug: 'relays',
    description: 'Siemens SIPROTEC relays for advanced differential and overcurrent protection.',
    icon: <FaShieldAlt />,
    image: 'https://images.unsplash.com/photo-1581092160607-36e2d26a5b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    name: 'Switchgear',
    slug: 'switchgear',
    description: 'MV/HV/EHV breakers and spare parts for robust power distribution.',
    icon: <FaCogs />,
    image: 'https://images.unsplash.com/photo-1581092162385-454a4e3c3e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3,
    name: 'Panels',
    slug: 'panels',
    description: 'Modular MCB and control panels for industrial applications.',
    icon: <FaPlug />,
    image: 'https://images.unsplash.com/photo-1581092160607-36e2d26a5b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    name: 'Power System Solutions',
    slug: 'solutions',
    description: 'ETAP-based power system studies and automation solutions.',
    icon: <FaChartLine />,
    image: 'https://images.unsplash.com/photo-1581092162385-454a4e3c3e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80',
  },
];

const CategoryPage = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  // Animation variants for child elements
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Animation variants for images with subtle zoom
  const imageVariants = {
    initial: { scale: 1, opacity: 0.7 },
    visible: {
      scale: 1.1,
      opacity: 1,
      transition: {
        duration: 6,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div
      className="category-page relative bg-[#0a0a0a] text-[#f8f8f8] snap-y snap-mandatory overflow-y-auto"
      style={{
        minHeight: '100vh',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Global background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none z-0" />

      {/* Category Sections */}
      {categories.map((category, idx) => (
        <motion.section
          key={category.id}
          className={`relative w-full min-h-screen flex items-center justify-center snap-start py-12 ${
            idx !== categories.length - 1 ? 'mb-12' : ''
          }`}
          style={{ backgroundColor: '#0a0a0a' }}
          variants={childVariants}
        >
          {/* Background Image with animation */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            variants={imageVariants}
            initial="initial"
            animate="visible"
          >
            <img
              src={category.image}
              alt={`${category.name} category background`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/1350x900?text=Placeholder+Image')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/70 to-transparent" />
          </motion.div>

          {/* Foreground content */}
          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div className="flex flex-col items-center" variants={childVariants}>
              <motion.span
                className="text-5xl text-[#f9943b] mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {category.icon}
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#f8f8f8] to-[#f9943b]">
                {category.name}
              </h2>
              <p className="text-lg md:text-xl font-light text-[#f8f8f8] opacity-80 max-w-2xl mx-auto mb-8">
                {category.description}
              </p>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Link
                  to={`/products?category=${category.slug}`}
                  className="inline-block bg-[#f9943b] text-[#0a0a0a] py-3 px-8 rounded-full font-semibold text-base hover:bg-[#e08934] transition-colors duration-300"
                  style={{ textDecoration: 'none' }}
                  aria-label={`Explore products in ${category.name}`}
                >
                  Explore Now
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default CategoryPage;