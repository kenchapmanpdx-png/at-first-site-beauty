import { useState, useEffect } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center filter grayscale parallax-bg"
        style={{
          backgroundImage: 'url(/assets/hero-image.png)',
          backgroundPosition: 'center 25%',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Floating Rose Petals */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className={`petal petal:nth-child(${i + 1})`}
            style={{
              animationDelay: `${-3 * i}s`,
              animationDuration: `${16 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-dancing text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg"
        >
          At First Sight Beauty On Location
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl mb-8 text-shadow"
        >
          Serving the Pacific Northwest with elegance, expertise, and ease
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <button
            onClick={() => scrollToSection('services')}
            className="btn-primary text-lg"
          >
            Book Your Design Session
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-primary-light transition-colors duration-300 animate-bounce-slow"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  )
}