import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  return (
    <motion.div
      className="relative min-h-screen flex flex-col items-center justify-center text-hitech-offwhite bg-gradient-to-br from-hitech-black via-gray-900 to-hitech-black overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

      {/* Main Content */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
        variants={childVariants}
      >
        HI-TECH ELEX LLP
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl max-w-2xl text-center mb-8 px-4 font-light leading-relaxed"
        variants={childVariants}
      >
        Building smarter electrical and automation solutions with creativity, precision, and cutting-edge technology.
      </motion.p>
      <motion.div variants={childVariants}>
        <Link to="/explore">
         <motion.button
          className="relative bg-[#f8943a] text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 15px rgba(248, 148, 58, 0.5)", // updated to match new color
              }}
             whileTap={{ scale: 0.95 }}
            >
            Explore Now
            <span className="absolute inset-0 rounded-full bg-hitech-teal opacity-0 hover:opacity-20 transition-opacity" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 text-sm opacity-50"
        variants={childVariants}
      >
        Innovate. Automate. Celebrate.
      </motion.div>
    </motion.div>
  );
}