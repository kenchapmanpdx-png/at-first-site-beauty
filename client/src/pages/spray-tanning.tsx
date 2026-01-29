
import { useEffect, useRef } from 'react';
import { Link } from "wouter";
import { ArrowLeft, Droplets, Heart, Sparkles, Shield, Users, CheckCircle, DollarSign } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import FAQ from "@/components/FAQ";

export default function SprayTanning() {
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

  const tanningFAQs = [
    {
      question: "Will my spray tan look orange?",
      answer: "Never! Our Luxe Dolce Glow formula is expertly balanced to provide a natural, bronzed glow without any orange undertones. Our trained artists ensure a perfect shade match for your specific skin tone."
    },
    {
      question: "How long should I wait to shower after my spray tan?",
      answer: "For our standard formula, we recommend waiting 8-12 hours before showering to allow the tan to fully develop. We also provide rapid rinse options if you have a tighter schedule."
    },
    {
      question: "How long does the spray tan last?",
      answer: "With proper preparation and aftercare, your spray tan will typically last 7-10 days. The hydrating ingredients in our formula, like hyaluronic acid and squalane, help extend the life of your radiant glow."
    },
    {
      question: "What should I wear to my tanning appointment?",
      answer: "We recommend wearing loose, dark clothing to your appointment to prevent any transfer or rubbing of the solution while it develops on your skin."
    }
  ];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <PageHead
        title="Professional Spray Tanning for Brides | At First Site Beauty"
        description="Premium bridal spray tanning with hyaluronic acid formula. No orange undertones, natural radiant glow. Professional application by trained artists for Pacific Northwest weddings."
        path="/spray-tanning"
        ogImage="/attached_assets/webp/IMG_0970_1749066905982.webp"
        pageType="service-detail"
        faqs={tanningFAQs}
      />

      <Header />

      <main ref={sectionRef} className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Link href="/">
              <a className="mb-8 text-gray-600 hover:text-blush-400 inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Link>

            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Professional <span className="text-blush-400">Spray Tanning</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                At First Site's spray tan is expertly formulated to deliver a flawless, bronzed glow without the risk of orange undertones. Our unique blend is enriched with hydrating ingredients like hyaluronic acid, jojoba oil and squalane.
              </p>

              <div data-aos="fade-in" data-aos-delay="400">
                <Link href="/book">
                  <a className="premium-button sparkle-button inline-block text-white px-10 py-4 rounded-full text-lg font-medium luxury-hover">
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    Reserve Your Spray Tan
                  </a>
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

        <FAQ faqs={tanningFAQs} />

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

              <Link href="/book">
                <a className="premium-button sparkle-button inline-block text-white px-12 py-4 rounded-full text-lg font-medium luxury-hover">
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  <div className="sparkle">✦</div>
                  Schedule Your Spray Tan
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}