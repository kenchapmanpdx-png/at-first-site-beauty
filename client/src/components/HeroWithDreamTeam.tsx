import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/IMG_0970_1749066905982.png";
import holliePhoto from "@assets/HollieD_1749336182646.png";
import cedarPhoto from "@assets/IMG_8201.jpeg";

export default function HeroWithDreamTeam() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderOverPhoto, setIsHeaderOverPhoto] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ticking = false;
    const isMobile = window.innerWidth <= 768;
    
    const handleScroll = () => {
      if (headerRef.current && sectionRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const isOverPhotos = headerRect.top < sectionRect.top + sectionRect.height * 0.5;
        setIsHeaderOverPhoto(isOverPhotos);
      }

      if (!ticking && !isMobile) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slowEls = entry.target.querySelectorAll('.scroll-slow');
            const fastEls = entry.target.querySelectorAll('.scroll-animation');
            slowEls.forEach((el) => el.classList.add('animate'));
            fastEls.forEach((el, i) =>
              setTimeout(() => el.classList.add('animate'), 500 + i * 300)
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* HERO IMAGE SECTION */}
      <section id="home" className="relative h-[120vh] flex items-center justify-center -mt-32 pt-32 -mb-16 pb-16 overflow-hidden">
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
          aria-label="Luxury bridal styling showcase by At First Sight Beauty On Location"
        >
          <div className="hero-overlay absolute inset-0"></div>
          <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-gray-50 via-gray-50/60 via-gray-50/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-gray-50 z-20"></div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
            Luxury Bridal Hair & <br className="hidden md:block" /> 
            Makeup, <span className="text-blush-200">On Location</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Serving the Pacific Northwest with elegance, expertise, and ease.
          </p>
          <Button 
            asChild
            className="bg-gradient-to-r from-blush-400 to-blush-500 hover:from-blush-500 hover:to-blush-600 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition-all duration-300 sparkle-animation"
          >
            <a href="/book">Book Your Design Session</a>
          </Button>
        </div>

        {/* DREAM TEAM HEADER OVERLAY */}
        <div
          ref={headerRef}
          className={`scroll-slow absolute bottom-[200px] md:bottom-[160px] left-1/2 transform -translate-x-1/2 z-50 text-center max-w-4xl px-10 py-14 transition-all duration-500 ${
            isHeaderOverPhoto ? 'text-white drop-shadow-lg' : 'text-white drop-shadow-lg'
          } bg-black/60 backdrop-blur-sm shadow-xl rounded-2xl border border-white/10`}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-white" style={{textShadow: '3px 3px 6px rgba(0,0,0,1)'}} data-aos="fade-up">
            Meet Your <span className="text-blush-200">Dream Team</span>
          </h2>
          <p className="text-xl leading-relaxed text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.9)'}} data-aos="fade-up" data-aos-delay="200">
            Combined, we have well over 30 years in the beauty industry. Cedar owns the only private care college in the Pacific Northwest that focuses solely on makeup artistry, while Hollie has operated a thriving salon for over 18 years. Together, we envisioned a booking company that creates trust in our brand — when you contact us, your hair and makeup will be done to absolute perfection.
          </p>
        </div>
      </section>

      {/* BIO SECTION */}
      <section ref={sectionRef} className="pt-20 pb-20 bg-gradient-to-b from-gray-50/80 to-gray-50 watercolor-bg" id="about">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl">
          {/* Hollie DeMarais */}
          <article className="scroll-animation text-center" itemScope itemType="https://schema.org/Person">
            <img
              src={holliePhoto}
              alt="Hollie DeMarais - Professional bridal hair stylist and owner of Vata Salon with 18+ years experience in Pacific Northwest wedding beauty"
              className="w-64 md:w-80 h-80 md:h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              loading="lazy"
              width="320"
              height="384"
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2" itemProp="name">
              Hollie DeMarais
            </h3>
            <p className="text-blush-400 mb-4 font-medium" itemProp="jobTitle">
              Owner of Vata Salon, Aveda Educator
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" itemProp="description">
              Award-winning salon owner with over 18 years of experience in the beauty industry. Hollie ensures perfection through elite artist selection and rigorous training programs. Her expertise in bridal hair styling has made her a sought-after educator and mentor in the Pacific Northwest.
            </p>
          </article>

          {/* Cedar Lapp-Ngauamo */}
          <article className="scroll-animation text-center" itemScope itemType="https://schema.org/Person">
            <img
              src={cedarPhoto}
              alt="Cedar Lapp-Ngauamo - Founder of Cedars Academy of Makeup Artistry, professional bridal makeup artist with 12+ years experience"
              className="w-64 md:w-80 h-80 md:h-96 object-cover object-top rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              loading="lazy"
              width="320"
              height="384"
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2" itemProp="name">
              Cedar Lapp-Ngauamo
            </h3>
            <p className="text-blush-400 mb-4 font-medium" itemProp="jobTitle">
              Founder of Cedars Academy of Makeup Artistry
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" itemProp="description">
              Owner of the only private career college focused exclusively on makeup artistry. Cedar personally trains and certifies every makeup artist in our network, ensuring consistent excellence and adherence to the highest industry standards for bridal beauty.
            </p>
          </article>
        </div>

        {/* Trust Promise Section */}
        <div className="container mx-auto px-4 max-w-4xl mt-16">
          <div className="bg-blush-50 rounded-2xl p-8 text-center">
            <h4 className="font-playfair text-2xl font-semibold text-blush-600 mb-4">
              Trust in Our Brand Promise
            </h4>
            <p className="text-gray-700 leading-relaxed text-lg">
              You're not just hiring amazing artists. You're investing in a system of excellence. Our makeup will wear beautifully throughout your entire day, and our styling will photograph flawlessly. This is the trust and quality control that sets us apart in the Pacific Northwest.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}