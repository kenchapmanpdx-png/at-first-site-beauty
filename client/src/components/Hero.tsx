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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 md:pt-0" itemScope itemType="https://schema.org/Organization">
      {/* Background Image with Enhanced Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center parallax-bg filter grayscale scale-105 transition-all duration-700"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 20%',
          backgroundSize: 'cover',
          transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.3}px) scale(1.05)` : 'scale(1.05)',
        }}
        role="img"
        aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location - elegant outdoor bridal photography in Pacific Northwest"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-white/30 rounded-full floating-element hidden md:block" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-40 left-16 w-1 h-1 bg-blush-300/40 rounded-full floating-element hidden md:block" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-white/20 rounded-full floating-element hidden md:block" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full floating-element hidden lg:block" style={{animationDelay: '1s'}}></div>

      <div className={`relative z-10 text-center text-white px-4 py-8 max-w-4xl mx-auto transform transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}>
        <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-light leading-relaxed opacity-90 ${
          isLoaded ? 'stagger-2' : ''
        }`} style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)' }}>
          Serving the Pacific Northwest with elegance, expertise, and ease
        </p>
        <Button
          onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
          className={`premium-button text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation ${
            isLoaded ? 'stagger-3' : ''
          }`}
        >
          Book Your Design Session
        </Button>
      </div>


    </section>
  );
}
