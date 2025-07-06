
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

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

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Seattle, WA",
      text: "Absolutely amazing experience! Cedar and Hollie made me feel like a princess on my wedding day. The attention to detail was incredible and my makeup lasted all day and night.",
      rating: 5
    },
    {
      name: "Jessica L.",
      location: "Portland, OR",
      text: "The bridal design session was perfect - it wasn't just a trial, it was a complete experience. I felt so confident knowing exactly how I would look on my wedding day.",
      rating: 5
    },
    {
      name: "Amanda K.",
      location: "Tacoma, WA",
      text: "Professional, talented, and so easy to work with. They coordinated looks for my entire bridal party and everyone looked stunning while I remained the focal point.",
      rating: 5
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our <span className="text-blush-400">Brides Say</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the beautiful brides who trusted us with their special day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="scroll-animation bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </blockquote>
              <footer className="border-t pt-4">
                <cite className="font-semibold text-gray-900 not-italic">
                  {testimonial.name}
                </cite>
                <div className="text-sm text-gray-500">
                  {testimonial.location}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
