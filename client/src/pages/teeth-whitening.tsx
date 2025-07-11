import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, CheckCircle, Clock, Shield, DollarSign } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import LazyImage from "@/components/LazyImage";

// Using direct paths for asset loading

export default function TeethWhitening() {
  const [, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState("before-after");
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

  const beforeAfterImages = [
    {
      before: "/attached_assets/IMG_0959.jpeg",
      after: "/attached_assets/IMG_6201.jpeg",
      description: "Professional whitening results - immediate brightness improvement"
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Professional Grade Formula",
      description: "Higher percentage Hydrogen Peroxide for superior results"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Immediate Results",
      description: "See noticeable whitening in just one session"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "FDA Registered",
      description: "Safe, quality treatment with peace of mind"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom Take-Home Kit",
      description: "Maintain your results with personalized care"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHead 
        title="Professional Teeth Whitening for Weddings | At First Site Beauty"
        description="Professional-grade teeth whitening for brides. Higher percentage Hydrogen Peroxide with specialized light activation. Safe, effective, immediate results for your wedding day smile."
        path="/teeth-whitening"
        ogImage="/attached_assets/IMG_0970_1749066905982.png"
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
                Professional <span className="text-blush-400">Teeth Whitening</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Our teeth whitening system stands apart from store-bought brands by offering a professional-grade solution that delivers immediate and noticeable results. We use a higher percentage of Hydrogen Peroxide, safely activated with a specialized light to enhance effectiveness while remaining gentle on your teeth.
              </p>
              <p className="text-lg text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="300">
                Unlike over-the-counter options, our treatment is tailored to your individual needs, and includes a custom take-home kit designed to help you maintain your brighter, whiter smile long after your visit. Best of all, our system is FDA-registered, ensuring safety, quality, and peace of mind.
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
                  Reserve Your Whitening Session
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
                Why Choose Professional Whitening?
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

        {/* Before & After Gallery */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Results from <span className="text-blush-400">Real Clients</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See the dramatic transformations our professional teeth whitening system delivers.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              {beforeAfterImages.map((images, index) => (
                <div key={index} className="mb-16 last:mb-0" data-aos="fade-up" data-aos-delay={index * 200}>
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Before Image */}
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-gray-700 mb-4">
                          Before
                        </h3>
                        <LazyImage
                          src={images.before}
                          alt="Before teeth whitening treatment"
                          className="w-full h-64 object-cover rounded-2xl shadow-md"
                          loading="lazy"
                        />
                      </div>

                      {/* After Image */}
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-blush-400 mb-4">
                          After
                        </h3>
                        <LazyImage
                          src={images.after}
                          alt="After professional teeth whitening treatment"
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

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Whitening Process
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center" data-aos="zoom-in" data-aos-delay="100">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Consultation
                  </h3>
                  <p className="text-gray-600">
                    We assess your teeth and discuss your whitening goals to create a personalized treatment plan.
                  </p>
                </div>

                <div className="text-center" data-aos="zoom-in" data-aos-delay="200">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Professional Treatment
                  </h3>
                  <p className="text-gray-600">
                    Application of professional-grade whitening gel activated with specialized light for optimal results.
                  </p>
                </div>

                <div className="text-center" data-aos="zoom-in" data-aos-delay="300">
                  <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                    Take-Home Kit
                  </h3>
                  <p className="text-gray-600">
                    Custom kit with professional-grade products to maintain your brilliant white smile at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Teeth Whitening <span className="text-blush-400">Investment</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get a brilliantly white smile in just one session with our professional-grade, FDA-registered treatment.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <DollarSign size={32} className="text-blush-400" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                    Professional Teeth Whitening
                  </h3>
                  <div className="text-4xl font-bold text-blush-400 mb-2">$200</div>
                  <p className="text-gray-600 mb-6">
                    Plus take-home kit for lasting results
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-6 text-center">
                    Complete Package Includes
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Professional FDA-registered treatment</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom take-home maintenance kit</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Safe, effective, and immediate results</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Perfect for wedding day confidence</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Professional consultation included</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Gentle on teeth and gums</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blush-50 rounded-2xl p-6 mt-8">
                  <h5 className="font-semibold text-gray-900 mb-2">Perfect Timing for Your Wedding</h5>
                  <p className="text-gray-700 text-sm">
                    Schedule your teeth whitening 1-2 weeks before your wedding for optimal results. The take-home kit ensures your smile stays brilliant through your honeymoon and beyond.
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
                Ready for Your Brightest Smile?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your professional teeth whitening session today and see immediate results with our FDA-registered system.
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
                Schedule Your Appointment
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                Professional consultation included • Custom take-home kit • FDA-registered treatment
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}