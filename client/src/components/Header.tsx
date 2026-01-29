import { useState, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "wouter";
import LazyImage from "./LazyImage";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateToSection = useCallback((sectionId: string) => {
    setIsMenuOpen(false);

    if (sectionId === "home") {
      if (location === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setLocation("/");
      }
      return;
    }

    if (sectionId === "about" || sectionId === "services") {
      const targetPath = `/${sectionId}`;
      if (location === targetPath) {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setLocation(targetPath);
      }
      return;
    }

    if (sectionId === "booking") {
      setLocation('/book');
      return;
    }

    if (sectionId === "gallery") {
      if (location === "/") {
        const element = document.getElementById("gallery");
        element?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // Fallback or navigate to home then scroll (complex)
        // For now, let's just go home and scroll will happen if we add a route
        setLocation("/");
        setTimeout(() => {
          document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
      return;
    }
  }, [location, setLocation]);

  return (
    <header className="relative bg-white" style={{ height: '350px' }}>
      {/* Logo Section */}
      <div className="flex items-center justify-center pt-10 md:pt-16 pb-1 relative z-10">
        <Link href="/" className="container mx-auto px-4 flex justify-center">
          <LazyImage
            src="/attached_assets/webp/1At First Site Logo (1000 x 350 px).webp"
            alt="At First Site Beauty On Location"
            className="h-auto object-contain w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl"
            style={{ maxHeight: '200px' }}
            loading="eager"
            width={1000}
            height={350}
          />
        </Link>
      </div>

      {/* Desktop Navigation Menu Bar */}
      <nav className="hidden md:flex justify-center pb-3 overflow-x-auto relative z-20">
        <div className="flex space-x-4 md:space-x-8 px-4 md:px-8 py-3 min-w-max items-center">
          <Link href="/">
            <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30">
              About
            </a>
          </Link>
          <Link href="/services">
            <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30">
              Services
            </a>
          </Link>
          <Link href="/gallery">
            <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30">
              Gallery
            </a>
          </Link>
          <Link href="/book">
            <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation relative z-30">
              Booking
            </a>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-center pb-1 relative z-20">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-blush-400 transition-colors duration-200 relative z-30"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="font-medium">MENU</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t shadow-lg relative z-40">
          <nav className="flex flex-col py-4">
            <Link href="/">
              <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30">
                Services
              </a>
            </Link>
            <Link href="/gallery">
              <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30">
                Gallery
              </a>
            </Link>
            <Link href="/book">
              <a className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left relative z-30">
                Booking
              </a>
            </Link>
          </nav>
        </div>
      )}

      {/* Soft white transition - Moved pointer-events-none to prevent blocking */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent pointer-events-none z-0"></div>
    </header>
  );
}