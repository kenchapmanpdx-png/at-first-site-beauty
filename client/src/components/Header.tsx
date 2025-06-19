import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@assets/1At First Site Logo (1000 x 350 px)bb_1749329806337_1750282076832.png";
import beautyOnLocationText from "@assets/1At First Site Logob (1000 x 350 px)_1750282542411.png";
import LazyImage from "./LazyImage";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    // Check for hash on component mount
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const navigateToSection = (sectionId: string) => {
    if (window.location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center pt-6 pb-1.5 md:pt-12 md:pb-3">
          <div className="w-full max-w-6xl px-4">
            <LazyImage
              src={logoImage}
              alt="At First Site Beauty On Location"
              className="mx-auto block max-w-[80vw] max-h-[100px] w-auto h-auto"
              loading="eager"
            />
          </div>
          {/* Beauty On Location Text */}
          <div className="w-full max-w-4xl px-4 mt-2">
            <LazyImage
              src={beautyOnLocationText}
              alt="Beauty On Location"
              className="mx-auto block max-w-[60%] max-h-[40px] w-auto h-auto"
              loading="eager"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex justify-center pb-2 relative z-10">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center pb-2 relative z-10">
          <div className="flex space-x-6 lg:space-x-8 px-4 py-2 text-sm font-medium text-gray-800">
            <button onClick={() => window.location.href = '/'} className="hover:text-blush-400 cursor-pointer">Home</button>
            <button onClick={(e) => { 
              e.preventDefault(); 
              navigateToSection('about');
            }} className="hover:text-blush-400 cursor-pointer">About</button>
            <button onClick={(e) => { 
              e.preventDefault(); 
              navigateToSection('services');
            }} className="hover:text-blush-400 cursor-pointer">Services</button>
            <button onClick={(e) => { 
              e.preventDefault(); 
              navigateToSection('gallery');
            }} className="hover:text-blush-400 cursor-pointer">Gallery</button>
            <button onClick={(e) => { 
              e.preventDefault(); 
              navigateToSection('testimonials');
            }} className="hover:text-blush-400 cursor-pointer">Testimonials</button>
            <button onClick={(e) => { 
              e.preventDefault(); 
              navigateToSection('booking');
            }} className="hover:text-blush-400 cursor-pointer">Booking</button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="py-4">
              <div className="flex flex-col space-y-2 px-4">
                <a href="/" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</a>
                <button onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(false);
                  navigateToSection('about');
                }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">About</button>
                <button onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(false);
                  navigateToSection('services');
                }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Services</button>
                <button onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(false);
                  navigateToSection('gallery');
                }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Gallery</button>
                <button onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(false);
                  navigateToSection('testimonials');
                }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Testimonials</button>
                <button onClick={(e) => { 
                  e.preventDefault(); 
                  setIsMenuOpen(false);
                  navigateToSection('booking');
                }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Booking</button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind the floating header */}
      <section className="pt-48 md:pt-56"></section>
    </>
  );
}