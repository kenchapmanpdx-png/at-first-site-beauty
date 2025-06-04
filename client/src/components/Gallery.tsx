import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import bridalImage1 from "@assets/IMG_0970_1749066905982.png";
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
      alt: "Beautiful bridal styling with natural outdoor setting by At First Sight Beauty On Location - Pacific Northwest wedding makeup and hair",
      category: "bridal",
      title: "Outdoor Bridal Styling",
      description: "Natural bridal beauty with outdoor elegance in the Pacific Northwest",
    },
    {
      src: makeupApplication,
      alt: "Professional bridal makeup application in progress by certified makeup artist - luxury on-location beauty services",
      category: "bridal",
      title: "Professional Makeup Application",
      description: "Expert bridal makeup application using premium products",
    },
    {
      src: bridalHair,
      alt: "Elegant bridal hair styling with intricate details - Pacific Northwest wedding hair artist specializing in luxury updos",
      category: "bridal",
      title: "Bridal Hair Artistry",
      description: "Sophisticated bridal hair styling with attention to detail",
    },
    {
      src: holliePhoto,
      alt: "Hollie DeMarais professional bridal makeup and hair artist - 18+ years salon experience in Pacific Northwest wedding beauty",
      category: "bridal",
      title: "Hollie DeMarais - Founder",
      description: "18+ years of professional salon experience",
    },
    {
      src: bridalImage1,
      alt: "Bride and bridal party outdoor portrait showcasing coordinated beauty looks by At First Sight Beauty On Location team",
      category: "party",
      title: "Bridal Party Coordination",
      description: "Coordinated bridal party looks maintaining bride as focal point",
    },
    {
      src: cedarPhoto,
      alt: "Cedar Lapp-Ngauamo professional makeup artist and founder - owner of exclusive makeup college in Pacific Northwest",
      category: "bridal",
      title: "Cedar Lapp-Ngauamo - Founder",
      description: "Owner of exclusive makeup college in Pacific Northwest",
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

        {/* Masonry Gallery Grid with SEO optimization */}
        <div className="columns-1 sm:columns-2 md:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6" itemScope itemType="https://schema.org/ImageGallery">
          {filteredImages.map((image, index) => (
            <figure
              key={index}
              className="scroll-animation gallery-item break-inside-avoid"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <img
                src={image.src}
                alt={image.alt}
                title={image.title}
                className="w-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                loading="lazy"
                itemProp="contentUrl"
                width="400"
                height="auto"
                style={{ aspectRatio: 'auto' }}
              />
              <meta itemProp="name" content={image.title} />
              <meta itemProp="description" content={image.description} />
              <meta itemProp="author" content="At First Sight Beauty On Location" />
              <meta itemProp="copyrightHolder" content="At First Sight Beauty On Location" />
              <meta itemProp="keywords" content={`bridal makeup, bridal hair, Pacific Northwest wedding, ${image.category}, luxury beauty services`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
