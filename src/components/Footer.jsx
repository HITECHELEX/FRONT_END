import GoogleTranslate from "./GoogleTranslate"; // Adjust path if needed

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#000000", color: "#ffffff" }} className="pt-5 pb-4 px-3">
      {/* Top CTA Section with Brighter Glow */}
      <div
        className="d-flex flex-column flex-md-row justify-content-between align-items-center p-4 mb-5"
        style={{
          background: "#1c1c1c",
          boxShadow: "0 0 40px rgba(249, 148, 59, 0.7)", // Glow intensified
          borderRadius: "16px",
          border: "1px solid rgba(249, 148, 59, 0.4)", // Soft border for better glow edge
          transition: "box-shadow 0.3s ease-in-out",
        }}
      >
        <div className="mb-3 mb-md-0 text-center text-md-start">
          <h3 className="fw-bold mb-1">Grow your business fast with</h3>
          <p className="fw-bold mb-1" style={{ color: "#f9943b" }}>Hi-Tech Elex LLP</p>
        </div>
        <form className="d-flex w-50 w-md-auto">
          <input
            type="email"
            placeholder="Enter email address"
            className="form-control me-4"
            style={{
              border: "1px solid #0098a3",
              borderRadius: "6px",
              backgroundColor: "#f0f0f0",
              color: "#000",
            }}
          />
          <button
            className="btn fw-bold"
            style={{
              backgroundColor: "#0098a3",
              color: "#fff",
              border: "none",
            }}
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Footer Links & Google Translate */}
      <div className="row text-start">
        <div className="col-md-3 col-6 mb-4">
          <h6 className="fw-bold" style={{ color: "#f9943b" }}>Company</h6>
          <ul className="list-unstyled">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <h6 className="fw-bold" style={{ color: "#f9943b" }}>Help</h6>
          <ul className="list-unstyled">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-md-3 col-6 mb-4">
          <h6 className="fw-bold" style={{ color: "#f9943b" }}>Resources</h6>
          <ul className="list-unstyled">
            <li>Product Demo</li>
            <li>Development Solutions</li>
            <li>EDAQ-Solutions</li>
            <li>YouTube</li>
          </ul>
        </div>

        {/* Google Translate placed here */}
        <div className="col-md-3 col-6 mb-4 d-flex flex-column align-items-start align-items-md-end">
          <h6 className="fw-bold mb-3" style={{ color: "#f9943b" }}>Select Your Language</h6>
          <GoogleTranslate />
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="text-center mt-4">
        <h5 className="fw-bold" style={{ color: "#0098a3" }}>Hi-Tech Elex LLP</h5>
        <p className="small mb-1">
          Empowering with Smart Electrical, SCADA & Automation Solutions.
        </p>
        <p className="small">
          © {new Date().getFullYear()} Hi-Tech Elex LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
