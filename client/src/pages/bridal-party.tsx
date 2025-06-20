import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Heart, Clock, Star, CheckCircle, Sparkles, Camera } from "lucide-react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images for the bridal party services
import bridalPartyImage1 from "@assets/IMG_0973_1749066905983.png";
import bridalPartyImage2 from "@assets/IMG_0944.png";
import bridalPartyImage3 from "@assets/IMG_0971_1749066905983.png";
import holliePhoto from "@assets/att.c_pJDIdiUkBKo0fJ-QlY4UBkoe1B5rNtETSP-pvLjIM.jpeg";

export default function BridalParty() {
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

  const cohesiveImportance = [
    {
      icon: Users,
      title: "Visual Harmony",
      description: "A cohesive bridal party creates stunning photos where everyone complements each other while allowing the bride to shine as the focal point."
    },
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Coordinated makeup and hair styling ensures your wedding photos look professionally curated and timeless for generations to enjoy."
    },
    {
      icon: Heart,
      title: "Emotional Impact",
      description: "When your bridal party looks and feels confident together, it creates a beautiful, harmonious energy that enhances your entire wedding day experience."
    },
    {
      icon: Star,
      title: "Bride's Spotlight",
      description: "Strategic styling ensures your bridal party looks stunning while keeping you as the radiant center of attention throughout your special day."
    }
  ];

  const proTips = [
    {
      icon: Clock,
      title: "Timeline Planning",
      description: "Schedule bridal party services 2-3 hours before ceremony time. This allows for relaxed preparation and beautiful getting-ready photos.",
      tip: "Book your trial run 4-6 weeks before the wedding to perfect the look."
    },
    {
      icon: Sparkles,
      title: "Color Coordination",
      description: "Choose complementary makeup tones that enhance your wedding color palette while flattering each person's individual features.",
      tip: "Bring fabric swatches or dress photos to ensure perfect color matching."
    },
    {
      icon: Heart,
      title: "Individual Considerations",
      description: "Each bridesmaid receives personalized attention to highlight their best features while maintaining the overall cohesive aesthetic.",
      tip: "Consider skin tones, eye colors, and personal style preferences for each member."
    },
    {
      icon: Camera,
      title: "Photo-Ready Finish",
      description: "Professional application techniques ensure everyone looks flawless in photos, from intimate close-ups to wide group shots.",
      tip: "Request a touch-up kit for each bridesmaid to maintain the look throughout the day."
    }
  ];

  const serviceIncludes = [
    "Professional hair styling for each bridal party member",
    "Coordinated makeup application with bride's aesthetic",
    "Individual consultations during trial sessions",
    "Touch-up kits for day-of maintenance",
    "Timeline coordination with photography schedule",
    "On-location setup and professional equipment",
    "Backup artist available for larger parties",
    "Complimentary bride consultation included"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button
              onClick={() => setLocation("/")}
              variant="ghost"
              className="text-blush-400 hover:text-blush-500 p-0 h-auto font-normal"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Bridal Party <span className="text-blush-400">Hair & Makeup</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              Creating a cohesive, stunning bridal party look that complements your vision while celebrating each individual's unique beauty.
            </p>
            
            <div data-aos="fade-in" data-aos-delay="400">
              <Button
                onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
                className="premium-button sparkle-button text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                Reserve Bridal Party Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Cohesive Look Matters */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why a <span className="text-blush-400">Cohesive Look</span> Matters
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlike the bride who is the star of the show, your bridal party must look fresh, captivating, and harmoniously styled. A coordinated approach ensures everyone looks stunning while maintaining the perfect balance for your special day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cohesiveImportance.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon size={32} className="text-blush-400" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blush-400">Bridal Party</span> Styling
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expert team specializes in creating cohesive bridal party looks that photograph beautifully and make everyone feel confident and radiant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div data-aos="fade-up">
              <img
                src={bridalPartyImage1}
                alt="Professional bridal party makeup application with coordinated styling"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                Coordinated Makeup
              </h3>
              <p className="text-gray-600">
                Professional makeup application that complements your wedding aesthetic while enhancing each person's natural beauty.
              </p>
            </div>

            <div data-aos="fade-up">
              <img
                src={bridalPartyImage2}
                alt="Bridal party hair styling with cohesive elegant looks"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                Harmonious Hair
              </h3>
              <p className="text-gray-600">
                Elegant hairstyling that creates visual harmony while allowing for individual personality and dress compatibility.
              </p>
            </div>

            <div data-aos="fade-up">
              <img
                src={bridalPartyImage3}
                alt="Finished bridal party look showcasing professional styling results"
                className="w-full h-80 object-cover rounded-2xl shadow-lg mb-4"
                loading="lazy"
              />
              <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                Picture Perfect
              </h3>
              <p className="text-gray-600">
                The final result: a stunning bridal party that photographs beautifully and radiates confidence throughout your celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional <span className="text-blush-400">Styling Tips</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insider advice from our expert artists to ensure your bridal party looks cohesive, stunning, and camera-ready for your special day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {proTips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8" data-aos="zoom-in" data-aos-delay={index * 150}>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blush-300 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    <tip.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {tip.description}
                    </p>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blush-300">
                      <p className="text-blush-500 font-medium text-sm">
                        Pro Tip: {tip.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Includes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What's <span className="text-blush-400">Included</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our comprehensive bridal party service ensures everyone looks stunning and feels confident on your special day.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg" data-aos="fade-up" data-aos-delay="200">
              <div className="grid md:grid-cols-2 gap-6">
                {serviceIncludes.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
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
              Bridal Party <span className="text-blush-400">Pricing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional hair and makeup services for your entire bridal party with coordinated styling and expert application.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Bridal Party Services */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  Bridal Party Hair & Makeup
                </h3>
                <p className="text-gray-600 mb-6">
                  Professional styling for each bridal party member (no design session)
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-blush-50 rounded-xl">
                  <div className="text-2xl font-bold text-blush-400 mb-1">$325</div>
                  <div className="text-sm text-gray-600">January - April</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">$375</div>
                  <div className="text-sm text-gray-600">May - December</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Coordinated hair styling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Professional makeup application</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Color matching with bride's aesthetic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Touch-up kit included</span>
                </div>
              </div>
            </div>

            {/* Mother of Bride & Groom Services */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                  Mother of Bride & Groom
                </h3>
                <p className="text-gray-600 mb-6">
                  Special care for mothers with elegant, age-appropriate styling
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center p-4 bg-blush-50 rounded-xl">
                  <div className="text-2xl font-bold text-blush-400 mb-1">$325</div>
                  <div className="text-sm text-gray-600">January - April</div>
                </div>
                <div className="text-center p-4 bg-gray-100 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900 mb-1">$375</div>
                  <div className="text-sm text-gray-600">May - December</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Sophisticated hair styling</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Age-appropriate makeup</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Complements wedding aesthetic</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle size={16} className="text-blush-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Personal consultation included</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-blush-50 rounded-2xl p-6 max-w-4xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                <strong>Group Package Benefits:</strong> When booking multiple bridal party members, our artists create flawless, camera-ready looks for your bride's party while ensuring each member feels beautiful while complementing your overall vision. The result? A breathtakingly cohesive aesthetic that shines through in every photo and creates timeless memories you'll treasure forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blush-400 to-blush-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Create Your Perfect Bridal Party Look?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our expert team design a cohesive, stunning look that makes your entire bridal party feel confident and beautiful.
            </p>
            <div className="inline-block p-2">
              <Button
                onClick={() => window.location.href = '/book'}
                className="premium-button sparkle-button text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                <div className="sparkle">✦</div>
                Reserve Your Bridal Party Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}