
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToElement = (elementId: string) => {
    console.log(`Scrolling to element: ${elementId}`);
    const element = document.getElementById(elementId);
    console.log(`Element found:`, element);
    
    if (element) {
      const headerHeight = 300; // Updated to match actual header height
      const elementPosition = element.offsetTop - headerHeight;
      console.log(`Element position: ${element.offsetTop}, Header height: ${headerHeight}, Scroll to: ${elementPosition}`);
      
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: "smooth"
      });
    } else {
      console.error(`Element with id "${elementId}" not found`);
      console.log("Available elements with IDs:", Array.from(document.querySelectorAll('[id]')).map(el => el.id));
    }
  };

  const handleNavClick = (target: string) => {
    console.log(`Navigation clicked for: ${target}, current location: ${location}`);
    setIsMenuOpen(false);

    if (target === "home") {
      console.log("Navigating to home");
      if (location !== '/') {
        setLocation('/');
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (target === "booking") {
      console.log("Navigating to booking page");
      setLocation('/book');
      return;
    }

    // For section navigation
    if (location !== '/') {
      // Navigate to home first, then scroll
      console.log("Not on home page, navigating to home first");
      setLocation('/');
      setTimeout(() => scrollToElement(target), 500); // Increased timeout
    } else {
      // Already on home, just scroll
      console.log("Already on home page, scrolling to section");
      scrollToElement(target);
    }
  };

  return (
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

      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center pb-3 overflow-x-auto">
        <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max items-center">
          <button
            onClick={() => handleNavClick("home")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("about")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
          >
            About
          </button>
          <button
            onClick={() => handleNavClick("services")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("gallery")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
          >
            Gallery
          </button>
          <button
            onClick={() => handleNavClick("testimonials")}
            className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick("booking")}
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
              onClick={() => handleNavClick("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => handleNavClick("testimonials")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
            >
              Testimonials
            </button>
            <button
              onClick={() => handleNavClick("booking")}
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
  );
}
