import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/IMG_0970_1749066905982.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center" itemScope itemType="https://schema.org/Organization">
      {/* Background Image with Responsive Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg filter grayscale"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px)` : 'none',
        }}
        role="img"
        aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location - elegant outdoor bridal photography in Pacific Northwest"
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className={`relative z-10 text-center text-white px-4 py-8 max-w-4xl mx-auto transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h1 className={`font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight fade-slide-up ${
          isLoaded ? 'stagger-1' : ''
        }`}>
          Luxury Bridal Hair & Makeup,{" "}
          <span className="text-blush-300">On Location</span>
        </h1>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light opacity-90 fade-slide-up leading-relaxed ${
          isLoaded ? 'stagger-2' : ''
        }`}>
          Serving the Pacific Northwest with elegance, expertise, and ease
        </p>
        <Button
          onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
          className={`bg-blush-300 hover:bg-blush-400 active:bg-blush-500 text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg fade-slide-up touch-manipulation ${
            isLoaded ? 'stagger-3' : ''
          }`}
        >
          Book Your Design Session
        </Button>
      </div>

      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={24} className="md:size-32 opacity-70" />
      </div>
    </section>
  );
}
