import { useEffect, useRef } from "react";

export default function About() {
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

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-50 watercolor-bg">
      <div className="container mx-auto px-4">
        <div className="scroll-animation max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your <span className="text-blush-400">Dream Team</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Together, we created At First Site Beauty to offer the most seamless, luxury on-location glam experience in the Pacific Northwest. Our team is professionally trained, experienced, and known for executing stunning results — without stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Holli DeMarais */}
          <div className="scroll-animation text-center">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
              alt="Professional bridal hair stylist"
              className="w-80 h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg"
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
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=500"
              alt="Professional makeup artist"
              className="w-80 h-96 object-cover rounded-2xl mx-auto mb-6 shadow-lg"
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
