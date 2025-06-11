import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useScrollAnimation()

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'party', label: 'Bridal Party' },
    { id: 'hair', label: 'Hair' },
    { id: 'makeup', label: 'Makeup' }
  ]

  const galleryImages = [
    { src: '/assets/gallery-1.jpg', alt: 'Elegant bridal makeup look', category: 'bridal makeup' },
    { src: '/assets/gallery-2.jpg', alt: 'Romantic bridal hairstyle', category: 'bridal hair' },
    { src: '/assets/gallery-3.jpg', alt: 'Bridal party coordination', category: 'party makeup' },
    { src: '/assets/gallery-4.jpg', alt: 'Natural bridal glow', category: 'bridal makeup' },
    { src: '/assets/gallery-5.jpg', alt: 'Bridal party hairstyles', category: 'hair party' },
    { src: '/assets/gallery-6.jpg', alt: 'Classic bridal look', category: 'bridal makeup' }
  ]

  const filteredImages = galleryImages.filter(image => {
    if (activeFilter === 'all') return true
    return image.category.includes(activeFilter)
  })

  return (
    <section id="gallery" className="py-28 bg-white">
      <div className="container">
        <h2 className="section-title">Portfolio Gallery</h2>
        <p className="section-subtitle">Showcasing our beautiful bridal transformations</p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-dark text-white border-primary-dark'
                  : 'bg-transparent text-primary-dark border-primary-dark hover:bg-primary-dark hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div ref={ref} className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 scroll-animation">
          {filteredImages.map((image, index) => (
            <figure
              key={index}
              className="break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 luxury-hover"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl filter grayscale hover:grayscale-0 transition-all duration-700"
                loading={index < 4 ? 'eager' : 'lazy'}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}