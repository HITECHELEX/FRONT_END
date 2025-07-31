import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";
import DocumentsPage from "./pages/DocumentsPage";
import IRRDProductPage from "./pages/IRRDProductPage";
import ProjectGalleryPage from "./pages/project_gallery";
import ADTCProductPage from "./pages/ADTCProductPage";
import './app.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/IRRDProductPage" element={<IRRDProductPage />} />
          <Route path="/ADTCProductPage" element={<ADTCProductPage/>} />
          <Route path="/project_gallery_page" element={<ProjectGalleryPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
