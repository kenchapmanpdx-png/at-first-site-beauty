import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import bridalImage1 from "@assets/IMG_0945.png";
import makeupApplication from "@assets/IMG_0944.png";
import bridalHair from "@assets/IMG_0943.png";
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";
import cedarPhoto from "@assets/IMG_8201.jpeg";

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
      src: bridalImage1,
      alt: "Beautiful bridal styling with natural outdoor setting",
      category: "bridal",
    },
    {
      src: makeupApplication,
      alt: "Professional makeup application in progress",
      category: "bridal",
    },
    {
      src: bridalHair,
      alt: "Elegant bridal hair styling with intricate details",
      category: "bridal",
    },
    {
      src: holliePhoto,
      alt: "Hollie DeMarais professional bridal artist portrait",
      category: "bridal",
    },
    {
      src: bridalImage1,
      alt: "Bride and bridal party outdoor portrait",
      category: "party",
    },
    {
      src: cedarPhoto,
      alt: "Cedar Lapp-Ngauamo professional makeup artist portrait",
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
