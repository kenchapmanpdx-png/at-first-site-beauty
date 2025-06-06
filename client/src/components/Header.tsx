import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <>
      {/* Mobile-First Responsive Header */}
      <header className="relative bg-white">
        {/* Logo Section - Responsive sizing */}
        <div className="flex items-center justify-center pt-4 md:pt-8 pb-2 md:pb-4">
          <div className="container mx-auto px-4 flex justify-center">
            <img
              src={logo}
              alt="At First Site Beauty On Location"
              className="h-auto object-contain max-w-[320px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[800px] xl:max-w-[1000px]"
              style={{ maxHeight: '140px' }}
            />
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-center pb-4">
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
        <nav className="hidden md:flex justify-center pb-4">
          <div className="flex space-x-6 lg:space-x-8 px-4 py-3">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-3 py-2 touch-manipulation"
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
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Gallery
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("booking")}
                  className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-base px-4 py-3 text-left touch-manipulation rounded-lg hover:bg-gray-50"
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
