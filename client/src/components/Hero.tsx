import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/IMG_0945.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Luxury Bridal Hair & Makeup,{" "}
          <span className="text-blush-300">On Location</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
          Serving the Pacific Northwest with elegance, expertise, and ease
        </p>
        <Button
          onClick={() => scrollToSection("booking")}
          className="bg-blush-300 hover:bg-blush-400 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Book Your Design Session
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
}
