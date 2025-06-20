import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import LazyImage from "./LazyImage";

// Import team photos
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";
import teamPhoto1 from "@assets/IMG_0970_1749066905982.png";
import teamPhoto2 from "@assets/IMG_0971_1749066905983.png";
import teamPhoto3 from "@assets/IMG_0973_1749066905983.png";

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Meet Your Dream Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our elite team of artists brings years of expertise and passion to make your special day unforgettable.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Lead Artist - Hollie */}
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <LazyImage
                src={holliePhoto}
                alt="Hollie - Lead Bridal Artist"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Hollie</h3>
            <p className="text-lg text-[#ad3b68] font-semibold mb-3">Lead Bridal Artist</p>
            <p className="text-gray-600 leading-relaxed">
              Master of bridal artistry with 8+ years creating stunning looks for the most important day of your life.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <LazyImage
                src={teamPhoto1}
                alt="Sarah - Hair Specialist"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah</h3>
            <p className="text-lg text-[#ad3b68] font-semibold mb-3">Hair Specialist</p>
            <p className="text-gray-600 leading-relaxed">
              Expert in creating elegant updos and romantic styles that perfectly complement your bridal vision.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <LazyImage
                src={teamPhoto2}
                alt="Emma - Makeup Artist"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Emma</h3>
            <p className="text-lg text-[#ad3b68] font-semibold mb-3">Makeup Artist</p>
            <p className="text-gray-600 leading-relaxed">
              Specializes in natural glam and airbrush techniques for flawless, long-lasting bridal makeup.
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="text-center group">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <LazyImage
                src={teamPhoto3}
                alt="Jessica - Stylist"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Jessica</h3>
            <p className="text-lg text-[#ad3b68] font-semibold mb-3">Stylist</p>
            <p className="text-gray-600 leading-relaxed">
              Creative visionary who ensures every detail of your bridal look is perfectly coordinated and stunning.
            </p>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center py-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
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