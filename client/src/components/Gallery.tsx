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

  const galleryImages: { src: string; alt: string; category: string; title: string; description: string; }[] = [
    {
      src: "/attached_assets/portfolio_1.jpg",
      alt: "Bridal hair styling in progress, attaching veil",
      category: "bridal",
      title: "Bridal Veil Styling",
      description: "Delicate placement of the bridal veil, ensuring every detail is perfect for the ceremony."
    },
    {
      src: "/attached_assets/portfolio_2.jpg",
      alt: "Radiant bride holding 'Say Yes to the Dress' sign",
      category: "bridal",
      title: "Saying Yes",
      description: "A joyous moment capturing the excitement of finding the perfect dress, complemented by flawless bridal makeup."
    },
    {
      src: "/attached_assets/portfolio_3.jpg",
      alt: "Close-up of bridal hair down with veil and hairpiece",
      category: "bridal",
      title: "Romantic Waves & Veil",
      description: "Soft romantic waves paired with a crystal hairpiece and veil for a timeless bridal look."
    },
    {
      src: "/attached_assets/portfolio_4.jpg",
      alt: "Groom kissing bride on cheek in vineyard setting",
      category: "bridal",
      title: "Vineyard Romance",
      description: "A tender moment in the vineyard, showcasing natural, glowing bridal makeup that lasts all day."
    },
    {
      src: "/attached_assets/portfolio_5.jpg",
      alt: "Bride taking a photo of her ring, showcasing dress details",
      category: "bridal",
      title: "Elegant Details",
      description: "Capturing the intricate details of the bridal gown and accessories, with a look of pure elegance."
    }
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
          <div className="rounded-3xl p-8 md:p-10 max-w3xl mx-auto sparkle-section luxury-hover luxury-texture shimmer-effect" style={{ background: 'linear-gradient(135deg, #f5f1f2 0%, #e6d0d6 100%)' }}>
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
                  className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 text-sm sm:text-base touch-manipulation ${filter === button.id
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
          {filteredImages.length > 0 ? (
            filteredImages.map((image, index) => (
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
                  disableWebp={true}
                />
                <meta itemProp="name" content={image.title} />
                <meta itemProp="description" content={image.description} />
                <meta itemProp="author" content="At First Sight Beauty On Location" />
                <meta itemProp="copyrightHolder" content="At First Sight Beauty On Location" />
                <meta itemProp="keywords" content={`bridal makeup, bridal hair, Pacific Northwest wedding, ${image.category}, luxury beauty services`} />
              </figure>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-blush-100/50">
                <span className="text-2xl md:text-3xl font-playfair font-medium text-gray-400 italic">Coming Soon...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}