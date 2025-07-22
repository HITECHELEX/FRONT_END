import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Button,
  Form,
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
  FaSearch,
} from "react-icons/fa";

export default function AppNavbar() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      {/* Top Bar */}
      <div
        className="bg-dark text-white py-3 px-3 d-flex justify-content-between align-items-center"
        style={{ fontSize: "14px" }}
      >
        <div className="me-3 d-flex align-items-center">
          <FaPhone className="me-2" />
          Call us: +91 8766730569
        </div>
        <div className="d-flex align-items-center">
          <FaEnvelope className="me-2" />
          Email: sales@hitechelex.com
        </div>
        <div className="d-flex gap-3">
          <a href="#" className="text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        sticky="top"
        className="shadow-sm"
        style={{
          backgroundColor: "rgba(245, 245, 245, 0.89)",
          backdropFilter: "blur(15px) saturate(180%)",
          WebkitBackdropFilter: "blur(10px) saturate(180%)",
          borderBottom: "8px solid #f9943b",
          boxShadow: "0 4px 20px 4px rgba(0, 245, 255, 0.6)",
          transition: "box-shadow 0.3s ease-in-out",
          zIndex: "999",
        }}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src="/img/logo.png"
              alt="Logo"
              width="60"
              height="60"
              className="me-3"
            />
            <div className="d-flex flex-column">
              <span
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                }}
              >
                HI-TECH ELEX LLP
              </span>
              <span style={{ fontSize: "12px", color: "#873" }}>
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
              <Nav className="ms-auto" style={{ color: "#0098a3" }}>
                <Nav.Link as={Link} to="/" onClick={handleClose}>
                  HOME
                </Nav.Link>

                {/* PROJECTS Dropdown */}
                <NavDropdown title="PROJECTS" id="projects-dropdown">
                  <NavDropdown.Item as={Link} to="/turnkey" onClick={handleClose}>
                    Turnkey Projects
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/scada" onClick={handleClose}>
                    SCADA Solutions
                  </NavDropdown.Item>
                </NavDropdown>

                

                
                <Nav.Link as={Link} to="/products" onClick={handleClose}>
                  PRODUCTS
                </Nav.Link>

                <Nav.Link as={Link} to="/Documents" onClick={handleClose}>
                  DOCUMENTS
                </Nav.Link>
                <Nav.Link as={Link} to="/about" onClick={handleClose}>
                  ABOUT US
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleClose}>
                  CONTACT US
                </Nav.Link>
              </Nav>

              {/* Search Form */}
              <Form
                className="d-flex ms-2 mt-3 mt-lg-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <Form.Control
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  style={{ maxWidth: "100px", fontSize: "16px" }}
                />
                <Button variant="outline-dark" type="submit">
                  <FaSearch />
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
