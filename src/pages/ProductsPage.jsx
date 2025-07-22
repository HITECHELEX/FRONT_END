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
    image: '/img/categories/relays.jpg',
  },
  {
    id: 2,
    name: 'Switchgear',
    slug: 'switchgear',
    description: 'MV/HV/EHV breakers and spare parts for robust power distribution.',
    icon: <FaCogs />,
    image: '/img/categories/switchgear.jpg',
  },
  {
    id: 3,
    name: 'Panels',
    slug: 'panels',
    description: 'Modular MCB and control panels for industrial applications.',
    icon: <FaPlug />,
    image: '/img/categories/panels.jpg',
  },
  {
    id: 4,
    name: 'Power System Solutions',
    slug: 'solutions',
    description: 'ETAP-based power system studies and automation solutions.',
    icon: <FaChartLine />,
    image: '/img/categories/solutions.jpg',
  },
];

const CategoryPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    initial: { scale: 1 },
    visible: {
      scale: 1.05,
      transition: {
        duration: 5,
        ease: 'easeOut',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  };

  return (
    <motion.div
      className="category-page relative bg-hitech-black text-hitech-offwhite snap-y snap-mandatory"
      style={{
        '--hitech-black': '#0a0a0a',
        '--hitech-offwhite': '#f8f8f8',
        '--hitech-orange': '#f9943b',
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Global background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none z-0" />

      {/* Category Sections */}
      {categories.map((category, idx) => (
        <motion.section
          key={category.id}
          className={`relative w-full min-h-[60vh] flex items-center justify-center snap-start ${
            idx !== categories.length - 1 ? 'mb-8' : ''
          }`}
          style={{ backgroundColor: 'var(--hitech-black)' }}
          variants={childVariants}
        >
          {/* Background Image with animation */}
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            initial="initial"
            animate="visible"
          >
            <img
              src={category.image}
              alt={`${category.name} category background`}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = '/img/categories/placeholder.png')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hitech-black/80 to-transparent" />
          </motion.div>

          {/* Foreground content */}
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div className="flex flex-col items-center" variants={childVariants}>
              <span className="text-4xl text-[var(--hitech-orange)] mb-4">{category.icon}</span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-[var(--hitech-orange)]">
                {category.name}
              </h2>
              <p className="text-lg font-light text-hitech-offwhite opacity-75 max-w-xl mx-auto mb-6">
                {category.description}
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={`/products?category=${category.slug}`}
                  className="inline-block bg-[var(--hitech-orange)] text-hitech-offwhite py-2 px-6 rounded-md hover:bg-[#e08934] text-sm font-medium"
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
