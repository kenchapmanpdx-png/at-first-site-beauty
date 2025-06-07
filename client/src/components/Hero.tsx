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

  return (
    <section id="home" className="relative h-screen flex items-center justify-center" itemScope itemType="https://schema.org/Organization">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover parallax-bg filter grayscale"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 35%',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
        role="img"
        aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location - elegant outdoor bridal photography in Pacific Northwest"
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <h1 className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight fade-slide-up ${
          isLoaded ? 'stagger-1' : ''
        }`}>
          Luxury Bridal Hair & Makeup,{" "}
          <span className="text-blush-300">On Location</span>
        </h1>
        <p className={`text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-light opacity-90 fade-slide-up ${
          isLoaded ? 'stagger-2' : ''
        }`}>
          Serving the Pacific Northwest with elegance, expertise, and ease
        </p>
        <Button
          onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
          className={`bg-blush-300 hover:bg-blush-400 active:bg-blush-500 text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg fade-slide-up touch-manipulation ${
            isLoaded ? 'stagger-3' : ''
          }`}
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