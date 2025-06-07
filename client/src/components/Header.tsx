import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [, setLocation] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
    setIsServicesDropdownOpen(false); // Close dropdown after navigation
  };

  const navigateToPage = (path: string) => {
    setLocation(path);
    setIsMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  return (
    <>
      {/* Mobile-First Responsive Header */}
      <header className="relative bg-white">
        {/* Logo Section - Text-based responsive logo */}
        <div className="flex items-center justify-center pt-4 md:pt-8 pb-2 md:pb-4">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="text-center">
              <h1 className="leading-tight">
                <span className="block text-8xl sm:text-9xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-regency font-medium text-gray-700 drop-shadow-lg" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
                  At First Site
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-[0.4em] mt-0 md:mt-2 text-blush-400 uppercase drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                  Beauty On Location
                </span>
              </h1>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center pb-6 relative z-10">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-blush-400 p-2"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex justify-center pb-6 relative z-10">
          <div className="flex space-x-6 lg:space-x-8 px-4 py-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
            >
              About
            </button>
            <div className="relative group">
              <button
                onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                className="flex items-center text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 z-50"
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <div className="py-2">
                    <button
                      onClick={() => navigateToPage("/bridal-design-session")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Bridal Design Session
                    </button>
                    <button
                      onClick={() => navigateToPage("/bridal-party")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Bridal Party
                    </button>
                    <button
                      onClick={() => navigateToPage("/spray-tanning")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Spray Tanning
                    </button>
                    <button
                      onClick={() => navigateToPage("/teeth-whitening")}
                      className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Teeth Whitening
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-xl px-3 py-2 touch-manipulation"
            >
              Booking
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu - Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="py-4">
              <div className="flex flex-col space-y-2 px-4">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  About
                </button>
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Services Submenu */}
                  {isMobileServicesOpen && (
                    <div className="ml-4 mt-2 space-y-2 border-l-2 border-blush-200 pl-4">
                      <button
                        onClick={() => navigateToPage("/bridal-design-session")}
                        className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        Bridal Design Session
                      </button>
                      <button
                        onClick={() => navigateToPage("/bridal-party")}
                        className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        Bridal Party
                      </button>
                      <button
                        onClick={() => navigateToPage("/spray-tanning")}
                        className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        Spray Tanning
                      </button>
                      <button
                        onClick={() => navigateToPage("/teeth-whitening")}
                        className="block w-full text-left px-4 py-2 text-gray-600 hover:text-blush-400 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
                      >
                        Teeth Whitening
                      </button>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-lg px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Booking
                </button>
              </div>
            </nav>
          </div>
        )}
        
        {/* Soft white transition to hero photo */}
        <div className="absolute bottom-0 left-0 right-0 h-8 md:h-12 bg-gradient-to-b from-white/80 to-transparent"></div>
      </header>
    </>
  );
}
