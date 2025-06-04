import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
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

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1594736797933-d0f26d1d5c04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Elegant bridal makeup and styling",
      category: "bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Bridal party preparation",
      category: "party",
    },
    {
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Intricate bridal hair styling",
      category: "bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
      alt: "Professional wedding makeup application",
      category: "bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Natural bridal makeup look",
      category: "bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      alt: "Bridesmaids hair styling session",
      category: "party",
    },
    {
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500",
      alt: "Elegant wedding preparation",
      category: "bridal",
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      alt: "Pacific Northwest wedding venue",
      category: "bridal",
    },
  ];

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "bridal", label: "Bridal" },
    { id: "party", label: "Bridal Party" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blush-400">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the artistry and elegance that defines our work. Each image tells a story of beauty, confidence, and unforgettable moments.
          </p>

          {/* Gallery Filter */}
          <div className="flex justify-center space-x-4 mb-12">
            {filterButtons.map((button) => (
              <Button
                key={button.id}
                onClick={() => setFilter(button.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  filter === button.id
                    ? "bg-blush-300 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="scroll-animation gallery-item break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
