import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const [location, setLocation] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (sectionId: string) => {
    // Close mobile menu
    setIsMenuOpen(false);

    // Handle home navigation
    if (sectionId === "home") {
      if (location === '/') {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setLocation('/');
      }
      return;
    }

    // Handle booking navigation
    if (sectionId === "booking") {
      setLocation('/book');
      return;
    }

    // Handle section navigation
    if (location === '/') {
      // Already on home page, scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 120;
          const elementPosition = element.offsetTop - headerHeight;
          window.scrollTo({
            top: Math.max(0, elementPosition),
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      // On different page, store target and navigate to home
      sessionStorage.setItem("scrollTarget", sectionId);
      setLocation('/');
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    { id: "testimonials", label: "Testimonials" },
    { id: "booking", label: "Booking" }
  ];

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
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium text-sm md:text-base px-2 py-2 min-w-max touch-manipulation"
            >
              {item.label}
            </button>
          ))}
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
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 hover:text-blush-400 active:text-blush-500 transition-colors duration-200 font-medium px-6 py-3 text-left"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Soft white transition to hero photo */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-white/80 to-transparent"></div>
    </header>
  );
}