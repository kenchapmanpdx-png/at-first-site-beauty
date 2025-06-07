import { useEffect, useRef, useState } from "react";
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";
import cedarPhoto from "@assets/IMG_8201.jpeg";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderOverPhoto, setIsHeaderOverPhoto] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if header is over photo area
      if (headerRef.current && sectionRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const sectionRect = sectionRef.current.getBoundingClientRect();
        
        // Check if header is in the lower portion of the section (over photos)
        const isOverPhotos = headerRect.top < sectionRect.top + (sectionRect.height * 0.5);
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
              }, 600 + (index * 400));
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px 0px 0px' }
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
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 watercolor-bg" itemScope itemType="https://schema.org/AboutPage">
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
            Combined, we have well over 30 years in the beauty industry. Cedar owns the only private care college in the Pacific Northwest that focuses solely on makeup artistry, while Hollie has operated a thriving salon for over 18 years. Together, we envisioned a booking company that creates trust in our brand — when you contact us, your hair and makeup will be done to absolute perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Hollie DeMarais */}
          <article className="scroll-animation text-center" itemScope itemType="https://schema.org/Person">
            <img
              src={holliePhoto}
              alt="Hollie DeMarais - Professional bridal hair stylist and owner of Vata Salon with 18+ years experience in Pacific Northwest wedding beauty"
              className="w-64 md:w-80 h-80 md:h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              loading="lazy"
              itemProp="image"
              width="320"
              height="384"
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2" itemProp="name">
              Hollie DeMarais
            </h3>
            <p className="text-blush-400 mb-4 font-medium" itemProp="jobTitle">
              Owner of Vata Salon, Aveda Educator
            </p>
            <p className="text-gray-600 leading-relaxed" itemProp="description">
              Award-winning salon owner with over 18 years of experience. Hollie provides quality control and has selected elite artists for hair design training, ensuring every client receives perfection through our carefully curated team.
            </p>
            <meta itemProp="worksFor" content="At First Sight Beauty On Location" />
            <meta itemProp="knowsAbout" content="Bridal Hair Styling, Hair Design Training, Salon Management" />
            <meta itemProp="yearsExperience" content="18" />
          </article>

          {/* Cedar Lapp-Ngauamo */}
          <article className="scroll-animation text-center" itemScope itemType="https://schema.org/Person">
            <img
              src={cedarPhoto}
              alt="Cedar Lapp-Ngauamo - Professional makeup artist and founder of Cedars Academy of Makeup Artistry, owner of exclusive makeup college in Pacific Northwest"
              className="w-64 md:w-80 h-80 md:h-96 object-cover object-top rounded-2xl mx-auto mb-6 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-700 transform hover:scale-105"
              loading="lazy"
              itemProp="image"
              width="320"
              height="384"
            />
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-2" itemProp="name">
              Cedar Lapp-Ngauamo
            </h3>
            <p className="text-blush-400 mb-4 font-medium" itemProp="jobTitle">
              Founder of Cedars Academy of Makeup Artistry
            </p>
            <p className="text-gray-600 leading-relaxed" itemProp="description">
              Owner of the only private care college in the Pacific Northwest focused solely on makeup artistry. Cedar personally trains and certifies all makeup artists on our team, ensuring consistent quality control and expertise.
            </p>
            <meta itemProp="worksFor" content="At First Sight Beauty On Location" />
            <meta itemProp="knowsAbout" content="Makeup Artistry, Bridal Makeup, Makeup Education, Artist Training" />
            <meta itemProp="founder" content="Cedars Academy of Makeup Artistry" />
          </article>
        </div>

        {/* Team Excellence Section */}
        <div className="scroll-animation mt-20 text-center max-w-4xl mx-auto">
          <h3 className="font-playfair text-3xl font-semibold text-gray-900 mb-6">
            Our Elite Team of Artists
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our makeup is applied by artists that Cedar has personally trained and certified through her program. 
            Our hair styling is performed by elite artists that Hollie has carefully selected and trained in hair design. 
            Together, we maintain strict quality control to ensure that every client receives the absolute perfection they deserve.
          </p>
          <div className="bg-blush-50 rounded-2xl p-8">
            <h4 className="font-playfair text-xl font-semibold text-blush-600 mb-4">
              Trust in Our Brand Promise
            </h4>
            <p className="text-gray-700 leading-relaxed">
              When you book with At First Site Beauty, you're not just hiring artists — you're investing in a system of excellence. 
              Our makeup will wear beautifully throughout your entire day, and our styling will photograph flawlessly. 
              This is the trust and quality control that sets us apart in the Pacific Northwest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}