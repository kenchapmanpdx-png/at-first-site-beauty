
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BookingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Bridal Appointment
              </h1>
              <p className="text-lg text-gray-600">
                Schedule your luxury bridal beauty consultation and design session
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/ge2HN52PHjWliZSbo6T9"
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'hidden',
                  minHeight: '700px',
                }}
                scrolling="no"
                title="Bridal Appointment Booking"
                id="ge2HN52PHjWliZSbo6T9_1750196042723"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
