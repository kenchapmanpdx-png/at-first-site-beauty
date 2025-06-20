import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import LazyImage from "./LazyImage";

// Import team photos
import holliePhoto from "@assets/HollieD_1749336182646.png";
import cedarPhoto from "@assets/IMG_8201.jpeg";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animations = entry.target.querySelectorAll('.scroll-animation');
            animations.forEach((animation) => {
              animation.classList.add('animate');
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-8 text-white" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}} data-aos="fade-up">
            Meet Your <span className="text-blush-500">Dream Team</span>
          </h2>
          <p className="text-xl leading-relaxed text-white max-w-3xl mx-auto" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}} data-aos="fade-up" data-aos-delay="200">
            Combined, we have well over 30 years in the beauty industry. Cedar owns the only private care college in the Pacific Northwest that focuses solely on makeup artistry, while Hollie has operated a thriving salon for over 18 years. Together, we envisioned a booking company that creates trust in our brand — when you contact us, your hair and makeup will be done to absolute perfection.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Hollie */}
          <article className="scroll-animation text-center" itemScope itemType="https://schema.org/Person">
            <img
              src={holliePhoto}
              alt="Hollie - Professional bridal hairstylist and salon owner with 18+ years experience"
              className="w-64 md:w-80 h-80 md:h-96 object-cover object-top rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              loading="lazy"
              width="320"
              height="384"
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2" itemProp="name">
              Hollie
            </h3>
            <p className="text-blush-400 mb-4 font-medium" itemProp="jobTitle">
              Professional Bridal Hairstylist & Salon Owner
            </p>
            <p className="text-gray-600 leading-relaxed mb-6" itemProp="description">
              With over 18 years of salon ownership and countless bridal transformations, Hollie brings unmatched expertise in creating stunning hairstyles that perfectly complement your unique beauty and wedding vision.
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

        {/* Trust Section */}
        <div className="text-center py-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-6">
            Trust in Our Brand Promise
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We understand that your wedding day is one of the most important days of your life. 
            That's why we're committed to delivering exceptional service, using only the finest products, 
            and ensuring you feel absolutely radiant from the moment you walk down the aisle to your last dance.
          </p>
        </div>
      </div>
    </section>
  );
}