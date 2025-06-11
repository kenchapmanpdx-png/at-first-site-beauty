import { Quote } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Testimonials() {
  const ref = useScrollAnimation()

  const testimonials = [
    {
      quote: "Absolutely amazing! Hollie and Cedar made me feel like a princess on my wedding day. The attention to detail was incredible.",
      author: "Sarah M.",
      location: "Bride, Seattle"
    },
    {
      quote: "Professional, talented, and so easy to work with. They traveled to our venue and made the entire bridal party look stunning!",
      author: "Jessica L.",
      location: "Bride, Portland"
    },
    {
      quote: "The trial session was perfect - they listened to exactly what I wanted and executed it flawlessly on my wedding day.",
      author: "Amanda K.",
      location: "Bride, Vancouver"
    }
  ]

  return (
    <section id="testimonials" className="py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <h2 className="section-title">What Our Brides Say</h2>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 scroll-animation">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl mb-4" style={{ color: '#ad3b68' }}>
                <Quote size={32} />
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div>
                  <h4 className="font-playfair font-semibold text-gray-800">
                    {testimonial.author}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}