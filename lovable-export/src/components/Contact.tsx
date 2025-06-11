import { useState } from 'react'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    weddingDate: '',
    message: ''
  })
  const ref = useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', weddingDate: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-28 bg-gradient-to-br from-gradient-from to-gradient-to">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-start scroll-animation">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-3xl font-semibold mb-4 text-gray-800">
              Ready to Book Your Dream Look?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let's create something beautiful together. Contact us today to schedule your consultation.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <Phone className="text-primary-accent" size={20} />
                <span className="text-gray-700">+1 (XXX) XXX-XXXX</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-primary-accent" size={20} />
                <span className="text-gray-700">info@atfirstsightbeauty.com</span>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-primary-accent" size={20} />
                <span className="text-gray-700">Serving Pacific Northwest</span>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/atfirstsightbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-dark rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/atfirstsightbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-r from-primary-light to-primary-dark rounded-full flex items-center justify-center text-white hover:-translate-y-1 transition-transform duration-300"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-dark focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-dark focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-dark focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="date"
                  name="weddingDate"
                  placeholder="Wedding Date"
                  value={formData.weddingDate}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-dark focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Tell us about your vision..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-primary-dark focus:outline-none transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}