import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = useCallback((sectionId: string) => {
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
    <header className="relative bg-white" style={{ height: '280px' }}>
      {/* Logo Section */}
      <div className="flex items-center justify-center pt-2 md:pt-8 pb-1 relative z-10">
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

      {/* Desktop Navigation Menu Bar - Added relative positioning and z-index */}
      <nav className="hidden md:flex justify-center pb-3 overflow-x-auto relative z-20">
        <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max items-center">
          <button
            onClick={() => navigateToSection("home")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30"
            style={{ position: 'relative', zIndex: 30 }}
          >
            Home
          </button>
          <button
            onClick={() => navigateToSection("about")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30"
            style={{ position: 'relative', zIndex: 30 }}
          >
            About
          </button>
          <button
            onClick={() => navigateToSection("services")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30"
            style={{ position: 'relative', zIndex: 30 }}
          >
            Services
          </button>
          <button
            onClick={() => navigateToSection("gallery")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30"
            style={{ position: 'relative', zIndex: 30 }}
          >
            Gallery
          </button>
          <button
            onClick={() => navigateToSection("booking")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30"
            style={{ position: 'relative', zIndex: 30 }}
          >
            Booking
          </button>
        </div>
      </nav>

      {/* Mobile Menu Button - Added z-index */}
      <div className="md:hidden flex justify-center pb-1 relative z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blush-400 transition-colors duration-200 relative z-30"
          aria-label="Toggle menu"
          style={{ position: 'relative', zIndex: 30 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="font-medium">MENU</span>
        </button>
      </div>

      {/* Mobile Navigation Menu - Added z-index */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg relative z-40">
          <nav className="flex flex-col py-4">
            <button
              onClick={() => navigateToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30"
            >
              Home
            </button>
            <button
              onClick={() => navigateToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30"
            >
              About
            </button>
            <button
              onClick={() => navigateToSection("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30"
            >
              Gallery
            </button>
            <button
              onClick={() => navigateToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30"
            >
              Booking
            </button>
          </nav>
        </div>
      )}

      {/* Soft white transition - Moved pointer-events-none to prevent blocking */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0"></div>
    </header>
  );
}