import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@assets/At First Site Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center justify-center py-0.5 md:py-1">
          <div className="w-full max-w-6xl px-4">
            <img
              src={logoImage}
              alt="At First Site Beauty On Location"
              className="mx-auto block"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "80%",
                maxHeight: "100px",
              }}
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
            <a href="#home" className="hover:text-blush-400">Home</a>
            <a href="#about" className="hover:text-blush-400">About</a>
            <a href="#services" className="hover:text-blush-400">Services</a>
            <a href="#gallery" className="hover:text-blush-400">Gallery</a>
            <a href="#testimonials" className="hover:text-blush-400">Testimonials</a>
            <a href="#booking" className="hover:text-blush-400">Booking</a>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="py-4">
              <div className="flex flex-col space-y-2 px-4">
                <a href="#home" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">About</a>
                <a href="#services" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Services</a>
                <a href="#gallery" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Gallery</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Testimonials</a>
                <a href="#booking" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Booking</a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer to prevent content from hiding behind the floating header */}
      <section className="pt-28 md:pt-36"></section>
    </>
  );
}