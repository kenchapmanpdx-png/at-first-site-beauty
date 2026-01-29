
import React, { useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowLeft, Sparkles, Clock, Heart, Award } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";
import FAQ from "../components/FAQ";

export default function BridalDesignSession() {
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

  const designFAQs = [
    {
      question: "What exactly is a Bridal Design Session?",
      answer: "A Design Session is an elevated version of a standard trial. It's a comprehensive aesthetic consultation in our private bridal suite where we design, test, and perfect every detail of your wedding day hair and makeup."
    },
    {
      question: "How long does the design session take?",
      answer: "We typically recommend blocking out 2.5 to 3 hours for your session. This allows ample time to discuss your vision, try variations, and ensure everything is absolutely perfect."
    },
    {
      question: "What is the 6-hour wear test?",
      answer: "After your session, we ask you to wear your look for at least 6 hours and send us photos in different lighting. This feedback loop allows us to fine-tune the products and techniques for maximum wedding-day longevity."
    },
    {
      question: "Should I bring my veil or accessories?",
      answer: "Absolutely! Bringing your veil, hair accessories, and even a photo of your dress helps us design a cohesive look that perfectly complements your entire bridal ensemble."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHead
        title="Bridal Design Session & Trial | At First Site Beauty"
        description="Perfect your wedding day look with our comprehensive bridal design session. Luxury trial hair and makeup services in our private PNW suite."
        path="/bridal-design-session"
        pageType="service-detail"
        faqs={designFAQs}
      />
      <Header />

      <main ref={sectionRef} className="pt-8">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <Link href="/">
              <a className="mb-8 text-gray-600 hover:text-blush-400 inline-flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
            </Link>

            <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blush-400 mr-2" />
                <span className="text-blush-400 font-medium text-lg">The Bridal Hair & Makeup Design Session</span>
              </div>

              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-9">
                Where Your Dream Look Begins. Your Look, <span className="text-blush-400">Locked In.</span>
              </h1>

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 mb-8 border border-gray-100 text-center">
                <div className="text-xl text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Your bridal glam journey begins well before the big day—inside our private bridal suite, where we go far beyond a simple "trial." Your Design Session is a fully immersive, luxury experience crafted to make sure your look is picture-perfect, timeless, and unmistakably you.
                  </p>
                  <p className="mb-4 font-semibold text-gray-900">
                    The 6-Hour Wear Test
                  </p>
                  <p className="mb-0">
                    Once your look is finalized, we ask you to wear it for at least six hours. Every two hours, you'll take a quick photo to show us how it holds up. This allows us to fine-tune each detail for calm precision on your wedding day.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                <div data-aos="zoom-in" data-aos-delay="100">
                  <img
                    src="/attached_assets/IMG_0971_1749066905983.png"
                    alt="Luxury bridal design session"
                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>
              </div>

              <div data-aos="fade-in" data-aos-delay="400" className="mt-8">
                <Link href="/book">
                  <a className="premium-button sparkle-button inline-block text-white px-10 py-4 rounded-full text-lg font-medium luxury-hover">
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    <div className="sparkle">✦</div>
                    Book Your Design Session
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ faqs={designFAQs} />
      </main>

      <Footer />
    </div>
  );
}