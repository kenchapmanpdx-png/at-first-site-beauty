import { useEffect, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";

export default function BookingPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Animation observer
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

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHead 
        title="Book Your Bridal Trial | At First Site"
        description="Book your luxury bridal consultation with At First Site. Professional on-location bridal hair and makeup services in the Pacific Northwest."
        path="/book"
        pageType="contact"
      />
      <Header />
      <main ref={sectionRef} className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 scroll-animation" data-aos="fade-up">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-blush-400 mb-4">
                Book Your Bridal Appointment
              </h1>
              <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="200">
                To ensure your trial is tailored to your unique vision, we require a brief phone consultation before scheduling. This helps us match you with the right artist and craft an experience that's seamless, personalized, and stress-free from the very beginning.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 scroll-animation transform transition-all duration-700" data-aos="fade-up" data-aos-delay="400">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/ge2HN52PHjWliZSbo6T9"
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  minHeight: '700px',
                }}
                scrolling="no"
                title="Bridal Appointment Booking"
                id="ge2HN52PHjWliZSbo6T9_1750196042723"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}