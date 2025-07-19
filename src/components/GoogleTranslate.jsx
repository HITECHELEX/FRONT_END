import { useEffect, useState } from "react";

// Configuration constants
const TRANSLATE_CONFIG = {
  pageLanguage: "en",
  includedLanguages: "en,hi,gu,kn,ml,mr,ta,te,bn,pa,or,tr,es,de,ko", // Added Spanish (es) and German (de)  ok do add lang where we can do any other funct
  layout: "google.translate.TranslateElement.InlineLayout.SIMPLE",
  autoDisplay: false,
};


const SCRIPT_SRC = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

// Load Google Translate script with error handling
const loadTranslateScript = (callbackName) => {
  const script = document.createElement("script");
  script.src = SCRIPT_SRC;
  script.async = true;
  script.onerror = () => console.error("Failed to load Google Translate script");
  document.body.appendChild(script);
  return () => {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  };
};

const GoogleTranslate = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if script is already loaded
    if (window.google?.translate?.TranslateElement) {
      setScriptLoaded(true);
      return;
    }

    // Debounce script loading check
    const checkScript = setInterval(() => {
      if (window.google?.translate?.TranslateElement) {
        setScriptLoaded(true);
        clearInterval(checkScript);
      }
    }, 100);

    // Set up global callback
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: TRANSLATE_CONFIG.pageLanguage,
            includedLanguages: TRANSLATE_CONFIG.includedLanguages,
            layout: window[TRANSLATE_CONFIG.layout],
            autoDisplay: TRANSLATE_CONFIG.autoDisplay,
          },
          "google_translate_element"
        );
        setScriptLoaded(true);
      } catch (err) {
        setError("Failed to initialize Google Translate");
        console.error(err);
      }
    };

    // Load script and clean up
    const cleanup = loadTranslateScript("googleTranslateElementInit");
    return () => {
      clearInterval(checkScript);
      cleanup();
      delete window.googleTranslateElementInit;
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="translate-widget"
      role="region"
      aria-label="Language selection"
    >
      {error ? (
        <span className="text-red-500 text-xs" role="alert">
          {error}
        </span>
      ) : !scriptLoaded ? (
        <span className="text-gray-500 text-xs animate-pulse">
          Loading languages...
        </span>
      ) : null}
    </div>
  );
};

export default GoogleTranslate;