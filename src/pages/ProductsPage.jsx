import React, { useState, useCallback } from 'react';
import { FaFileDownload, FaExclamationTriangle } from 'react-icons/fa';
import Footer from '../components/Footer'; // Adjust path based on your project structure

const PdfSection = () => {
  // State for each PDF
  const [isLoadingCert, setIsLoadingCert] = useState(true);
  const [hasErrorCert, setHasErrorCert] = useState(false);
  const [isLoadingBrochure, setIsLoadingBrochure] = useState(true);
  const [hasErrorBrochure, setHasErrorBrochure] = useState(false);
  const [isLoadingTechSpecs, setIsLoadingTechSpecs] = useState(true);
  const [hasErrorTechSpecs, setHasErrorTechSpecs] = useState(false);
  const [isLoadingManual, setIsLoadingManual] = useState(true);
  const [hasErrorManual, setHasErrorManual] = useState(false);

  // Debounced download handler
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  };

  // Download handlers for each PDF
  const handleDownloadCert = useCallback(
    debounce(() => {
      window.open('https://drive.google.com/uc?export=download&id=1L45-tx2LUGnsoHAogzCzOdsAS2Gp9XfG', '_blank', 'noopener,noreferrer');
    }, 500),
    []
  );

  const handleDownloadBrochure = useCallback(
    debounce(() => {
      window.open('https://drive.google.com/uc?export=download&id=1fLgw-3noBPK-J7iPsnSxhLRR8GRvUCO0', '_blank', 'noopener,noreferrer');
    }, 500),
    []
  );

  const handleDownloadTechSpecs = useCallback(
    debounce(() => {
      window.open('https://drive.google.com/uc?export=download&id=1IeM0dUr5juQBBJvQ8xIRW9Uy6vcA3og_', '_blank', 'noopener,noreferrer');
    }, 500),
    []
  );

  const handleDownloadManual = useCallback(
    debounce(() => {
      window.open('https://drive.google.com/uc?export=download&id=1e5nAQAJq8hRMdREET9xtQ7KAtONvdw_n', '_blank', 'noopener,noreferrer');
    }, 500),
    []
  );

  // Load and error handlers for each PDF
  const handleIframeLoadCert = () => setIsLoadingCert(false);
  const handleIframeErrorCert = () => {
    setIsLoadingCert(false);
    setHasErrorCert(true);
  };

  const handleIframeLoadBrochure = () => setIsLoadingBrochure(false);
  const handleIframeErrorBrochure = () => {
    setIsLoadingBrochure(false);
    setHasErrorBrochure(true);
  };

  const handleIframeLoadTechSpecs = () => setIsLoadingTechSpecs(false);
  const handleIframeErrorTechSpecs = () => {
    setIsLoadingTechSpecs(false);
    setHasErrorTechSpecs(true);
  };

  const handleIframeLoadManual = () => setIsLoadingManual(false);
  const handleIframeErrorManual = () => {
    setIsLoadingManual(false);
    setHasErrorManual(true);
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex flex-col">
      {/* Full-screen background to cover side areas */}
      <div className="fixed inset-0 bg-gray-100 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex items-center justify-center py-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 bg-white rounded-lg shadow-lg">
          {/* Heading */}
          <header className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Documents</h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              View our certifications, product brochure, technical specifications, and user manual for detailed information.
            </p>
          </header>

          {/* PDF Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
            {/* Certification PDF */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b-2 border-orange-500">
                Certifications
              </h3>
              <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-lg border border-gray-200 rounded-lg overflow-hidden relative">
                {isLoadingCert && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                )}
                {hasErrorCert && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="text-center text-red-600">
                      <FaExclamationTriangle className="inline-block mb-2 text-2xl" />
                      <p className="text-sm">Failed to load certifications. Please try downloading.</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://drive.google.com/file/d/1L45-tx2LUGnsoHAogzCzOdsAS2Gp9XfG/preview"
                  title="Hi-Tech Electricals Certifications PDF"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="rounded"
                  onLoad={handleIframeLoadCert}
                  onError={handleIframeErrorCert}
                  aria-label="Certifications PDF viewer"
                >
                  <p className="p-4 text-gray-600">
                    Your browser does not support iframes. Please{' '}
                    <a
                      href="https://drive.google.com/uc?export=download&id=1L45-tx2LUGnsoHAogzCzOdsAS2Gp9XfG"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download the certifications
                    </a>{' '}
                    to view them.
                  </p>
                </iframe>
              </div>
              <button
                onClick={handleDownloadCert}
                className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Download certifications PDF"
              >
                <FaFileDownload className="mr-2" />
                Download Certifications
              </button>
            </div>

            {/* Brochure PDF */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b-2 border-orange-500">
                Brochure
              </h3>
              <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-lg border border-gray-200 rounded-lg overflow-hidden relative">
                {isLoadingBrochure && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                )}
                {hasErrorBrochure && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="text-center text-red-600">
                      <FaExclamationTriangle className="inline-block mb-2 text-2xl" />
                      <p className="text-sm">Failed to load brochure. Please try downloading.</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://drive.google.com/file/d/1fLgw-3noBPK-J7iPsnSxhLRR8GRvUCO0/preview"
                  title="Hi-Tech Electricals Brochure PDF"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="rounded"
                  onLoad={handleIframeLoadBrochure}
                  onError={handleIframeErrorBrochure}
                  aria-label="Brochure PDF viewer"
                >
                  <p className="p-4 text-gray-600">
                    Your browser does not support iframes. Please{' '}
                    <a
                      href="https://drive.google.com/uc?export=download&id=1fLgw-3noBPK-J7iPsnSxhLRR8GRvUCO0"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download the brochure
                    </a>{' '}
                    to view it.
                  </p>
                </iframe>
              </div>
              <button
                onClick={handleDownloadBrochure}
                className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Download brochure PDF"
              >
                <FaFileDownload className="mr-2" />
                Download Brochure
              </button>
            </div>

            {/* Technical Specifications PDF */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b-2 border-orange-500">
                Technical Specifications
              </h3>
              <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-lg border border-gray-200 rounded-lg overflow-hidden relative">
                {isLoadingTechSpecs && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                )}
                {hasErrorTechSpecs && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="text-center text-red-600">
                      <FaExclamationTriangle className="inline-block mb-2 text-2xl" />
                      <p className="text-sm">Failed to load technical specifications. Please try downloading.</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://drive.google.com/file/d/1IeM0dUr5juQBBJvQ8xIRW9Uy6vcA3og_/preview"
                  title="Hi-Tech Electricals Technical Specifications PDF"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="rounded"
                  onLoad={handleIframeLoadTechSpecs}
                  onError={handleIframeErrorTechSpecs}
                  aria-label="Technical Specifications PDF viewer"
                >
                  <p className="p-4 text-gray-600">
                    Your browser does not support iframes. Please{' '}
                    <a
                      href="https://drive.google.com/uc?export=download&id=1IeM0dUr5juQBBJvQ8xIRW9Uy6vcA3og_"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download the technical specifications
                    </a>{' '}
                    to view them.
                  </p>
                </iframe>
              </div>
              <button
                onClick={handleDownloadTechSpecs}
                className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Download technical specifications PDF"
              >
                <FaFileDownload className="mr-2" />
                Download Technical Specifications
              </button>
            </div>

            {/* User Manual PDF */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b-2 border-orange-500">
                User Manual
              </h3>
              <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-lg border border-gray-200 rounded-lg overflow-hidden relative">
                {isLoadingManual && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                  </div>
                )}
                {hasErrorManual && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
                    <div className="text-center text-red-600">
                      <FaExclamationTriangle className="inline-block mb-2 text-2xl" />
                      <p className="text-sm">Failed to load user manual. Please try downloading.</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://drive.google.com/file/d/1e5nAQAJq8hRMdREET9xtQ7KAtONvdw_n/preview"
                  title="Hi-Tech Electricals User Manual PDF"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="rounded"
                  onLoad={handleIframeLoadManual}
                  onError={handleIframeErrorManual}
                  aria-label="User Manual PDF viewer"
                >
                  <p className="p-4 text-gray-600">
                    Your browser does not support iframes. Please{' '}
                    <a
                      href="https://drive.google.com/uc?export=download&id=1e5nAQAJq8hRMdREET9xtQ7KAtONvdw_n"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      download the user manual
                    </a>{' '}
                    to view it.
                  </p>
                </iframe>
              </div>
              <button
                onClick={handleDownloadManual}
                className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Download user manual PDF"
              >
                <FaFileDownload className="mr-2" />
                Download User Manual
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PdfSection;