import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/At First Site Logo 2.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Logo Header */}
      <header className="bg-white py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <img
            src={logo}
            alt="At First Site Beauty On Location"
            className="w-full max-w-4xl h-auto object-contain"
            style={{ maxWidth: '1000px' }}
          />
        </div>
      </header>

      {/* Floating Navigation */}
      <nav className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isScrolled ? 'opacity-100' : 'opacity-70'
      }`}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-blush-400 transition-colors duration-200 px-3 py-1"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-blush-400 transition-colors duration-200 px-3 py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-gray-700 hover:text-blush-400 transition-colors duration-200 px-3 py-1"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="text-gray-700 hover:text-blush-400 transition-colors duration-200 px-3 py-1"
          >
            Gallery
          </button>
          <Button
            onClick={() => scrollToSection("booking")}
            className="bg-blush-300 hover:bg-blush-400 text-white px-4 py-1 rounded-full transition-colors duration-200"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-700 hover:text-blush-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>

          {isMenuOpen && (
            <div className="absolute right-0 top-14 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg p-4 min-w-48">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blush-400 transition-colors duration-200 text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-blush-400 transition-colors duration-200 text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-blush-400 transition-colors duration-200 text-left py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-700 hover:text-blush-400 transition-colors duration-200 text-left py-2"
                >
                  Gallery
                </button>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="bg-blush-300 hover:bg-blush-400 text-white px-4 py-2 rounded-full transition-colors duration-200"
                >
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
