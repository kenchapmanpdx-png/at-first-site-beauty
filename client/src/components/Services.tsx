import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bridalImage from "@assets/IMG_0945.png";
import makeupImage from "@assets/IMG_0944.png";
import hairImage from "@assets/IMG_0943.png";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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
      title: "Bridal Hair & Makeup",
      description: "Complete bridal transformation with trial session included. Timeless elegance that photographs beautifully and lasts all day.",
    },
    {
      image: makeupImage,
      title: "Bridal Party Hair & Makeup",
      description: "Coordinated looks for your entire bridal party. We ensure everyone looks stunning while maintaining the bride as the focal point.",
    },
    {
      image: hairImage,
      title: "Teeth Whitening",
      description: "Professional teeth whitening services available both in-salon and on-location for your brightest, most confident smile.",
    },
    {
      image: bridalImage,
      title: "Spray Tanning",
      description: "Using premium Dolce Glow products for a natural, radiant tan that enhances your natural beauty and complements your wedding look.",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blush-400">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we offer comprehensive beauty services to make your special day absolutely perfect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`scroll-animation stagger-${index + 1} relative group overflow-hidden rounded-3xl h-96 cursor-pointer transform hover:scale-105 transition-all duration-700`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center filter grayscale group-hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              >
                <div className="image-overlay absolute inset-0"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-700"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-white border-white border hover:bg-white hover:text-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
