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
      icon: <Camera className="w-6 h-6" />,
      title: "More is more (in photos)",
      description: "The camera tends to wash out color, so don't be surprised if we recommend a little extra bronzer, blush, or lip definition than you're used to. Trust us — it translates beautifully on camera."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Lashes are a must",
      description: "Whether soft and romantic or bold and full, false lashes make your eyes pop and elevate the elegance of your final look."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Wear white to your session",
      description: "This helps us see your makeup the way it will contrast against your gown."
    },
    {
      icon: <Clock className="w-6 h-6" />,
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
            
            <div className="scroll-animation text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-blush-400 mr-2" />
                <span className="text-blush-400 font-medium text-lg">The Bridal Hair & Makeup Design Session</span>
              </div>
              
              <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-9">
                Where Your Dream Look Begins. Your Look, <span className="text-blush-400">Locked In.</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your bridal glam starts well before the big day. Set in our private bridal suite, our Design Session isn't just a "Trial" — it's a luxury experience to make sure your look is picture-perfect, timeless, and uniquely you. By the time we arrive at your venue, every brushstroke, bobby pin, and blend has been tested and tailored.
              </p>
              
              <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
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
              
              <Button
                onClick={() => scrollToSection("booking")}
                className="premium-button text-white px-10 py-4 rounded-full text-lg font-medium mb-8 mt-8 luxury-hover"
              >
                Book Your Design Session
              </Button>
              
              {/* Design Session Process - Moved here */}
              <div className="scroll-animation text-center">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                  Your Design Session Process
                </h2>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-8">
                    {processSteps.map((step, index) => (
                      <div key={index} className="scroll-animation">
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

        {/* Studio Gallery */}
        <section className="py-3 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              <div className="scroll-animation">
                <img
                  src={studioImage1}
                  alt="Luxury bridal design session in private suite"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="scroll-animation">
                <img
                  src={makeupProcess}
                  alt="Professional makeup application during design session"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="scroll-animation">
                <img
                  src={studioImage2}
                  alt="Bridal hair styling consultation"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pro Tips for <span className="text-blush-400">Timeless Bridal Glam</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {proTips.map((tip, index) => (
                  <div key={index} className="scroll-animation bg-gray-50 rounded-3xl p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center text-blush-400 flex-shrink-0">
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
            <div className="scroll-animation text-center mb-16">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Investment <span className="text-blush-400">& Pricing</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our comprehensive bridal design session includes everything you need to create your perfect wedding day look.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="scroll-animation bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
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
            <div className="scroll-animation max-w-3xl mx-auto">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Ready to Design Your Perfect Bridal Look?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Book your luxury Bridal Hair & Makeup Design Session at our private bridal suite in downtown Vancouver, Washington.
              </p>
              
              <Button 
                onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
                className="premium-button text-white px-12 py-4 rounded-full text-lg font-medium mb-6 luxury-hover"
              >
                Schedule Your Design Session
              </Button>
              
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