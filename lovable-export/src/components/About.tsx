import { Users, MapPin, Star } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function About() {
  const ref = useScrollAnimation()

  const features = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our skilled professionals bring decades of experience to make your special day perfect.'
    },
    {
      icon: MapPin,
      title: 'On-Location Service',
      description: 'We come to you, providing convenience and comfort on your wedding day.'
    },
    {
      icon: Star,
      title: 'Luxury Experience',
      description: 'Premium products and personalized service for an unforgettable bridal experience.'
    }
  ]

  return (
    <section id="about" className="py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Trust Your Wedding Day to Expert Hands</h2>
          <p className="section-subtitle">30+ years combined experience in bridal beauty</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 scroll-animation">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 luxury-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-light to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}