
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const headerHeight = 120;
      const elementPosition = aboutSection.offsetTop - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center" itemScope itemType="https://schema.org/Organization">
      {/* Hidden SEO H1 tag */}
      <h1 className="sr-only">At First Site | Luxury Bridal Hair & Makeup in the Pacific Northwest</h1>
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover parallax-bg filter grayscale"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 35%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
        }}
        role="img"
        aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location - elegant outdoor bridal photography in Pacific Northwest"
      >
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4 leading-tight">
          <span className="block">Luxury Bridal Hair & Makeup</span>
          <span className="block text-xl md:text-2xl lg:text-3xl font-light mt-2">
            On-Location in the Pacific Northwest
          </span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating timeless beauty for your special day with personalized, on-site services throughout Oregon and Washington.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => window.location.href = '/book'}
            className="premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            Book Your Design Session
          </Button>
          
          <Button 
            variant="outline"
            onClick={scrollToAbout}
            className="border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-medium transition-all duration-300 bg-transparent backdrop-blur-sm touch-manipulation"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToAbout}
          className="text-white hover:text-blush-200 transition-colors duration-300 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
}
