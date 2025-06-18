import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImage from "@assets/1At First Site Logo (1000 x 350 px)bb_1749329806337_1750282076832.png";
import beautyOnLocationText from "@assets/1At First Site Logob (1000 x 350 px)_1750282542411.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center pt-6 pb-1.5 md:pt-12 md:pb-3">
          <div className="w-full max-w-6xl px-4">
            <img
              src={logoImage}
              alt="At First Site Beauty On Location"
              className="mx-auto block"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "80vw",
                maxHeight: "100px",
              }}
            />
          </div>
          {/* Beauty On Location Text */}
          <div className="w-full max-w-4xl px-4 mt-2">
            <img
              src={beautyOnLocationText}
              alt="Beauty On Location"
              className="mx-auto block"
              style={{
                width: "auto",
                height: "auto",
                maxWidth: "60%",
                maxHeight: "40px",
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
            <a href="/" className="hover:text-blush-400">Home</a>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/#about'; }} className="hover:text-blush-400">About</a>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/#services'; }} className="hover:text-blush-400">Services</a>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/#gallery'; }} className="hover:text-blush-400">Gallery</a>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/#testimonials'; }} className="hover:text-blush-400">Testimonials</a>
            <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/#booking'; }} className="hover:text-blush-400">Booking</a>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
            <nav className="py-4">
              <div className="flex flex-col space-y-2 px-4">
                <a href="/" className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/#about'; }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">About</a>
                <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/#services'; }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Services</a>
                <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/#gallery'; }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Gallery</a>
                <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/#testimonials'; }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Testimonials</a>
                <a href="/" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.location.href = '/#booking'; }} className="text-gray-700 hover:text-blush-400 px-4 py-3 text-left rounded-lg hover:bg-gray-50">Booking</a>
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