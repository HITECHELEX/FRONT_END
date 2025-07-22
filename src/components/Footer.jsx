import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate"; // Adjust path if needed
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa"; // Social media icons

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <motion.footer
      className="relative pt-6 pb-4 px-4 w-full flex flex-col text-hitech-offwhite bg-gradient-to-br from-hitech-black via-gray-900 to-hitech-black overflow-hidden"
      style={{
        "--hitech-black": "#0a0a0a",
        "--hitech-offwhite": "#f8f8f8",
        "--hitech-teal": "#0098a3",
      }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      role="contentinfo"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />

      {/* Top CTA Section with Reduced Height and Professional Look */}
      <motion.div
        className="relative d-flex flex-column flex-md-row justify-content-between align-items-center p-3 mb-5 mx-0"
        style={{
          background: "linear-gradient(45deg, #1a1a1a, #252525)",
          boxShadow: "0 0 15px rgba(249, 148, 59, 0.3)",
          borderRadius: "10px",
          border: "1px solid rgba(249, 148, 59, 0.2)",
        }}
        variants={childVariants}
        whileHover={{
          boxShadow: "0 0 25px rgba(249, 148, 59, 0.5)",
          y: -5,
        }}
        transition={{ type: "spring", stiffness: 150 }}
        aria-label="Newsletter subscription section"
      >
        <div className="d-flex justify-content-between align-items-center flex-wrap">
  {/* Left Text Section */}
  <div className="text-center text-md-start mb-4 mb-md-0">
    <h3 className="fw-semibold mb-1 text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal">
      Grow your business with
    </h3>
    <p
      className="fw-bold mb-0 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
      style={{ textShadow: "0 0 5px rgba(236, 120, 18, 0.31)" }}
    >
      Hi Tech Elex LLP
    </p>
  </div>

 
</div>

        <form
          className="d-flex flex-column flex-md-row w-90 w-md-auto mt-2 mt-md-0"
          onSubmit={handleSubscribe}
        >
          <motion.input
            type="email"
            placeholder="Your email"
            className="form-control me-md-2 mb-2 mb-md-0"
            style={{
              border: "1px solid var(--hitech-teal)",
              borderRadius: "6px",
              backgroundColor: "#ffffff",
              color: "#000",
              padding: "6px 10px",
              fontSize: "13px",
              width: "200px",
              boxShadow: "0 0 5px rgba(0, 152, 163, 0.2)",
            }}
            whileFocus={{
              borderColor: "#f9943b",
              scale: 1.01,
              boxShadow: "0 0 8px rgba(249, 148, 59, 0.4)",
            }}
            aria-label="Email address for newsletter"
            required
          />
          <motion.button
            className="btn fw-medium"
            style={{
              background: "linear-gradient(45deg, var(--hitech-teal), #00b7c2)",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              padding: "6px 14px",
              fontSize: "13px",
              boxShadow: "0 0 5px rgba(0, 152, 163, 0.2)",
            }}
            whileHover={{
              scale: 1.03,
              background: "linear-gradient(45deg, #00b7c2, var(--hitech-teal))",
              boxShadow: "0 0 8px rgba(0, 152, 163, 0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            aria-label="Subscribe to newsletter"
          >
            Subscribe
          </motion.button>
        </form>
      </motion.div>

      {/* Footer Links, Social Media & Google Translate */}
      <div className="row text-start mx-0 relative">
        <motion.div
          className="col-md-3 col-6 mb-4"
          variants={childVariants}
          style={{ boxShadow: "0 0 10px rgba(249, 148, 59, 0.2)" }}
          whileHover={{ boxShadow: "0 0 15px rgba(249, 148, 59, 0.4)" }}
        >
          <h6
            className="fw-semibold mb-3 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
            style={{ textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
          >
            Company
          </h6>
          <ul className="list-unstyled">
            {["About", "Features", "Works", "Career"].map((item) => (
              <motion.li
                key={item}
                className="mb-2"
                whileHover={{ x: 5, color: "#f9943b", textShadow: "0 0 3px rgba(249, 148, 59, 0.3)" }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  style={{ color: "inherit", textDecoration: "none", fontSize: "15px" }}
                  aria-label={`Navigate to ${item} page`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="col-md-3 col-6 mb-4"
          variants={childVariants}
          style={{ boxShadow: "0 0 10px rgba(249, 148, 59, 0.2)" }}
          whileHover={{ boxShadow: "0 0 15px rgba(249, 148, 59, 0.4)" }}
        >
          <h6
            className="fw-semibold mb-3 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
            style={{ textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
          >
            Help
          </h6>
          <ul className="list-unstyled">
            {["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"].map((item) => (
              <motion.li
                key={item}
                className="mb-2"
                whileHover={{ x: 5, color: "#f9943b", textShadow: "0 0 3px rgba(249, 148, 59, 0.3)" }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                  style={{ color: "inherit", textDecoration: "none", fontSize: "15px" }}
                  aria-label={`Navigate to ${item} page`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="col-md-3 col-6 mb-4"
          variants={childVariants}
          style={{ boxShadow: "0 0 10px rgba(249, 148, 59, 0.2)" }}
          whileHover={{ boxShadow: "0 0 15px rgba(249, 148, 59, 0.4)" }}
        >
          <h6
            className="fw-semibold mb-3 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
            style={{ textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
          >
            Resources
          </h6>
          <ul className="list-unstyled">
            {["Product Demo", "Development Solutions", "EDAQ-Solutions", "YouTube"].map((item) => (
              <motion.li
                key={item}
                className="mb-2"
                whileHover={{ x: 5, color: "#f9943b", textShadow: "0 0 3px rgba(255, 169, 8, 0.99)" }}
              >
                <Link
                  to={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                  style={{ color: "inherit", textDecoration: "none", fontSize: "15px" }}
                  aria-label={`Navigate to ${item} page`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="col-md-3 col-6 mb-4 d-flex flex-column align-items-start align-items-md-end"
          variants={childVariants}
          style={{ boxShadow: "0 0 10px rgba(249, 148, 59, 0.2)" }}
          whileHover={{ boxShadow: "0 0 15px rgba(249, 148, 59, 0.4)" }}
        >
          <h6
            className="fw-semibold mb-3 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
            style={{ textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
          >
            Connect With Us
          </h6>
          <div className="d-flex mb-3">
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              whileHover={{ scale: 1.2, color: "#f9943b", textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
              aria-label="Follow us on Twitter"
            >
              <FaTwitter size={22} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              whileHover={{ scale: 1.2, color: "#f9943b", textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
              aria-label="Follow us on LinkedIn"
            >
              <FaLinkedin size={22} />
            </motion.a>
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
              whileHover={{ scale: 1.2, color: "#f9943b", textShadow: "0 0 5px rgba(249, 148, 59, 0.3)" }}
              aria-label="Subscribe to our YouTube channel"
            >
              <FaYoutube size={22} />
            </motion.a>
          </div>
          <h6
            className="fw-semibold mb-3 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
            style={{ textShadow: "0 0 5px rgba(237, 212, 20, 0.3)" }}
          >
            Select Your Language
          </h6>
          <GoogleTranslate />
        </motion.div>
      </div>

      {/* Bottom Branding */}
      <motion.div
        className="text-center mt-5 relative"
        variants={childVariants}
        style={{ boxShadow: "0 0 10px rgba(0, 152, 163, 0.2)" }}
      >
        <h5
          className="fw-semibold mb-2 text-lg bg-clip-text text-transparent bg-gradient-to-r from-hitech-offwhite to-hitech-teal"
          style={{ textShadow: "0 0 5px rgba(0, 152, 163, 0.3)" }}
        >
          Hi-Tech Elex LLP
        </h5>
        <p className="small mb-2 text-base font-light leading-relaxed">
          Empowering with Smart Electrical, SCADA & Automation Solutions.
        </p>
        <p className="small opacity-75 text-sm">
          © {new Date().getFullYear()} Hi-Tech Elex LLP. All rights reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}