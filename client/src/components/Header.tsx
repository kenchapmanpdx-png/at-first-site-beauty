import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import logoImage from "@assets/1At First Site Logo (1000 x 350 px)bb_1749329806337.png";

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
        {/* Logo Section - Image-based logo */}
        <div className="flex items-center justify-center pt-2 md:pt-4 pb-1 md:pb-2">
          <div className="container mx-auto px-4 flex justify-center">
            <div className="text-center">
              <img
                src="/api/placeholder/300/100"
                alt="At First Site Beauty On Location - Premier Bridal Hair and Makeup Services Pacific Northwest"
                className="w-auto h-12 md:h-16"
                style={{
                  content: 'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDUwMCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwhLS0gQXQgRmlyc3QgU2l0ZSAtLT4KPHN0eWxlPgoudGV4dCB7CiAgZm9udC1mYW1pbHk6ICdDdXJzaXZlJywgc2VyaWY7CiAgZmlsbDogIzMzMzsKfQouc2NyaXB0IHsKICBmb250LWZhbWlseTogJ0N1cnNpc2UnLCAnQnJ1c2ggU2NyaXB0IE1UJywgc2VyaWY7CiAgZm9udC1zaXplOiA0OHB4OwogIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgZm9udC1zdHlsZTogaXRhbGljOwp9Ci5zdWJ0aXRsZSB7CiAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiAxNHB4OwogIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgbGV0dGVyLXNwYWNpbmc6IDJweDsKfQo8L3N0eWxlPgo8dGV4dCB4PSIyNSIgeT0iNzAiIGNsYXNzPSJzY3JpcHQiPkF0IEZpcnN0IFNpdGU8L3RleHQ+Cjx0ZXh0IHg9IjcwIiB5PSIxMjAiIGNsYXNzPSJzdWJ0aXRsZSI+QkVBVVRZIE9OIExPQ0FUSU9OPC90ZXh0Pgo8L3N2Zz4=")'
                }}
              />
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