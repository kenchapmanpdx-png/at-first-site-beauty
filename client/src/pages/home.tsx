import React, { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import PageHead from "../components/PageHead";

interface HomeProps {
  scrollToAbout?: boolean;
  scrollToServices?: boolean;
}

export default function Home({ scrollToAbout, scrollToServices }: HomeProps) {
  useEffect(() => {
    // Handle scrolling to specific sections based on route
    if (scrollToAbout) {
      setTimeout(() => {
        const aboutSection = document.querySelector('#about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (scrollToServices) {
      setTimeout(() => {
        const servicesSection = document.querySelector('#services');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }

    // Temporarily disable all AOS animations while testing
    if (typeof window !== 'undefined') {
      // AOS.init({
      //   duration: 800,
      //   easing: 'ease-in-out',
      //   once: true,
      //   offset: 120,
      //   delay: 100
      // });
    }
  }, [scrollToAbout, scrollToServices]);

  return (
    <div className="min-h-screen">
      <PageHead 
        title="At First Site Beauty | On-Location Bridal Hair & Makeup – PNW"
        description="Luxury bridal hair and makeup services across Oregon and Washington. Professional on-site glam for your special day."
        path="/"
        pageType={scrollToAbout ? 'about' : scrollToServices ? 'services' : 'home'}
      />
      <Header />
      <Hero />
      
      {/* SEO Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At First Sight Beauty delivers on-location luxury bridal hair and makeup throughout Oregon and Washington. Our expert stylists specialize in timeless, elegant looks that reflect your unique vision. Whether you're planning a vineyard wedding or an urban elopement, we bring beauty directly to your venue with professionalism and artistry.
          </p>
        </div>
      </section>
      
      <About />
      <Services />
      {/* Booking CTA between Services and Gallery */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <button
            onClick={() => window.location.href = '/book'}
            className="premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            Book Your Design Session
          </button>
        </div>
      </section>
      <Gallery />
      {/* Booking CTA before main Booking section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <button
            onClick={() => window.location.href = '/book'}
            className="premium-button sparkle-button text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-medium luxury-hover shadow-lg touch-manipulation"
          >
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            <div className="sparkle">✦</div>
            Book Your Design Session
          </button>
        </div>
      </section>
      <Booking />
      <Footer />
    </div>
  );
}