import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      {/* Booking CTA between Services and Gallery */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
            className="premium-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            Book Your Design Session
          </button>
        </div>
      </section>
      <Gallery />
      <Testimonials />
      {/* Booking CTA before main Booking section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <button
            onClick={() => window.open('https://atfirstsite.glossgenius.com/book', '_blank')}
            className="premium-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            Book Your Design Session
          </button>
        </div>
      </section>
      <Booking />
      <Footer />
    </div>
  );
}
