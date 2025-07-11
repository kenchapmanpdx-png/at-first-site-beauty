import { useState, useCallback, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  // Auto-run debug on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      const allIds = Array.from(document.querySelectorAll('[id]')).map(el => el.id);
      const sections = ['about', 'services', 'gallery'];
      const foundSections = sections.map(id => ({
        id,
        found: !!document.getElementById(id)
      }));
      
      console.log('🔍 AUTO DEBUG RESULTS:');
      console.log('Current path:', location);
      console.log('Looking for sections:', sections);
      console.log('Found sections:', foundSections);
      console.log('All IDs on page:', allIds);
      
      setDebugInfo({
        allIds,
        foundSections,
        currentPath: location
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location]);

  const navigateToSection = useCallback((sectionId: string) => {
    // Test if click is working
    alert(`Clicked: ${sectionId}`);
    console.log(`Navigation clicked: ${sectionId}`);
    
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Special handling for home section
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Special handling for booking page
    if (sectionId === "booking") {
      setLocation('/book');
      return;
    }

    // For section navigation
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 300;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth"
      });
    } else {
      alert(`Section "${sectionId}" not found on page!`);
    }
  }, [setLocation]);

  return (
    <>
      {/* Debug Info at Top */}
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-2 z-[9999] text-xs">
        <div className="max-w-6xl mx-auto">
          <strong>DEBUG MODE:</strong> Path: {location} | 
          Sections found: {debugInfo?.foundSections.filter(s => s.found).map(s => s.id).join(', ') || 'checking...'} | 
          Missing: {debugInfo?.foundSections.filter(s => !s.found).map(s => s.id).join(', ') || 'checking...'}
        </div>
      </div>

      <header className="relative bg-white mt-8" style={{ height: '280px' }}>
        {/* Logo Section */}
        <div className="flex items-center justify-center pt-2 md:pt-8 pb-1">
          <div className="container mx-auto px-4 flex justify-center">
            <img
              src={logo}
              alt="At First Site Beauty On Location"
              className="h-auto object-contain w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
              style={{ maxHeight: '180px' }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        {/* Desktop Navigation Menu Bar */}
        <nav className="hidden md:flex justify-center pb-3 overflow-x-auto">
          <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max items-center">
            <button
              onClick={() => navigateToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Home
            </button>
            <button
              onClick={() => navigateToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              About
            </button>
            <button
              onClick={() => navigateToSection("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Gallery
            </button>
            <button
              onClick={() => navigateToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Booking
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center pb-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blush-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="font-medium">MENU</span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg">
            <nav className="flex flex-col py-4">
              <button
                onClick={() => navigateToSection("home")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Home
              </button>
              <button
                onClick={() => navigateToSection("about")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                About
              </button>
              <button
                onClick={() => navigateToSection("services")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Services
              </button>
              <button
                onClick={() => navigateToSection("gallery")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => navigateToSection("booking")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Booking
              </button>
            </nav>
          </div>
        )}

        {/* Soft white transition to hero photo */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent"></div>
      </header>
    </>
  );
}