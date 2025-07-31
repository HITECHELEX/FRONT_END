import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function AppNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      {/* Top Bar - Improved with gradient and better spacing */}
      <div
        className="bg-dark text-white py-2 px-3 d-flex flex-wrap justify-content-between align-items-center"
        style={{
          fontSize: "14px",
          background: "linear-gradient(90deg, #1a1a1a 0%, #2d2d2d 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)"
        }}
      >
        <div className="me-3 d-flex align-items-center">
          <FaPhone className="me-2" style={{ color: "#f9943b" }} />
          <span className="d-none d-sm-inline" style={{ opacity: 0.8 }}>Call us: </span>
          <span style={{ fontWeight: 500 }}>+91 8766730569</span>
        </div>
        <div className="d-flex align-items-center">
          <FaEnvelope className="me-2" style={{ color: "#f9943b" }} />
          <span className="d-none d-sm-inline" style={{ opacity: 0.8 }}>Email: </span>
          <span style={{ fontWeight: 500 }}>sales@hitechelex.com</span>
        </div>
        <div className="d-flex gap-3 mt-2 mt-sm-0">
          {[
            { icon: <FaFacebookF />, color: "#4267B2" },
            { icon: <FaTwitter />, color: "#1DA1F2" },
            { icon: <FaLinkedinIn />, color: "#0077B5" },
            { icon: <FaYoutube />, color: "#FF0000" },
          ].map((social, index) => (
            <a 
              href="#" 
              key={index}
              className="text-white d-flex align-items-center justify-content-center"
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: social.color,
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>


      {/* Main Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        className="shadow-sm"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "5px solid #f9943b",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          zIndex: "999",
        }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/img/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="me-2"
              style={{ objectFit: "contain" }}
            />
            <div className="d-flex flex-column">
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#222",
                }}
              >
                HI-TECH ELEX LLP
              </span>
              <span
                style={{
                  fontSize: "12px",
                  color: "#777",
                }}
              >
                Creating Smart Electrical Systems
              </span>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle onClick={handleShow} />

          <Navbar.Offcanvas
            placement="end"
            show={showOffcanvas}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto text-uppercase fw-semibold">
                <Nav.Link as={Link} to="/" onClick={handleClose}>
                  Home
                </Nav.Link>

                <NavDropdown title="Projects" id="projects-dropdown">
                  <NavDropdown.Item as={Link} to="/turnkey" onClick={handleClose}>
                    Turnkey Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/scada" onClick={handleClose}>
                    SCADA Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/products" onClick={handleClose}>
                  Products
                </Nav.Link>

                <Nav.Link as={Link} to="/documents" onClick={handleClose}>
                  Documents
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleClose}>
                  About Us
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleClose}>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
