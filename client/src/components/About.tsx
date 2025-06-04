import { useEffect, useRef, useState } from "react";
import teamPhoto1 from "@assets/IMG_0944.png";
import teamPhoto2 from "@assets/IMG_0943.png";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderOverPhoto, setIsHeaderOverPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if header is over photo area
      if (headerRef.current && sectionRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        
        // Check if header is in the lower portion of the section (over photos)
        const isOverPhotos = headerRect.top < sectionRect.top + (sectionRect.height * 0.6);
        setIsHeaderOverPhoto(isOverPhotos);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slowAnimations = entry.target.querySelectorAll('.scroll-slow');
            const normalAnimations = entry.target.querySelectorAll('.scroll-animation');
            
            // Animate slow elements first (heading)
            slowAnimations.forEach((animation) => {
              animation.classList.add('animate');
            });
            
            // Then animate normal elements with stagger
            normalAnimations.forEach((animation, index) => {
              setTimeout(() => {
                animation.classList.add('animate');
              }, 400 + (index * 300));
            });
          }
        });
      },
      { threshold: 0.15, rootMargin: '50px 0px 0px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 watercolor-bg">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`scroll-slow max-w-3xl mx-auto text-center mb-20 transition-all duration-500 ${
            isHeaderOverPhoto ? 'text-white drop-shadow-lg' : 'text-gray-900'
          }`}
        >
          <h2 className={`font-playfair text-4xl md:text-5xl font-bold mb-6 transition-all duration-500 ${
            isHeaderOverPhoto ? 'text-white' : 'text-gray-900'
          }`}>
            Meet Your <span className={`transition-all duration-500 ${
              isHeaderOverPhoto ? 'text-blush-200' : 'text-blush-400'
            }`}>Dream Team</span>
          </h2>
          <p className={`text-lg leading-relaxed transition-all duration-500 ${
            isHeaderOverPhoto ? 'text-gray-100' : 'text-gray-600'
          }`}>
            Together, we created At First Site Beauty to offer the most seamless, luxury on-location glam experience in the Pacific Northwest. Our team is professionally trained, experienced, and known for executing stunning results — without stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Holli DeMarais */}
          <div className="scroll-animation text-center">
            <img
              src={teamPhoto1}
              alt="Professional bridal hair stylist"
              className="w-80 h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2">
              Holli DeMarais
            </h3>
            <p className="text-blush-400 mb-4 font-medium">
              Owner of Vata Salon, Aveda Educator
            </p>
            <p className="text-gray-600 leading-relaxed">
              Award-winning bridal stylist with over a decade of experience creating breathtaking looks for the most important day of your life. Specializes in timeless elegance with modern touches.
            </p>
          </div>

          {/* Cedar Lapp-Ngauamo */}
          <div className="scroll-animation text-center">
            <img
              src={teamPhoto2}
              alt="Professional makeup artist"
              className="w-80 h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              style={{
                transform: `translateY(${scrollY * -0.03}px)`,
              }}
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2">
              Cedar Lapp-Ngauamo
            </h3>
            <p className="text-blush-400 mb-4 font-medium">
              Founder of Cedars Academy of Makeup Artistry
            </p>
            <p className="text-gray-600 leading-relaxed">
              Beauty industry educator and school director with expertise in creating flawless, camera-ready looks that enhance natural beauty and last throughout your special day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
