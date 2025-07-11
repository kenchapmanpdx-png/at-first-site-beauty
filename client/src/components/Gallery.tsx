import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import LazyImage from "./LazyImage";
// Using direct paths for asset loading

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
      src: "/attached_assets/IMG_0970_1749066905982.png",
      alt: "Bridal makeup application by At First Site Beauty - luxury on-location wedding styling in Pacific Northwest",
      category: "bridal",
      title: "Outdoor Bridal Styling",
      description: "Natural bridal beauty with outdoor elegance in the Pacific Northwest",
    },
    {
      src: "/attached_assets/IMG_0944.png",
      alt: "Professional bridal makeup application by At First Site Beauty certified makeup artist",
      category: "bridal",
      title: "Professional Makeup Application",
      description: "Expert bridal makeup application using premium products",
    },
    {
      src: "/attached_assets/IMG_0943.png",
      alt: "Elegant bridal hair styling by At First Site Beauty - Pacific Northwest wedding hair specialist",
      category: "party",
      title: "Bridal Party Hair Styling",
      description: "Professional hair styling for bridal party members",
    },
    {
      src: "/attached_assets/HollieD_1749336182646_1750713275911.png",
      alt: "Bridal party coordination by At First Site Beauty - coordinated beauty looks for wedding party",
      category: "party",
      title: "Bridal Party Coordination",
      description: "Coordinated bridal party looks maintaining bride as focal point",
    },
    {
      src: "/attached_assets/IMG_8201.jpeg",
      alt: "Bridal party makeup application by At First Site Beauty professional makeup artist",
      category: "party",
      title: "Bridal Party Makeup",
      description: "Expert makeup application for bridal party members",
    },
  ];

  const filterButtons = [
    { id: "all", label: "All" },
    { id: "bridal", label: "Brides" },
    { id: "party", label: "Bridal Party" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);

  return (
    <section ref={sectionRef} id="gallery" className="py-20 bg-gray-50 paper-texture">
      <div className="container mx-auto px-4">
        <div className="scroll-animation text-center mb-16">
          <div className="rounded-3xl p-8 md:p-10 max-w-3xl mx-auto sparkle-section luxury-hover luxury-texture" style={{background: 'linear-gradient(135deg, #f5f1f2 0%, #e6d0d6 100%)'}}>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 luxury-text">
              Portfolio
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Discover the artistry and elegance that defines our work. Each image tells a story of beauty, confidence, and unforgettable moments.
            </p>

            {/* Gallery Filter */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {filterButtons.map((button) => (
                <Button
                  key={button.id}
                  onClick={() => setFilter(button.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                    filter === button.id
                      ? "bg-blush-400 text-white"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:text-gray-900 shadow-md"
                  }`}
                >
                  {button.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Masonry Gallery Grid with SEO optimization */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 md:gap-4 lg:gap-6 space-y-3 md:space-y-4 lg:space-y-6" itemScope itemType="https://schema.org/ImageGallery">
          {filteredImages.map((image, index) => (
            <figure
              key={index}
              className="scroll-animation gallery-item break-inside-avoid"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <LazyImage
                src={image.src}
                alt={image.alt}
                className="w-full rounded-xl md:rounded-2xl shadow-2xl border border-white/20"
                loading={index < 4 ? "eager" : "lazy"}
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