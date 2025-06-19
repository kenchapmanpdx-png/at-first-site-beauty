import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
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
  };

  return (
    <>
      {/* Main Logo Header */}
      <header className="relative bg-white" style={{ height: '400px' }}>
        {/* Logo Section */}
        <div className="flex items-center justify-center pt-4 md:pt-8 pb-1">
          <div className="container mx-auto px-4 flex justify-center">
            <img
              src={logo}
              alt="At First Site Beauty On Location"
              className="h-auto object-contain w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
              style={{ maxHeight: '200px' }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
        
        {/* Navigation Menu Bar */}
        <nav className="flex justify-center pb-3 overflow-x-auto">
          <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("booking")}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              Booking
            </button>
          </div>
        </nav>
        
        {/* Soft white transition to hero photo */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent"></div>
      </header>
    </>
  );
}