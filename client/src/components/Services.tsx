import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Crown, Users, Smile, Sun, ArrowRight } from "lucide-react";

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
      icon: Crown,
      title: "Bridal Hair & Makeup",
      description: "Complete bridal transformation with trial session included. Timeless elegance that photographs beautifully and lasts all day.",
    },
    {
      icon: Users,
      title: "Bridal Party Hair & Makeup",
      description: "Coordinated looks for your entire bridal party. We ensure everyone looks stunning while maintaining the bride as the focal point.",
    },
    {
      icon: Smile,
      title: "Teeth Whitening",
      description: "Professional teeth whitening services available both in-salon and on-location for your brightest, most confident smile.",
    },
    {
      icon: Sun,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-animation bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-blush-400 text-4xl mb-6 text-center">
                <service.icon size={48} className="mx-auto" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="text-center">
                <Button
                  variant="ghost"
                  className="text-blush-400 hover:text-blush-500 font-medium transition-colors duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
