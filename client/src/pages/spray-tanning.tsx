import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Droplets, Heart, Sparkles, Shield, Users, CheckCircle, DollarSign } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";

export default function SprayTanning() {
  const [, setLocation] = useLocation();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
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

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Artist Formula Expertise",
      description: "Our artists are trained specifically on our unique formula and know exactly how to achieve the perfect shade match for your skin tone"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Consistent Results",
      description: "Using the same formula and techniques for your entire bridal party ensures a cohesive, professional look across all members"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Perfect Color Matching",
      description: "Our team understands the nuances of our formula to create the ideal bronzed glow that complements your wedding day makeup"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Professional application by trained artists eliminates the risk of streaking, orange tones, or uneven coverage"
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
      <PageHead 
        title="Professional Spray Tanning | At First Sight Beauty"
        description="Professional spray tanning services for brides in the Pacific Northwest. Achieve a natural, radiant glow for your wedding day with expert spray tan application."
        path="/spray-tanning"
        pageType="service-detail"
      />
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

            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blush-400">Spray Tanning</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                At First Site's spray tan is expertly formulated to deliver a flawless, bronzed glow without the risk of orange undertones. Our unique blend is enriched with hydrating ingredients like hyaluronic acid, jojoba oil—closely resembling the skin's natural oils—and squalane, known for its lightweight moisture and non-comedogenic properties.
              </p>
              <p className="text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="300">
                This carefully crafted formula nourishes the skin while providing a natural, radiant tan that enhances your glow without clogging pores or causing breakouts. With At First Site, orange is never an option—just healthy, luminous skin.
              </p>

              <div data-aos="fade-in" data-aos-delay="400">
                <Button
                  onClick={() => window.location.href = '/book'}
                  className="premium-button sparkle-button text-white px-10 py-4 rounded-full text-lg font-medium luxury-hover"
                >
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  Reserve Your Spray Tan
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose At First Site Spray Tanning?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center" data-aos="zoom-in" data-aos-delay={index * 100}>
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

        {/* Why Choose Our Team */}
        <section className="py-20 bg-gradient-to-r from-blush-400 to-blush-500 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Why Brides Must Spray Tan With <span className="text-white">Our Team</span>
              </h2>
              <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
                If you're planning to spray tan for your wedding, it's crucial to use our services for consistency. Our artists know our formula inside and out, ensuring perfect color matching and cohesive results across your entire bridal party.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {reason.icon}
                    </div>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-4">
                    {reason.title}
                  </h3>
                  <p className="opacity-90 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 max-w-4xl mx-auto">
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  Professional Consistency Guarantee
                </h3>
                <p className="text-lg opacity-90 leading-relaxed">
                  Don't risk mismatched tans on your wedding day. Our team's expertise with our exclusive formula ensures every member of your bridal party achieves the same beautiful, natural bronze glow that perfectly complements your wedding day makeup and photography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
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
                  <div key={index} className="bg-blush-50 rounded-3xl p-8 text-center">
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
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Spray Tan Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
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

                <div className="text-center">
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

                <div className="text-center">
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

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Spray Tanning <span className="text-blush-400">Package</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get the perfect wedding-day glow with our 3-session bridal spray tan package using our exclusive Luxe Dolce Glow solution.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign size={32} className="text-blush-400" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                    3-Part Bridal Spray Tan Package
                  </h3>
                  <div className="text-4xl font-bold text-blush-400 mb-2">$150</div>
                  <p className="text-gray-600 mb-6">
                    Complete package with trial, touch-up, and final tan
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-6 text-center">
                    Complete Package Includes
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Trial session for perfect color matching</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Touch-up session if needed</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Final wedding-day ready application</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Luxe Dolce Glow formula</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Natural, radiant bronze glow</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Photo-ready, flawless finish</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blush-50 rounded-2xl p-6 mt-8">
                  <h5 className="font-semibold text-gray-900 mb-2">Expert Formula Knowledge</h5>
                  <p className="text-gray-700 text-sm">
                    Our artists are specially trained on our exclusive formula to ensure consistent, beautiful results. This expertise guarantees the perfect shade match and application technique for your skin tone and wedding day vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-blush-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready for Your Perfect Glow?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your professional spray tan today and experience the difference of our hydrating, orange-free formula.
              </p>

              <Button 
                onClick={() => window.location.href = '/book'}
                className="premium-button sparkle-button text-white px-12 py-4 rounded-full text-lg font-medium luxury-hover"
              >
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
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