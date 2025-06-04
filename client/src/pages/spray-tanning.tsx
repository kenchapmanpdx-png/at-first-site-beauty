import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Droplets, Heart, Sparkles, Shield } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import before/after images
import beforeImage1 from "@assets/IMG_0941.jpeg";
import afterImage1 from "@assets/IMG_8201.jpeg";
import beforeImage2 from "@assets/IMG_3265.jpeg";
import afterImage2 from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";

export default function SprayTanning() {
  const [, setLocation] = useLocation();
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const beforeAfterImages = [
    {
      before: beforeImage1,
      after: afterImage1,
      description: "Natural bronzed glow - no orange undertones"
    },
    {
      before: beforeImage2,
      after: afterImage2,
      description: "Hydrated, radiant skin with perfect tan"
    }
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "No Orange Undertones",
      description: "Expertly formulated for a natural, flawless bronzed glow"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Hydrating Formula",
      description: "Enriched with hyaluronic acid and jojoba oil for nourished skin"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Non-Comedogenic",
      description: "Lightweight squalane won't clog pores or cause breakouts"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Skin-Safe Ingredients",
      description: "Natural oils that closely resemble your skin's own properties"
    }
  ];

  const ingredients = [
    {
      name: "Hyaluronic Acid",
      benefit: "Deep hydration and moisture retention"
    },
    {
      name: "Jojoba Oil",
      benefit: "Closely resembles skin's natural oils"
    },
    {
      name: "Squalane",
      benefit: "Lightweight moisture, non-comedogenic"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main ref={sectionRef} className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Button
              onClick={() => setLocation("/")}
              variant="ghost"
              className="mb-8 text-gray-600 hover:text-blush-400"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="scroll-animation text-center max-w-4xl mx-auto">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blush-400">Spray Tanning</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At First Site's spray tan is expertly formulated to deliver a flawless, bronzed glow without the risk of orange undertones. Our unique blend is enriched with hydrating ingredients like hyaluronic acid, jojoba oil—closely resembling the skin's natural oils—and squalane, known for its lightweight moisture and non-comedogenic properties.
              </p>
              <p className="text-lg text-gray-600 mb-12">
                This carefully crafted formula nourishes the skin while providing a natural, radiant tan that enhances your glow without clogging pores or causing breakouts. With At First Site, orange is never an option—just healthy, luminous skin.
              </p>
              
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-blush-300 hover:bg-blush-400 text-white px-10 py-4 rounded-full text-lg font-medium"
              >
                Book Your Spray Tan
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose At First Site Spray Tanning?
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="scroll-animation text-center">
                  <div className="w-16 h-16 bg-blush-100 rounded-full flex items-center justify-center text-blush-400 mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Natural Results, <span className="text-blush-400">Never Orange</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the beautiful, natural bronze glow our expert spray tanning delivers.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {beforeAfterImages.map((images, index) => (
                <div key={index} className="scroll-animation mb-16 last:mb-0">
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Before Image */}
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-gray-700 mb-4">
                          Before
                        </h3>
                        <img
                          src={images.before}
                          alt="Before spray tanning treatment"
                          className="w-full h-64 object-cover rounded-2xl shadow-md"
                          loading="lazy"
                        />
                      </div>
                      
                      {/* After Image */}
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-blush-400 mb-4">
                          After
                        </h3>
                        <img
                          src={images.after}
                          alt="After professional spray tanning treatment"
                          className="w-full h-64 object-cover rounded-2xl shadow-md"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    
                    <div className="text-center mt-6">
                      <p className="text-gray-600 font-medium">
                        {images.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Premium Ingredients for Healthy Skin
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our carefully selected ingredients work together to nourish and protect your skin.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {ingredients.map((ingredient, index) => (
                  <div key={index} className="scroll-animation bg-blush-50 rounded-3xl p-8 text-center">
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                      {ingredient.name}
                    </h3>
                    <p className="text-gray-600">
                      {ingredient.benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Spray Tan Process
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="scroll-animation text-center">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Skin Preparation
                  </h3>
                  <p className="text-gray-600">
                    We prep your skin to ensure even application and long-lasting results.
                  </p>
                </div>
                
                <div className="scroll-animation text-center">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Expert Application
                  </h3>
                  <p className="text-gray-600">
                    Professional spray tan application using our premium, hydrating formula.
                  </p>
                </div>
                
                <div className="scroll-animation text-center">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Aftercare Guidance
                  </h3>
                  <p className="text-gray-600">
                    Detailed instructions to maintain your beautiful, natural glow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-blush-50">
          <div className="container mx-auto px-4 text-center">
            <div className="scroll-animation max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready for Your Perfect Glow?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your professional spray tan today and experience the difference of our hydrating, orange-free formula.
              </p>
              
              <Button className="bg-blush-300 hover:bg-blush-400 text-white px-12 py-4 rounded-full text-lg font-medium">
                Schedule Your Spray Tan
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Hydrating formula • No orange undertones • Professional application
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}