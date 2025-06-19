import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import bridalImage from "@assets/IMG_0971_1749066905983.png";
import makeupImage from "@assets/IMG_0944.png";
import hairImage from "@assets/IMG_0943.png";
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";
import teethWhiteningImage from "@assets/IMG_0964.jpeg";
import sprayTanningImage from "@assets/IMG_0969.webp";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const [, setLocation] = useLocation();

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

  const services = [
    {
      image: bridalImage,
      title: "Bridal Design Session",
      description: "Our signature luxury experience where your dream look begins. Set in our private bridal suite, this isn't your average trial — it's a complete design session with wear testing and personalized touch-up kit.",
      alt: "Luxury bridal design session at private bridal suite - comprehensive hair and makeup trial with wear testing",
      keywords: "bridal design session, makeup trial, bridal consultation, wedding beauty planning",
      category: "Bridal Beauty Services",
      link: "/bridal-design-session"
    },
    {
      image: makeupImage,
      title: "Bridal Party Hair & Makeup",
      description: "Coordinated looks for your entire bridal party. We ensure everyone looks stunning while maintaining the bride as the focal point. A cohesive look is essential for creating harmonious, photo-ready results.",
      alt: "Professional bridal party hair and makeup coordination by certified artists - Pacific Northwest wedding party beauty services",
      keywords: "bridal party makeup, bridesmaids hair, wedding party styling, group beauty services",
      category: "Bridal Party Services",
      link: "/bridal-party"
    },
    {
      image: teethWhiteningImage,
      title: "Teeth Whitening",
      description: "Our teeth whitening system stands apart from store-bought brands by offering a professional-grade solution that delivers immediate and noticeable results. We use a higher percentage of Hydrogen Peroxide, safely activated with a specialized light to enhance effectiveness while remaining gentle on your teeth.",
      alt: "Professional teeth whitening services for brides - on-location dental beauty treatment in Pacific Northwest",
      keywords: "teeth whitening, bridal teeth whitening, wedding smile, dental beauty, cosmetic dentistry",
      category: "Cosmetic Services",
      link: "/teeth-whitening"
    },
    {
      image: sprayTanningImage,
      title: "Spray Tanning",
      description: "At First Site's spray tan is expertly formulated to deliver a flawless, bronzed glow without the risk of orange undertones. Our unique blend is enriched with hydrating ingredients like hyaluronic acid, jojoba oil, and squalane, providing a natural, radiant tan that enhances your glow without clogging pores.",
      alt: "Premium spray tanning services with hydrating formula for brides - natural radiant tan for wedding day",
      keywords: "spray tanning, bridal tanning, hyaluronic acid, wedding tan, natural tanning",
      category: "Cosmetic Services",
      link: "/spray-tanning"
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="pt-10 pb-20 bg-white silk-texture" itemScope itemType="https://schema.org/Service">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <div className="rounded-3xl p-8 md:p-10 max-w-3xl mx-auto sparkle luxury-hover luxury-texture shimmer-effect" style={{background: 'linear-gradient(135deg, #f5f1f2 0%, #e6d0d6 100%)'}}>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 luxury-text">
              Our <span className="text-white">Services</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Whether it's a wedding, prom, quinceañera, or just a special night out, we offer comprehensive beauty services to make your special day absolutely perfect.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <article
              key={index}
              className={`scroll-animation stagger-${index + 1} relative group overflow-hidden rounded-2xl md:rounded-3xl h-64 sm:h-80 md:h-96 cursor-pointer luxury-hover sparkle shadow-2xl border border-white/20 touch-target`}
              itemScope
              itemType="https://schema.org/Service"
              onClick={() => service.link && setLocation(service.link)}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
                role="img"
                aria-label={service.alt}
              >
                <div className="image-overlay absolute inset-0"></div>
                <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-20 transition-all duration-1000 ease-out"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-4 sm:p-6 md:p-8 text-white">
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-all duration-1000 ease-out">
                  <h3 className="font-playfair text-lg sm:text-xl md:text-2xl font-semibold mb-2 md:mb-3 transform translate-y-2 group-hover:translate-y-0 transition-all duration-800 delay-200" itemProp="name">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-300 ease-out leading-relaxed mb-3 md:mb-4 text-sm md:text-base transform translate-y-4 group-hover:translate-y-0" itemProp="description">
                    {service.description}
                  </p>
                </div>
                {/* Structured Data */}
                <meta itemProp="serviceType" content={service.category} />
                <meta itemProp="provider" content="At First Sight Beauty On Location" />
                <meta itemProp="areaServed" content="Pacific Northwest" />
                <meta itemProp="availableLanguage" content="English" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}