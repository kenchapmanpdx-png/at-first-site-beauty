import { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
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
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white watercolor-bg" itemScope itemType="https://schema.org/ReviewSection">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blush-400">Brides</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our beautiful brides have to say about their experience with At First Site Beauty.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animation bg-gradient-to-br from-blush-50 to-white rounded-3xl p-12 shadow-lg border border-blush-100">
            <div className="text-6xl mb-6" style={{color: '#ad3b68'}}>
              <Quote size={64} />
            </div>
            <h3 className="font-playfair text-2xl font-semibold text-gray-900 mb-4">
              Your Story Could Be Here
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We're building our collection of authentic testimonials from real brides. 
              After your special day with At First Site Beauty, we'd love to hear about your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:bookings@atfirstsitebeauty.com?subject=My At First Site Beauty Experience"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blush-300 to-blush-400 hover:from-blush-400 hover:to-blush-500 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Share Your Experience
              </a>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blush-300 text-blush-400 hover:bg-blush-300 hover:text-white rounded-full transition-all duration-300"
              >
                Book Your Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
