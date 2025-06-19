import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/IMG_0970_1749066905982.png";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const isMobile = window.innerWidth <= 768;

    const handleScroll = () => {
      if (!ticking && !isMobile) { // Disable parallax on mobile for performance
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    if (!isMobile) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-[120vh] flex items-center justify-center -mt-32 pt-32 -mb-16 pb-16 overflow-hidden" itemScope itemType="https://schema.org/Organization">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover parallax-bg filter grayscale"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 30%',
          transform: window.innerWidth > 768 ? `translateY(${scrollY * 0.5}px)` : 'none',
          willChange: window.innerWidth > 768 ? 'transform' : 'auto',
        }}
        role="img"
        aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location - elegant outdoor bridal photography in Pacific Northwest"
      >
        <div className="hero-overlay absolute inset-0"></div>
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent"></div>
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
          className={`premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-500 transform hover:scale-105 active:scale-95 shadow-lg fade-slide-up touch-manipulation ${
            isLoaded ? 'stagger-3' : ''
          }`}
        >
          <div className="sparkle">✦</div>
          <div className="sparkle">✦</div>
          <div className="sparkle">✦</div>
          <div className="sparkle">✦</div>
          <div className="sparkle">✦</div>
          Book Your Design Session
        </Button>
      </div>

      {/* DREAM TEAM OVERLAY INSIDE HERO */}
      <div className="scroll-slow absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 text-center z-30 transition-all duration-500 text-white drop-shadow-lg max-w-3xl px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 transition-all duration-500 text-white">
          Meet Your <span className="transition-all duration-500 text-blush-200">Dream Team</span>
        </h2>
        <p className="text-lg leading-relaxed transition-all duration-500 text-gray-100">
          With over 30 years of combined experience in the beauty industry, we created a platform built on trust. When you book with us, your hair and makeup will be done to absolute perfection.
        </p>
      </div>

      {/* Gradient fade between hero and grid */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-white z-20"></div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={32} className="opacity-70" />
      </div>
    </section>
  );
}