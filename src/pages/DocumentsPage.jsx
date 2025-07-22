import React, { useState, useCallback } from 'react';
import { FaFileDownload, FaExclamationTriangle } from 'react-icons/fa';
import Footer from '../components/Footer'; // Update path as per your project

const PdfSection = () => {
  const [isLoadingCert, setIsLoadingCert] = useState(true);
  const [hasErrorCert, setHasErrorCert] = useState(false);
  const [isLoadingBrochure, setIsLoadingBrochure] = useState(true);
  const [hasErrorBrochure, setHasErrorBrochure] = useState(false);
  const [isLoadingTechSpecs, setIsLoadingTechSpecs] = useState(true);
  const [hasErrorTechSpecs, setHasErrorTechSpecs] = useState(false);
  const [isLoadingManual, setIsLoadingManual] = useState(true);
  const [hasErrorManual, setHasErrorManual] = useState(false);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(null, args), wait);
    };
  };

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
      <style>
        {`
          :root {
            --primary: #0098a3;
            --primary-light: #e6f7f8;
            --primary-dark: #007780;
            --accent: rgb(255, 92, 0);
            --accent-light: rgba(255, 92, 0, 0.1);
            --accent-dark: rgb(204, 74, 0);
            --white: #ffffff;
            --gray-50: #f8fafc;
            --gray-100: #f1f5f9;
            --gray-200: #e2e8f0;
            --gray-300: #cbd5e0;
            --gray-400: #94a3b8;
            --gray-500: #64748b;
            --gray-600: #475569;
            --gray-700: #334155;
            --gray-800: #1e293b;
            --gray-900: #0f172a;
            --font-base: 'Inter', 'Segoe UI', Roboto, system-ui, sans-serif;
            --text-sm: 0.875rem;
            --text-base: 1rem;
            --text-lg: 1.125rem;
            --text-xl: 1.25rem;
            --text-2xl: 1.5rem;
            --text-3xl: 1.875rem;
            --text-4xl: 2.25rem;
            --space-2: 0.5rem;
            --space-3: 0.75rem;
            --space-4: 1rem;
            --space-5: 1.25rem;
            --space-6: 1.5rem;
            --radius-sm: 4px;
            --radius-md: 8px;
            --radius-lg: 12px;
            --radius-full: 9999px;
            --border-width: 1px;
            --shadow-sm: 0 1px 3px 0 rgba(0, 152, 163, 0.1);
            --shadow-md: 0 4px 6px -1px rgba(0, 152, 163, 0.1);
            --shadow-lg: 0 10px 15px -3px rgba(0, 152, 163, 0.1);
            --shadow-accent: 0 0 0 3px rgba(255, 92, 0, 0.2);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          html {
            scroll-behavior: smooth;
            font-family: var(--font-base);
          }
        `}
      </style>

      <div className="fixed inset-0 bg-gray-100 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-200" />
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center py-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 bg-white rounded-lg shadow-lg">
          <header className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Documents</h2>
            <p className="text-gray-500 text-sm sm:text-base mt-2">
              View our certifications, product brochure, technical specifications, and user manual for detailed information.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
            {renderPdfCard("Certifications", isLoadingCert, hasErrorCert, handleIframeLoadCert, handleIframeErrorCert, "1L45-tx2LUGnsoHAogzCzOdsAS2Gp9XfG", handleDownloadCert)}
            {renderPdfCard("Brochure", isLoadingBrochure, hasErrorBrochure, handleIframeLoadBrochure, handleIframeErrorBrochure, "1fLgw-3noBPK-J7iPsnSxhLRR8GRvUCO0", handleDownloadBrochure)}
            {renderPdfCard("Technical Specifications", isLoadingTechSpecs, hasErrorTechSpecs, handleIframeLoadTechSpecs, handleIframeErrorTechSpecs, "1IeM0dUr5juQBBJvQ8xIRW9Uy6vcA3og_", handleDownloadTechSpecs)}
            {renderPdfCard("User Manual", isLoadingManual, hasErrorManual, handleIframeLoadManual, handleIframeErrorManual, "1e5nAQAJq8hRMdREET9xtQ7KAtONvdw_n", handleDownloadManual)}
          </div>
        </div>
      </main>
    </div>
  );

  function renderPdfCard(title, isLoading, hasError, onLoad, onError, fileId, downloadHandler) {
    const previewURL = `https://drive.google.com/file/d/${fileId}/preview`;
    const downloadURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

    return (
      <div className="flex flex-col items-center">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 border-b-2 border-orange-500">{title}</h3>
        <div className="w-full h-[400px] sm:h-[500px] md:h-[550px] shadow-lg border border-gray-200 rounded-lg overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
              <div className="text-center text-red-600">
                <FaExclamationTriangle className="inline-block mb-2 text-2xl" />
                <p className="text-sm">Failed to load {title.toLowerCase()}. Please try downloading.</p>
              </div>
            </div>
          )}
          <iframe
            src={previewURL}
            title={`${title} PDF`}
            width="100%"
            height="100%"
            allow="autoplay"
            className="rounded"
            onLoad={onLoad}
            onError={onError}
            aria-label={`${title} PDF viewer`}
          >
            <p className="p-4 text-gray-600">
              Your browser does not support iframes. Please{' '}
              <a
                href={downloadURL}
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                download the {title.toLowerCase()}
              </a>{' '}
              to view it.
            </p>
          </iframe>
        </div>
        <button
          onClick={downloadHandler}
          className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 sm:px-6 rounded-lg shadow transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Download ${title} PDF`}
        >
          <FaFileDownload className="mr-2" />
          Download {title}
        </button>
      </div>
    );
  }
};

export default PdfSection;