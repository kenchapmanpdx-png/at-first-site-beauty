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

  const testimonials = [
    {
      quote: "Holli and Cedar were absolutely incredible! They made me feel so beautiful and confident on my wedding day. The makeup lasted through happy tears and dancing all night long.",
      name: "Sarah M.",
      location: "Bride, Seattle",
      initial: "S",
      rating: 5,
      service: "Bridal Hair & Makeup",
      datePublished: "2024-08-15"
    },
    {
      quote: "The entire experience was seamless and stress-free. They came to our venue and transformed not just me, but my entire bridal party. We all looked stunning and felt amazing!",
      name: "Emily R.",
      location: "Bride, Portland", 
      initial: "E",
      rating: 5,
      service: "Bridal Party Styling",
      datePublished: "2024-09-22"
    },
    {
      quote: "Professional, talented, and so much fun to work with! They understood exactly what I wanted and executed it perfectly. I can't recommend them enough!",
      name: "Jessica L.",
      location: "Bride, Tacoma",
      initial: "J",
      rating: 5,
      service: "Bridal Hair & Makeup",
      datePublished: "2024-10-10"
    },
  ];

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

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="scroll-animation bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="text-3xl mb-4" style={{color: '#ad3b68'}}>
                  <Quote size={32} />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed" itemProp="reviewBody">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center text-blush-400 font-semibold mr-4">
                    {testimonial.initial}
                  </div>
                  <div itemScope itemType="https://schema.org/Person">
                    <h4 className="font-semibold text-gray-900" itemProp="name">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500" itemProp="address">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                {/* Structured Data for Review */}
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="hidden">
                  <meta itemProp="ratingValue" content={testimonial.rating.toString()} />
                  <meta itemProp="bestRating" content="5" />
                  <meta itemProp="worstRating" content="1" />
                </div>
                <meta itemProp="datePublished" content={testimonial.datePublished} />
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Service" className="hidden">
                  <meta itemProp="name" content={testimonial.service} />
                  <meta itemProp="provider" content="At First Sight Beauty On Location" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
