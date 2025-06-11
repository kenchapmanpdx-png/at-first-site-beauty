import { ArrowRight } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Services() {
  const ref = useScrollAnimation()

  const services = [
    {
      title: 'The Bridal Hair & Makeup Design Session',
      subtitle: 'Where Your Dream Look Begins',
      description: 'At At First Sight Beauty On Location, your bridal journey starts with our exclusive Design Session - a personalized consultation where we bring your vision to life.',
      image: '/assets/bridal-design.jpg',
      bookingUrl: 'https://calendly.com/atfirstsightbeauty/bridal-design'
    },
    {
      title: 'Bridal Party Hair & Makeup',
      subtitle: 'Coordinated Beauty for Your Entire Party',
      description: 'Ensure your entire bridal party looks stunning with our coordinated hair and makeup services.',
      image: '/assets/bridal-party.jpg',
      bookingUrl: 'https://calendly.com/atfirstsightbeauty/bridal-party'
    },
    {
      title: 'Professional Teeth Whitening',
      subtitle: 'Brighten Your Smile for the Big Day',
      description: 'Complete your bridal look with our professional teeth whitening service for a radiant smile.',
      image: '/assets/teeth-whitening.jpg',
      bookingUrl: 'https://calendly.com/atfirstsightbeauty/teeth-whitening'
    },
    {
      title: 'Professional Spray Tanning',
      subtitle: 'The Perfect Glow for Your Special Day',
      description: 'Achieve a natural, sun-kissed glow with our professional spray tanning services.',
      image: '/assets/spray-tanning.jpg',
      bookingUrl: 'https://calendly.com/atfirstsightbeauty/spray-tanning'
    }
  ]

  return (
    <section id="services" className="py-28 bg-gradient-to-br from-gradient-from to-gradient-to">
      <div className="container">
        <h2 className="section-title">Our Signature Services</h2>
        
        <div ref={ref} className="grid lg:grid-cols-2 gap-8 mt-12 scroll-animation">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 sparkle-card luxury-hover"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h3>
                <p className="text-primary-accent font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <button
                  onClick={() => window.open(service.bookingUrl, '_blank')}
                  className="btn-primary w-full justify-center"
                >
                  Book Your Design Session
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}