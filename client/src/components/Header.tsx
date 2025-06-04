import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@assets/1At First Site Logo (1000 x 350 px).png";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Main Logo Header */}
      <header className="bg-gradient-to-b from-white to-gray-50 flex items-center justify-center" style={{ height: '350px' }}>
        <div className="container mx-auto px-4 flex justify-center">
          <img
            src={logo}
            alt="At First Site Beauty On Location"
            className="h-auto object-contain"
            style={{ maxWidth: '800px', maxHeight: '200px' }}
          />
        </div>
      </header>

      {/* Sticky Book Now Button */}
      <Button
        onClick={() => scrollToSection("booking")}
        className="fixed bottom-6 right-6 z-50 bg-blush-300 hover:bg-blush-400 text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        Book Now
      </Button>
    </>
  );
}
