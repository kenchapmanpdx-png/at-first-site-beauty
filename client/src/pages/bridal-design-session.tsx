import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles, Camera, Clock, Heart, MapPin, Star, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images for the design session
import studioImage1 from "@assets/IMG_0973_1749066905983.png";
import studioImage2 from "@assets/IMG_0944.png";
import makeupProcess from "@assets/IMG_0943.png";
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";

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

  const proTips = [
    {
      icon: <Camera className="w-9 h-9" />,
      title: "More is more (in photos)",
      description: "The camera tends to wash out color, so don't be surprised if we recommend a little extra bronzer, blush, or lip definition than you're used to. Trust us — it translates beautifully on camera."
    },
    {
      icon: <Sparkles className="w-9 h-9" />,
      title: "Lashes are a must",
      description: "Whether soft and romantic or bold and full, false lashes make your eyes pop and elevate the elegance of your final look."
    },
    {
      icon: <Heart className="w-9 h-9" />,
      title: "Wear white to your session",
      description: "This helps us see your makeup the way it will contrast against your gown."
    },
    {
      icon: <Clock className="w-9 h-9" />,
      title: "Trust the wear test",
      description: "Those photos you send us after your session? They're gold. They let us see if anything needs adjusting — like under-eye creasing, shine, or volume drop — before the big day."
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation & Vision",
      description: "Sit down with our expert stylists to walk through every detail of your vision — from texture, tone, and structure of your hairstyle to the glow, finish, and feature-enhancing artistry of your makeup."
    },
    {
      number: "2",
      title: "Design & Creation",
      description: "In our relaxed, attentive setting, we collaborate with you to co-create your bridal look. Your comfort is key — give feedback, explore styles, and make adjustments."
    },
    {
      number: "3",
      title: "Wear Test & Documentation",
      description: "Wear your look for at least six hours, taking photos every two hours in natural light and with flash to show us how your glam wears throughout the day."
    },
    {
      number: "4",
      title: "Perfection & Lock-In",
      description: "We fine-tune every element based on your feedback, so when we arrive on your wedding day, we're bringing flawless execution and peace of mind."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
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
                    src={studioImage1}
                    alt="Luxury bridal design session in private suite"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div data-aos="zoom-in" data-aos-delay="200">
                  <img
                    src={makeupProcess}
                    alt="Professional makeup application during design session"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                  <img
                    src={studioImage2}
                    alt="Bridal hair styling consultation"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 shadow-lg mb-4" data-aos="fade-in" data-aos-delay="100">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-blush-400 mr-2" />
                  <span className="font-semibold text-gray-900 text-sm">Personalized Touch-Up Kit Included so your look stays radiant from "I do" to your last dance.</span>
                </div>
                <div className="grid md:grid-cols-3 gap-2 text-xs text-gray-600">
                  <div>Custom lip color</div>
                  <div>Professional blotting papers</div>
                  <div>Bridal setting spray</div>
                </div>
              </div>
              
              <div className="text-center mb-6 mt-9" data-aos="fade-up" data-aos-delay="200">
                <p className="text-xl text-gray-600 italic leading-relaxed">
                  "Imagine walking down the aisle knowing everything—from your hair to your glow—is already perfected and proven."
                </p>
              </div>
              
              <div data-aos="fade-in" data-aos-delay="300">
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="premium-button text-white px-10 py-4 rounded-full text-lg font-medium mb-8 mt-8 luxury-hover"
                >
                  Book Your Design Session
                </Button>
              </div>
              
              {/* Design Session Process - Moved here */}
              <div className="text-center mt-12" data-aos="fade-up">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Your Design Session Process
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {processSteps.map((step, index) => (
                      <div key={index} data-aos="fade-up" data-aos-delay={index * 150}>
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blush-300 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="py-3 bg-white">
          <div className="container mx-auto px-4">

            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pro Tips for <span className="text-blush-400">Timeless Bridal Glam</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {proTips.map((tip, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-3xl p-8"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-18 h-18 bg-blush-100 rounded-full flex items-center justify-center flex-shrink-0" style={{color: '#ad3b68'}}>
                        {tip.icon}
                      </div>
                      <div>
                        <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                          {tip.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Investment <span className="text-blush-400">& Pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive bridal design session includes everything you need to create your perfect wedding day look.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="200">
                <div className="text-center mb-8">
                  <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                    Bride Hair and Makeup Design Session
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete package includes design session trial AND day of wedding hair & makeup
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-blush-50 rounded-2xl">
                    <div className="text-3xl font-bold text-blush-400 mb-2">$650</div>
                    <div className="text-gray-600 font-medium mb-2">January - April</div>
                    <div className="text-sm text-gray-500">Off-season pricing</div>
                  </div>
                  <div className="text-center p-6 bg-gray-100 rounded-2xl">
                    <div className="text-3xl font-bold text-gray-900 mb-2">$750</div>
                    <div className="text-gray-600 font-medium mb-2">May - December</div>
                    <div className="text-sm text-gray-500">Peak season pricing</div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 mb-4 text-center">
                    What's Included
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Complete hair and makeup trial session</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Wedding day hair and makeup application</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Personalized consultation</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Wear testing and adjustments</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Custom touch-up kit</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Private bridal suite experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="booking" className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto" data-aos="fade-up">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Design Your Perfect Bridal Look?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Book your luxury Bridal Hair & Makeup Design Session at our private bridal suite in downtown Vancouver, Washington.
              </p>
              
              <div data-aos="fade-in" data-aos-delay="200">
                <Button 
                  onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
                  className="premium-button text-white px-12 py-4 rounded-full text-lg font-medium mb-6 luxury-hover"
                >
                  Schedule Your Design Session
                </Button>
              </div>
              
              <div className="flex items-center justify-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Private bridal suite • Vata Salon • Downtown Vancouver, WA</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}