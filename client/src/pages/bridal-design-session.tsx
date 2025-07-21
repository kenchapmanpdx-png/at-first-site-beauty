import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Clock, Heart, Award } from "lucide-react";
import { useLocation } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";
// Using direct paths for asset loading

export default function BridalDesignSession() {
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

  return (
    <div className="min-h-screen bg-white">
      <PageHead 
        title="Bridal Design Session & Trial | At First Site"
        description="Perfect your wedding day look with our comprehensive bridal design session. Trial hair and makeup services in Oregon and Washington."
        path="/bridal-design-session"
        pageType="service-detail"
      />
      <Header />

      <main ref={sectionRef} className="pt-8">
        {/* Hero Section */}
        <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
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
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blush-400 mr-2" />
                <span className="text-blush-400 font-medium text-lg">The Bridal Hair & Makeup Design Session</span>
              </div>

              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-9">
                Where Your Dream Look Begins. Your Look, <span className="text-blush-400">Locked In.</span>
              </h1>

              <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 mb-8 border border-gray-100 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-xl text-gray-600 leading-relaxed">
                  <p className="mb-4">
                    Your bridal glam journey begins well before the big day—inside our private bridal suite, where we go far beyond a simple "trial." Your Design Session is a fully immersive, luxury experience crafted to make sure your look is picture-perfect, timeless, and unmistakably you. By the time we arrive at your venue, every brushstroke, bobby pin, and blend has been tested, tailored, and perfected.
                  </p>

                  <p className="mb-4">
                    In a relaxed, attentive setting, you'll sit with one of our expert artists to walk through every detail of your vision—from the texture, tone, and structure of your hairstyle to the glow, finish, and feature-enhancing artistry of your makeup. Your comfort is everything. This is your time to explore styles, give feedback, and make adjustments—nothing is off limits. Our goal? That you leave glowing with confidence, knowing your wedding day look is completely dialed in.
                  </p>

                  <p className="mb-4 font-semibold text-gray-900">
                    But it doesn't end there.
                  </p>

                  <p className="mb-0">
                    Once your look is finalized, we ask you to wear it for at least six hours. Every two hours, you'll take a quick photo—in natural light and with flash—to show us how it holds up. This feedback allows us to fine-tune each detail so when your big day arrives, we're not guessing—we're executing a proven, perfected look with calm precision.
                  </p>
                </div>
              </div>

              {/* Studio Gallery - Moved above Touch-Up Kit */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
                <div data-aos="zoom-in" data-aos-delay="100">
                  <img
                    src="/attached_assets/IMG_0971_1749066905983.png"
                    alt="Luxury bridal design session showing professional makeup application and hair styling in private bridal suite with comprehensive wear testing protocol"
                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                </div>



              </div>


            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}