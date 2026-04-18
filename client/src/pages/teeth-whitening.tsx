
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Star, CheckCircle, Clock, Shield, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import LazyImage from "@/components/LazyImage";
import FAQ from "@/components/FAQ";

export default function TeethWhitening() {
  const [activeTab, setActiveTab] = useState("before-after");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

  const whiteningFAQs = [
    {
      question: "Is professional teeth whitening safe for my enamel?",
      answer: "Yes, our system is FDA-registered and uses professional-grade Hydrogen Peroxide that is safe for tooth enamel when applied by our trained experts."
    },
    {
      question: "How long do the whitening results last?",
      answer: "Results typically last 6-12 months depending on lifestyle factors like coffee or tea consumption. Each session includes a custom take-home kit to help you maintain your bright smile for as long as possible."
    },
    {
      question: "Will the whitening treatment cause sensitivity?",
      answer: "Most clients experience little to no sensitivity. Our specialized light activation allows for faster results with less exposure time, making it much gentler than many over-the-counter options."
    },
    {
      question: "When should I book my whitening before the wedding?",
      answer: "We recommend scheduling your session 1-2 weeks before your wedding day. This ensures your smile is at its peak brilliance for your photos and celebration."
    }
  ];

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
        ogImage="/attached_assets/hero_placeholder.png"
        pageType="service-detail"
        faqs={whiteningFAQs}
      />
      <Header />

      <main ref={sectionRef} className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Link href="/" className="mb-8 text-gray-600 hover:text-blush-400 inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>

            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blush-400">Teeth Whitening</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Our teeth whitening system stands apart from store-bought brands by offering a professional-grade solution that delivers immediate and noticeable results. We use a higher percentage of Hydrogen Peroxide, safely activated with a specialized light to enhance effectiveness while remaining gentle on your teeth.
              </p>
              <div data-aos="fade-in" data-aos-delay="400">
                <Link href="/book" className="premium-button sparkle-button inline-block text-white px-10 py-4 rounded-full text-lg font-medium luxury-hover">
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  Reserve Your Whitening Session
                </Link>
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
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-gray-700 mb-4">Before</h3>
                        <LazyImage src={images.before} alt="Before teeth whitening treatment" className="w-full h-64 object-cover rounded-2xl shadow-md" loading="lazy" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-playfair text-xl font-semibold text-blush-400 mb-4">After</h3>
                        <LazyImage src={images.after} alt="After professional teeth whitening treatment" className="w-full h-64 object-cover rounded-2xl shadow-md" loading="lazy" />
                      </div>
                    </div>
                    <div className="text-center mt-6">
                      <p className="text-gray-600 font-medium">{images.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ faqs={whiteningFAQs} />

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

              <Link href="/book" className="premium-button sparkle-button inline-block text-white px-12 py-4 rounded-full text-lg font-medium luxury-hover">
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                Schedule Your Appointment
              </Link>

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