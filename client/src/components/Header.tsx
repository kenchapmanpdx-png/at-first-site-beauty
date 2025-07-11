
import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = useCallback((sectionId: string) => {
    // Add visual feedback
    console.log(`Clicked: ${sectionId}`);
    
    // Close mobile menu
    setIsMenuOpen(false);
    
    // Special handling for home section - scroll to top
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
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [setLocation]);

  return (
    <>
      {/* TEST NAVIGATION - Fixed at top of page */}
      <div className="fixed top-0 left-0 right-0 bg-black text-white p-4 z-[9999] flex justify-center gap-4">
        <div className="text-yellow-300 font-bold mr-4">TEST MENU:</div>
        <button onClick={() => navigateToSection("home")} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          Home
        </button>
        <button onClick={() => navigateToSection("about")} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          About
        </button>
        <button onClick={() => navigateToSection("services")} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          Services
        </button>
        <button onClick={() => navigateToSection("gallery")} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          Gallery
        </button>
        <button onClick={() => navigateToSection("booking")} className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded">
          Booking
        </button>
      </div>

      <header className="relative bg-white mt-16" style={{ height: '280px' }}>
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

        {/* Desktop Navigation Menu Bar - KEEPING ORIGINAL */}
        <nav className="hidden md:flex justify-center pb-3 overflow-x-auto">
          <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max items-center">
            <button
              onClick={() => navigateToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => navigateToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => navigateToSection("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation cursor-pointer"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation cursor-pointer"
            >
              Gallery
            </button>
            <button
              onClick={() => navigateToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation cursor-pointer"
            >
              Booking
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center pb-1">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blush-400 transition-colors duration-200 cursor-pointer"
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
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => navigateToSection("about")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left cursor-pointer"
              >
                About
              </button>
              <button
                onClick={() => navigateToSection("services")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => navigateToSection("gallery")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left cursor-pointer"
              >
                Gallery
              </button>
              <button
                onClick={() => navigateToSection("booking")}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left cursor-pointer"
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
