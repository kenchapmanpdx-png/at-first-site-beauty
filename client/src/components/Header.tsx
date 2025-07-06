import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = useCallback((sectionId: string) => {
    // If we're already on the home page, scroll to the section
    if (location === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calculate proper offset considering the large header
        const headerHeight = 420; // Account for the full header height
        const elementPosition = element.offsetTop - headerHeight;
        window.scrollTo({
          top: Math.max(0, elementPosition),
          behavior: "smooth"
        });
      }
    } else {
      // If we're on a different page, navigate to home and then scroll to section
      setLocation('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 420;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location, setLocation]);

  return (
    <>
      {/* Main Logo Header */}
      <header className="relative bg-white" style={{ height: '280px' }}>
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
              onClick={() => navigateToSection("testimonials")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Testimonials
            </button>
            <button
              onClick={() => setLocation('/book')}
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
                onClick={() => {
                  navigateToSection("home");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Home
              </button>
              <button
                onClick={() => {
                  navigateToSection("about");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigateToSection("services");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigateToSection("gallery");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  navigateToSection("testimonials");
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  setLocation('/book');
                  setIsMenuOpen(false);
                }}
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