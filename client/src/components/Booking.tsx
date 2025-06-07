import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaPinterest } from "react-icons/fa";

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    weddingDate: "",
    serviceType: "",
    message: "",
  });

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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Integration with Go High Level would go here
    alert("Thank you for your inquiry! We'll be in touch soon.");
    console.log("Form submitted:", formData);
  };

  return (
    <section ref={sectionRef} id="booking" className="py-20 text-white relative overflow-hidden" style={{background: 'linear-gradient(to bottom right, #2A2E3B, #232734, #2A2E3B)'}}>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blush-500/10 rounded-full blur-3xl floating-element"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blush-400/5 rounded-full blur-3xl floating-element" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-animation mb-12">
            <div className="premium-gradient rounded-3xl p-8 md:p-10 sparkle luxury-hover border border-white/10">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 luxury-text text-gray-900">
                Let's Design Your <span className="text-blush-400">Dream Bridal Look</span>
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Ready to experience luxury bridal beauty services? Contact us today to schedule your consultation and design session.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Contact Form */}
            <div className="scroll-animation order-2 md:order-1">
              <div className="premium-gradient rounded-3xl p-6 md:p-8 shadow-2xl border border-white/10 sparkle">
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 h-12 touch-manipulation luxury-hover"
                      required
                    />
                    <Input
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 h-12 touch-manipulation luxury-hover"
                      required
                    />
                </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 h-12 touch-manipulation luxury-hover"
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 h-12 touch-manipulation luxury-hover"
                  />
                  <Input
                    type="date"
                    placeholder="Wedding Date"
                    value={formData.weddingDate}
                    onChange={(e) => handleInputChange("weddingDate", e.target.value)}
                    className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 h-12 touch-manipulation luxury-hover"
                  />
                  <Select onValueChange={(value) => handleInputChange("serviceType", value)}>
                    <SelectTrigger className="bg-white/90 border-gray-300 text-gray-900 focus:border-blush-400 h-12 touch-manipulation luxury-hover">
                      <SelectValue placeholder="Select Service Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bridal">Bridal Hair & Makeup</SelectItem>
                      <SelectItem value="party">Bridal Party Services</SelectItem>
                      <SelectItem value="teeth">Teeth Whitening</SelectItem>
                      <SelectItem value="tanning">Spray Tanning</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Tell us about your vision..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="bg-white/90 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blush-400 resize-none touch-manipulation luxury-hover"
                  />
                  <Button
                    type="submit"
                    className="w-full premium-button text-white px-6 md:px-8 py-3 md:py-4 rounded-xl text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation h-12 md:h-auto"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="scroll-animation space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're excited to learn about your special day and create a customized beauty experience just for you.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blush-300 rounded-full flex items-center justify-center mr-4">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">bookings@atfirstsitebeauty.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blush-300 rounded-full flex items-center justify-center mr-4">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">(360) 215-5444</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blush-300 rounded-full flex items-center justify-center mr-4">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300">Serving Pacific Northwest</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-400 text-sm mb-4">Follow us for inspiration:</p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blush-300 hover:bg-blush-300 hover:text-white transition-colors duration-200"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-blush-300 hover:bg-blush-300 hover:text-white transition-colors duration-200"
                  >
                    <FaPinterest size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
